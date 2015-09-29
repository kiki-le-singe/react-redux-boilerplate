import React, { PropTypes, Component } from 'react';

import LeftSidePanel from './LeftSidePanel';
import RightSidePanel from './RightSidePanel';
import ToolPage from 'components/pages/Tools/Tool';
import PopupCreateTool from 'components/popup/tools/PopupCreateTool';

const propTypes = {
  children: PropTypes.object,
};

class App extends Component {

  render() {
    return (
      <div className="app-wrapper">

        {/* Status bar overlay for full screen mode (PhoneGap) */}
        <div className="statusbar-overlay"></div>

        {/* First, we need to add Panel's overlay that will overlays app while panel is opened */}
        <div className="panel-overlay"></div>
        <LeftSidePanel />
        <RightSidePanel />

        <div className="views">
          <div className="view view-main">
            <div className="pages navbar-fixed">
              { this.props.children }
              { /* TODO find another way to correct this smell code to inject the ToolPage. */ }
              <ToolPage />
            </div>
          </div>
        </div>
        <PopupCreateTool />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
