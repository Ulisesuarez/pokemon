var Pokemon = require('./../model/pokemon.schema');

Pokemon.find({})
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })

Pokemon.find({name:"YOUR_NAME"})
  .then((doc)=>{
    console.log(doc);
  })
  .catch((err)=>{
    console.log(err);
  });
