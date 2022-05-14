import { combineReducers } from 'redux';
import { board } from './boardReducer';
import { column } from './columnReducer';
import { card } from './cardReducer';

export default combineReducers({
  board, column, card
})
