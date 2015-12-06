// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import routes from 'routes';

import api from 'middleware/api';
import rootReducer from 'reducers';

const finalCreateStore = compose(
  // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
  // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
  applyMiddleware(api),
  reduxReactRouter({
    routes,
    createHistory,
  }),
)(createStore);

const configureStoreProd = (initialState) => {
  return finalCreateStore(rootReducer, initialState);
};

export default configureStoreProd;
