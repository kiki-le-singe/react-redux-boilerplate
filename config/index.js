// https://github.com/bcoe/yargs
import { argv } from 'yargs';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {

  // Environment
  __CLIENT__: true,
  __SERVER__: false,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
  __DEBUG__: !!argv.debug,

  // Server Configuration
  SERVER_PORT: process.env.PORT || 8080,

  // Webpack Configuration
  VENDOR_DEPENDENCIES: [
    'react',
    'react-router',
    'redux',
    'lodash',
    'classnames',
    'superagent',
    'slideout',
  ],

  // Project Structure
  PATH_BASE: path.resolve(__dirname, '../'),
  ENTRY_APP: 'index',
  DIR_SRC: 'src',
  DIR_ASSETS: 'assets',
  DIR_DIST: 'dist',
  DIR_SERVER: 'server',
  DIR_TEST: '__tests__',
  DIR_STYLEGUIDE: 'styleguide',
  DIR_STYLEGUIDE_BUILD: 'build_styleguide',
  DIR_NODE_MODULES: 'node_modules',
};

const paths = (dir = 'base') => {
  const resolve = path.resolve;
  const base = (...args) => (
    resolve.apply(resolve, [config.PATH_BASE, ...args])
  );
  const _paths = {
    base: base(),
    entryApp: base(config.DIR_SRC, config.ENTRY_APP),
    src: base(config.DIR_SRC),
    assets: base(config.DIR_SRC, config.DIR_ASSETS),
    dist: base(config.DIR_DIST),
    server: base(config.DIR_SERVER),
    test: base(config.DIR_TEST),
    styleguide: base(config.DIR_STYLEGUIDE),
    styleguideBuild: base(config.DIR_STYLEGUIDE_BUILD),
    nodeModules: base(config.DIR_NODE_MODULES),
  };

  return _paths[dir];
};

export { config as default, paths };
