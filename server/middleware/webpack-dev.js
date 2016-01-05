import { argv } from 'yargs';
import WebpackDevMiddleware from 'webpack-dev-middleware';

const QUIET_MODE = !!argv.quiet;

export default function (compiler, publicPath) {
  // http://webpack.github.io/docs/webpack-dev-server.html
  const webpackDevMiddlewareOptions = {
    publicPath, // http://webpack.github.io/docs/webpack-dev-middleware.html#publicpath
    quiet: QUIET_MODE,
    noInfo: QUIET_MODE,
    stats: { colors: true },
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
  };

  return WebpackDevMiddleware(compiler, webpackDevMiddlewareOptions); // eslint-disable-line
}
