import express from 'express'; // Web framework
import webpack from 'webpack';
import path from 'path';

import routes from './routes';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHotMiddleware from './middleware/webpack-hot';
import projectConfig from '../config';
import webpackConfig from '../webpack.config.js';

const app = express(); // define server
const compiler = webpack(webpackConfig);


app.use(express.static(path.resolve('src/assets')));

/* *******************
webpack configuration
******************* */

app.use(webpackDevMiddleware(compiler, webpackConfig.output.publicPath));
app.use(webpackHotMiddleware(compiler));


/* ******************
 ROUTES FOR OUR API
******************* */

routes(app);


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  console.log(`Express server listening on projectConfig.SERVER_PORT ${projectConfig.SERVER_PORT} in ${app.settings.env} node`);
});
