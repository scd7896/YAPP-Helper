import * as React from 'react';
import './styles.scss';

interface SmallIconWrapperProp {
	children?: React.ReactElement | string
}
const SmallIconWrapper = ({ children }: SmallIconWrapperProp) => {
	return (
		<picture className="small_icon_wrapper">
			{ children }
		</picture>
	)
}

export default SmallIconWrapper;