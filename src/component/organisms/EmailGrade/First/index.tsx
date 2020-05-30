import * as React from 'react'
import FileInput from '../../../atomic/File/Input'

import './styles.scss'
import InnerHeadStyle from '../../../atomic/FontStyle/InnerHeadStyle'
import InnerInputGuideTitle from '../../../atomic/FontStyle/InnerInputGuide/Title'
import InnerInputGuideDescription from '../../../atomic/FontStyle/InnerInputGuide/TitleDescription'

const EmailGradeFirst = () => {
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
					</article>
				</section>
			</section>
		</div>
	)
}

export default EmailGradeFirst