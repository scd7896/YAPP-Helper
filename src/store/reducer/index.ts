import { combineReducers } from 'redux';
import desire from './desire';
import mail from './mail';

const rootReducer = combineReducers({
	desire,
	mail
});

export default rootReducer;