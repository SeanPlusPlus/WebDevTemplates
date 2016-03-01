// home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import { API } from '../api';
import Nav from './nav';
import { getHomeDetail } from '../actions/home';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World',
      showModal: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  componentWillMount() {
    this.props.getHomeDetail();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <h1 className='page-header'>
            {this.state.title}
          </h1>
          <div className='btn-group btn-group-justified'>
            <div className='btn-group'>
              <a href='/profile' className='btn btn-primary btn-lg'>
                <i className='fa fa-user'></i> profile
              </a>
            </div>
            <div className='btn-group'>
              <Button onClick={this.open} bsStyle='success' className='btn-lg'>
                <i className='fa fa-check'></i> {this.props.home.item.message}
              </Button>
            </div>
          </div>
          <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
            <Modal.Header closeButton>
              <Modal.Title>Request Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <code>{this.props.home.item.detail}</code>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  const home = state.home;
  return {
    home,
  };
}

const mapActionsToProps = {
  getHomeDetail,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
