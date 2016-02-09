import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import api from '../middleware/api';
import rootReducer from '../reducers';

const configureStoreProd = (initialState = {}, history) => {
  const finalCreateStore = compose(
    applyMiddleware(syncHistory(history), api)
  )(createStore);

  return finalCreateStore(rootReducer, initialState);
};

export default configureStoreProd;
