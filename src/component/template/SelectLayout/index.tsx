import * as React from 'react';

import LeftNav from '../../organisms/Nav';

import './styles.scss';

interface SelectLayoutProps {
	children: React.ReactElement[] | React.ReactElement
}
const SelectLayout = ({ children }: SelectLayoutProps) => {
	return (
		<section className="select-layout-wrapper">
			<nav>
				<LeftNav />
			</nav>
			<section>
				{ children }
			</section>
		</section>
	)
}

export default SelectLayout;