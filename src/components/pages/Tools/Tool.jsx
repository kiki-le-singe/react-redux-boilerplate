import React from 'react';
import classnames from 'classnames';

import TopNavBar from 'components/TopNavBar';
import Page from 'components/pages/Page';

const defaultProps = {
  isPageCached: true,
};

class Tool extends Page {

  // The class' constructor now assumes the role previously filled by componentWillMount
  constructor(props) {
    super(props);

    // Warning: getInitialState() is only supported for classes created using React.createClass.
    // getInitialState() executes exactly once during the lifecycle of the component
    // and sets up the initial state of the component.
    // When the state updates, the component re-renders itself.
    // @see https://facebook.github.io/react/docs/tutorial.html#reactive-state
    // getInitialState() {
    //   return {data: []};
    // }
    this.state = {tool: {}};
  }

  getDataPage() {
    return 'tool';
  }

  renderTopNavBar() {
    return <TopNavBar title="Tool title" isBackPage={true} />;
  }

  renderPage() {
    const { title, text, route, slug } = this.state.tool;
    const iconClassName = classnames('icon', ['icon-', slug].join(''));

    return (
      <div className="page-content">
        <div className="card">
          <div className="card-header"><i className={iconClassName}></i>{title}</div>
          <div className="card-content">
            <div className="card-content-inner">{text}</div>
          </div>
          <div className="card-footer">
            <a href={route} target="_blank">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

Tool.defaultProps = defaultProps;

export default Tool;
