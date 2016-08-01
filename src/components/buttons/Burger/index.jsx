import React, { PropTypes } from 'react'
import Slideout from 'slideout'

import { toggleMenu } from 'utils/menu'

const contextTypes = {
  slideout: PropTypes.instanceOf(Slideout)
}

// Referencing context in stateless functional components:
// https://facebook.github.io/react/docs/context.html#referencing-context-in-stateless-functional-components
function Burger(props, context) {
  const _toggleMenu = () => {
    toggleMenu(context)
  }

  return (
    <a className="link" onClick={_toggleMenu}><i className="fa fa-bars fa-2x"></i></a>
  )
}

Burger.contextTypes = contextTypes

export default Burger
