/**
 * seed-10-devices.js
 * ---------------------------------------------------------------------------
 * Inserts exactly 10 unique rental devices into the database.
 * Safe to run multiple times — uses INSERT OR IGNORE on name uniqueness.
 * ---------------------------------------------------------------------------
 */

const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../../database/rental.db');
const db = new Database(dbPath);

db.pragma('foreign_keys = ON');

// ---------------------------------------------------------------------------
// 10 unique devices with realistic Unsplash images
// ---------------------------------------------------------------------------
const devices = [
  {
    name: 'Canon EOS R50 Mirrorless Camera',
    category: 'Camera',
    brand: 'Canon',
    model: 'EOS-R50',
    serial_number: 'SN-CANR50-SEED01',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-09-01',
    rental_price: 1500,           // daily rate
    weekly_price: 9000,
    monthly_price: 30000,
    deposit_amount: 5000,
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: '24.2MP APS-C sensor, 4K UHD video, Dual Pixel CMOS AF II, compact and lightweight mirrorless for creators.',
    features: '24.2MP APS-C CMOS | 4K 30fps Video | Dual Pixel CMOS AF II | Built-in Wi-Fi & Bluetooth | ISO 100-32000 | 15fps burst',
    notes: 'Includes 18-45mm kit lens, battery, charger, strap.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Sony Alpha A7 III Camera',
    category: 'Camera',
    brand: 'Sony',
    model: 'ILCE-7M3',
    serial_number: 'SN-SNYA7III-SEED02',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-08-15',
    rental_price: 3500,
    weekly_price: 21000,
    monthly_price: 70000,
    deposit_amount: 10000,
    image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    description: '24.2MP full-frame BSI CMOS sensor, 693-point phase-detection AF, 10fps burst, 4K HDR video — pro-grade hybrid.',
    features: '24.2MP Full-Frame BSI CMOS | 4K 30fps HDR Video | 693 Phase-Detection AF Points | 10fps Burst | 5-Axis IBIS | Dual SD Slots',
    notes: 'Body only. Lens adapters available upon request.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'DJI Mini 4 Pro Drone',
    category: 'Drone',
    brand: 'DJI',
    model: 'Mini-4-Pro',
    serial_number: 'SN-DJIM4P-SEED03',
    condition: 'New',
    status: 'In Stock',
    purchase_date: '2025-11-01',
    rental_price: 2000,
    weekly_price: 12000,
    monthly_price: 40000,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    description: 'Sub-249g foldable drone, 4K/60fps, omnidirectional obstacle sensing, 34-min flight time, ideal for travel cinematography.',
    features: '4K/60fps Video | 48MP Photos | Omnidirectional Obstacle Sensing | 34-min Flight Time | 10km Range | Sub-249g | ActiveTrack 360°',
    notes: 'Includes 3 batteries, ND filters, and carry case.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Apple MacBook Pro 16-inch (M3 Pro)',
    category: 'Laptop',
    brand: 'Apple',
    model: 'MBP16-M3Pro',
    serial_number: 'SN-MBP16M3-SEED04',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-12-01',
    rental_price: 4500,
    weekly_price: 27000,
    monthly_price: 90000,
    deposit_amount: 15000,
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: 'Apple M3 Pro chip, 18GB unified memory, 512GB SSD, 16.2" Liquid Retina XDR display — the ultimate pro laptop.',
    features: 'M3 Pro Chip | 18GB Unified Memory | 512GB SSD | 16.2" Liquid Retina XDR | Up to 22hrs Battery | MagSafe 3 | Thunderbolt 4',
    notes: 'Space Black finish. Includes 140W USB-C Power Adapter.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Dell XPS 15 Laptop',
    category: 'Laptop',
    brand: 'Dell',
    model: 'XPS-15-9530',
    serial_number: 'SN-DXPS15-SEED05',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-10-20',
    rental_price: 2800,
    weekly_price: 16800,
    monthly_price: 56000,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    description: 'Intel Core i7-13700H, NVIDIA RTX 4060, 32GB DDR5, 1TB NVMe SSD, 15.6" 3.5K OLED touchscreen.',
    features: 'Intel Core i7-13700H | RTX 4060 8GB | 32GB DDR5 | 1TB NVMe SSD | 15.6" 3.5K OLED Touch | Thunderbolt 4 | Wi-Fi 6E',
    notes: 'Includes Dell 130W USB-C adapter and sleeve bag.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    category: 'Laptop',
    brand: 'Lenovo',
    model: 'X1C-Gen12',
    serial_number: 'SN-TPX1G12-SEED06',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-09-10',
    rental_price: 2200,
    weekly_price: 13200,
    monthly_price: 44000,
    deposit_amount: 6000,
    image_url: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80',
    description: 'Intel Core Ultra 7 155U, 32GB LPDDR5, 1TB SSD, 14" 2.8K OLED — the world\'s lightest 14" business laptop.',
    features: 'Intel Core Ultra 7 155U | 32GB LPDDR5 | 1TB NVMe SSD | 14" 2.8K OLED | 1.12kg Weight | 15hr Battery | 4G LTE Option | MIL-SPEC Tested',
    notes: 'Carbon Black. Ideal for business travel and enterprise use.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Apple iPad Pro 13-inch (M4)',
    category: 'Tablet',
    brand: 'Apple',
    model: 'iPad-Pro-13-M4',
    serial_number: 'SN-IPADP13-SEED07',
    condition: 'New',
    status: 'In Stock',
    purchase_date: '2025-12-10',
    rental_price: 1800,
    weekly_price: 10800,
    monthly_price: 36000,
    deposit_amount: 8000,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    description: 'M4 chip, Ultra Retina XDR OLED tandem display, 13.1" design, thinnest Apple product ever — pro power in a tablet.',
    features: 'M4 Chip | 13.1" Ultra Retina XDR OLED | 256GB Storage | Apple Pencil Pro Compatible | Magic Keyboard Support | Wi-Fi 6E | USB-C Thunderbolt 4',
    notes: 'Space Black, Wi-Fi model. Apple Pencil Pro available separately.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Samsung Galaxy Tab S10 Ultra',
    category: 'Tablet',
    brand: 'Samsung',
    model: 'SM-X920',
    serial_number: 'SN-TABS10U-SEED08',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-10-01',
    rental_price: 1400,
    weekly_price: 8400,
    monthly_price: 28000,
    deposit_amount: 6000,
    image_url: 'https://images.unsplash.com/photo-1589632032085-b4e8e68b1f5b?w=800&q=80',
    description: '14.6" Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, 12GB RAM, S Pen included — the ultimate Android tablet experience.',
    features: '14.6" Dynamic AMOLED 2X | Snapdragon 8 Gen 3 | 12GB RAM | 256GB Storage | S Pen Included | 45W Fast Charging | DeX Support | IP68',
    notes: 'Graphite color. S Pen included. Keyboard cover available.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'Epson EB-E01 Projector',
    category: 'Projector',
    brand: 'Epson',
    model: 'EB-E01',
    serial_number: 'SN-EPEBE01-SEED09',
    condition: 'Good',
    status: 'In Stock',
    purchase_date: '2025-07-15',
    rental_price: 600,
    weekly_price: 3600,
    monthly_price: 12000,
    deposit_amount: 2000,
    image_url: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80',
    description: 'XGA resolution, 3300 lumens brightness, HDMI connectivity, perfect for presentations, classrooms, and home cinema.',
    features: 'XGA (1024x768) Resolution | 3300 Lumens | HDMI & VGA Input | 6000hr Lamp Life | Manual Keystone Correction | USB Type-B | Carry Bag Included',
    notes: 'Includes remote control, carry bag, and HDMI cable.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  },
  {
    name: 'JBL PartyBox 310 Bluetooth Speaker',
    category: 'Speaker',
    brand: 'JBL',
    model: 'PartyBox-310',
    serial_number: 'SN-JBLPB310-SEED10',
    condition: 'Excellent',
    status: 'In Stock',
    purchase_date: '2025-08-20',
    rental_price: 800,
    weekly_price: 4800,
    monthly_price: 16000,
    deposit_amount: 3000,
    image_url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
    description: '240W RMS power, dynamic light show, IPX4 splash proof, 18hr battery, TWS pairing — the ultimate party speaker.',
    features: '240W RMS Output | Dynamic Light Show | IPX4 Splash Proof | 18hr Battery Life | TWS Stereo Pairing | USB Playback | Mic & Guitar Inputs | Wheels & Handle',
    notes: 'Includes power cable and remote control. Available in Black.',
    totalQuantity: 10,
    availableQuantity: 10,
    bookedQuantity: 0
  }
];

// ---------------------------------------------------------------------------
// Insert with duplicate prevention using serial_number uniqueness check
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

let inserted = 0;
let skipped = 0;

for (const d of devices) {
  const exists = checkByName.get(d.name);
  if (exists) {
    console.log(`  SKIP  [already exists] ${d.name} (id=${exists.id})`);
    skipped++;
  } else {
    insertDevice.run(
      d.name, d.category, d.brand, d.model, d.serial_number,
      d.condition, d.status, d.purchase_date,
      d.rental_price, d.deposit_amount,
      d.image_url, d.description, d.notes,
      d.totalQuantity, d.availableQuantity, d.bookedQuantity
    );
    console.log(`  INSERT ${d.name}`);
    inserted++;
  }
}

console.log('\n────────────────────────────────────────────');
console.log(`✅  Seed complete: ${inserted} inserted, ${skipped} skipped`);
console.log('────────────────────────────────────────────');

// Final verification
const total = db.prepare("SELECT COUNT(*) as cnt FROM devices WHERE status != 'Deleted'").get();
const seededCount = db.prepare(
  "SELECT COUNT(*) as cnt FROM devices WHERE serial_number LIKE 'SN-%-SEED%'"
).get();
console.log(`\n📋  Total active devices in DB : ${total.cnt}`);
console.log(`📋  Seeded target devices       : ${seededCount.cnt}`);

db.close();
