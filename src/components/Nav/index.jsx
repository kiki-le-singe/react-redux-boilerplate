import React from 'react';

import List from 'components/lists/List';

class Nav extends React.Component {
  render() {
    const menuItems = [
      { route: '/', text: 'Home' },
      { route: '/hello', text: 'Hello' },
      { route: '/about', text: 'About' },
      { route: '/counter', text: 'Counter' },
      { route: '/tools', text: 'Tools' },
    ];

    return (
      <nav>
        <List menuItems={menuItems} />
      </nav>
    );
  }
}

export default Nav;
