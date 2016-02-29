// hello.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import { Alert } from 'react-bootstrap';

var HelloAjax = React.createClass({
  getInitialState: function() {
    return {
      message: '',
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var data = result;
      this.setState({
        message: data.message,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <Alert bsStyle='success'>
        {this.state.message}
      </Alert>
    );
  },
});

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World',
    };
  }

  render() {
    return (
      <div className='container'>
        <h1 className='page-header'>
          {this.state.title}
        </h1>
        <HelloAjax source='/api/data.json' />
      </div>
    );
  }
};

export default HelloWorld;
