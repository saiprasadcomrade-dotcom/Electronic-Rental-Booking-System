const Database = require('better-sqlite3');
const db = new Database('../database/rental.db');

const customers = db.prepare('SELECT id FROM customers').all();
const devices = db.prepare('SELECT id, rental_price, deposit_amount, availableQuantity FROM devices').all();

// Clear existing bookings
db.pragma('foreign_keys = OFF');
db.prepare('DELETE FROM bookings').run();
db.prepare('UPDATE devices SET bookedQuantity = 0, availableQuantity = totalQuantity').run();
db.pragma('foreign_keys = ON');

const today = new Date();
const bookingsToInsert = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 15 random bookings
for (let i = 0; i < 15; i++) {
  const customer = customers[getRandomInt(0, customers.length - 1)];
  const device = devices[getRandomInt(0, devices.length - 1)];
  
  // Random start date between 10 days ago and 5 days in the future
  const startOffset = getRandomInt(-10, 5);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + startOffset);
  
  // Random duration between 2 and 14 days
  const duration = getRandomInt(2, 14);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + duration);
  
  // Status logic
  let status = 'Active';
  if (endDate < today) {
    status = 'Returned';
  } else if (startOffset > 0) {
    status = 'Active'; // Future booking, though typically might be 'Pending', let's stick to Active as per schema
  }
  
  const formattedStart = startDate.toISOString().split('T')[0];
  const formattedEnd = endDate.toISOString().split('T')[0];
  
  // Calculate total rental amount (duration * daily rate)
  const totalRentalAmount = duration * device.rental_price;

  bookingsToInsert.push({
    deviceId: device.id,
    customerId: customer.id,
    status: status,
    startDate: formattedStart,
    endDate: formattedEnd,
    rentalAmount: totalRentalAmount,
    depositAmount: device.deposit_amount,
  });
}

const insertBooking = db.prepare(`
  INSERT INTO bookings (deviceId, customerId, quantity, bookingStatus, paymentStatus, bookingDate, returnDate, rental_amount, deposit_amount)
  VALUES (?, ?, 1, ?, 'Paid', ?, ?, ?, ?)
`);

const updateDevice = db.prepare(`
  UPDATE devices
  SET bookedQuantity = bookedQuantity + 1, availableQuantity = availableQuantity - 1
  WHERE id = ?
`);

for (const b of bookingsToInsert) {
  insertBooking.run(b.deviceId, b.customerId, b.status, b.startDate, b.endDate, b.rentalAmount, b.depositAmount);
  if (b.status === 'Active') {
    updateDevice.run(b.deviceId);
  }
}

console.log(`Seeded ${bookingsToInsert.length} random rentals with varying rates and dates.`);
