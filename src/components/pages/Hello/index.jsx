import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  routing: state.routing, // Available with `react-router-redux`
});

export function Hello() {
  return (<div>Hello World</div>);
}

export default connect(mapStateToProps)(Hello);
