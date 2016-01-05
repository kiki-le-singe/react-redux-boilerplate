import React, { PropTypes, Component } from 'react';
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
export class Indicator extends Component {

  render() {
    const { indicator } = this.props;
    const { isFetching } = this.props.tools;

    if (indicator || isFetching) {
      f7App.showIndicator();
    } else {
      f7App.hideIndicator();
    }

    return false;
  }
}

Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default connect(mapStateToProps)(Indicator);
