import React from 'react'; // eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ToolActions from 'actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js
// - http://www.idangero.us/framework7/docs/pages-inline.html
// - http://www.idangero.us/framework7/docs/modal.html#indicator

@connect(
  () => ({})
)
class ListItemSwipeoutTools extends ListItemSwipeout {

  constructor(props) {
    super(props);

    // Injected by react-redux via connect() call:
    const { dispatch } = props;

    this.actions = bindActionCreators(ToolActions, dispatch);
  }

  // Show the full Tool page.
  handleClick = () => {
    // Init main view
    const mainView = f7App.addView('.view-main', {
      domCache: true, // enable inline pages
    });

    this.actions.fetchOne(this.props.id);

    // Load about page:
    mainView.router.load({pageName: 'tool'});
  }

  showAlert() {
    super.showAlert();

    ToolActions.delete(this.props.id);
  }
}

export default ListItemSwipeoutTools;
