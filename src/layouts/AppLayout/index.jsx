import React, { Component, PropTypes } from 'react'
import Slideout from 'slideout'

import Menu from 'components/Menu'
import Main from 'components/Main'

const propTypes = {
  children: PropTypes.object
}
const childContextTypes = {
  slideout: PropTypes.instanceOf(Slideout)
}

class AppLayout extends Component {

  constructor() {
    super()

    this.state = { slideout: null }
  }

  getChildContext() {
    return { slideout: this.state.slideout }
  }

  componentDidMount() {
    const slideout = new Slideout({
      panel: document.getElementById('main'),
      menu: document.getElementById('menu'),
      padding: 256,
      tolerance: 70
    })

    // Disable eslint because it screams... Why? I don't know because in React
    // we can use setState() in componentDidMount().
    // See https://facebook.github.io/react/docs/context.html#updating-context
    this.setState({ slideout }) // eslint-disable-line
  }

  render() {
    return (
      <div className="views">
        <Menu />
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

AppLayout.propTypes = propTypes
AppLayout.childContextTypes = childContextTypes

export default AppLayout
