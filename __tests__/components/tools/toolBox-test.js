import React from 'react/addons';
import ToolBox from '../../../app/js/components/tools/toolBox';
import Tools from '../../../app/js/components/tools/tools';
import ToolFormWrapper from '../../../app/js/components/tools/toolFormWrapper';

const { findDOMNode, createElement } = React;
const { isElement, isElementOfType, renderIntoDocument, findRenderedDOMComponentWithTag, createRenderer } = React.addons.TestUtils;
const shallowRenderer = createRenderer();

/* eslint-disable */

describe('ToolBox', () => {
  let data = [];

  describe('with datas', () => {
    let result;

    beforeEach(() => {
      data = [
        {
          id: 1,
          name: 'HTML5',
          desc: '5th major revision of the core language of the World Wide Web: the Hypertext Markup Language (HTML).',
          url: 'http://www.w3.org/TR/html5/',
          logo: '/images/logos/html5.svg'
        },
        {
          id: 2,
          name: 'Bourbon',
          desc: 'A simple and lightweight mixin library for Sass.',
          url: 'http://bourbon.io/',
          logo: '/images/logos/bourbon.svg'
        }
      ];

      shallowRenderer.render(<ToolBox data={data} />);
      result = shallowRenderer.getRenderOutput();
    });

    afterEach(() => {
      data = [];
    });

    it('should render a wrapper div tag', () => {
      expect(result.type).toBe('div');
    });

    it('should have className property set to "tool-box"', () => {
      expect(result.props.className).toEqual('tool-box');
    });

    it('should render three react elements', () => {
      expect(result.props.children.length).toEqual(3);
    });

    it('should render a h1, Tools and ToolFormWrapper react elements', () => {
      expect(result.props.children).toEqual([
        <h1>Tools</h1>,
        <Tools data={data} />,
        <ToolFormWrapper />
      ]);
    });
  });

  describe('without datas', () => {
    let result;

    beforeEach(() => {
      shallowRenderer.render(<ToolBox data={data} />);
      result = shallowRenderer.getRenderOutput();
    });

    it('should render a wrapper div tag', () => {
      expect(result.type).toBe('div');
    });

    it('should have className property set to "tool-box-empty"', () => {
      expect(result.props.className).toEqual('tool-box-empty');
    });

    it('should render two react elements', () => {
      expect(result.props.children.length).toEqual(2);
    });

    it('should render a "h1" and "p" react elements', () => {
      expect(result.props.children).toEqual([
        <h1>Tools</h1>,
        <p>tools.empty</p>
      ]);
    });
  });
});
