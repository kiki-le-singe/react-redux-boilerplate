import React, { PropTypes } from 'react';

import ListItem from './ListItem';

// Docs:
// - http://www.idangero.us/framework7/docs/list-view.html

const propTypes = {
  menuItems: PropTypes.array.isRequired,
};

function List(props) {
  const getMenuItems = () => {
    const { menuItems } = props;

    return menuItems.map((item, index) => (
      (<ListItem route={item.route} text={item.text} key={index} />)
    ));
  };

  return (
    <div className="list-block">
      <ul>
        {getMenuItems()}
      </ul>
    </div>
  );
}

List.propTypes = propTypes;

export default List;
