let pokemons = require('../data-source/pokemon')
module.exports = {
  up(db) {
    let promises = [];
    pokemons.forEach(pokemon =>{
      promises.push(db.collection('pokemon').insertOne(
        {
          num:pokemon.id,
          type:pokemon.type,
          name: pokemon.name.english
        }))
    });
    return Promise.all(promises);
  },

  down(db) {
     return db.collection('pokemon').drop();
  }
};
