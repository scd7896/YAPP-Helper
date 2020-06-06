import { all, fork } from 'redux-saga/effects';
import desire from './desire'
import recruit from './recruit'
export default function* rootSaga() {
	yield all([
		fork(desire),
		fork(recruit)
	])
}