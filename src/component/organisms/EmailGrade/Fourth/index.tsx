import * as React from 'react'
import { useState } from 'react'
const Fourth = () => {
	const [viewPage, setViewPage] = useState<boolean>(true)
	
	return (
		<section>
			<p>4.메일내용 확인</p>
			<p>잠깐! 보내기 전에 메일내용 확인하세요</p>
		</section>
	)
}

export default Fourth