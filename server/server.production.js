import Koa from 'koa';
import serve from 'koa-static';
import _debug from 'debug';

import routes from './routes';
import projectConfig from '../config';

const debug = _debug('app:server');
const app = new Koa();

app.use(serve('dist'));


/* ******************
 ROUTES FOR OUR API
******************* */

routes(app);


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  debug(`Koa server listening on projectConfig.SERVER_PORT ${projectConfig.SERVER_PORT} in ${app.env} node`);
});
