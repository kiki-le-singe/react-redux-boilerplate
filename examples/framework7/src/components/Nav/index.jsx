import React from 'react';

import List from 'components/lists/List';

import nav from 'config/nav.json';

export default function Nav() {
  return (
    <nav>
      <List menuItems={nav} />
    </nav>
  );
}
