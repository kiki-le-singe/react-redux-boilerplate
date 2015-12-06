// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Hello from 'components/pages/Hello';
import Counter from 'components/pages/Counter';
import Tools from 'components/pages/Tools';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="tools" component={Tools} />
    { /* https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md#notfound-route */ }
    <Route path="*" component={Home}/>
  </Route>
);
