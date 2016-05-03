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

const rootEl = document.getElementById('root');
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <AppContainer>
    <Root history={history} store={store} routes={routes} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextRoot />.
    const NextRoot = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
         <NextRoot history={history} store={store} routes={routes} />
      </AppContainer>,
      rootEl
    );
  });
}
