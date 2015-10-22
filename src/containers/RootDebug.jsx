import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import AppRouter from '../AppRouter';

class RootDebug extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          { AppRouter }
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default RootDebug;
