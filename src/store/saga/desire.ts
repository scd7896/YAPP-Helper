import { all, fork, takeLatest, put, call, select, delay } from "redux-saga/effects";
import {
  SET_EXCEL_REQUEST,
  SET_EXCEL_SUCCESS,
  SET_EXCEL_FAILURE,
  USERLIST_SET_BY_FORMDATA_REQUEST,
  USERLIST_SET_BY_FORMDATA_RESULT,
  MAILTEMPLATES_FETCH_REQUEST,
  MAILTEMPLATES_FETCH_SUCCESS,
  MAILTEMPLATES_FETCH_FAILURE,
  MAILTEMPLATES_ALLFETCH_REQUEST,
  MAILTEMPLATES_ALLFETCH_FAILURE,
  MAILTEMPLATES_ALLFETCH_SUCCESS,
  SET_MAIL_FORM,
} from "../action/actionTypes";
import { xlsxRead } from "../../util/xlsxreader";
import { setExcelValueRequset, setUserDataByFormRequest, getMailTemplatesListFetch } from "../action/desire";
import { getMailFormByType, getMailFormAll } from "../../util/api/index";
function* excelReadSetValues(action: ReturnType<typeof setExcelValueRequset>) {
  try {
    const row = yield call(xlsxRead, action.payload);
    yield put({
      type: SET_EXCEL_SUCCESS,
      payload: row,
    });
  } catch (err) {
    yield put({
      type: SET_EXCEL_FAILURE,
    });
  }
}

function* watchExcelInputFile() {
  yield takeLatest(SET_EXCEL_REQUEST, excelReadSetValues);
}

function* userListSetBoyForm(action: ReturnType<typeof setUserDataByFormRequest>) {
  try {
    const { keys, users }: DesireState = yield select((state) => state.desire);
    const setForm: excelKeySetFormState = yield select((state) => state.excelKeySetForm);
    /**
     * 엑셀로 받아온 유저 데이터들을 가지고 메일 api를 쏘기 위한
     */
    const userData = users.map((user: Array<string>) => {
      return {
        name: user[setForm.name],
        email: user[setForm.email],
        isPass: user[setForm.isPass] === "합격",
        meetingTime: user[setForm.meetingTime],
        isError: false,
      };
    });
    yield put({
      type: USERLIST_SET_BY_FORMDATA_RESULT,
      payload: userData,
    });
  } catch (err) {
    yield put({
      type: USERLIST_SET_BY_FORMDATA_RESULT,
      payload: [],
    });
  }
}

function* watchUserListSetByForm() {
  yield takeLatest(USERLIST_SET_BY_FORMDATA_REQUEST, userListSetBoyForm);
}

function* mailtemplatesFetch(action: ReturnType<typeof getMailTemplatesListFetch>) {
  try {
    const data = yield call(getMailFormByType, action.payload);
    yield put({
      type: MAILTEMPLATES_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: MAILTEMPLATES_FETCH_FAILURE,
    });
  }
}

function* watchMailTemplatesFetch() {
  yield takeLatest(MAILTEMPLATES_FETCH_REQUEST, mailtemplatesFetch);
}

function* mailtemplatesAllFetch() {
  try {
    // const data = allTemplates
    const data = yield call(getMailFormAll);
    yield put({
      type: MAILTEMPLATES_FETCH_SUCCESS,
      payload: data as MailState[],
    });
  } catch {
    yield put({
      type: MAILTEMPLATES_FETCH_FAILURE,
    });
  }
}

function* watchMailTemplatesAllFetch() {
  yield takeLatest(MAILTEMPLATES_ALLFETCH_REQUEST, mailtemplatesAllFetch);
}
export default function* desireWatcher() {
  yield all([
    fork(watchExcelInputFile),
    fork(watchUserListSetByForm),
    fork(watchMailTemplatesFetch),
    fork(watchMailTemplatesAllFetch),
  ]);
}
