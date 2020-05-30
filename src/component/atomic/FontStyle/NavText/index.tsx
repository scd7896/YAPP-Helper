import * as React from 'react'

import './styles.scss'

const NavText = ({ children }: FontStyle) => {
	return (
		<span className="nav-text-style">
			{ children }
		</span>
	)
}

export default NavText