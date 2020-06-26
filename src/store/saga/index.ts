import { all, fork } from 'redux-saga/effects';
import desire from './desire'
import recruit from './recruit'
import mail from './mail'
export default function* rootSaga() {
	yield all([
		fork(desire),
		fork(recruit),
		fork(mail)
	])
}