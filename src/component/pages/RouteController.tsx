import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const Recruit = loadable(() => import( /* webpackChunkName: "recruit" */ './Recruit'))
const SelectPage = loadable(() => import( /* webpackChunkName: "select" */ './Select'))
const Index = loadable(() => import( /* webpackChunkName: "root" */ './Index'))
const SendEmail = loadable(() => import( /* webpackChunkName: "email" */ './SendEmail'))


const RouteController = () => {
	return (
		<Switch>
			<Route path="/" exact={true} render={() => <Index/>}/>
			<Route path="/select" exact={true} render={() => <SelectPage/>}/>
			<Route path="/recruit" exact={true} render={() => <Recruit/>}/>
			<Route path="/email" exact={true} render={() => <SendEmail/>}/>
		</Switch>
	)
}

export default RouteController