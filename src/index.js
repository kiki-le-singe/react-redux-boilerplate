import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux/store';

import Root from 'containers/Root';
import routes from 'routes';

// *** STYLES *** //
// Path to svg logos icons
import 'assets/vendors/icons.svg.css';
import 'styles/app.css';

const mountApp = document.getElementById('root');
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(<AppContainer component={Root} props={{ history, store, routes }} />, mountApp);

if (module.hot) {
  module.hot.accept('containers/Root', () => {
    ReactDOM.render(
      <AppContainer
        component={require('containers/Root').default}
        props={{ history, store }}
      />,
      mountApp
    );
  });
}
