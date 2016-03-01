import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import session from './session';

export default combineReducers({
  session,
  router: routerStateReducer,
});
