import * as React from 'react'

import './styles.scss'

interface NavTextProp {
	children: string
}
const NavText = ({ children }: NavTextProp) => {
	return (
		<span className="nav-text-style">
			{ children }
		</span>
	)
}

export default NavText