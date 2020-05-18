import * as React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const LeftNav = () => {
	return (
		<section className="leftnav-wrapper-container">
			<div>
				<Link to="/select">홈으로 가기</Link>
			</div>
			<div>
				<Link to="/recruit">리쿠르트 관리</Link>
			</div>
			<div>
				<Link to="/email">합격자 메일 보내기</Link>
			</div>
		</section>
	)
}

export default LeftNav;