const mongoose = require('mongoose');
const customer = require('./customer');
const { Schema } = mongoose;

const orderSchema = new Schema({
  ingredients: {
    salad: Number,
    bacon: Number,
    cheese: Number,
    meat: Number,
  },
  price: { type: Number },
  customer: { type: customer },
  deliveryMethod: { type: String },
});

module.exports = orderSchema;
