import React, { PropTypes } from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/navbar.html

const propTypes = {
  title: PropTypes.string,
  isBackPage: PropTypes.bool,
  iconElementRight: PropTypes.element,
  isLeftIcon: PropTypes.bool,
};

const defaultProps = {
  title: 'React Redux Boilerplate',
  isBackPage: false,
  isLeftIcon: true,
};

class TopNavBar extends React.Component {

  renderLeftIcon() {
    const { isLeftIcon, isBackPage } = this.props;
    let icon;

    if (!isLeftIcon) {
      return false;
    }

    if (isBackPage) {
      icon = (
        <a href="#" className="back link icon-only ajax">
          <i className="icon icon-back"></i>
        </a>
      );
    } else {
      icon = (
        <a href="#" className="open-panel link icon-only ajax">
          <i className="icon icon-bars"></i>
        </a>
      );
    }

    return (
      <div className="left">
        {icon}
      </div>
    );
  }

  renderRightIcon() {
    const { iconElementRight } = this.props;

    if (!iconElementRight) {
      return false;
    }

    return (
      <div className="right">
        {iconElementRight}
      </div>
    );
  }

  render() {
    const { title } = this.props;

    return (
      <div className="navbar">
        <div className="navbar-inner">
          {this.renderLeftIcon()}
          <div className="left">{title}</div>
          {this.renderRightIcon()}
        </div>
      </div>
    );
  }
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
