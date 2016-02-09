// https://github.com/bcoe/yargs
import { argv } from 'yargs';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {

  // environment
  __CLIENT__: true,
  __SERVER__: false,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
  __DEBUG__: !!argv.debug,

  // server configuration
  SERVER_PORT: process.env.PORT || 8080,
};
