import { combineReducers } from 'redux';
import flightReducer from './flightReducer.js';

export default combineReducers({
  flights: flightReducer
});