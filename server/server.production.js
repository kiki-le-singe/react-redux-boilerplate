import Koa from 'koa';
import serve from 'koa-static';
import _debug from 'debug';

import router from './router';
import projectConfig from '../config';

const debug = _debug('app:server');
const app = new Koa();

app.use(serve('dist'));


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
