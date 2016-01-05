import { argv } from 'yargs';
import express from 'express'; // Web framework
import path from 'path'; // Utilities for dealing with file paths
import uniqid from 'uniqid';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import toolsApi from './api/tools';
import stubTools from './stubs/tools.json';
import projectConfig from '../config';
import webpackConfig from '../webpack.config.js';

const app = express(); // define server
const STUB_MODE = !!argv.stub;

/* *******************
webpack configuration
******************* */

const compiler = webpack(webpackConfig);
const QUIET_MODE = !!argv.quiet;
const webpackDevMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  quiet: QUIET_MODE,
  noInfo: QUIET_MODE,
  stats: { colors: true },
  hot: true,
  inline: true,
  historyApiFallback: true,
};
const webpackDevMiddleware = WebpackDevMiddleware(compiler, webpackDevMiddlewareOptions); // eslint-disable-line

app.use(webpackDevMiddleware);
app.use(WebpackHotMiddleware(compiler)); // eslint-disable-line

/* ******************
 ROUTES FOR OUR API
******************* */
// Docs: http://expressjs.com/guide/routing.html

// get an instance of the express Router
const router = express.Router(); // eslint-disable-line

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', (request, response) => {
  response.json({ message: 'hooray! welcome to our api!' });
});

router.route('/tools')
  // Get a list of tools
  .get((request, response) => {
    if (STUB_MODE) { // if stub enabled
      return response.json(stubTools);
    }
    response.status(200).json(toolsApi);
  })
  // Post a tool
  .post((request, response) => {
    const tools = toolsApi;
    const tool = request.body;

    tool.id = uniqid();
    tools.push(tool);
    response.status(200).json(tools);
  });

router.route('/tools/:id')
  // Get one tool
  .get((request, response) => {
    const tools = toolsApi;
    const count = tools.length;
    const toolId = request.params.id;

    for (let i = 0; i < count; i++) {
      if (tools[i].id == toolId) { // eslint-disable-line
        return response.status(200).json(tools[i]);
      }
    }
  })
  // Delete a tool
  .delete((request, response) => {
    const tools = toolsApi;
    const count = tools.length;
    const toolId = request.params.id;

    for (let i = 0; i < count; i++) {
      if (tools[i].id == toolId) { // eslint-disable-line
        tools.splice(i, 1);
        return response.status(200).json(tools);
      }
    }
    response.status(404).send('Not deleted');
  });

// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  console.log(`Express server listening on projectConfig.SERVER_PORT ${projectConfig.SERVER_PORT} in ${app.settings.env} node`);
});
