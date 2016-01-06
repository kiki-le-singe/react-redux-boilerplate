import React from 'react';

import Nav from 'components/Nav';

// Docs:
// - http://www.idangero.us/framework7/docs/side-panels.html

class RightSidePanel extends React.Component {
  render() {
    return (
      <div className="panel panel-right panel-cover">
        <Nav />

        <div className="content-block">
          <p>Right Panel content here</p>
          <p><a href="#" className="close-panel ajax">Close me</a></p>
          <p><a href="#" data-panel="left" className="open-panel ajax">Open Left Panel</a></p>
        </div>
      </div>
    );
  }
}

export default RightSidePanel;
