import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDataByFormRequest } from '../../../../store/action/desire';

const EmailGradeSecond = () => {
	const dispatch = useDispatch();
	const { keys, users } = useSelector<RootStore>(state => state.desire) as DesireState;

	useEffect(() => {
		dispatch(setUserDataByFormRequest());
	}, [])

	return (
		<table>
			<thead>
				<tr>
					{
						keys.map((key, index) => {
							return (
								<th key={`${key}${index}`}>{key}</th>
							)
						})
					}
				</tr>
			</thead>
			<tbody>
				{
					users.map((user, index) => {
						return (
							<tr key={`user${user}${index}`}>
								{
									user.map((userData, j) => {
										return (
											<td key={`datas${userData}${j}`}>{userData}</td>
										)
									})
								}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
export default EmailGradeSecond