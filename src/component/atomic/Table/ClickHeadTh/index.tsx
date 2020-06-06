import * as React from 'react'
interface ClickHeadThProp extends FontStyle {
	
}
const ClickHeadTh = ({ children }: ClickHeadThProp) => {
	return (
		<th>
			{children}
		</th>
	)
}

export default ClickHeadTh