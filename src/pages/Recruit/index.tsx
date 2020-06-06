import * as React from 'react'
import RecruitTemplate from '../../component/template/RecruitTemplate'
import ToggleButton from '../../component/atomic/InputStyle/Recruit/ToggleButton'
import RecruitInputContainer from '../../component/organisms/RecruitInputContainer'


const Recruit = () => {
	return (
		<div>
			<RecruitTemplate>
				<div>
					<RecruitInputContainer />
				</div>
			</RecruitTemplate>
		</div>
	)
}

export default Recruit