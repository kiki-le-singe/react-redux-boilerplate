import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.object,
};

function AppLayout(props) {
  return (
    <div className="app-wrapper">
      { props.children }
    </div>
  );
}

AppLayout.propTypes = propTypes;

export default AppLayout;
