import React from 'react';
import ReactDom from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

import configureStore from 'store';

import Root from 'containers/Root';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

// *** STYLES *** //
// Path to svg logos icons
import 'assets/vendors/icons.svg.css';
import 'styles/app.css';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

window.f7App = new Framework7({
  // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
  swipePanel: 'left',
  ajaxLinks: 'a.ajax',
  material: true,
});

ReactDom.render(<Root history={ history } store={ store } />, document.getElementById('app'));
