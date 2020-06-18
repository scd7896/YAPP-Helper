import * as React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.scss';
import MailFormTemplate from '../../component/template/MailFormTemplate';

const cx = classNames.bind(styles);

const MailFormPage = () => {
	return (
		<MailFormTemplate>
			<header className={cx('header')}>
				<p>메일양식 관리</p>
			</header>
			<section className={cx('body')}>
				바디에 들어감
			</section>
		</MailFormTemplate>
	)
}

export default MailFormPage;