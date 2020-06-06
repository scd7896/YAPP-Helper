import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRecruitValue } from '../../../../../store/action/recruit';

import './styles.scss'
const RecruitInput = ({ name, placeholder, style }: RecruitInputNameProp) => {
	const dispatch = useDispatch();
	const recruit = useSelector<RootStore>(state => state.recruit) as RecruitState
	const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setRecruitValue({
			[name]: event.target.value
		}))
	}
	return (
		<input 
			className="recruit-string-input-style"
			style={style}
			onChange={changeValueHandler} 
			value={recruit[name].toString()}
			placeholder={placeholder} />
	)
}

export default RecruitInput