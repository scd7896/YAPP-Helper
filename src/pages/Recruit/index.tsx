import * as React from 'react'
import RecruitTemplate from '../../component/template/RecruitTemplate'
import ToggleButton from '../../component/atomic/InputStyle/ToggleButton/indext'


const Recruit = () => {
	return (
		<div>
			<RecruitTemplate>
				<div>
					<p>리쿠르트 바디 </p>
					<ToggleButton name="isRecruiting"></ToggleButton>
				</div>
			</RecruitTemplate>
		</div>
	)
}

export default Recruit