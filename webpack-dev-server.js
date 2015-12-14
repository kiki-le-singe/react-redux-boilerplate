// We start a webpack-dev-server with our config
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { argv } from 'yargs';

import config from './webpack.config.js';
import projectConfig from './config';

const QUIET_MODE = !!argv.quiet;

function webpackDevServer(options = {}) {
  // http://webpack.github.io/docs/webpack-dev-server.html
  return new WebpackDevServer(webpack(config), {
    quiet: QUIET_MODE,
    stats: { colors: true },
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:' + projectConfig.SERVER_PORT,
    },
  }).listen(projectConfig.WEBPACK_PORT, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + projectConfig.WEBPACK_PORT);
  });
}

export default webpackDevServer;
