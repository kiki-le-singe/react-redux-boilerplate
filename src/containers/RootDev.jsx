import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from './DevTools';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

function RootDev(props) {
  const { history, store, routes } = props;
  const showDevTools = () => (__DEBUG__ ? (<DevTools />) : false);

  return (
    <Provider store={store}>
      <div className="app">
        <Router history={history} routes={routes} />
        { showDevTools() }
      </div>
    </Provider>
  );
}

RootDev.propTypes = propTypes;

export default RootDev;
