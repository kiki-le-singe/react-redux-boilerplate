import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Docs:
// - http://www.idangero.us/framework7/docs/list-view.html#list-item-element

const propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function ListItem(props) {
  const { route, text } = props;

  return (
    <li>
      <Link to={route} className="item-link item-content">
        <div className="item-media"><i className="icon icon-f7"></i></div>
        <div className="item-inner">
          <div className="item-title">{text}</div>
        </div>
      </Link>
    </li>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
