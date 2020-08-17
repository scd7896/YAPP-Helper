import { all, fork, takeLatest, put, select, call } from "redux-saga/effects";
import { PUT_MAIL_FORM_REQUEST, PUT_MAIL_FORM_FAILURE, PUT_MAIL_FORM_SUCCESS } from "../action/actionTypes";
import { putMailForm } from "../../utils/api";

function* putMailRequest() {
  try {
    const formData: MailInputState = yield select((state) => state.mail);
    const res = yield call(putMailForm, formData);
    yield put({
      type: PUT_MAIL_FORM_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: PUT_MAIL_FORM_FAILURE,
    });
  }
}
function* putMailRequestWatch() {
  yield takeLatest(PUT_MAIL_FORM_REQUEST, putMailRequest);
}

export default function* mailWatcher() {
  yield all([fork(putMailRequestWatch)]);
}
