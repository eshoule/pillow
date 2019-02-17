import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings_reducer';
import saves from './saves_reducer';

export default combineReducers({
  users,
  listings,
  saves
});