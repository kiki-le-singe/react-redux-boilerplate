import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  show: PropTypes.bool,
};

const defaultProps = {
  show: false,
};

@connect(
  state => ({
    indicator: state.indicator,
  })
)
class Indicator extends Component {

  render() {
    const { indicator } = this.props;

    if (indicator) {
      f7App.showIndicator();
    } else {
      f7App.hideIndicator();
    }

    return false;
  }
}

Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default Indicator;
