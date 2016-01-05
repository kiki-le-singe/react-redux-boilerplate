import React from 'react';
import { connect } from 'react-redux';

import counterActions from 'actions/CounterActions';

import Page from 'components/pages/Page';

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => ({
  routing: state.routing,
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
          {/* If no data-panel attribute, Left panel will be opened by default */}
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(Counter);
