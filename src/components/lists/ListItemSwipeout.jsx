import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';

// Docs:
// - http://www.idangero.us/framework7/docs/swipeout.html#overswipe

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  prefixClassIcon: PropTypes.string,
};

const defaultProps = {
  prefixClassIcon: 'icon-',
};

class ListItemSwipeout extends Component {

  constructor() {
    super();

    this.showAlert = this.showAlert.bind(this);
  }

  // Use React with Other Libraries:
  // - https://facebook.github.io/react/tips/use-react-with-other-libraries.html
  componentDidMount() {
    this.swipeoutEl = ReactDom.findDOMNode(this.refs.swipeout);

    Dom7(this.swipeoutEl).on('deleted', this.showAlert); // eslint-disable-line
  }

  componentWillUnmount() {
    Dom7(this.swipeoutEl).off('deleted', this.showAlert); // eslint-disable-line
  }

  handleClick() {}

  showAlert() {
    f7App.alert('Item removed');
  }

  render() {
    const { title, text, prefixClassIcon, slug } = this.props;
    const iconClassName = classnames('icon', [prefixClassIcon, slug].join(''));

    return (
      <li ref="swipeout" className="swipeout">
        <div className="swipeout-content">
          <a href="#" className="item-link item-content ajax" onClick={this.handleClick}>
            <div className="item-media"><i className={iconClassName}></i></div>
            <div className="item-inner">
              <div className="item-title-row">
                <div className="item-title">{title}</div>
              </div>
              <div className="item-text">{text}</div>
            </div>
          </a>
        </div>
        <div className="swipeout-actions-left">
          <a href="#" className="bg-blue edit ajax">Edit</a>
        </div>
        <div className="swipeout-actions-right">
          <a href="#" className="mark bg-orange ajax">Mark</a>
          <a href="#" className="swipeout-delete swipeout-overswipe ajax" data-confirm="Are you sure want to delete this item?" data-confirm-title="Delete?">Delete</a>
        </div>
      </li>
    );
  }
}

ListItemSwipeout.defaultProps = defaultProps;
ListItemSwipeout.propTypes = propTypes;

export default ListItemSwipeout;
