import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

import toolActions from '../../redux/actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - http://www.idangero.us/framework7/docs/pages-inline.html
// - http://www.idangero.us/framework7/docs/modal.html#indicator

export class ListItemSwipeoutTools extends ListItemSwipeout {
  // Show the full Tool page.
  handleClick = () => {
    const { fetchTool } = this.props;

    // Init main view
    const mainView = f7App.addView('.view-main', {
      domCache: true, // enable inline pages
    });

    fetchTool(this.props.id);

    // Load about page:
    mainView.router.load({ pageName: 'tool' });
  };

  showAlert() {
    super.showAlert();

    // ToolActions.delete(this.props.id);
  }
}

export default connect(null, toolActions)(ListItemSwipeoutTools);
