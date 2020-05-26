import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import EmailGradeTemplate from '../../component/template/EmailGradeTemplate'


const EmailPage = ({ match }: RouteComponentProps<EmailParamsData>) => {
	return (
		<div>
			test
			{ match.params.grade }
			<EmailGradeTemplate />
		</div>
	)
}

export default EmailPage