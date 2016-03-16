import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import toolsActions from '../../../redux/actions/ToolActions';

import List from 'components/lists/List';

const propTypes = {
  fetchTools: PropTypes.func.isRequired,
  tools: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});

export class Tools extends Component {
  componentDidMount() {
    const { fetchTools } = this.props;

    fetchTools();
  }

  render() {
    const { tools } = this.props;

    return (
      <div>
        <List data={tools.items} />
      </div>
    );
  }
}

Tools.propTypes = propTypes;

export default connect(mapStateToProps, toolsActions)(Tools);
