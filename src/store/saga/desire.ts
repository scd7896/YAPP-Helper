import { all, fork, takeLatest, put, call, select } from 'redux-saga/effects'
import { SET_EXCEL_REQUEST, SET_EXCEL_SUCCESS, SET_EXCEL_FAILURE, USERLIST_SET_BY_FORMDATA_REQUEST, USERLIST_SET_BY_FORMDATA_RESULT } from '../action/actionTypes'
import { xlsxRead } from '../../util/xlsxreader'
import { setExcelValueRequset, setUserDataByFormRequest } from '../action/desire'
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

function* userListSetBoyForm(action: ReturnType<typeof setUserDataByFormRequest>) {
	try {
		const userData: Array<User> = [];
		const { keys, users } = yield select(state => state.desire)
		console.log(keys, users)
	} catch(err) {
		yield put({
			type: USERLIST_SET_BY_FORMDATA_RESULT,
			payload: []
		})
	}
}
function* watchUserListSetByForm() {
	yield takeLatest(USERLIST_SET_BY_FORMDATA_REQUEST, userListSetBoyForm)
}

export default function* desireWatcher() {
	yield all([
		fork(watchExcelInputFile),
		fork(watchUserListSetByForm)
	])
}