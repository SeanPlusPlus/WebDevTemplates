// __tests__/HelloWorld-test.js
var path = '../src/hello';

jest.dontMock(path)
    .dontMock('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const HelloWorld = require(path);

describe('HelloWorld', () => {

  var $ = require('jquery');

});
