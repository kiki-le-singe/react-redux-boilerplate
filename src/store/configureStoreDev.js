// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
// To use createBrowserHistory uncomment:
// https://github.com/kiki-le-singe/react-redux-boilerplate/blob/master/server/app.js#L97
// import createHistory from 'history/lib/createBrowserHistory';

import routes from 'routes';
import DevTools from 'containers/DevTools';

import logger from 'middleware/logger';
import api from 'middleware/api';
import rootReducer from 'reducers';

let finalCreateStore;

if (__DEBUG__) {
  finalCreateStore = compose(
    // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
    // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
    applyMiddleware(logger, api),
    reduxReactRouter({ routes, createHistory }),
    // Provides support for DevTools:
    DevTools.instrument()
  )(createStore);
} else {
  finalCreateStore = compose(
    // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
    // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
    applyMiddleware(logger, api),
    reduxReactRouter({ routes, createHistory })
  )(createStore);
}

const configureStoreDev = (initialState) => {
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

export default configureStoreDev;
