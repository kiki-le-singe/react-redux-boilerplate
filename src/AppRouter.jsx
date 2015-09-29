// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Hello from 'components/pages/Hello';
import Tools from 'components/pages/Tools';

const AppRouter = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="hello" component={Hello} />
      <Route path="about" component={About} />
      <Route path="tools" component={Tools} />
      { /* https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md#notfound-route */ }
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);

export default AppRouter;
