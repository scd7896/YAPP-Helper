import * as React from 'react'
import RecruitGuide from '../../molecules/RecruitGuide'

import './styles.scss'

const RecruitInputContainer = () => {
	return (
		<div className="recruit-input-container">
			<header className="recruit-input-header">
				<RecruitGuide 
					name="isRecruiting" 
					type="cheked" 
					title="리쿠르팅 오픈하기" />
			</header>
			<section>
				
			</section>
		</div>
	)
}

export default RecruitInputContainer