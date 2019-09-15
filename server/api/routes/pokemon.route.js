const express = require('express');
const router = express.Router();

const pokemon_controller = require('../controllers/pokemon.controller');

router.get('/pokemon/test', pokemon_controller.test);
router.post('/pokemon/create', pokemon_controller.create);
router.get('/pokemon/:id', pokemon_controller.findById);
router.put('/pokemon/:id/update', pokemon_controller.update);
router.delete('/pokemon/:id/delete', pokemon_controller.delete);
module.exports = router;
