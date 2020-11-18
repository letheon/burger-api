const mongoose = require('mongoose');
const ingredientSchema = require('../schemas/ingredient');

module.exports = mongoose.model('ingredient', ingredientSchema);
