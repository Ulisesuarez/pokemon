import pokemonRouter from './api/routes/pokemon.route';

export default function routes(app) {
  app.use('/api', pokemonRouter);
}
