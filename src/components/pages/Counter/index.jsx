import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from 'actions/CounterActions';

import Page from 'components/pages/Page';

// Which props do we want to inject, given the global state?
@connect(
  state => ({
    router: state.router,
    counter: state.counter,
  }),
  { increment, decrement }
)
class Counter extends Page {
  getDataPage() {
    return 'counter';
  }

  renderPage() {
    const { counter, increment: _increment, decrement: _decrement } = this.props;

    return (
      <div className="page-content">
        <div className="content-block-title">Clicked: {counter} times</div>
        <div className="content-block">
          <p><a href="#" className="ajax" onClick={_increment}>Increment Counter</a></p>
          <p><a href="#" className="ajax" onClick={_decrement}>Decrement Counter</a></p>
          {/* If no data-panel attribute, Left panel will be opened by default */}
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default Counter;
