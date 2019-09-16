const mongoose = require('mongoose');
const pokemonSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: [String],
  num: { type: Number, required: true, unique: true },
  _id: mongoose.ObjectId,
});
module.exports = mongoose.model('pokemon', pokemonSchema, 'pokemon');
