const mongoose = require('mongoose');
const customerSchema = require('../schemas/customer');

module.exports = mongoose.model('customer', customerSchema);
