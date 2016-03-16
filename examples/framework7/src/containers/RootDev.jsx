import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from './DevTools';
import routes from 'routes';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function RootDev(props) {
  const { history, store } = props;
  const showDevTools = () => __DEBUG__ ? (<DevTools />) : false;

  return (
    <Provider store={store}>
      <div className="app-container">
        <Router history={history}>
          { routes }
        </Router>
        { showDevTools() }
      </div>
    </Provider>
  );
}

RootDev.propTypes = propTypes;

export default RootDev;
