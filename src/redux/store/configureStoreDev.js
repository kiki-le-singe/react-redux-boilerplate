// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import DevTools from 'containers/DevTools';

import logger from '../middleware/logger';
import api from '../middleware/api';
import rootReducer from '../reducers';

let finalCreateStore;

const configureStoreDev = (initialState = {}, history) => {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);

  if (__DEBUG__) {
    finalCreateStore = compose(
      // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
      // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
      applyMiddleware(reduxRouterMiddleware, logger, api),
      // Provides support for DevTools:
      DevTools.instrument()
    )(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(reduxRouterMiddleware, logger, api)
    )(createStore);
  }

  const store = finalCreateStore(rootReducer, initialState);

  // Required for replaying actions from devtools to work
  if (__DEBUG__) reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStoreDev;
