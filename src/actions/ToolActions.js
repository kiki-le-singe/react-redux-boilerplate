import types from 'constants/ToolConstants';
import { CALL_API } from 'middleware/toolAPI';

/*
 * action creators
 */

function receiveTool(data) {
  return {
    type: types.RECEIVE_TOOL,
    tools: data,
  };
}

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

function fetchOne(id) {
  return {
    [CALL_API]: {
      method: 'GET',
      callbackAction: receiveTool,
      id,
    },
  };
}

export default { fetchTools, fetchOne };
