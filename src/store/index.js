// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore } from 'redux';

import rootReducer from 'reducers';

const configureStore = (initialState) => {
  // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
  const store = createStore(rootReducer, initialState);

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
