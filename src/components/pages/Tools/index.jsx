// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js
// - http://www.idangero.us/framework7/docs/modal.html#indicator

import React from 'react';

import Page from 'components/pages/Page';
import ListSwipeoutTools from 'components/tools/ListSwipeoutTools';
import FloatingButtonTools from 'components/tools/FloatingButtonTools';
import SearchTools from 'components/tools/SearchTools';

const defaultProps = {
  isFloatingButtonEnabled: true,
};

class Tools extends Page {

  // The class' constructor now assumes the role previously filled by componentWillMount
  constructor(props) {
    super(props);

    // Show loader
    f7App.showIndicator();

    // Warning: getInitialState() is only supported for classes created using React.createClass.
    // getInitialState() executes exactly once during the lifecycle of the component
    // and sets up the initial state of the component.
    // When the state updates, the component re-renders itself.
    // @see https://facebook.github.io/react/docs/tutorial.html#reactive-state
    // getInitialState() {
    //   return {data: []};
    // }
    this.state = {tools: [], searchValue: ''};
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
    return (
      <div className="page-content">

        <SearchTools />

        <div className="list-block media-list">
          <ListSwipeoutTools searchValue={this.state.searchValue} data={this.state.tools} />
        </div>
      </div>
    );
  }
}

Tools.defaultProps = defaultProps;

export default Tools;
