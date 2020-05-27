import * as React from 'react'
import { Link } from 'react-router-dom'

interface LinkBlockProp {
	children: React.ReactElement
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