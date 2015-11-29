// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js
// - http://www.idangero.us/framework7/docs/modal.html#indicator

import React from 'react';
import { connect } from 'react-redux';

import { fetchTools } from 'actions/ToolActions';

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
  }),
  { fetchTools }
)
class Tools extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { fetchTools: _fetchTools } = this.props;

    _fetchTools();
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
