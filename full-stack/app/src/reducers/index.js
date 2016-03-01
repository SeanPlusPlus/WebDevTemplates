import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import home from './home';
import session from './session';

export default combineReducers({
  session,
  home,
  router: routerStateReducer,
});
