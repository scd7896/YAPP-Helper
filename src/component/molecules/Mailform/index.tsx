import * as React from 'react';
import { useCallback } from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import FileInput from '../../atomic/File/Input';
import ImageInput from '../../atomic/File/ImageInput';
import MailWriter from '../../atomic/MailWriter';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMailTitle,
  setMailHeadImage,
  toggleMailHeadImageEditMode,
  putMailFormRequest,
} from '../../../store/action/mail';

const cx = classNames.bind(styles);

const MailForm = () => {
  const dispatch = useDispatch();
  const { title, headImageURL, subImageURL, headImageEditMode } = useSelector<
    RootStore
  >((state) => state.mail) as MailInputState;
  const changeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setMailTitle(event.target.value));
    },
    []
  );
  const imageClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    dispatch(toggleMailHeadImageEditMode());
  };
  const imageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setMailHeadImage(event.target.files[0]));
    },
    []
  );
  const submitMailFormPut = useCallback(() => {
    dispatch(putMailFormRequest());
  }, []);

  return (
    <div className={cx('form-wrapper')}>
      <section className={cx('title-wrapper')}>
        <span>메일 제목</span>
        <input
          className={cx('title-input')}
          value={title}
          onChange={changeValue}
        />
      </section>
      <section className={cx('img-wrapper')}>
        <span>헤더이미지</span>
        {
          // image Change 라는 함수를 드래그 앤 드랍이나 onChange 가 발생했을 때(눌러서 실행됬을 때) 실행되도록 하면 된다.
          // 드래그 앤 드랍으로 넣을 때 preventDefault 하도록
          headImageEditMode ? (
            <ImageInput />
          ) : (
            <img
              src={headImageURL}
              width="750px"
              height="150px"
              onClick={imageClick}
            />
          )
        }
      </section>
      <section className={cx('content-wrapper')}>
        <span>메일내용</span>
        <MailWriter />
      </section>
      <section>
        <span>첨부파일</span>
        <div>파일불러오기</div>
      </section>
      <footer>
        <button>취소</button>
        <button onClick={submitMailFormPut}>저장</button>
      </footer>
    </div>
  );
};

export default MailForm;
