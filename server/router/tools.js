import { argv } from 'yargs';

import toolsApi from '../api/tools';
import stubTools from '../stubs/tools.json';

const STUB_MODE = !!argv.stub;

export default (app, router) => {
  // test route to make sure everything is working (accessed at GET http://localhost:9000/api)
  router.get('/', (ctx, next) => {
    ctx.body = { message: 'hooray! welcome to our api!' };
  });

  // Get a list of tools
  router.get('/tools', (ctx, next) => {
    if (STUB_MODE) { // if stub enabled
      return ctx.body = stubTools;
    }
    ctx.body = toolsApi;
  });

  // Get one tool
  router.get('/tools/:id', (ctx, next) => {
    const tools = toolsApi;
    const count = tools.length;
    const toolId = ctx.params.id;

    let response = {};
    for (let i = 0; i < count; i++) {
      if (tools[i].id == toolId) { // eslint-disable-line
        response = tools[i];
      }
    }
    ctx.body = response;
  });
};
