import * as React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { useParams, Link } from 'react-router-dom'
import { mailTypeListByPathName } from '../../../../util/constact'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.scss'
const cx = classNames.bind(styles)

const Fourth = () => {
	const dispatch = useDispatch();
	const params = useParams();

	const [viewPage, setViewPage] = useState<boolean>(true)

	const { mailTemplates } = useSelector<RootStore>(state => state.desire) as DesireState
	const clickHeaderTab = (target: boolean) => () => {
		setViewPage(target)
	}

	useEffect(() => {
		if (mailTemplates === undefined) {
			
		}
	}, [])
	return (
		<section>
			<p>4.메일내용 확인</p>
			<p>잠깐! 보내기 전에 메일내용 확인하세요</p>
			<section className={cx('content-wrapper')}>
				<header>
					<p className={cx({ selected: viewPage })}
					onClick={clickHeaderTab(true)}>
						{mailTypeListByPathName['document']} 합격
					</p>
					<p className={cx({ selected: !viewPage })}
					onClick={clickHeaderTab(false)}>
						{mailTypeListByPathName['document']} 불합격
					</p>
				</header>
				{ mailTemplates &&
				<section className={cx('body')}>
					<article>
						<p>
							메일제목 | 안녕하세요 YAPP 입니다
						</p>
					</article>
					<article>
						<p>헤더이미지</p>
						<picture>
							이미지가 들어가는 자리
						</picture>
					</article>
					<article>
						<p>메일내용</p>
						<div dangerouslySetInnerHTML={{ __html: "<p>테스트</p>"}} />
					</article>
					<article>
						<p>첨부파일</p>
						<div>
							약도.jpg <span>파일미리보기</span>
						</div>
					</article>
					<article>
						<button>수정 하기</button>
					</article>
				</section>
				}
			</section>

			<footer className="inner-grade-footer">
				<Link to="/email/document/3">이전</Link>
				<Link to="/email/document/5">다음</Link>
			</footer>
		</section>
	)
}

export default Fourth