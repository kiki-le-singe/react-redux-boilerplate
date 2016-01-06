import React from 'react';

import Nav from 'components/Nav';

// Docs:
// - http://www.idangero.us/framework7/docs/side-panels.html

class LeftSidePanel extends React.Component {
  render() {
    return (
      <div className="panel panel-left panel-cover">
        <Nav />

        <div className="content-block">
          <p>Left Panel content here</p>
          <p><a href="#" className="close-panel ajax">Close me</a></p>
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
