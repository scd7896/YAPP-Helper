import * as React from 'react'
import RecruitGuide from '../../molecules/RecruitGuide'
import RecruitInput from '../../atomic/InputStyle/Recruit/Input'

import './styles.scss'
const OpenTrueBody = () => {
	return (
		<section className="recruit-input-body">
				<RecruitGuide
					type="string"
					name="generation"
					title="기수" />
				<div className="recruit-date-wrapper">
					<p>모집기간</p>
					<div className="recruit-date-input-wrapper">
						<RecruitInput
							name="startDay" 
							placeholder="0000.00.00"
							style={{width: "104px"}} />
					-
						<RecruitInput 
							name="lastDay"
							placeholder="0000.00.00"
							style={{width: "104px"}} />
					</div>
				</div>
				<RecruitGuide 
					type="string"
					name="URL"
					title="이동URL" />
			</section>
	)
}

export default OpenTrueBody;