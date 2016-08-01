// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from 'containers/DevTools'

import logger from '../middleware/logger'
import api from '../middleware/api'
import rootReducer from '../reducers'

let finalCreateStore

const configureStoreDev = (initialState = {}) => {
  if (__DEBUG__) {
    finalCreateStore = compose(
      // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
      // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
      applyMiddleware(logger, api),
      // Provides support for DevTools:
      DevTools.instrument()
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(logger, api)
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStoreDev
