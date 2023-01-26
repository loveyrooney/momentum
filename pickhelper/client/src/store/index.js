import { combineReducers } from 'redux';
import comment from './comment';
import admin from './admin';

export default combineReducers({
  comment, admin
});
