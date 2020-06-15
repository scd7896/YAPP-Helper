import { SET_EXCEL_REQUEST, SET_EXCEL_SUCCESS, SET_EXCEL_FAILURE, SET_KEYINDEX_VALUE, USERLIST_SET_BY_FORMDATA_REQUEST, USERLIST_SET_BY_FORMDATA_RESULT, MAILTEMPLATES_FETCH_REQUEST, MAILTEMPLATES_FETCH_SUCCESS, MAILTEMPLATES_FETCH_FAILURE } from './actionTypes';

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

export const getMailTemplatesListFetch = (payload: string) => {
	return {
		type: MAILTEMPLATES_FETCH_REQUEST,
		payload
	}
}

export const getMailTemplatesListFetchSuccess = (payload: MailState[]) => {
	return {
		type: MAILTEMPLATES_FETCH_SUCCESS,
		payload
	}
}

const getMailTemplatesListFetchFailure = () => {
	return {
		type: MAILTEMPLATES_FETCH_FAILURE
	}
}

export type DesireACtionTypes = 
| ReturnType<typeof setExcelValueSuccess>
| ReturnType<typeof setExcelValueRequset>
| ReturnType<typeof setExcelValueFailure>
| ReturnType<typeof setKeyIndexValue>
| ReturnType<typeof setUserDataByFormRequest>
| ReturnType<typeof setUserDataByFormResult>
| ReturnType<typeof getMailTemplatesListFetch>
| ReturnType<typeof getMailTemplatesListFetchSuccess>
| ReturnType<typeof getMailTemplatesListFetchFailure>