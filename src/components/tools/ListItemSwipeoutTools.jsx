import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

import { fetchTool } from 'actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js
// - http://www.idangero.us/framework7/docs/pages-inline.html
// - http://www.idangero.us/framework7/docs/modal.html#indicator

@connect(
  () => ({}),
  { fetchTool }
)
class ListItemSwipeoutTools extends ListItemSwipeout {
  // Show the full Tool page.
  handleClick = () => {
    const { fetchTool: _fetchTool } = this.props;

    // Init main view
    const mainView = f7App.addView('.view-main', {
      domCache: true, // enable inline pages
    });

    _fetchTool(this.props.id);

    // Load about page:
    mainView.router.load({ pageName: 'tool' });
  }

  showAlert() {
    super.showAlert();

    // ToolActions.delete(this.props.id);
  }
}

export default ListItemSwipeoutTools;
