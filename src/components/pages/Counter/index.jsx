import React from 'react';
import { connect } from 'react-redux';

import counterActions from '../../../redux/actions/CounterActions';

import Page from 'components/pages/Page';

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => ({
  counter: state.counter,
});
export class Counter extends Page {
  getDataPage() {
    return 'counter';
  }

  renderPage() {
    const { counter, increment, decrement } = this.props;

    return (
      <div className="page-content">
        <div className="content-block-title">Clicked: {counter} times</div>
        <div className="content-block">
          <p><a href="#" className="ajax" onClick={increment}>Increment Counter</a></p>
          <p><a href="#" className="ajax" onClick={decrement}>Decrement Counter</a></p>
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(Counter);
