// http://rackt.github.io/redux/docs/basics/Reducers.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/reducers/index.js

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import tools from './tools';
import counter from './counter';
import indicator from './indicator';

// combineReducers(reducers): http://rackt.github.io/redux/docs/api/combineReducers.html
const rootReducer = combineReducers({
  routing: routeReducer,
  tools,
  counter,
  indicator,
});

export default rootReducer;
