const mongoose = require('mongoose');
const pokemonOfTrainer = mongoose.Schema({
  _instanceID: mongoose.ObjectId,
  _id: {
    type: mongoose.ObjectId,
    ref: 'pokemon',
  },
  level: Number,
});
const trainerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: String,
  age: Number,
  pokemons: {
    type: [pokemonOfTrainer],
    validate: [val => val.length <= 6, '{PATH} exceeds the limit of 6'],
  },
  _id: mongoose.ObjectId,
});

module.exports = mongoose.model('trainer', trainerSchema, 'trainer');
