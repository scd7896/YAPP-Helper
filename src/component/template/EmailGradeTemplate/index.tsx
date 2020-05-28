import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'
import FileInput from '../../atomic/File/Input'

const EmailGradeTemplate = () => {
	/**
	 * todo: match.params.grade 단계에 따라서 다른 컴포넌트를 그린다
	 */
	const match = useRouteMatch<EmailParamsData>()
	console.log(match)
	return(
		<div>
			이것은 테스트 템플릿입니다.
			<FileInput></FileInput>
			{match.params.grade}
		</div>
	)
}

export default EmailGradeTemplate