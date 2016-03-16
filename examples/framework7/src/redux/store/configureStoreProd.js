import { createStore, applyMiddleware, compose } from 'redux';

import api from '../middleware/api';
import rootReducer from '../reducers';

const configureStoreProd = (initialState = {}) => {
  const finalCreateStore = compose(
    applyMiddleware(api)
  )(createStore);

  return finalCreateStore(rootReducer, initialState);
};

export default configureStoreProd;
