import * as React from 'react'
import { useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { getMailTemplatesAllList } from '../../store/action/desire';
import MailFormTemplate from '../../component/template/MailFormTemplate';

const cx = classNames.bind(styles);

const MailFormPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMailTemplatesAllList())
	}, [])
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