import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom'; // eslint-disable-line
import _ from 'lodash';
import uniqid from 'uniqid';

import ToolActions from 'actions/ToolActions';

import TopNavBar from 'components/TopNavBar';
import IconButton from 'components/IconButton';

// Docs:
// - http://www.idangero.us/framework7/docs/popup.html
// - http://www.idangero.us/framework7/docs/form-elements.html
// - http://www.idangero.us/framework7/docs/modal.html#indicator

class PopupCreateTool extends Component {

  getIcon() {
    return (
      <IconButton
        className="close-popup"
        classIcon="fa"
        prefixClassIcon="fa-"
        iconClassName="times fa-2x"
      />
    );
  }

  handleClick = () => {
    const popupCreateToolEl = findDOMNode(this.refs.popupCreateTool);
    const titleEL = findDOMNode(this.refs.title);
    const textEl = findDOMNode(this.refs.text);
    const routeEl = findDOMNode(this.refs.route);
    const title = titleEL.value.trim();
    const text = textEl.value.trim();
    const route = routeEl.value.trim();

    if (!text || !title) {
      return;
    }

    // Show loader
    f7App.showIndicator();

    // Send request to the server
    ToolActions.create({
      id: uniqid(),
      title: title,
      text: text,
      route: route,
      slug: _.kebabCase(title),
    }).then(() => {
      titleEL.value = '';
      textEl.value = '';
      routeEl.value = '';

      // Hide loader
      f7App.hideIndicator();

      f7App.closeModal(popupCreateToolEl);
    });
  }

  render() {
    return (
      <div ref="popupCreateTool" className="popup popup-create-tool">
        <div className="view navbar-fixed">
          <div className="pages">
            <div className="page">

              <TopNavBar
                title="Add a Tool"
                isLeftIcon={false}
                iconElementRight={this.getIcon()}
              />

              <div className="page-content">
                <form>
                  <div className="list-block inset">
                    <ul>
                      <li>
                        <div className="item-content">
                          <div className="item-inner">
                            <div className="item-title floating-label">Title</div>
                            <div className="item-input">
                              <input ref="title" type="text" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-content">
                          <div className="item-inner">
                            <div className="item-title floating-label">Url</div>
                            <div className="item-input">
                              <input ref="route" type="url" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-content">
                          <div className="item-inner">
                            <div className="item-title floating-label">Text</div>
                            <div className="item-input">
                              <textarea ref="text" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="content-block">
                    <a href="#" className="button button-big button-fill button-raised color-red ajax" onClick={this.handleClick}>Submit</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCreateTool;
