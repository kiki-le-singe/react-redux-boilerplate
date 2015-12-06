import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from 'routes';

const propTypes = {
  store: PropTypes.object.isRequired,
};

class RootProd extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app-container">
          <ReduxRouter>
            { routes }
          </ReduxRouter>
        </div>
      </Provider>
    );
  }
}

RootProd.propTypes = propTypes;

export default RootProd;
