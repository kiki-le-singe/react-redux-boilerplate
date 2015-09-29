import React, { Component, PropTypes } from 'react';

import ListItem from './ListItem';

// Docs:
// - http://www.idangero.us/framework7/docs/list-view.html

class List extends Component {

  getMenuItems() {
    const { menuItems } = this.props;

    return menuItems.map((item, index) => {
      return (
        <ListItem route={item.route} text={item.text} key={index} />
      );
    });
  }

  render() {
    return (
      <div className="list-block">
        <ul>
          {this.getMenuItems()}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default List;
