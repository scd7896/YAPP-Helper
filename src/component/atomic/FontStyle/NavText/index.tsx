import * as React from 'react'
import { useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
import './styles.scss'
import urlName from '../../../../util/urlName'

const NavText = ({ children }: FontStyle) => {
	const { url } = useRouteMatch();
	const isSelected = useMemo<boolean>(() => {
		try {
			const targetUrl = url.split('/')[1] as URLType
			return urlName[targetUrl] === children
		} catch(err) {
			return false;
		}
	}, [url])
	return (
		<span className="nav-text-style"
			style={ isSelected ? {color: '#3d496f'} : {}}>
			{ children }
		</span>
	)
}

export default NavText