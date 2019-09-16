const express = require('express');
const router = express.Router();

const trainer_controller = require('../controllers/trainer.controller');

router.get('/trainer/:id/count', trainer_controller.countPokemon);
router.post('/trainer/create', trainer_controller.create);
router.get('/trainer/:id', trainer_controller.findById);
router.put('/trainer/:id/update', trainer_controller.update);
router.put('/trainer/:id/add-pokemon', trainer_controller.addPokemon);
router.put('/trainer/:id/delete-pokemon/:pokemon', trainer_controller.deletePokemon);
router.delete('/trainer/:id/delete', trainer_controller.delete);
module.exports = router;
