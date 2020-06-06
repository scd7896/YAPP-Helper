import * as React from 'react'
import SelectLayout from '../SelectLayout'

import './styles.scss'

interface RecruitTemplateProp {
	children: React.ReactElement
}

const RecruitTemplate = ({ children }: RecruitTemplateProp) => {
	return (
		<SelectLayout>
			<section>
				<header className="recruit-template-header">
					리쿠르팅 오픈
				</header>
				<section className="recruit-template-body">
					{ children }
				</section>
			</section>
		</SelectLayout>
	)
}

export default RecruitTemplate;