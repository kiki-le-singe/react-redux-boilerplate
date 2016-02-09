// http://rackt.github.io/redux/docs/basics/Actions.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/actions/todos.js

import types from '../constants/CounterConstants';

/*
 * action creators
 */

const increment = () => (
  { type: types.INCREMENT_COUNTER }
);

const decrement = () => (
  { type: types.DECREMENT_COUNTER }
);

export default { increment, decrement };
