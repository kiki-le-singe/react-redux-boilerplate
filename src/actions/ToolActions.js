import * as types from 'constants/ToolConstants';
import Tool from 'services/tool';

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
  return dispatch => {
    return Tool.fetch().then((data) => {
      // Update the app state with the results of the API call.
      dispatch(receiveTools(data));
    });
  };
}

export { fetchTools };
