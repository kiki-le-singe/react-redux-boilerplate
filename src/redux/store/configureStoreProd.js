import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import api from 'redux/middleware/api';
import rootReducer from 'redux/reducers';

const configureStoreProd = (initialState = {}, history) => {
  const finalCreateStore = compose(
    applyMiddleware(syncHistory(history), api)
  )(createStore);

  return finalCreateStore(rootReducer, initialState);
};

export default configureStoreProd;
