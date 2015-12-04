import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  error: PropTypes.bool,
};

@connect(
  state => ({
    tools: state.tools,
  })
)
class Alert extends Component {

  render() {
    const { error } = this.props.tools;
    const { status, statusText } = error;

    if (error) {
      f7App.alert(statusText, status);
    }

    return null;
  }
}

Alert.propTypes = propTypes;

export default Alert;
