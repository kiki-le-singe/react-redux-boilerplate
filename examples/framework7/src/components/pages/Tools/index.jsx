// Docs:
// - http://www.idangero.us/framework7/docs/modal.html#indicator

import React from 'react';
import { connect } from 'react-redux';

import toolsActions from '../../../redux/actions/ToolActions';

import Page from 'components/pages/Page';
import ListSwipeoutTools from 'components/tools/ListSwipeoutTools';
import FloatingButtonTools from 'components/tools/FloatingButtonTools';
import SearchTools from 'components/tools/SearchTools';

const defaultProps = {
  isFloatingButtonEnabled: true,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});
export class Tools extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { fetchTools } = this.props;

    fetchTools();
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

export default connect(mapStateToProps, toolsActions)(Tools);
