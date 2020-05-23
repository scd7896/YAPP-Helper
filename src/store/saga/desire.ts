import { all, fork, takeLatest, put, call } from 'redux-saga/effects'
import { SET_EXCEL_REQUEST, SET_EXCEL_SUCCESS, SET_EXCEL_FAILURE } from '../action/actionTypes'
import { xlsxRead } from '../../util/xlsxreader'
import { setExcelValueRequset } from '../action/desire'
function* excelReadSetValues(action: ReturnType<typeof setExcelValueRequset>) {
	try {
		const row = yield call(xlsxRead, action.payload)
		yield put({
			type: SET_EXCEL_SUCCESS,
			payload: row
		})
	} catch(err) {
		yield put({
			type: SET_EXCEL_FAILURE
		})
	}
}
function* watchExcelInputFile() {
	yield takeLatest(SET_EXCEL_REQUEST, excelReadSetValues)
}

export default function* desireWatcher() {
	yield all([
		fork(watchExcelInputFile)
	])
}