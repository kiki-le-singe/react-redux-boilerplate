import { argv } from 'yargs';
import webpackDevMiddleware from 'webpack-dev-middleware';

const QUIET_MODE = !!argv.quiet;

export default function (compiler, publicPath) {
  // http://webpack.github.io/docs/webpack-dev-server.html
  const webpackDevMiddlewareOptions = {
    publicPath, // http://webpack.github.io/docs/webpack-dev-middleware.html#publicpath
    quiet: QUIET_MODE,
    noInfo: QUIET_MODE,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
    },
    hot: true,
    lazy: false,
    historyApiFallback: true,
  };

  return webpackDevMiddleware(compiler, webpackDevMiddlewareOptions);
}
