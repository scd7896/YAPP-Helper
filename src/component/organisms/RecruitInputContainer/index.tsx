import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import RecruitGuide from '../../molecules/RecruitGuide'
import { useSelector } from 'react-redux'
import OpenTrueBody from './OpenTrueBody'
import OpenFalseBody from './OpenFalseBody'

import './styles.scss'
import { putRecruitData } from '../../../util/api'
import { useHistory } from 'react-router-dom'

const RecruitInputContainer = () => {
	const { isRecruiting, generation, URL, startDay, lastDay } = useSelector<RootStore>(state => state.recruit) as RecruitState
	const history = useHistory();
	const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
	const recruitDataUpdate = useCallback(async () => {
		try {
			await putRecruitData({
				generation: parseInt(generation.toString(), 10),
				url: URL,
				isRecruit: isRecruiting,
				startDay,
				lastDay
			})
			setIsUpdateSuccess(true)
		} catch(err) {
			setIsUpdateSuccess(false)
		}
	}, [isRecruiting, generation, URL, startDay, lastDay])

	useEffect(() => {
		if (isUpdateSuccess) {
			alert('성공적으로 반영하였습니다.')
			history.push('/select')
		}
	}, [isUpdateSuccess])
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
				<button onClick={recruitDataUpdate}>
					완료
				</button>
			</footer>
		</div>
	)
}

export default RecruitInputContainer