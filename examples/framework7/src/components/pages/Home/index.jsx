import React from 'react';

import Page from 'components/pages/Page';

export default class Home extends Page {

  getDataPage() {
    return 'home';
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Home</div>
        <div className="content-block">
          {/* If no data-panel attribute, Left panel will be opened by default */}
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          {/*
            Click on link with "open-panel" and
            data-panel="right" attribute will open Right panel
          */}
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}
