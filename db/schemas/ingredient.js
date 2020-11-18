const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  name: { type: String },
  price: { type: Number },
});

module.exports = ingredientsSchema;
