import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getSessionDetail } from '../actions/session';

class Nav extends React.Component {
  componentWillMount() {
    this.props.getSessionDetail();
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='/'>
              Hello World
            </a>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              {this.props.session.item.role === 'site admin' ? <li><a href='/'><i className='fa fa-gear'></i> Admin</a></li> : null}
              <li className='active'><a><i className='fa fa-user'></i> {this.props.session.item.login}</a></li>
            </ul>
          </div>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapActionsToProps)(Nav);
