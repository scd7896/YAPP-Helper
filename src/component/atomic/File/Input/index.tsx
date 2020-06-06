import * as React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExcelValueRequset } from '../../../../store/action/desire';
import SmallIconWrapper from '../../IconWrapper/Small';

import './styles.scss';

const FileInput = () => {
	const [isOver, setIsOver] = useState(false);
	const isError = useSelector<RootStore>(state => state.desire.isError)
	const dispatch = useDispatch();
	const drapHandler = async (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.dataTransfer.items) {
			const excelFile = event.dataTransfer.items[0].getAsFile();
			dispatch(setExcelValueRequset(excelFile))
			setIsOver(false);
		}
	}

	const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (isOver) return;
		setIsOver(true)
	}
	 
	const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (!isOver) return;
		setIsOver(false);
	}

	const clickForExcelCall = () => {
		const inputTag = document.createElement('input')
		inputTag.setAttribute('type', 'file')
		inputTag.setAttribute('accept', '.xlsx')
		inputTag.addEventListener('change', (event) => {
			dispatch(setExcelValueRequset(inputTag.files[0]))
		})
		inputTag.click();
	}

	useEffect(() => {
		if (isError) {
			alert('.xlsx파일만 업로드 할 수 있습니다.')
		}
	}, [isError])
	return (
		<div
			onDrop={drapHandler} 
			onDragOver={dragOverHandler}
			onDragLeave={dragLeaveHandler}
		 	className="file-drop-box"
			style={isOver ? {backgroundColor: 'rgba(228, 230, 240, 0.5)'} : {}}>
			<div className="margin-bottom18px-wrapper">
				<SmallIconWrapper width={70} height={70}/>
			</div>
			<p className="drop-box-guide-text">파일을 이곳에 끌어다 놓거나,</p>
			<p className="drop-box-file-button"
				onClick={clickForExcelCall}>파일 불러오기</p>
		</div>
	)
}

export default FileInput;