import * as React from 'react'
interface NavTextProp {
	children: React.ReactElement | string
}
const NavText = ({ children }: NavTextProp) => {
	return (
		<a className="nav-text-style">
			{ children }
		</a>
	)
}

export default NavText