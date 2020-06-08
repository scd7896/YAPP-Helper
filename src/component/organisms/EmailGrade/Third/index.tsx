import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserDataByFormRequest } from '../../../../store/action/desire'

const EmailGradeThird = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setUserDataByFormRequest())
	}, [])
	return (
		<div>
			3번째 페이지는 이것이다
		</div>
	)
}

export default EmailGradeThird