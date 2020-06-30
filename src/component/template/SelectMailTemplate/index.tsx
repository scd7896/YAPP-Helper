import * as React from 'react'
import SelectLinkBox from '../../molecules/SelectLinkBox'
import HeadTitleText from '../../atomic/FontStyle/HeadTitle'
import BigSubTitle from '../../atomic/FontStyle/Subtitle/Big'
import SmallSubTitle from '../../atomic/FontStyle/Subtitle/Small'
import SmallIconWrapper from '../../atomic/IconWrapper/Small'

import './styles.scss'
const SelectMailTemplate = () => {
	return (
		<section className="email-section-wrapper">
			<div className="content-width-resize-wrapper">
				<section className="email-head-container">
					<div className="email-headtitle-wrapper">
						<SmallIconWrapper width={26} height={26}></SmallIconWrapper>
						<div className="for-marginleft-10px">
							<HeadTitleText>결과메일 발송</HeadTitleText>
						</div>
					</div>
					<SmallSubTitle>발표전형선택</SmallSubTitle>
					<BigSubTitle>발표할 결과를 선택하세요 🤔</BigSubTitle>
				</section>
				<section className="email-select-container">
					<SelectLinkBox to="/email/document/1" title="서류전형 결과안내"></SelectLinkBox>
					<SelectLinkBox to="/email/meeting/1" title="면접전형 결과안내"></SelectLinkBox>
				</section>
			</div>
		</section>
	)
}

export default SelectMailTemplate;