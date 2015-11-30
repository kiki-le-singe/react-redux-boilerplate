// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';

import api from 'middleware/api';
import rootReducer from 'reducers';

const finalCreateStore = compose(
  // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
  // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
  applyMiddleware(api)
)(createStore);

const configureStoreProd = (initialState) => {
  return finalCreateStore(rootReducer, initialState);
};

export default configureStoreProd;
