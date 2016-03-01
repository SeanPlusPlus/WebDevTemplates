// profile.js
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as $ from 'jquery';
import Nav from './nav';
import { getSessionDetail } from '../actions/session';
import { Panel } from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
    };
  }

  componentWillMount() {
    this.props.getSessionDetail();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <h1 className='page-header'>
            {this.state.title}
          </h1>
          <Panel>
            <div>
              <label>Name: </label>
              <code>{this.props.session.item.name}</code>
            </div>
            <div>
              <label>Login: </label>
              <code>{this.props.session.item.login}</code>
            </div>
            {
              this.props.session.item.role === 'site admin'
              ?
              <div>
                <label>Role: </label>
                <code>{this.props.session.item.role}</code>
              </div>
              :
              null
            }
          </Panel>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  const session = state.session;
  return {
    session,
  };
}

const mapActionsToProps = {
  getSessionDetail,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
