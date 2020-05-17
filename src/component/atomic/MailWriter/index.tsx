import * as React from 'react'
import { useRef } from 'react';
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const MailWriter = () => {
	const ref = useRef(null);
	const valueCheck = () => {
		console.log(ref!.current!.state.value)
	}
	return (
		<div>
			<div>
				<Quill ref={ref}
				style={{ height : '100px' }}/>
			</div>
			<div style={{marginTop: '200px'}}>
				<button onClick={valueCheck}>값 확인 하기 ㅎㅎ</button>
			</div>
		</div>
	)
}

export default MailWriter;