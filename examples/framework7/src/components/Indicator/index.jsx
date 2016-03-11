import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  indicator: PropTypes.bool,
  tools: PropTypes.object,
};

const defaultProps = {
  indicator: false,
  isFetching: false,
};

const mapStateToProps = (state) => ({
  indicator: state.indicator,
  tools: state.tools,
});
export function Indicator(props) {
  const { indicator } = props;
  const { isFetching } = props.tools;

  if (indicator || isFetching) {
    f7App.showIndicator();
  } else {
    f7App.hideIndicator();
  }

  return <noscript />;
}

Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default connect(mapStateToProps)(Indicator);
