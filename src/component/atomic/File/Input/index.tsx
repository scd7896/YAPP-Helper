import * as React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExcelValueRequset } from '../../../../store/action/desire';
import SmallIconWrapper from '../../IconWrapper/Small';

import './styles.scss';

const FileInput = () => {
	const [isOver, setIsOver] = useState(false);
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
	return (
		<div
			onDrop={drapHandler} 
			onDragOver={dragOverHandler}
			onDragLeave={dragLeaveHandler}
		 	className="file-drop-box"
			style={isOver ? {backgroundColor: 'blue'} : {}}>
			<div className="margin-bottom18px-wrapper">
				<SmallIconWrapper width={70} height={70}/>
			</div>
			<p className="drop-box-guide-text">파일을 이곳에 끌어다 놓거나,</p>
			<p className="drop-box-anchorstyle"
				onClick={clickForExcelCall}>이곳을 눌러 주세요</p>
		</div>
	)
}

export default FileInput;