import WebpackHotMiddleware from 'webpack-hot-middleware';

export default function (compiler) {
  return WebpackHotMiddleware(compiler); // eslint-disable-line
}
