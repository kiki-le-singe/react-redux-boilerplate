// http://rackt.github.io/redux/docs/basics/Reducers.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/reducers/todos.js

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/CounterConstants';

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;

    case DECREMENT_COUNTER:
      return state - 1;

    default:
      return state;
  }
};

export default counter;
