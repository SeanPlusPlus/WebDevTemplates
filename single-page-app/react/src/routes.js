import React from 'react';
import { Route } from 'react-router';
import Home from './components/home';
import Profile from './components/profile';

export default (
  <Route>
    <Route path='/' component={Home} />
    <Route path='/profile' component={Profile} />
  </Route>
);
