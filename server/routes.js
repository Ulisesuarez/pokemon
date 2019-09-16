import pokemonRouter from './api/routes/pokemon.route';
import trainerRouter from './api/routes/trainer.route';
export default function routes(app) {
  app.use('/api', pokemonRouter);
  app.use('/api', trainerRouter);
}
