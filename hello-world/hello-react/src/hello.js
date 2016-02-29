// hello.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import { Alert, Modal, Button } from 'react-bootstrap';

var HelloAjax = React.createClass({
  getInitialState: function() {
    return {
      message: '',
      detail: '',
      showModal: false,
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var data = result;
      this.setState({
        message: data.message,
        detail: data.detail,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render: function() {
    return (
      <div>
        <Alert bsStyle='success'>
          <a href='#' onClick={this.open}>
            <strong>Success!</strong> {this.state.message}
          </a>
        </Alert>
        <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
          <Modal.Header closeButton>
            <Modal.Title>Request Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <code>{this.state.detail}</code>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
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
