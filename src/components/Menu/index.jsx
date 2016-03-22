import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Slideout from 'slideout';

import { toggleMenu } from 'utils/menu';

const contextTypes = {
  slideout: PropTypes.instanceOf(Slideout),
};

function Menu(props, context) {
  const _toggleMenu = () => {
    toggleMenu(context);
  };

  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/" onClick={ _toggleMenu }>Home</Link></li>
        <li><Link to="/hello" onClick={ _toggleMenu }>Hello</Link></li>
        <li><Link to="/about" onClick={ _toggleMenu }>About</Link></li>
        <li><Link to="/tools" onClick={ _toggleMenu }>Tools</Link></li>
        <li><Link to="/counter" onClick={ _toggleMenu }>Counter</Link></li>
      </ul>
    </nav>
  );
}

Menu.contextTypes = contextTypes;

export default Menu;
