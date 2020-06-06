import * as React from 'react'
import RecruitGuide from '../../molecules/RecruitGuide'
import { useSelector } from 'react-redux'
import OpenTrueBody from './OpenTrueBody'
import OpenFalseBody from './OpenFalseBody'

import './styles.scss'

const RecruitInputContainer = () => {
	const { isRecruiting } = useSelector<RootStore>(state => state.recruit) as RecruitState
	return (
		<div className="recruit-input-container">
			<header className="recruit-input-header">
				<RecruitGuide 
					type="checked" 
					name="isRecruiting"
					title="리쿠르팅 오픈하기" />
			</header>
			{
				isRecruiting ? <OpenTrueBody /> : <OpenFalseBody />
			}
			<footer className="recruit-input-footer">
				<button>
					취소
				</button>
				<button>
					완료
				</button>
			</footer>
		</div>
	)
}

export default RecruitInputContainer