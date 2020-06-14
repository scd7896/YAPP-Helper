import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDataByFormRequest } from '../../../../store/action/desire'
import classNames from 'classnames/bind';
import styles from './styles.scss'

const cx = classNames.bind(styles)

const EmailGradeThird = () => {
	const dispatch = useDispatch()
	const { allList } = useSelector<RootStore>(state => state.desire) as DesireState
	useEffect(() => {
		dispatch(setUserDataByFormRequest())
	}, [])
	return (
		<div className={cx('wrapper')}>
			<p>3. 셀 분류확인</p>
			<p>분류완료! 잘 분류되었는지 명단을 확인하세요</p>
			<table>
				<thead>
					<tr>
						<td>name</td>
						<td>email</td>
						<td>isPass</td>
						<td>meetingTime</td>
					</tr>
				</thead>
				<tbody>
					{allList.map((user) => {
						return (
							<tr>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.isPass.toString()}</td>
								<td>{user.meetingTime ? user.meetingTime : ""}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default EmailGradeThird