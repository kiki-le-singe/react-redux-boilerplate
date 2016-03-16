import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import toolActions from '../../../redux/actions/ToolActions';

const defaultProps = {
  isPageCached: true,
};

const propTypes = {
  routeParams: PropTypes.object.isRequired,
  tools: PropTypes.object.isRequired,
  fetchTool: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
  routing: state.routing, // Available with `react-router-redux`
});
export class Tool extends Component {

  componentDidMount() {
    const { fetchTool, routeParams: { id } } = this.props;

    fetchTool(id);
  }

  render() {
    const { tools: { item } } = this.props;
    const iconClassName = classnames('icon', ['icon-', item.slug].join(''));

    return (
      <div>
        <header><i className={iconClassName}></i>{item.title}</header>
        <div className="content">
          {item.text}
        </div>
        <footer>
          <a href={item.route} target="_blank">Read more</a>
        </footer>
      </div>
    );
  }
}

Tool.defaultProps = defaultProps;
Tool.propTypes = propTypes;

export default connect(mapStateToProps, toolActions)(Tool);
