import * as React from 'react'
import SmallIconWrapper from '../../atomic/IconWrapper/Small'
import { Link } from 'react-router-dom'

const NavLink = ({}) => {
	return (
		<article className="nav-link-clicker">
			<SmallIconWrapper></SmallIconWrapper>
			<Link to="/">
				
			</Link>
		</article>
	)
}

export default NavLink