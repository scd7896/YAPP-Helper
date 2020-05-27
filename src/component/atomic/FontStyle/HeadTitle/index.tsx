import * as React from 'react'

import './styles.scss'

type TitleTextProps = {
	children: React.ReactElement | string
}
const TitleText = ({ children }: TitleTextProps) => {
	return (
		<p className="title-text-style">
			{children}
		</p>
	)
}

export default TitleText;