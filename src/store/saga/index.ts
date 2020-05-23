import { all, fork } from 'redux-saga/effects';
import desire from './desire'

export default function* rootSaga() {
	yield all([
		fork(desire)
	])
}