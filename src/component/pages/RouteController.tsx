import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const Recruit = loadable(() => import('./Recruit'), { ssr: false })
const SelectPage = loadable(() => import('./Select'), { ssr: false })
const Index = loadable(() => import('./Index'), { ssr: false })
const SendEmail = loadable(() => import('./SendEmail'), { ssr: false })


const RouteController = () => {
	return (
		<Switch>
			<Route path="/" exact={true} component={Index} />
			<Route path="/select" exact={true} component={SelectPage} />
			<Route path="/recruit" exact={true} component={Recruit} />
			<Route path="/email" exact={true} component={SendEmail} />
		</Switch>
	)
}

export default RouteController