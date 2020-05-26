import * as React from 'react';
import './styles.scss';
import NavLink from '../../molecules/NavLink'

const LeftNav = () => {
	return (
		<section className="leftnav-wrapper-container">
			<article className="leftnav-linklist-container">
				<div>
					<NavLink to="/select">홈으로 가기</NavLink>
				</div>
				<div>
					<NavLink to="/recruit">리쿠르트 오픈</NavLink>
				</div>
				<div>
					<NavLink to="/email">결과메일 발송</NavLink>
				</div>
				<div>
					<NavLink to="/email">메일양식 관리</NavLink>
				</div>
			</article>
		</section>
	)
}

export default LeftNav;