import request from 'superagent';

import IndicatorActions from 'actions/IndicatorActions';
import api from 'config/api.json';

const CALL_API = Symbol('Call API');

/**
 * Handles all tool requests to the server.
 */
const toolAPI = store => next => action => { // eslint-disable-line
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { callbackAction, id, method } = callAPI;

  let r;
  switch (method) {
    case 'GET':
      r = id ? request.get(`${api.tools}/${id}`) : request.get(api.tools);
      break;

    case 'POST':
      return 'POST';

    case 'PUT':
      return 'PUT';

    case 'DELETE':
      return 'DELETE';

    default:
      r = request.get(api.tools);
  }

  return r
    .on('progress', () => {
      next(IndicatorActions.showIndicator());
    })
    .on('end', () => {
      next(IndicatorActions.hideIndicator());
    })
    .end((err, res) => {
      if (res.ok) {
        next(callbackAction(res.body));
      } else {
        console.error(api.tools, res.text); // eslint-disable-line
      }
    });
};

export { toolAPI as default, CALL_API };
