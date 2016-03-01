// __tests__/HelloWorld-test.js
var path = '../src/components/home';

jest.dontMock(path)
    .dontMock('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Home = require(path).default;

describe('HelloWorld', () => {
  it('loads jquery', function() {
    var $ = require('jquery');
  });
});
