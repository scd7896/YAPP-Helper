import * as React from 'react'
import { useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { getMailTemplatesAllList } from '../../store/action/desire';
import MailFormTemplate from '../../component/template/MailFormTemplate';
import MailForm from '../../component/molecules/Mailform';
import TabBar from '../../component/atomic/Nav/TabBar';

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
				<div className={cx("form-wrapper")}>
					<div className={cx('tab-bar-wrapper')}>
						{[1,2,3,4].map((el) => {
							return <TabBar isSelected={el===1} text={`title${el}`}/>
						})}						
					</div>
					<MailForm />
				</div>
			</section>
		</MailFormTemplate>
	)
}

export default MailFormPage;