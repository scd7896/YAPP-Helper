import * as React from 'react';
import './styles.scss';

interface BigIconWrapperProp {
	children?: React.ReactElement
}
const BigIconWrapper = ({ children }: BigIconWrapperProp) => {
	return (
		<picture className="big_icon_wrapper">
			{ children }
		</picture>
	)
}

export default BigIconWrapper;