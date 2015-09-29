import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string.isRequired,
  classIcon: PropTypes.string,
  prefixClassIcon: PropTypes.string,
};

const defaultProps = {
  classIcon: 'icon',
  prefixClassIcon: 'icon-',
};

class IconButton extends Component {

  getIconClassName() {
    const { classIcon, prefixClassIcon, iconClassName } = this.props;

    return classnames(classIcon, [prefixClassIcon, iconClassName].join(''));
  }

  getClassName() {
    const { className } = this.props;

    return classnames('link', 'ajax', className);
  }

  render() {
    return (
      <a href="#" className={this.getClassName()}>
        <i className={this.getIconClassName()}></i>
      </a>
    );
  }
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
