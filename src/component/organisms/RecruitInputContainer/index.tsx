import * as React from 'react'
import RecruitGuide from '../../molecules/RecruitGuide'

import './styles.scss'

const RecruitInputContainer = () => {
	return (
		<div className="recruit-input-container">
			<header className="recruit-input-header">
				<RecruitGuide 
					type="checked" 
					name="isRecruiting"
					title="리쿠르팅 오픈하기" />
			</header>
			<section>
				<RecruitGuide
					type="string"
					name="startDay"
					title="모집시작" />
				<RecruitGuide 
					type="string"
					name="lastDay"
					title="모집마감" />
				<RecruitGuide
					type="string"
					name="generation"
					title="기수" />
				<RecruitGuide 
					type="string"
					name="URL"
					title="이동URL" />
			</section>
		</div>
	)
}

export default RecruitInputContainer