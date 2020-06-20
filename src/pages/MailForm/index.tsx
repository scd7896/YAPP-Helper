import * as React from 'react'
import { useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMailTemplatesAllList } from '../../store/action/desire';
import MailFormTemplate from '../../component/template/MailFormTemplate';
import MailForm from '../../component/molecules/Mailform';
import TabBar from '../../component/atomic/Nav/TabBar';
import { setMailForm, setMailSelectIndex } from '../../store/action/mail';

const cx = classNames.bind(styles);

const MailFormPage = () => {
	const dispatch = useDispatch();
	const { mailTemplates } = useSelector<RootStore>(state => state.desire) as DesireState
	const { selectIndex } = useSelector<RootStore>(state => state.mail) as MailInputState
	useEffect(() => {
		dispatch(getMailTemplatesAllList())
	}, [])

	useEffect(() => {
		if (mailTemplates && selectIndex != null) {
			dispatch(setMailForm(mailTemplates[selectIndex]))
		}
	}, [mailTemplates, selectIndex])

	const tabChangeHandler = (index: number) => () => {
		dispatch(setMailSelectIndex(index))
	}
	return (
		<MailFormTemplate>
			<header className={cx('header')}>
				<p>메일양식 관리</p>
			</header>
			<section className={cx('body')}>
				<div className={cx("form-wrapper")}>
					<div className={cx('tab-bar-wrapper')}>
						{mailTemplates && mailTemplates.map(({title}, index) => {
							return <TabBar text={title} isSelected={index === selectIndex} 
							handler={tabChangeHandler(index)}/>
						})}				
					</div>
					<MailForm />
				</div>
			</section>
		</MailFormTemplate>
	)
}

export default MailFormPage;