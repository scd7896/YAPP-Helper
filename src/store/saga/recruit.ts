import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import { RECRUIT_DATA_REQUEST, RECRUIT_DATA_FAILURE, RECRUIT_DATA_SUCCESS } from "actions/actionTypes";
import { getRecruitData } from "utils/api/index";
import { RecruitModel } from "@types";
function* requestRecruitData() {
  try {
    const data: RecruitModel = yield call(getRecruitData);
    yield put({
      type: RECRUIT_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: RECRUIT_DATA_FAILURE,
    });
  }
}
function* watchRequestRecruitData() {
  yield takeLatest(RECRUIT_DATA_REQUEST, requestRecruitData);
}
export default function* recruitWatcher() {
  yield all([fork(watchRequestRecruitData)]);
}
