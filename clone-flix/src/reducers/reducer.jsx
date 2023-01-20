import { combineReducers } from 'redux';
import { favorisReducer } from './favorisReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({
    favorisReducer,
    searchReducer
});
