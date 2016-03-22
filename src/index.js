import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux/store';

import Root from 'containers/Root';

// *** STYLES *** //
// Path to svg logos icons
import 'assets/vendors/icons.svg.css';
import 'styles/app.css';

const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);
const root = (<Root history={ history } store={ store } />);

ReactDOM.render(root, document.getElementById('root'));
