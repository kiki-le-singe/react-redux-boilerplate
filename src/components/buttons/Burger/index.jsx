import React, { PropTypes } from 'react';
import Slideout from 'slideout';

const contextTypes = {
  slideout: PropTypes.instanceOf(Slideout),
};

// Referencing context in stateless functional components:
// https://facebook.github.io/react/docs/context.html#referencing-context-in-stateless-functional-components
function Burger(props, context) {
  const toggleMenu = () => {
    context.slideout.toggle();
  };

  return (
    <a className="link" onClick={ toggleMenu }><i className="fa fa-bars fa-2x"></i></a>
  );
}

Burger.contextTypes = contextTypes;

export default Burger;
