import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRecruitValue } from '../../../../../store/action/recruit';

const RecruitInput = ({ name }: RecruitInputNameProp) => {
	const dispatch = useDispatch();
	const recruit = useSelector<RootStore>(state => state.recruit) as RecruitState
	const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setRecruitValue({
			[name]: event.target.value
		}))
	}
	return (
		<input onChange={changeValueHandler} value={recruit[name].toString()} />
	)
}

export default RecruitInput