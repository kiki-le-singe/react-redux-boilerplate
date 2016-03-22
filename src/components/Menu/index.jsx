import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Slideout from 'slideout';

const contextTypes = {
  slideout: PropTypes.instanceOf(Slideout),
};

function Menu(props, context) {
  const toggleMenu = () => {
    context.slideout.toggle();
  };

  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/" onClick={ toggleMenu }>Home</Link></li>
        <li><Link to="/hello" onClick={ toggleMenu }>Hello</Link></li>
        <li><Link to="/about" onClick={ toggleMenu }>About</Link></li>
        <li><Link to="/tools" onClick={ toggleMenu }>Tools</Link></li>
        <li><Link to="/counter" onClick={ toggleMenu }>Counter</Link></li>
      </ul>
    </nav>
  );
}

Menu.contextTypes = contextTypes;

export default Menu;
