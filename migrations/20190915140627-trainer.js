module.exports = {
  up(db) {
    return db.collection('trainer').insertMany( [
      { name: "Ash", lastname:"Ramirez",  Age: 15, pokemons: [
        {_id:'5d7e44ba1172f66873f89115', level:10}]},
      { name: "Brock", lastname:"Ferrer", Age: 20, pokemons: [
          {_id:'5d7e44ba1172f66873f8915b', level:12}] },
      { name: "Misty" , lastname:"Woods", Age: 18, pokemons: [
          {_id:'5d7e44ba1172f66873f891ab', level:18}] }
    ])
  },

  down(db) {
    return db.collection('trainer').drop();
  }
};
