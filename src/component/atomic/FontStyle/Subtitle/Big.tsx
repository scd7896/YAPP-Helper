import * as React from 'react'

import './big.scss'
interface BigSubTitleProp {
	children?: React.ReactElement | string
}
const BigSubTitle = ({ children }: BigSubTitleProp) => {
	return(
		<p className="big-subtitle-style">
			{children}
		</p>
	)
}

export default BigSubTitle