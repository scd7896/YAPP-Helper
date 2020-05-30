import * as React from 'react'

import './styles.scss'
interface StatusTtitleProp {
	children: string
}
const StatusTtitle = ({children}: StatusTtitleProp) => {
	return (
		<p className="status-title-style">	
			{children}
		</p>
	)
}

export default StatusTtitle