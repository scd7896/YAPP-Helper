import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const Recruit = loadable(() => import( /* webpackChunkName: "recruit", webpackPrefetch: true */ './Recruit'))
const SelectPage = loadable(() => import( /* webpackChunkName: "select", webpackPrefetch: true */ './Select'))
const Index = loadable(() => import( /* webpackChunkName: "root", webpackPrefetch: true */ './Index'))
const SendEmail = loadable(() => import( /* webpackChunkName: "email", webpackPrefetch: true */ './SendEmail'))


const RouteController = () => {
	return (
		<React.Suspense fallback={() => <div>로딩중</div>}>
			<Switch>
				<Route path="/" exact={true} render={() => <Index/>}/>
				<Route path="/select" exact={true} render={() => <SelectPage/>}/>
				<Route path="/recruit" exact={true} render={() => <Recruit/>}/>
				<Route path="/email" exact={true} render={() => <SendEmail/>}/>
			</Switch>
		</React.Suspense>
	)
}

export default RouteController