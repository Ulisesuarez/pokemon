const Trainer = require('../model/trainer.schema');
const mongoose = require('mongoose');

exports.create = function(req, res, next) {
  let trainer = new Trainer({
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
    pokemons: req.body.pokemons,
  });

  trainer.save(function(err) {
    if (err) {
      return next(err);
    }

    res.sendStatus(201).send('Trainer Created successfully');
  });
};

exports.findById = function(req, res, next) {
  Trainer.findById(req.params.id)
    .populate('pokemons._id')
    .exec(function(err, trainer) {
      if (err) return next(err);
      console.log(trainer);
      res.send(trainer);
    });
};

exports.countPokemon = function(req, res, next) {
  Trainer.findById(req.params.id, function(err, trainer) {
    if (err) return next(err);
    console.log(trainer);
    res.send({ pokemons: trainer.pokemons.length });
  });
};

exports.update = function(req, res, next) {
  Trainer.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    trainer
  ) {
    if (err) return next(err);
    res.send(trainer);
  });
};

exports.delete = function(req, res, next) {
  Trainer.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};

exports.addPokemon = function(req, res, next) {
  Trainer.findById(req.params.id, function(err, trainer) {
    if (err) return next(err);
    let instanceID = req.body.id || mongoose.Types.ObjectId();
    let pokemon = {
      _instanceID: instanceID,
      _id: mongoose.Types.ObjectId(req.body.pokemonInfoId),
      level: req.body.level,
    };
    if (trainer.pokemons.length >= 6) {
      return next(
        new Error("Can't add new pokemons, you already have the maximum (6)")
      );
    }
    trainer.pokemons.push(pokemon);
    trainer.save();
    res.send(trainer);
  });
};

exports.deletePokemon = function(req, res, next) {
  Trainer.findById(req.params.id, function(err, trainer) {
    if (err) return next(err);
    trainer.pokemon = trainer.pokemons.filter(
      pokemon => pokemon._instanceID !== req.params.pokemon
    );
    trainer.save();
    res.send(trainer);
  });
};
