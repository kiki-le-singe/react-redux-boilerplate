// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'middleware/logger';
import toolAPI from 'middleware/toolAPI';
import rootReducer from 'reducers';

const finalCreateStore = compose(
  // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
  // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
  applyMiddleware(logger, toolAPI),
)(createStore);

const configureStore = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState);

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
