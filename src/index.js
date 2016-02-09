import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory } from 'react-router';

import configureStore from './redux/store';

import Root from 'containers/Root';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

// *** STYLES *** //
// Path to svg logos icons
import 'assets/vendors/icons.svg.css';
import 'styles/app.css';

const store = configureStore({}, hashHistory);
const root = (<Root history={ hashHistory } store={ store } />);

window.f7App = new Framework7({
  // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
  swipePanel: 'left',
  ajaxLinks: 'a.ajax',
  material: true,
});

ReactDom.render(root, document.getElementById('app'));
