import { SET_EXCEL_REQUEST, SET_EXCEL_SUCCESS, SET_EXCEL_FAILURE, SET_KEYINDEX_VALUE, USERLIST_SET_BY_FORMDATA_REQUEST, USERLIST_SET_BY_FORMDATA_RESULT } from './actionTypes';

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

const setKeyIndexValue = (payload: object) => {
	return {
		type: SET_KEYINDEX_VALUE,
		payload
	}
}

export const setUserDataByFormRequest = () => {
	return {
		type: USERLIST_SET_BY_FORMDATA_REQUEST
	}
}

const setUserDataByFormResult = (payload: Array<User>) => {
	return {
		type: USERLIST_SET_BY_FORMDATA_RESULT,
		payload
	}
}

export type DesireACtionTypes = 
| ReturnType<typeof setExcelValueSuccess>
| ReturnType<typeof setExcelValueRequset>
| ReturnType<typeof setExcelValueFailure>
| ReturnType<typeof setKeyIndexValue>
| ReturnType<typeof setUserDataByFormRequest>
| ReturnType<typeof setUserDataByFormResult>