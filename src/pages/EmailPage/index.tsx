import * as React from 'react'
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom'
import EmailGradeTemplate from '../../component/template/EmailGradeTemplate'
const EmailGradeFirst = loadable(() => import(/* webpackChunkName: "email_first" */ '../../component/organisms/EmailGrade/First')); 
const EmailGradeSecond = loadable(() => import(/* webpackChunkName: "email_second" */ '../../component/organisms/EmailGrade/Second'))
const EmailGradeThird = loadable(() => import(/* webpackChunkName: "email_third" */ '../../component/organisms/EmailGrade/Third'))

const EmailPage = () => {
	return (
		<div>
			<EmailGradeTemplate>
				<Switch>
					<Route path="/email/:type/1" render={()=> <EmailGradeFirst />}/>
					<Route path="/email/:type/2" render={()=> <EmailGradeSecond />}/>
					<Route path="/email/:type/3" render={()=> <EmailGradeThird />}/>
					<Route path="/email/:type/4" render={()=> <div>4번입니다</div>}/>
				</Switch>
			</EmailGradeTemplate>
		</div>
	)
}

export default EmailPage