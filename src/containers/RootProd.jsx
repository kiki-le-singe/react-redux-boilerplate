import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

function RootProd(props) {
  const { history, store, routes } = props;

  return (
    <Provider store={store}>
      <div className="app">
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  );
}

RootProd.propTypes = propTypes;

export default RootProd;
