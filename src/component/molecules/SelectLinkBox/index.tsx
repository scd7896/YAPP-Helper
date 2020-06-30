import * as React from 'react'
import LinkBlock from '../../atomic/LinkBlock'
import SmallIconWrapper from '../../atomic/IconWrapper/Small'

interface SelectLinkBoxProp {
	to: string
	title: string
	icon?: React.ReactElement
}
const SelectLinkBox = ({ to, title, icon }: SelectLinkBoxProp) => {
	return (
		<LinkBlock to={to}>
			<SmallIconWrapper width={48} height={48}>{icon ? icon : ''}</SmallIconWrapper>
			<p className="link-box-title">{title}</p>
		</LinkBlock>
	)
}

export default SelectLinkBox;