import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'routes';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function RootProd(props) {
  const { history, store } = props;

  return (
    <Provider store={store}>
      <div className="app">
        <Router history={history}>
          { routes }
        </Router>
      </div>
    </Provider>
  );
}

RootProd.propTypes = propTypes;

export default RootProd;
