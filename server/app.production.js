/***********
 BASE SETUP
************/

// Stubs
var stubTools = require('./stubs/tools.json');

// Module dependencies.
var applicationRoot = __dirname,
    express = require('express'), // Web framework
    app = express(), // define server
    path = require('path'), // Utilities for dealing with file paths
    mongoose = require('mongoose'), // MongoDB integration
    bodyParser = require('body-parser'),
    nodeServerPort = process.env.PORT || 9000, // set our nodeServerPort
    args = process.argv,
    stubArg = ('true' === args[2]),
    api = require('./api/api')
    uniqid = require('uniqid');

// parses request body and populates request.body
app.use(bodyParser.urlencoded({extended: true}));
// where to serve static content
app.use(express.static(path.join(applicationRoot, '../dist')));

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
    if (stubArg) { // if stub enabled
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

app.listen(nodeServerPort, function () {
  console.log('Express server listening on nodeServerPort %d in %s node', nodeServerPort, app.settings.env);
});
