// https://github.com/bcoe/yargs
const argv = require('yargs').argv;
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  // environment
  __CLIENT__: true,
  __SERVER__: false,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
  __DEBUG__: !!argv.debug,

  // server configuration
  WEBPACK_PORT: 8080,
  SERVER_PORT: process.env.PORT || 9000,
};
