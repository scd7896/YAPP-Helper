import * as React from 'react'
import { Link } from 'react-router-dom'
const SelectPage = () => {
	return (
		<main>
			<article>
				<Link to="/email">합격 메일 보내기</Link>
			</article>
			<article>
				<Link to="recruit">리쿠르트 관리</Link>
			</article>
		</main>
	)
}

export default SelectPage;