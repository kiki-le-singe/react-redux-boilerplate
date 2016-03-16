import React, { PropTypes } from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/floating-action-button.html

const propTypes = {
  onClick: PropTypes.func,
};

function FloatingButton(props) {
  const { onClick } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <a href="#" className="floating-button color-pink ajax" onClick={handleClick}>
      <i className="icon icon-plus"></i>
    </a>
  );
}

FloatingButton.propTypes = propTypes;

export default FloatingButton;
