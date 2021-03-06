// home.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import { API } from './api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World',
      resource: 'hello',
      message: '',
      detail: '',
      showModal: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  componentDidMount() {
    var api = new API();
    var url = api.host + this.state.resource + api.ext;
    this.serverRequest = $.get(url, function (result) {
      var data = result;
      this.setState({
        message: data.message,
        detail: data.detail,
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='page-header'>
          {this.state.title}
        </h1>
        <Button onClick={this.open} bsStyle='primary'>
          {this.state.message}
        </Button>
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
  }
};

export default Home;
