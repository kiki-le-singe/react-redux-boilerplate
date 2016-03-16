import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import counterActions from '../../../redux/actions/CounterActions';

const propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => ({
  counter: state.counter,
});

export function Counter(props) {
  const { counter, increment, decrement } = props;

  return (
    <div>
      <div>Clicked: {counter} times</div>
      <p><button onClick={increment}>Increment Counter</button></p>
      <p><button onClick={decrement}>Decrement Counter</button></p>
    </div>
  );
}

Counter.propTypes = propTypes;

export default connect(mapStateToProps, counterActions)(Counter);
