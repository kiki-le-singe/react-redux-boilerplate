import express from 'express';
import path from 'path';

import routes from './routes';
import projectConfig from '../config';

const app = express();

app.use(express.static(path.resolve('dist')));


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
