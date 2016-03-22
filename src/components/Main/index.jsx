import React, { PropTypes } from 'react';

import NavBar from 'components/NavBar';
import ToolBar from 'components/ToolBar';

const propTypes = {
  children: PropTypes.object,
};

function Main(props) {
  return (
    <main id="main" className="view view-main">
      <NavBar />
      <div className="pages">
        { props.children }
      </div>
      <ToolBar />
    </main>
  );
}

Main.propTypes = propTypes;

export default Main;
