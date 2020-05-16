import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FileInput from '../atomic/File/Input';

const Recruit = lazy(() => import('./Recruit'));
const SelectPage = lazy(() => import('./Select'));
const Index = lazy(() => import('./Index'));
const SendEmail = lazy(() => import('./SendEmail'));

const RouteController = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<FileInput />
				<Route path="/" exact={true} component={Index} />
				<Route path="/select" component={SelectPage} />
				<Route path="/recruit" component={Recruit} />
				<Route path="/email" component={SendEmail} />
			</Switch>
		</Suspense>
	)
}

export default RouteController