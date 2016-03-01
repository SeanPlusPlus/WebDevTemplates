// home.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
    };
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='page-header'>
          {this.state.title}
        </h1>
      </div>
    );
  }
};

export default Profile;
