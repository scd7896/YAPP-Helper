import * as React from 'react'
import { useCallback } from 'react'
import styles from './styles.scss'
import classNames from 'classnames/bind'
import FileInput from '../../atomic/File/Input'
import MailWriter from '../../atomic/MailWriter'
import { useSelector, useDispatch } from 'react-redux'
import { setMailTitle } from '../../../store/action/mail'

const cx = classNames.bind(styles)

const MailForm = () => {
	const dispatch = useDispatch();
	const { title, id, text, type, headImageURL, subImageURL, headImage, subImage } = useSelector<RootStore>(state => state.mail) as MailInputState
	const changeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setMailTitle(event.target.value))
	}, [])
	return (
		<div className={cx("form-wrapper")}>
			<section className={cx("title-wrapper")}>
				<span>메일 제목</span>
				<input 
					className={cx("title-input")} 
					value={title}
					onChange={changeValue} />
			</section>
			<section>
				<span>헤더이미지</span>
				{
					headImageURL ? <img src={headImageURL} /> : <FileInput />
				}
				
			</section>
			<section>
				<span>메일내용</span>
				<MailWriter />
			</section>
			<section>
				<span>첨부파일</span>
				<div>파일불러오기</div>
			</section>
			<footer>
				<button>취소</button>
				<button>저장</button>
			</footer>
		</div>
	)
}

export default MailForm