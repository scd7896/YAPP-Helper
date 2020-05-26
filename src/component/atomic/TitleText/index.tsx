import * as React from 'react'
type TitleTextProps = {
	children: React.ReactElement
}
const TitleText = ({ children }: TitleTextProps) => {
	return (
		<h1>
			{children}
		</h1>
	)
}

export default TitleText;