import * as React from 'react'
import { useState } from 'react';
import { xlsxRead } from '../../../../util/xlsxreader'
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setExcelValueRequset } from '../../../../store/action/desire';

const FileInput = () => {
	const [isOver, setIsOver] = useState(false);
	const dispatch = useDispatch();
	const drapHandler = async (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.dataTransfer.items) {
			const excelFile = event.dataTransfer.items[0].getAsFile();
			dispatch(setExcelValueRequset(excelFile))
			// const rows = await xlsxRead(event.dataTransfer.items[0].getAsFile());
			// dispatch(setKeysByExcelHead(rows))
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
	return (
		<div
			onDrop={drapHandler} 
			onDragOver={dragOverHandler}
			onDragLeave={dragLeaveHandler}
		 	className="file-drop-box"
			style={isOver ? {backgroundColor: 'blue'} : {}}>
			<input type="file" name="file"></input>
			<p>이곳에 파일을 올려주세요</p>
			<button type="submit">ee</button>
		</div>
	)
}

export default FileInput;