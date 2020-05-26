import * as React from 'react'
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