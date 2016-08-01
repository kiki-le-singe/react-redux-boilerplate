import React, { PropTypes } from 'react'

import ListItem from './ListItem'

function List(props) {
  const getDatas = () => {
    const { data } = props

    return data.map((item, index) => (
      <ListItem
        id={item.id}
        title={item.title}
        text={item.text}
        slug={item.slug}
        key={index}
      />
    ))
  }

  return (
    <div className="list-block">
      <ul>
        {getDatas()}
      </ul>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List
