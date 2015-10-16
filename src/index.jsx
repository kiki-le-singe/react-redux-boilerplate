import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from 'store';

import AppRouter from './AppRouter';
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

const renderApp = () => {
  let renderDevTools;

  if (__DEBUG__) {
    renderDevTools = (
      <DebugPanel top={true} right={true} bottom={true}>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  return (
    <div className="app-container">
      <Provider store={store}>
        {AppRouter}
      </Provider>
      { renderDevTools }
    </div>
  );
};

ReactDom.render(renderApp(), document.getElementById('app'));
