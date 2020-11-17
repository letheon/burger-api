const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: { type: String },
  address: {
    street: { type: String },
    postcode: { type: Number },
    counry: { type: String },
  },
  email: { type: String },
});

module.exports = customerSchema;
