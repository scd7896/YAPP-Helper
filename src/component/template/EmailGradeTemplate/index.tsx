import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'

const EmailGradeTemplate = () => {
	const match = useRouteMatch<EmailParamsData>()
	console.log(match)
	return(
		<div>
			이것은 테스트 템플릿입니다.
			{match.params.grade}
		</div>
	)
}

export default EmailGradeTemplate