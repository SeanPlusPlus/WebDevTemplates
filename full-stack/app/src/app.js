import React from 'react';
import ReactDOM from 'react-dom';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import Root from './components/root';
import configureStore from './store';

const store = configureStore(
    { router: null },
    reduxReactRouter,
    createHistory
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('main')
);
