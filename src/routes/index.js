// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import AppLayout from 'layouts/AppLayout';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Hello from 'components/pages/Hello';
import Counter from 'components/pages/Counter';
import Tools from 'components/pages/Tools';
import NotFound from 'components/pages/NotFound';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="tools" component={Tools} />
    <Route path="404" component={NotFound}/>
    <Redirect from="*" to="404" />
  </Route>
);
