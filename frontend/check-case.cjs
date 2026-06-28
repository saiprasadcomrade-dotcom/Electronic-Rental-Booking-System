const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const filePaths = [];
walkDir('./src', (filePath) => filePaths.push(filePath));

const errors = [];
const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
const lazyRegex = /lazy\(\(\)\s*=>\s*import\(['"](.*?)['"]\)\)/g;

filePaths.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.jsx')) {
    const content = fs.readFileSync(file, 'utf8');
    
    const checkMatch = (regex) => {
        let match;
        while ((match = regex.exec(content)) !== null) {
          const importPath = match[1];
          if (importPath.startsWith('.')) {
            const resolvedPath = path.resolve(path.dirname(file), importPath);
            const dir = path.dirname(resolvedPath);
            const base = path.basename(resolvedPath);
            
            if (fs.existsSync(dir)) {
                const filesInDir = fs.readdirSync(dir);
                let found = false;
                for (const f of filesInDir) {
                    if (f === base || f === base + '.js' || f === base + '.jsx' || f === base + '.css') {
                        found = true;
                        break;
                    }
                }
                
                if (!found) {
                     // Check if it exists with wrong case
                     const realFilesInDir = fs.readdirSync(dir).filter(f => 
                         f.toLowerCase() === base.toLowerCase() || 
                         f.toLowerCase() === (base+'.jsx').toLowerCase() || 
                         f.toLowerCase() === (base+'.js').toLowerCase()
                     );
                     
                     if (realFilesInDir.length > 0) {
                         errors.push('Case mismatch in ' + file + ': import "' + importPath + '" matches ' + realFilesInDir[0] + ' but case is wrong');
                     } else {
                         // Check if directory index.js / index.jsx exists
                         if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
                             const dirFiles = fs.readdirSync(resolvedPath);
                             if (!dirFiles.includes('index.js') && !dirFiles.includes('index.jsx')) {
                                  errors.push('Cannot resolve ' + importPath + ' in ' + file + ' (no index.js)');
                             }
                         } else {
                             errors.push('Cannot resolve ' + importPath + ' in ' + file);
                         }
                     }
                }
            } else {
                errors.push('Directory not found for import ' + importPath + ' in ' + file);
            }
          }
        }
    };
    checkMatch(importRegex);
    checkMatch(lazyRegex);
  }
});
console.log('Errors:');
errors.forEach(e => console.log(e));
if (errors.length === 0) console.log('None');
