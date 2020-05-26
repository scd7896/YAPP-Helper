import * as React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const LeftNav = () => {
	return (
		<section className="leftnav-wrapper-container">
			<article className="leftnav-linklist-container">
				<div>
					<Link to="/select">홈으로 가기</Link>
				</div>
				<div>
					<Link to="/recruit">리쿠르트 오픈</Link>
				</div>
				<div>
					<Link to="/email">결과메일 발송</Link>
				</div>
			</article>
		</section>
	)
}

export default LeftNav;