import * as React from 'react'
import { useEffect, useState } from 'react'
import * as io from 'socket.io-client'
import axios from 'axios'
import FileInput from '../../component/atomic/File/Input'
import SelectLayout from '../../component/template/SelectLayout'

const SendEmail = () => {
	const [socket, setSocket] = useState(null);
	useEffect(() => {
		setSocket(io("http://helper.yapp.co.kr:9170/"))
	}, [])

	useEffect(() => {
		if (socket !== null) {
			socket.on('list-add', (data: TestUser) => {
				console.log(data)
			})
		}
	}, [socket])

	const socketTest = () => {
		axios.get('http://helper.yapp.co.kr:9170/api/email/test/socket')
	}
	return (
		<div>
			<button onClick={socketTest}>테스트 돌려!</button>
			<SelectLayout>
				<FileInput />
			</SelectLayout>
		</div>
	)
}

export default SendEmail