const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const imports = new Set();
walkDir('./src', (filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /import\s+(?:.*?\s+from\s+)?['"](.*?)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (!match[1].startsWith('.')) {
         let pkg = match[1].split('/')[0];
         if (pkg.startsWith('@')) pkg = match[1].split('/').slice(0, 2).join('/');
         imports.add(pkg);
      }
    }
  }
});
console.log(Array.from(imports));
