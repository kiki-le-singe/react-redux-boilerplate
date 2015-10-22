import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import AppRouter from '../AppRouter';

class RootDev extends Component {

  showDevTools() {
    return __DEBUG__ ? (<DevTools />) : false;
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          { AppRouter }
          { this.showDevTools() }
        </div>
      </Provider>
    );
  }
}

export default RootDev;
