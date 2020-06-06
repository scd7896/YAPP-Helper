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
		const { keys, users }: DesireState = yield select(state => state.desire)
		const setForm: excelKeySetFormState = yield select(state => state.excelKeySetForm)
		/**
		 * 엑셀로 받아온 유저 데이터들을 가지고 메일 api를 쏘기 위한 
		 */
		const userData = users.map((user: Array<string>) => {
			const dataForEmail: any = {
				email: "",
				name: "",
				isPass: null,
				meetingTime: "",
				isError: null
			}
			/**
			 * 입력 폼에 입력한 값들을 가지고 체크를 한다.
			 * 만약에 제일 헤더 부분이랑 일치 하는 부분이 없으면 바로 에러를 날린다.
			 */
			Object.keys(setForm).map((formKey: FormKeyType) => {
				if (setForm[formKey] === undefined) {
					return null;
				}
				const targetIndex = keys.findIndex((key) => {
					return key.trim() === setForm[formKey].trim()
				})
				if (targetIndex === -1) {
					throw "없는 사항입니다. 다시 입력하세요"
				}
				dataForEmail[formKey] = user[targetIndex]
			})
			return dataForEmail
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