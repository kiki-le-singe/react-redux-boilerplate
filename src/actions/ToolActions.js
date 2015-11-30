import types from 'constants/ToolConstants';
import { fetch } from 'services/tool';

/*
 * action creators
 */

function fetchTools() {
  return {
    // Types of actions to emit before and after
    types: [types.FETCH_TOOLS_REQUEST, types.FETCH_TOOLS_SUCCESS, types.FETCH_TOOLS_FAILURE],
    // Check the cache (optional):
    shouldCallAPI: (state) => !state.tools.items.length,
    // Perform the fetching:
    callAPI: () => fetch(),
    // Arguments to inject in begin/end actions
    payload: {},
  };
}

function fetchTool(id) {
  return {
    types: [types.FETCH_TOOL_REQUEST, types.FETCH_TOOL_SUCCESS, types.FETCH_TOOL_FAILURE],
    shouldCallAPI: (state) => {
      return (state.tools.item && state.tools.item.id === id) ? false : true;
    },
    callAPI: () => fetch(id),
    payload: { id },
  };
}

export default { fetchTools, fetchTool };
