// __tests__/HelloWorld-test.js
var path = '../src/home';

jest.dontMock(path)
    .dontMock('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const HelloWorld = require(path).default;

describe('HelloWorld', () => {
  it('displays hello world', function() {
    var $ = require('jquery');

    // Render a hell world in the document
    var hello = TestUtils.renderIntoDocument(
      <HelloWorld />
    );

    var helloNode = ReactDOM.findDOMNode(hello);

    // Verify that it's all good
    expect(helloNode.textContent).toEqual('Hello World');
  });
});
