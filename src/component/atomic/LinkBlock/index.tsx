import * as React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
interface LinkBlockProp {
	children: React.ReactElement | React.ReactElement[]
	to: string
}
const LinkBlock = ({ children, to }: LinkBlockProp) => {
	return (
		<div className="link-box-container">
			<Link to={to}>
				{children}
			</Link>
		</div>
	)
}

export default LinkBlock;