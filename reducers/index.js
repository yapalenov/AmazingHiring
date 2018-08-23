import {combineReducers} from 'redux';
import initialStructure from './initialStructure';
import sortType from './sortType';

const reducers = combineReducers({
  initialStructure: initialStructure,
  sortType: sortType
})

export default reducers;
