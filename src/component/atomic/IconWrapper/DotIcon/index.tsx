import * as React from 'react'
import { useRouteMatch } from 'react-router-dom';

import './styles.scss'
interface DotIconProp {
	gradeNumber: number
}
const DotIcon = ({ gradeNumber }: DotIconProp) => {
	const { grade } = useRouteMatch<EmailParamsData>().params
	return (
		<div className={`dot-icon-style ${ gradeNumber <= parseInt(grade, 10) ? 'blue-border' : 'gray-border' }`}></div>
	)
}

export default DotIcon;