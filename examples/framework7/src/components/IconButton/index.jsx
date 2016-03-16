import React, { PropTypes } from 'react';
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

function IconButton(props) {
  const { classIcon, prefixClassIcon, iconClassName, className } = props;
  const getIconClassName = () => classnames(classIcon, [prefixClassIcon, iconClassName].join(''));
  const getClassName = () => classnames('link', 'ajax', className);

  return (
    <a href="#" className={getClassName()}>
      <i className={getIconClassName()}></i>
    </a>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
