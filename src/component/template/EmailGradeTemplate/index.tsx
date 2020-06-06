import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'
import FileInput from '../../atomic/File/Input'
import HeadGrade from '../../organisms/HeadGrade'
import SelectLayout from '../SelectLayout'

import './styles.scss'
import StatusTtitle from '../../atomic/FontStyle/StatusTitle'
import VerticalBar from '../../atomic/IconWrapper/VerticalBar'
interface EmailGradeTemplateProp {
	children: React.ReactElement | React.ReactElement[]
}
const EmailGradeTemplate = ({ children }: EmailGradeTemplateProp) => {
	/**
	 * todo: match.params.grade 단계에 따라서 다른 컴포넌트를 그린다
	 */

	return(
		<div>
			<SelectLayout>
				<header className="header-wrapper-container">
					<section className="header-contents-wrapper">
						<StatusTtitle>결과메일 발송</StatusTtitle>
						<VerticalBar></VerticalBar>
						<HeadGrade gradeList={['엑셀파일업로드', '분류확인', '메일내용확인', '실시간 발송확인']} />
					</section>
				</header>
				<section className="body-contents-wrapper">
					{children}
				</section>
			</SelectLayout>
		</div>
	)
}

export default EmailGradeTemplate