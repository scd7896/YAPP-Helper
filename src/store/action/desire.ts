import { SET_KEY_VALUES } from './actionTypes';

export const setKeysByExcelHead = (payload: Array<Array<String>>) => {
	return {
		type: SET_KEY_VALUES,
		payload: payload
	}
}

export type DesireACtionTypes = 
| ReturnType<typeof setKeysByExcelHead>