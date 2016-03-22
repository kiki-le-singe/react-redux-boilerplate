import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  routing: state.routing, // Available with `react-router-redux`
});

export function Hello() {
  return (
    <div className="page">
      <div className="page-content">Hello World</div>
    </div>
  );
}

export default connect(mapStateToProps)(Hello);
