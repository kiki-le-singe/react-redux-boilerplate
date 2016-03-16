import React, { PropTypes } from 'react';

import ListSwipeout from 'components/lists/ListSwipeout';
import ListItemSwipeoutTools from './ListItemSwipeoutTools';

const propTypes = {
  data: PropTypes.array,
  searchValue: PropTypes.string,
};

const defaultProps = {
  data: [],
  searchValue: '',
};

class ListSwipeoutTools extends ListSwipeout {

  getDatas() {
    const { data, searchValue } = this.props;
    let tools = data;

    if (searchValue) {
      tools = tools.filter(tool => (
        tool.title.toLowerCase().search(searchValue.toLowerCase()) !== -1
      ));
    }

    return tools.map((item, index) => (
      (
        <ListItemSwipeoutTools
          id={item.id}
          title={item.title}
          text={item.text}
          slug={item.slug}
          key={index}
        />
      )
    ));
  }
}

ListSwipeoutTools.propTypes = propTypes;
ListSwipeoutTools.defaultProps = defaultProps;

export default ListSwipeoutTools;
