import { combineReducers } from 'redux';
import desire from './desire';
import mail from './mail';
import excelKeySetForm from './excelKeySetForm'
import recruit from './recruit'

const rootReducer = combineReducers({
	desire,
	mail,
	excelKeySetForm,
	recruit
});

export default rootReducer;