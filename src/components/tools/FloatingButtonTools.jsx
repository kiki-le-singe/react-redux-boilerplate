import React from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/floating-action-button.html

class FloatingButtonTools extends React.Component {

  render() {
    return (
      <a
        href="#"
        data-popup=".popup-create-tool"
        className="floating-button color-pink open-popup ajax"
      >
        <i className="icon icon-plus"></i>
      </a>
    );
  }
}

export default FloatingButtonTools;
