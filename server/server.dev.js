import Koa from 'koa';
import serve from 'koa-static';
import webpack from 'webpack';
import _debug from 'debug';

import router from './router';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHotMiddleware from './middleware/webpack-hot';
import projectConfig from '../config';
import webpackConfig from '../webpack/dev.config.js';

const debug = _debug('app:server');
const app = new Koa();
const compiler = webpack(webpackConfig);
const serverOptions = { publicPath: webpackConfig.output.publicPath }; // http://webpack.github.io/docs/webpack-dev-middleware.html#publicpath

app.use(serve('src/assets'));

/* *******************
webpack configuration
******************* */
// Use these middlewares to set up hot module reloading via webpack.
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));


/* ******************
 ROUTER FOR OUR API
******************* */

router(app);


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  debug(`Koa server listening on projectConfig.SERVER_PORT ${projectConfig.SERVER_PORT} in ${app.env} node`);
});
