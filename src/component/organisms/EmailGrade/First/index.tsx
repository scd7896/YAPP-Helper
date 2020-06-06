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
				<Link to="/email/document/2">2번째로 가즈아</Link>
			</section>
		</div>
	)
}

export default EmailGradeFirst