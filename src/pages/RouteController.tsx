import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const Recruit = loadable(() => import( /* webpackChunkName: "recruit" */ './Recruit'))
const SelectPage = loadable(() => import( /* webpackChunkName: "select" */ './Select'))
const Index = loadable(() => import( /* webpackChunkName: "root" */ './Index'))
const SelectMailType = loadable(() => import( /* webpackChunkName: "mail_type_select" */ './SelectMailType'))
const EmailPage = loadable(() => import(/** webpackChunkName: "email_page" */ './EmailPage'));

const RouteController = () => {
	return (
		<React.Suspense fallback={() => <div>로딩중</div>}>
			<Switch>
				<Route path="/" exact={true} component={Index}/>
				<Route path="/select" exact={true} component={SelectPage}/>
				<Route path="/recruit" exact={true} component={Recruit}/>
				<Route path="/email/:type/:grade" component={EmailPage}/>
				<Route path="/email" component={SelectMailType}/>
			</Switch>
		</React.Suspense>
	)
}

export default RouteController