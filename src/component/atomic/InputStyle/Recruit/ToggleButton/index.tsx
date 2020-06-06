import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setRecruitValue } from '../../../../../store/action/recruit'

import './styles.scss'

const ToggleButton = ({ name }: InputNameProp) => {
	const dispatch = useDispatch();
	const toggleChangeListner = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.checked)
		dispatch(setRecruitValue({
			[name] : event.target.checked
		}))
	}
	return (
		<label className="switch">
			<input type="checkbox" onChange={toggleChangeListner}/>
  		<span className="slider round"></span>
		</label>
	)
}

export default ToggleButton;