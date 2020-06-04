import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDataByFormRequest } from '../../../../store/action/desire';

const EmailGradeSecond = () => {
	const dispatch = useDispatch();
	const desire = useSelector<RootStore>(state => state.desire);

	useEffect(() => {
		dispatch(setUserDataByFormRequest());
	}, [])

	return (
		<table>
			<thead>
				<tr>
					<td>지원자 이름</td>
					<td>이메일</td>
					<td>평가결과</td>
					<td>면접시간</td>
				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>
	)
}
export default EmailGradeSecond