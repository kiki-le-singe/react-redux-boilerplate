import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import DevTools from './DevTools';
import routes from 'routes';

const propTypes = {
  store: PropTypes.object.isRequired,
};

class RootDev extends Component {

  showDevTools() {
    return __DEBUG__ ? (<DevTools />) : false;
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          <ReduxRouter>
            { routes }
          </ReduxRouter>
          { this.showDevTools() }
        </div>
      </Provider>
    );
  }
}

RootDev.propTypes = propTypes;

export default RootDev;
