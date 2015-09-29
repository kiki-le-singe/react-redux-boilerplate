import React from 'react/addons';
import Home from '../../app/js/components/home';

const { findDOMNode } = React;
const { isElement, isElementOfType, renderIntoDocument, findRenderedDOMComponentWithTag } = React.addons.TestUtils;

/* eslint-disable */

describe('Home', () => {
  let home = null;

  beforeEach(() => {
    home = renderIntoDocument(<Home />);
  });

  it('should be an element', () => {
    expect(isElement(<Home />)).toBeTruthy();
  });

  it('should be an element of Home type', () => {
    expect(isElementOfType(<Home />, Home)).toBeTruthy();
  });

  it('should display "Home"', () => {
    let h1 = findRenderedDOMComponentWithTag(home, 'h1');
    expect(findDOMNode(h1).textContent).toEqual('Home');
  });

  it('should work', () => {
    expect(home).toBeTruthy();
  });
});
