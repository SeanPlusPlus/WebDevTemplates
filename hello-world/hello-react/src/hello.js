// hello.js
import React from 'react';
import ReactDOM from 'react-dom';
var $ = require('jquery');

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='page-header'>Hello, Component!!!</h1>
      </div>
    );
  }
};
