import * as React from 'react'

import './styles.scss'

type HeadTitleTextProps = {
	children: React.ReactElement | string
}
const HeadTitleText = ({ children }: HeadTitleTextProps) => {
	return (
		<p className="title-text-style">
			{children}
		</p>
	)
}

export default HeadTitleText;