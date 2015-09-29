import React from 'react'; // eslint-disable-line

import ToolActions from 'actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js
// - http://www.idangero.us/framework7/docs/pages-inline.html
// - http://www.idangero.us/framework7/docs/modal.html#indicator

class ListItemSwipeoutTools extends ListItemSwipeout {

  // Show the full Tool page.
  handleClick = () => {
    // Init main view
    const mainView = f7App.addView('.view-main', {
      domCache: true, // enable inline pages
    });

    // Show loader
    f7App.showIndicator();

    ToolActions.fetchOne(this.props.id).then(() => {
      // Hide loader
      f7App.hideIndicator();
    });

    // Load about page:
    mainView.router.load({pageName: 'tool'});
  }

  showAlert() {
    super.showAlert();

    ToolActions.delete(this.props.id);
  }
}

export default ListItemSwipeoutTools;
