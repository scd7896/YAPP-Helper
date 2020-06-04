import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDataByFormRequest } from '../../../../store/action/desire';

const EmailGradeSecond = () => {
	const dispatch = useDispatch();
	const { allList } = useSelector<RootStore>(state => state.desire) as DesireState;

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
				{
					allList.map((user) => {
						return (
							<tr>
								<td>
									{user.name}
								</td>
								<td>
									{user.email}
								</td>
								<td>
									{user.isPass}
								</td>
								<td>
									{user.meetingTime}
								</td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
export default EmailGradeSecond