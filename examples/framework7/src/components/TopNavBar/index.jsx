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
  title: 'React Redux Boilerplate - Framework7 example',
  isBackPage: false,
  isLeftIcon: true,
};

function TopNavBar(props) {
  const { title, isLeftIcon, isBackPage, iconElementRight } = props;

  const renderLeftIcon = () => {
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
  };

  const renderRightIcon = () => {
    if (!iconElementRight) {
      return false;
    }

    return (
      <div className="right">
        {iconElementRight}
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar-inner">
        {renderLeftIcon()}
        <div className="left">{title}</div>
        {renderRightIcon()}
      </div>
    </div>
  );
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
