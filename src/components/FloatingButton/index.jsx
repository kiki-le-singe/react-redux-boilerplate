import React, { PropTypes, Component } from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/floating-action-button.html

const propTypes = {
  onClick: PropTypes.func,
};

class FloatingButton extends Component {

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <a href="#" className="floating-button color-pink ajax" onClick={this.handleClick}>
        <i className="icon icon-plus"></i>
      </a>
    );
  }
}

FloatingButton.propTypes = propTypes;

export default FloatingButton;
