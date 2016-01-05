import { argv } from 'yargs';
import WebpackDevMiddleware from 'webpack-dev-middleware';

const QUIET_MODE = !!argv.quiet;

export default function (compiler, publicPath) {
  const webpackDevMiddlewareOptions = {
    publicPath,
    quiet: QUIET_MODE,
    noInfo: QUIET_MODE,
    stats: { colors: true },
    hot: true,
    inline: true,
    historyApiFallback: true,
  };

  return WebpackDevMiddleware(compiler, webpackDevMiddlewareOptions); // eslint-disable-line
}
