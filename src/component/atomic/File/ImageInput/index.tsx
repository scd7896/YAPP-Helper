import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMailHeadImage,
  toggleMailHeadImageEditMode,
} from '../../../../store/action/mail';
import SmallIconWrapper from '../../IconWrapper/Small';

import './styles.scss';

type ImageInputProps = {};

const ImageInput = ({}: ImageInputProps) => {
  const [isOver, setIsOver] = useState(false);
  const isError = useSelector<RootStore>((state) => state.desire.isError);
  const dispatch = useDispatch();
  const dropHandler = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items) {
      const imageFile = event.dataTransfer.items[0].getAsFile();
      dispatch(setMailHeadImage(imageFile));
      dispatch(toggleMailHeadImageEditMode());
      setIsOver(false);
    }
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isOver) return;
    setIsOver(true);
  };

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isOver) return;
    setIsOver(false);
  };

  const clickForImageCall = () => {
    const imageInputTag = document.createElement('input');
    imageInputTag.setAttribute('type', 'file');
    imageInputTag.setAttribute('accept', 'image/*');
    imageInputTag.addEventListener('change', () => {
      dispatch(setMailHeadImage(imageInputTag.files[0]));
      dispatch(toggleMailHeadImageEditMode());
    });
    imageInputTag.click();
  };

  useEffect(() => {
    if (isError) {
      alert('이미지 파일만 업로드 할 수 있습니다.');
    }
  }, [isError]);
  return (
    <div
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      className="file-drop-box"
      style={isOver ? { backgroundColor: 'rgba(228, 230, 240, 0.5)' } : {}}
    >
      <div className="margin-bottom18px-wrapper">
        <SmallIconWrapper width={70} height={70} />
      </div>
      <p className="drop-box-guide-text">파일을 이곳에 끌어다 놓거나,</p>
      <p className="drop-box-file-button" onClick={clickForImageCall}>
        파일 불러오기
      </p>
    </div>
  );
};

export default ImageInput;
