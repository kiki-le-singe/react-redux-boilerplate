import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CounterActions from 'actions/CounterActions';

import Page from 'components/pages/Page';

// Which props do we want to inject, given the global state?
@connect(
  state => ({
    counter: state.counter,
  })
)
class Counter extends Page {

  constructor(props) {
    super(props);

    // Injected by react-redux via connect() call:
    const { dispatch } = props;

    // bindActionCreators(actionCreators, dispatch): http://rackt.github.io/redux/docs/api/bindActionCreators.html
    // https://github.com/rackt/redux/blob/master/examples/todomvc/containers/App.js#L11
    this.actions = bindActionCreators(CounterActions, dispatch);
  }

  getDataPage() {
    return 'counter';
  }

  renderPage() {
    const { counter } = this.props;

    return (
      <div className="page-content">
        <div className="content-block-title">Clicked: {counter} times</div>
        <div className="content-block">
          <p><a href="#" onClick={this.actions.increment}>Increment Counter</a></p>
          <p><a href="#" onClick={this.actions.decrement}>Decrement Counter</a></p>
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
