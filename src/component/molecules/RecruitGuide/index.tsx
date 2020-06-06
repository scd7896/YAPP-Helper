import * as React from 'react'
import RecruitingFont from '../../atomic/FontStyle/RecruitingFont'
import ToggleButton from '../../atomic/InputStyle/Recruit/ToggleButton';
import RecruitInput from '../../atomic/InputStyle/Recruit/Input'

import './styles.scss';

interface RecruitGuideProp {
	title: string,
	type: 'cheked' | 'string',
	name: string
}
const RecruitGuide = ({ title, type, name }: RecruitGuideProp) => {
	let InputComponent;
	switch(type) {
		case 'cheked' :
			InputComponent = ToggleButton
			break;
		case 'string' :
			InputComponent = RecruitInput
	}
	return (
		<div className="recruit-input-wrapper">
			<RecruitingFont>
				{title}
			</RecruitingFont>
			<InputComponent name={name} />
		</div>
	)
}

export default RecruitGuide