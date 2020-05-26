import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface ParamsData {
	grade: string;
	type: string;
}

const EmailPage = ({ match }: RouteComponentProps<ParamsData>) => {
	console.log(match)
	return (
		<div>
			test
			{ match.params.grade }
		</div>
	)
}

export default EmailPage