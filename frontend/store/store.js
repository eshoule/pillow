import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middleware = process.env.NODE_ENV === 'production' ? null : logger;

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, middleware)
  )
);

export default configureStore;