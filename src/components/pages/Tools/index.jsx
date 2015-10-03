// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js
// - http://www.idangero.us/framework7/docs/modal.html#indicator

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ToolActions from 'actions/ToolActions';

import Page from 'components/pages/Page';
import ListSwipeoutTools from 'components/tools/ListSwipeoutTools';
import FloatingButtonTools from 'components/tools/FloatingButtonTools';
import SearchTools from 'components/tools/SearchTools';

const defaultProps = {
  isFloatingButtonEnabled: true,
};

// Which props do we want to inject, given the global state?
@connect(
  state => ({
    tools: state.tools,
  })
)
class Tools extends Page {

  // The class' constructor now assumes the role previously filled by componentWillMount
  constructor(props) {
    super(props);

    // Injected by react-redux via connect() call:
    const { dispatch } = props;

    // bindActionCreators(actionCreators, dispatch): http://rackt.github.io/redux/docs/api/bindActionCreators.html
    // https://github.com/rackt/redux/blob/master/examples/todomvc/containers/App.js#L11
    this.actions = bindActionCreators(ToolActions, dispatch);

    // Show loader
    f7App.showIndicator();
  }

  componentDidMount() {
    super.componentDidMount();

    this.actions.fetchTools().then(() => {
      // Hide loader
      f7App.hideIndicator();
    });
  }

  getDataPage() {
    return 'tools';
  }

  renderFloatingButton() {
    return (
      <FloatingButtonTools />
    );
  }

  renderPage() {
    const { tools } = this.props;

    return (
      <div className="page-content">

        <SearchTools />

        <div className="list-block media-list">
          <ListSwipeoutTools searchValue={tools.searchValue} data={tools.items} />
        </div>
      </div>
    );
  }
}

Tools.defaultProps = defaultProps;

export default Tools;
