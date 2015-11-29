import React from 'react';

import List from 'components/lists/List';

import nav from 'config/nav.json';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <List menuItems={nav} />
      </nav>
    );
  }
}

export default Nav;
