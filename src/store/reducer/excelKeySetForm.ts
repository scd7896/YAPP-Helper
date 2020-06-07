import { ExcelKeySetAction } from '../action/excelKeySetForm'
import { SET_EXCEL_TEXT } from '../action/actionTypes'
const initialState = {
	name: -1,
	email: -1,
	isPass: -1,
	meetingTime: -1
}

const excelKeySetForm = (state: excelKeySetFormState = initialState, action: ExcelKeySetAction) => {
	switch(action.type) {
		case SET_EXCEL_TEXT :
			const { key, value } = action.payload
			return {
				...state,
				[key]: value
			}
		default :
			return { ...state }
	}
}

export default excelKeySetForm;