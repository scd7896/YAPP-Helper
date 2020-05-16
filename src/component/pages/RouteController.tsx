import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Recruit from './Recruit'
import SelectPage from './Select';
import Index from './Index';
import SendEmail from './SendEmail';

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