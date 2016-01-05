import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  tools: PropTypes.object,
  error: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});
export class Alert extends Component {

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

export default connect(mapStateToProps)(Alert);
