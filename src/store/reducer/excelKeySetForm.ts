import { ExcelKeySetAction } from '../action/excelKeySetForm'
import { SET_EXCEL_TEXT } from '../action/actionTypes'
const initialState = {
	name: "",
	email: "",
	isPass: "",
	meetingTime: ""
}

const excelKeySetForm = (state: excelKeySetFormState = initialState, action: ExcelKeySetAction) => {
	switch(action.type) {
		case SET_EXCEL_TEXT :
			const { key, value } = action.payload
			return {
				...state,
				[key]: value
			}
	}
}

export default excelKeySetForm;