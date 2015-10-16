/***********
 BASE SETUP
************/

// Stubs
var stubTools = require('./stubs/tools.json');

// Module dependencies.
var applicationRoot = __dirname,
    projectConfig = require('../config'),
    argv = require('yargs').argv,
    express = require('express'), // Web framework
    app = express(), // define server
    path = require('path'), // Utilities for dealing with file paths
    mongoose = require('mongoose'), // MongoDB integration
    bodyParser = require('body-parser'),
    args = process.argv,
    api = require('./api/api'),
    uniqid = require('uniqid'),
    QUIET_MODE = !!argv.quiet,
    STUB_MODE = !!argv.stub;

// We start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

// parses request body and populates request.body
app.use(bodyParser.urlencoded({extended: true}));
// where to serve static content
app.use(express.static(path.join(applicationRoot, '../build')));

/*******************
 ROUTES FOR OUR API
********************/

// Docs: http://expressjs.com/guide/routing.html

var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function (request, response) {
  response.json({message: 'hooray! welcome to our api!'});
});

router.route('/tools')
  // Get a list of tools
  .get(function (request, response) {
    if (STUB_MODE) { // if stub enabled
      return response.json(stubTools);
    }
    response.status(200).json(api.tools);
  })
  // Post a tool
  .post(function (request, response) {
    var tools = api.tools;
    var tool = request.body;

    tool.id = uniqid();
    tools.push(tool);
    response.status(200).json(tools);
  });

router.route('/tools/:id')
  // Get one tool
  .get(function (request, response) {
    var tools = api.tools;
    var count = tools.length;
    var toolId = request.params.id;

    for (var i = 0; i < count; i++) {
      if (tools[i].id == toolId) {
        return response.status(200).json(tools[i]);
      }
    }
  })
  // Delete a tool
  .delete(function (request, response) {
    var tools = api.tools;
    var count = tools.length;
    var toolId = request.params.id;

    for (var i = 0; i < count; i++) {
      if (tools[i].id == toolId) {
        tools.splice(i, 1);
        return response.status(200).json(tools);
      }
    }
    response.status(404).send('Not deleted');
  });

// all of our routes will be prefixed with /api
app.use('/api', router);

// Histories:
// https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md#configuring-your-server
app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

/*****************
 START THE SERVER
******************/

app.listen(projectConfig.SERVER_PORT, function () {
  console.log('Express server listening on projectConfig.SERVER_PORT %d in %s node', projectConfig.SERVER_PORT, app.settings.env);
});

// http://webpack.github.io/docs/webpack-dev-server.html
new WebpackDevServer(webpack(config), {
  quiet: QUIET_MODE,
  stats: { colors: true },
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:' + projectConfig.SERVER_PORT
  }
}).listen(projectConfig.WEBPACK_PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + projectConfig.WEBPACK_PORT);
});
