import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import EmailGradeTemplate from '../../component/template/EmailGradeTemplate'
import FileInput from '../../component/atomic/File/Input'


const EmailPage = () => {
	return (
		<div>
			<EmailGradeTemplate>
				<Switch>
					<Route path="/email/:type/1" render={()=> <FileInput></FileInput>}/>
					<Route path="/email/:type/2" render={()=> <div>2번입니다</div>}/>
					<Route path="/email/:type/3" render={()=> <div>3번입니다</div>}/>
					<Route path="/email/:type/4" render={()=> <div>4번입니다</div>}/>
				</Switch>
			</EmailGradeTemplate>
		</div>
	)
}

export default EmailPage