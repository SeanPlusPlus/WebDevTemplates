import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import routes from './routes';

export default (initialState, reduxReactRouter, createHistory) => {
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    const createStoreWithMiddleware = compose(
      applyMiddleware(promiseMiddleware(), logger),
      reduxReactRouter({ routes, createHistory })
    )(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
  } else {
    const createStoreWithMiddleware = compose(
      applyMiddleware(promiseMiddleware()),
      reduxReactRouter({ routes, createHistory })
    )(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
  }
};
