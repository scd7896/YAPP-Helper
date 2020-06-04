import * as React from 'react'
import FileInput from '../../../atomic/File/Input'

import './styles.scss'
import InnerHeadStyle from '../../../atomic/FontStyle/InnerHeadStyle'
import InnerInputGuideTitle from '../../../atomic/FontStyle/InnerInputGuide/Title'
import InnerInputGuideDescription from '../../../atomic/FontStyle/InnerInputGuide/TitleDescription'
import MailKeySetInput from '../../../atomic/InputStyle/MailKeySet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const EmailGradeFirst = () => {
	const  excelFormState = useSelector<RootStore>(state => state.excelKeySetForm) as excelKeySetFormState
	return (
		<div>
			<header className="inner-grade-title-wrapper">
				<InnerHeadStyle>엑셀파일 업로드</InnerHeadStyle>
			</header>
			<section className="inner-grade-bodysize-wrapper">
				<FileInput />
				<section className="inner-grade-input-wrapper">
					<article className="inner-grade-input-header-wrapper">
						<InnerInputGuideTitle>엑셀 셀헤더 입력</InnerInputGuideTitle>
						<InnerInputGuideDescription>해당하는 셀 헤더를 입력하세요</InnerInputGuideDescription>
						<div>
							이메일: <MailKeySetInput name="email" value={excelFormState.email} />
						</div>
						<div>
							결과: <MailKeySetInput name="isPass" value={excelFormState.isPass} />
						</div>
						<div>
							이름: <MailKeySetInput name="name" value={excelFormState.name} />
						</div>
						<div>
							면접시간: <MailKeySetInput name="meetingTime" value={excelFormState.meetingTime} />
						</div>
					</article>
				</section>
				<Link to="/email/document/2">2번째로 가즈아</Link>
			</section>
		</div>
	)
}

export default EmailGradeFirst