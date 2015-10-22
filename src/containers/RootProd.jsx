import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppRouter from '../AppRouter';

class RootProd extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          { AppRouter }
        </div>
      </Provider>
    );
  }
}

export default RootProd;
