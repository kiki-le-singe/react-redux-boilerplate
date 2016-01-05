import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import TopNavBar from 'components/TopNavBar';
import Page from 'components/pages/Page';

const defaultProps = {
  isPageCached: true,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});
export class Tool extends Page {

  getDataPage() {
    return 'tool';
  }

  renderTopNavBar() {
    return <TopNavBar title="Tool title" isBackPage />;
  }

  renderPage() {
    const { tools: { item } } = this.props;
    const iconClassName = classnames('icon', ['icon-', item.slug].join(''));

    return (
      <div className="page-content">
        <div className="card">
          <div className="card-header"><i className={iconClassName}></i>{item.title}</div>
          <div className="card-content">
            <div className="card-content-inner">{item.text}</div>
          </div>
          <div className="card-footer">
            <a href={item.route} target="_blank">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

Tool.defaultProps = defaultProps;

export default connect(mapStateToProps)(Tool);
