import React from 'react';

import ToolActions from '../../redux/actions/ToolActions';

function SearchTools() {
  const handleChange = (e) => {
    ToolActions.search(e.target.value);
  };

  return (
    <form>
      <div className="list-block inset inputs-list">
        <ul>
          <li>
            <div className="item-content">
              <div className="item-inner">
                <div className="item-title floating-label">Search</div>
                <div className="item-input">
                  <input type="text" onChange={handleChange} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default SearchTools;
