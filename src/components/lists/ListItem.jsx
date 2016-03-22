import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  prefixClassIcon: PropTypes.string,
};

const defaultProps = {
  prefixClassIcon: 'icon-',
};

function ListItem(props) {
  const { id, title, text, prefixClassIcon, slug } = props;
  const iconClassName = classnames('icon', [prefixClassIcon, slug].join(''));

  return (
    <li className="list-item">
      <Link className="item-link item-content" to={`/tool/${id}/${slug}`}>
        <div className="item-media"><i className={iconClassName}></i></div>
        <div className="item-inner">
          <div className="item-title">{title}</div>
          <div className="item-text">{text}</div>
        </div>
      </Link>
    </li>
  );
}

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;

export default ListItem;
