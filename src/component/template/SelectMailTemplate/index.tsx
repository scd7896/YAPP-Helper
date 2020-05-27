import * as React from 'react'
import LinkBlock from '../../atomic/LinkBlock'
import SelectLinkBox from '../../molecules/SelectLinkBox'

import './styles.scss'
const SelectMailTemplate = () => {
	return (
		<section className="email-section-wrapper">
			<section className="email-select-container">
				<SelectLinkBox to="/email/document/1" title="서류전형"></SelectLinkBox>
				<SelectLinkBox to="/email/meeting/1" title="면접전형"></SelectLinkBox>
			</section>
		</section>
	)
}

export default SelectMailTemplate;