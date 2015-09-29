import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';
import Tool from 'services/tool';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js

export default {
  create(tool) {
    return Tool.create(tool).then((data) => {
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOL_CREATE,
        data: data,
      });
    });
  },

  fetchOne(id) {
    return Tool.fetchOne(id).then((data) => {
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOL_FETCH,
        data: data,
      });
    });
  },

  fetchAll() {
    return Tool.fetch().then((data) => {
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOLS_FETCH,
        data: data,
      });
    });
  },

  delete(id) {
    return Tool.delete(id)
      .then((data) => {  // eslint-disable-line
        AppDispatcher.dispatch({
          actionType: ToolConstants.TOOL_DELETE,
          id: id,
        });
      });
  },

  search(value) {
    AppDispatcher.dispatch({
      actionType: ToolConstants.TOOL_SEARCH,
      value: value,
    });
  },
};
