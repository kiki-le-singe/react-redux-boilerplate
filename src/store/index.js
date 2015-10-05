// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Using Thunk Middleware for Async Actions

import logger from 'middleware/logger';
import rootReducer from 'reducers';

// applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
// createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
const createStoreWithMiddleware = applyMiddleware(
  thunk
  logger,
)(createStore);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
