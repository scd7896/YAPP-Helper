import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setRecruitValue } from '../../../../../store/action/recruit';

const RecruitInput = ({ name }: InputNameProp) => {
	const dispatch = useDispatch();
	const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setRecruitValue({
			[name]: event.target.value
		}))
	}
	return (
		<input onChange={changeValueHandler} />
	)
}

export default RecruitInput