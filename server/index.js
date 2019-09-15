import './common/env';
import Server from './common/server';
import routes from './routes';

console.log(process.env.PORT)
export default new Server().router(routes).connect(process.env.PORT);
