import React from 'react';
import { connect } from 'react-redux';

import Page from 'components/pages/Page';

const mapStateToProps = (state) => ({
  routing: state.routing, // Available with `react-router-redux`
  tools: state.tools,
});
export class Hello extends Page {

  getDataPage() {
    return 'hello-world';
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Hello World</div>
        <div className="content-block">
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Hello);
