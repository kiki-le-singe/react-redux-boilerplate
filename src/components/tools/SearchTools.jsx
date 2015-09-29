import React, { Component } from 'react';

import ToolActions from 'actions/ToolActions';

class SearchTools extends Component {

  handleChange = (e) => {
    ToolActions.search(e.target.value);
  }

  render() {
    return (
      <form>
        <div className="list-block inset inputs-list">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-inner">
                  <div className="item-title floating-label">Search</div>
                  <div className="item-input">
                    <input type="text" onChange={this.handleChange} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </form>
    );
  }
}

export default SearchTools;
