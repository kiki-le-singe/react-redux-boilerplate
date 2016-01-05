import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from './DevTools';
import routes from 'routes';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

class RootDev extends Component {

  showDevTools() {
    return __DEBUG__ ? (<DevTools />) : false;
  }

  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          <Router history={history}>
            { routes }
          </Router>
          { this.showDevTools() }
        </div>
      </Provider>
    );
  }
}

RootDev.propTypes = propTypes;

export default RootDev;
