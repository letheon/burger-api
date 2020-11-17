const mongoose = require('mongoose');

async function connect(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database...');
    console.log(err);
  }
}

module.exports = { connect };
