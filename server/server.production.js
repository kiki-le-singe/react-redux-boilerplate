import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import uniqid from 'uniqid';

import projectConfig from '../config';
import toolsApi from './api/tools';

const applicationRoot = __dirname;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(applicationRoot, '../dist')));


/* ******************
 ROUTES FOR OUR API
******************* */

const router = express.Router(); // eslint-disable-line

router.get('/', (request, response) => {
  response.json({ message: 'hooray! welcome to our api!' });
});

router.route('/tools')
  // Get a list of tools
  .get((request, response) => {
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

app.use('/api', router);

// Histories:
// https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md#configuring-your-server
// app.get('*', function(request, response){
//   response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  console.log(`Express server listening on projectConfig.SERVER_PORT ${projectConfig.SERVER_PORT} in ${app.settings.env} node`);
});
