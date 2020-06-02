import { SET_EXCEL_TEXT } from "./actionTypes"

export const setExcelKeyValue = (payload: excelValueChangePayload) => {
	return {
		type: SET_EXCEL_TEXT,
		payload
	}
} 

export type ExcelKeySetAction = 
| ReturnType<typeof setExcelKeyValue>