import * as React from 'react'
import SmallIconWrapper from '../../atomic/IconWrapper/Small'
import { Link } from 'react-router-dom'
import NavText from '../../atomic/FontStyle/NavText'

import './styles.scss'

interface NavLinkProp {
	children: string
	to: string
}

const NavLink = ({ children, to }: NavLinkProp) => {
	return (
		<article className="nav-link-clicker">
			<SmallIconWrapper width={16} height={16}>O</SmallIconWrapper>
			<div className="anchor-leftmargin-wrapper">
				<Link to={to}>
					<NavText>
						{children}
					</NavText>
				</Link>
			</div>
		</article>
	)
}

export default NavLink