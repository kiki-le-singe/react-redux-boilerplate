import types from 'constants/ToolConstants';
import { CALL_API } from 'middleware/toolAPI';

/*
 * action creators
 */

function receiveTools(data) {
  return {
    type: types.RECEIVE_TOOLS,
    tools: data,
  };
}

function fetchTools() {
  return {
    [CALL_API]: {
      method: 'GET',
      callbackAction: receiveTools,
    },
  };
}

export default { fetchTools };
