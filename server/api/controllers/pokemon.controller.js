const Pokemon = require('../model/pokemon.schema');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.create = function (req, res, next) {
  let pokemon = new Pokemon(
    {
      name: req.body.name,
      num: req.body.num,
      type: req.body.type
    }
  );

  pokemon.save(function (err) {
    if (err) {
      return next(err);
    }

    res.status(201).send('Pokemon Created successfully')
  })
};

exports.findById = function (req, res, next) {
  Pokemon.findById(req.params.id, function (err, pokemon) {
      if (err) return next(err);
      res.status(200).send(pokemon);
  })
};

exports.update = function (req, res, next) {
  Pokemon.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, pokemon) {
    if (err) return next(err);
    res.status(200).send(pokemon);
  });
};

exports.delete = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.status(200).send('Deleted successfully!');
  })
};
