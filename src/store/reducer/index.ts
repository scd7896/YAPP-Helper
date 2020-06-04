import { combineReducers } from 'redux';
import desire from './desire';
import mail from './mail';
import excelKeySetForm from './excelKeySetForm'

const rootReducer = combineReducers({
	desire,
	mail,
	excelKeySetForm
});

export default rootReducer;