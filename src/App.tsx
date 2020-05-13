import * as React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	process.env.NODE_ENV === "production"
	? applyMiddleware(sagaMiddleware)
	: composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const App = () => {
	return (
		<div>

		</div>
	)
}

export default App;