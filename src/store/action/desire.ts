import { SET_EXCEL_REQUEST, SET_EXCEL_SUCCESS, SET_EXCEL_FAILURE } from './actionTypes';

export const setExcelValueRequset = (payload: File) => {
	return {
		type: SET_EXCEL_REQUEST,
		payload
	}
}

const setExcelValueSuccess = (payload: Array<Array<String>>) => {
	return {
		type: SET_EXCEL_SUCCESS,
		payload: payload
	}
}

const setExcelValueFailure = () => {
	return {
		type: SET_EXCEL_FAILURE
	}
}
export type DesireACtionTypes = 
| ReturnType<typeof setExcelValueSuccess>
| ReturnType<typeof setExcelValueRequset>
| ReturnType<typeof setExcelValueFailure>