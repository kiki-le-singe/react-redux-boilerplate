import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'routes';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

class RootProd extends Component {

  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          <Router history={history}>
            { routes }
          </Router>
        </div>
      </Provider>
    );
  }
}

RootProd.propTypes = propTypes;

export default RootProd;
