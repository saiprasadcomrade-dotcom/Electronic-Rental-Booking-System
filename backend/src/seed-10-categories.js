/**
 * seed-10-categories.js
 * ---------------------------------------------------------------------------
 * Inserts exactly 10 unique devices, one per distinct category.
 * Safe to run multiple times — checks device name before inserting.
 * ---------------------------------------------------------------------------
 */
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../../database/rental.db');
const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

// ---------------------------------------------------------------------------
// 10 devices — one per unique category
// ---------------------------------------------------------------------------
const devices = [
  // ── 1. Camera ─────────────────────────────────────────────────────────────
  {
    name: 'Canon EOS R50 Mirrorless Camera',
    category: 'Camera',
    brand: 'Canon',
    model: 'EOS-R50',
    serial_number: 'SN-CANR50-CAT01',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-09-01',
    rental_price: 1500,
    deposit_amount: 5000,
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: '24.2MP APS-C sensor, 4K UHD, Dual Pixel CMOS AF II — lightweight mirrorless for creators.',
    notes: 'Includes 18-45mm kit lens, battery & charger.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 2. Drone ──────────────────────────────────────────────────────────────
  {
    name: 'DJI Mini 4 Pro',
    category: 'Drone',
    brand: 'DJI',
    model: 'Mini-4-Pro',
    serial_number: 'SN-DJIM4P-CAT02',
    condition: 'New',
    status: 'In Stock',
    purchase_date: '2025-11-01',
    rental_price: 2000,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    description: 'Sub-249g, 4K/60fps, omnidirectional obstacle sensing, 34-min flight — the perfect travel drone.',
    notes: 'Includes 3 batteries, ND filter kit, carry case.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 3. Laptop ─────────────────────────────────────────────────────────────
  {
    name: 'Apple MacBook Pro 16-inch (M3 Pro)',
    category: 'Laptop',
    brand: 'Apple',
    model: 'MBP16-M3Pro',
    serial_number: 'SN-MBP16M3-CAT03',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-12-01',
    rental_price: 4500,
    deposit_amount: 15000,
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: 'M3 Pro chip, 18GB unified memory, 512GB SSD, 16.2" Liquid Retina XDR — ultimate pro laptop.',
    notes: 'Space Black. Includes 140W USB-C Power Adapter.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 4. Tablet ─────────────────────────────────────────────────────────────
  {
    name: 'Apple iPad Pro 13-inch (M4)',
    category: 'Tablet',
    brand: 'Apple',
    model: 'iPad-Pro-13-M4',
    serial_number: 'SN-IPADP13-CAT04',
    condition: 'New',
    status: 'In Stock',
    purchase_date: '2025-12-10',
    rental_price: 1800,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    description: 'M4 chip, Ultra Retina XDR OLED, 13.1" — thinnest Apple product ever, pro power in a tablet.',
    notes: 'Wi-Fi model. Apple Pencil Pro available separately.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 5. Projector ──────────────────────────────────────────────────────────
  {
    name: 'Epson EB-E01 Projector',
    category: 'Projector',
    brand: 'Epson',
    model: 'EB-E01',
    serial_number: 'SN-EPEBE01-CAT05',
    condition: 'Good',
    status: 'In Stock',
    purchase_date: '2025-07-15',
    rental_price: 600,
    deposit_amount: 2000,
    image_url: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80',
    description: 'XGA 3300 lumens, HDMI & VGA, 6000hr lamp life — ideal for classrooms & presentations.',
    notes: 'Includes remote, carry bag, HDMI cable.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 6. Speaker ────────────────────────────────────────────────────────────
  {
    name: 'JBL PartyBox 310 Bluetooth Speaker',
    category: 'Speaker',
    brand: 'JBL',
    model: 'PartyBox-310',
    serial_number: 'SN-JBLPB310-CAT06',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-08-20',
    rental_price: 800,
    deposit_amount: 3000,
    image_url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
    description: '240W RMS, dynamic light show, IPX4 splash proof, 18hr battery, TWS pairing.',
    notes: 'Includes power cable and remote. Available in Black.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 7. Gaming Console (NEW CATEGORY) ──────────────────────────────────────
  {
    name: 'Sony PlayStation 5 Slim',
    category: 'Gaming Console',
    brand: 'Sony',
    model: 'CFI-2000A01',
    serial_number: 'SN-PS5SLIM-CAT07',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-10-15',
    rental_price: 700,
    deposit_amount: 5000,
    image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80',
    description: 'PlayStation 5 Slim, detachable disc drive, 1TB SSD, 4K 120fps gaming, DualSense wireless controller.',
    notes: 'Includes 1 DualSense controller, HDMI 2.1 cable, power cable.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 8. Virtual Reality (NEW CATEGORY) ─────────────────────────────────────
  {
    name: 'Meta Quest 3 VR Headset',
    category: 'Virtual Reality',
    brand: 'Meta',
    model: 'Meta-Quest-3',
    serial_number: 'SN-MQ3-CAT08',
    condition: 'New',
    status: 'In Stock',
    purchase_date: '2025-11-20',
    rental_price: 900,
    deposit_amount: 6000,
    image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
    description: 'Mixed reality headset, Snapdragon XR2 Gen 2, 128GB, 2064×2208 per eye, wireless PC VR capable.',
    notes: 'Includes 2 Touch Plus controllers, charging cable, elite strap.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 9. Smart TV (NEW CATEGORY) ────────────────────────────────────────────
  {
    name: 'Samsung 55-inch 4K Smart TV',
    category: 'Smart TV',
    brand: 'Samsung',
    model: 'UA55CU7700',
    serial_number: 'SN-SAM55TV-CAT09',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-09-05',
    rental_price: 1200,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80',
    description: '55" Crystal UHD 4K, Tizen Smart OS, 60Hz, HDR10+, AirSlim design — perfect for events & venues.',
    notes: 'Includes wall-mount bracket, HDMI cable, and remote.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  },
  // ── 10. Printer ───────────────────────────────────────────────────────────
  {
    name: 'HP LaserJet Pro MFP 4104fdw',
    category: 'Printer',
    brand: 'HP',
    model: 'LaserJet-Pro-4104fdw',
    serial_number: 'SN-HPLJ4104-CAT10',
    condition: 'Good',
    status: 'In Stock',
    purchase_date: '2025-08-01',
    rental_price: 400,
    deposit_amount: 2500,
    image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80',
    description: 'Monochrome laser MFP, 40 ppm, auto-duplex, wireless, scan, copy & fax — enterprise office ready.',
    notes: 'Includes toner cartridge, USB & power cable.',
    totalQuantity: 10, availableQuantity: 10, bookedQuantity: 0
  }
];

// ---------------------------------------------------------------------------
// Duplicate-safe insert — check by exact device name
// ---------------------------------------------------------------------------
const checkByName = db.prepare('SELECT id FROM devices WHERE name = ?');
const insertDevice = db.prepare(`
  INSERT INTO devices (
    name, category, brand, model, serial_number,
    condition, status, purchase_date,
    rental_price, deposit_amount,
    image_url, description, notes,
    totalQuantity, availableQuantity, bookedQuantity
  ) VALUES (
    ?, ?, ?, ?, ?,
    ?, ?, ?,
    ?, ?,
    ?, ?, ?,
    ?, ?, ?
  )
`);

console.log('\n════════════════════════════════════════════════════');
console.log('   Seeding 10 Unique Category Devices');
console.log('════════════════════════════════════════════════════\n');

let inserted = 0;
let skipped = 0;

for (const d of devices) {
  const exists = checkByName.get(d.name);
  if (exists) {
    console.log(`  ⏭  SKIP   [already exists] ${d.category.padEnd(18)} | ${d.name}`);
    skipped++;
  } else {
    insertDevice.run(
      d.name, d.category, d.brand, d.model, d.serial_number,
      d.condition, d.status, d.purchase_date,
      d.rental_price, d.deposit_amount,
      d.image_url, d.description, d.notes,
      d.totalQuantity, d.availableQuantity, d.bookedQuantity
    );
    console.log(`  ✅ INSERT  [${d.category.padEnd(18)}] | ${d.name}  (₹${d.rental_price}/day)`);
    inserted++;
  }
}

console.log('\n────────────────────────────────────────────────────');
console.log(`  ✅  ${inserted} device(s) inserted   |   ⏭  ${skipped} skipped`);
console.log('────────────────────────────────────────────────────\n');

// ---------------------------------------------------------------------------
// Final verification — list the 10 target devices
// ---------------------------------------------------------------------------
console.log('📋  Final Verification — 10 Target Devices:\n');
const targets = devices.map(d => d.name);
let allFound = true;
for (const name of targets) {
  const row = db.prepare(
    'SELECT id, category, rental_price, totalQuantity, availableQuantity, status FROM devices WHERE name = ?'
  ).get(name);
  if (row) {
    console.log(`  ✅ [id=${String(row.id).padStart(3)}] ${row.category.padEnd(18)} | ${name}`);
    console.log(`        ₹${row.rental_price}/day | Qty: ${row.totalQuantity} total, ${row.availableQuantity} available | ${row.status}`);
  } else {
    console.log(`  ❌ MISSING: ${name}`);
    allFound = false;
  }
}

const total = db.prepare("SELECT COUNT(*) as cnt FROM devices WHERE status != 'Deleted'").get();
console.log(`\n  📦  Total active devices in DB: ${total.cnt}`);
console.log(allFound ? '\n  🎉  All 10 category devices verified!\n' : '\n  ⚠️   Some devices are missing!\n');

db.close();
