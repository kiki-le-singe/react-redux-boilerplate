// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/stores/TodoStore.js

import EventEmitter from 'events';

import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';

const CHANGE_EVENT = 'change';
let tools = [];
let tool = {};
let searchValue = '';

const create = (data) => {
  tools = data;
  console.log('add item tool'); // eslint-disable-line
};

const fetchOne = (data) => {
  tool = data;
  console.log(`fetch ${data.title} tool`); // eslint-disable-line
};

const fetchAll = (data) => {
  tools = data;
  console.log('fetch all tools'); // eslint-disable-line
};

const destroy = (id) => {
  // Framework7 handles itself the deletion of a DOM element.
  // So not need to handle it with the React setState() method.
  console.log(`tool deleted: ${id}`); // eslint-disable-line
};

const search = (value) => {
  searchValue = value;
};

class ToolStore extends EventEmitter {

  // Get one tool.
  getOne() {
    return tool;
  }

  // Get the entire collection of tools.
  getAll() {
    return tools;
  }

  // Get the value to searched.
  searchValue() {
    return searchValue;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const toolStore = new ToolStore();

export default toolStore;

AppDispatcher.register((action) => {
  switch (action.actionType) {

    case ToolConstants.TOOL_CREATE:
      create(action.data);
      toolStore.emitChange();
      break;

    case ToolConstants.TOOL_FETCH:
      fetchOne(action.data);
      toolStore.emitChange();
      break;

    case ToolConstants.TOOLS_FETCH:
      fetchAll(action.data);
      toolStore.emitChange();
      break;

    case ToolConstants.TOOL_DELETE:
      destroy(action.id);
      toolStore.emitChange();
      break;

    case ToolConstants.TOOL_SEARCH:
      search(action.value);
      toolStore.emitChange();
      break;

    default:
      break;
  }
});
