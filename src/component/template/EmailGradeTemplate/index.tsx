import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'
import FileInput from '../../atomic/File/Input'
import GradeGuideIcon from '../../atomic/IconWrapper/GradeGuide'
import EmailGradeIconSet from '../../molecules/EmailGradeIconSet'

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
			<div style={{display: 'flex'}}>
				<GradeGuideIcon gradeNumber={0} text="발표전형 선택"></GradeGuideIcon>
				{
					["엑셀파일업로드", "분류확인", "메일내용확인", "실시간 발송확인"].map((el, index) => {
						return (
							<EmailGradeIconSet key={el+index}
							gradeNumber={index+1}
							text={el} />
						)
					})
				}
			</div>
			{match.params.grade}
		</div>
	)
}

export default EmailGradeTemplate