import React from 'react';
import ReactDom from 'react-dom';

import configureStore from 'store';

import Root from 'containers/Root';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

// *** STYLES *** //
// Path to Framework7 MATERIAL CSS theme styles
import 'framework7.material.min.css';
// Path to Framework7 MATERIAL related color styles
import 'framework7.material.colors.min.css';
// Path to svg logos icons
import 'assets/vendors/icons.svg.scss';
import 'font-awesome.scss';
import 'styles/scss/index.scss';

const store = configureStore();

window.f7App = new Framework7({
  swipePanel: 'left', // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
  ajaxLinks: 'a.ajax',
  material: true,
});

ReactDom.render(<Root store={ store } />, document.getElementById('app'));
