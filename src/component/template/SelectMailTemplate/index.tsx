import * as React from 'react'
import LinkBlock from '../../atomic/LinkBlock'
import SelectLinkBox from '../../molecules/SelectLinkBox'

import './styles.scss'
import HeadTitleText from '../../atomic/FontStyle/HeadTitle'
import BigSubTitle from '../../atomic/FontStyle/Subtitle/Big'
import SmallSubTitle from '../../atomic/FontStyle/Subtitle/Small'
import SmallIconWrapper from '../../atomic/IconWrapper/Small'
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
					<BigSubTitle>발표할 전형을 선택해주세요</BigSubTitle>
				</section>
				<section className="email-select-container">
					<SelectLinkBox to="/email/document/1" title="서류전형"></SelectLinkBox>
					<SelectLinkBox to="/email/meeting/1" title="면접전형"></SelectLinkBox>
				</section>
			</div>
		</section>
	)
}

export default SelectMailTemplate;