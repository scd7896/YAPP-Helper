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
		const { keys, users }: DesireState = yield select(state => state.desire)
		const setForm: excelKeySetFormState = yield select(state => state.excelKeySetForm)
		console.log(keys, users)
		console.log(setForm)
		users.map((user: Array<string>) => {
			const dataForEmail: any = {
				email: "",
				name: "",
				isPass: null,
				meetingTime: "",
				isError: null
			}
			Object.keys(setForm).map((formKey: FormKeyType) => {
				const targetIndex = keys.findIndex((key) => {
					return key === setForm[formKey]
				})
				if (targetIndex === -1) {
					throw "없는 사항입니다. 다시 입력하세요"
				}
				dataForEmail[formKey] = user[targetIndex]
			})
			userData.push(dataForEmail)
		})
		yield put({
			type: USERLIST_SET_BY_FORMDATA_RESULT,
			payload: userData
		})
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