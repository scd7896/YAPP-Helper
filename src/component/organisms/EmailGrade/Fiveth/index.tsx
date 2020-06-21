import * as React from 'react'
import { useState, useEffect } from 'react'
import * as io from 'socket.io-client'
import { url } from '../../../../_data';
import axios from 'axios';
const EmailGradeFiveth = () => {
	const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
	useEffect(() => {
		setSocket(io(url))
	}, [])

	useEffect(() => {
		if (socket !== null) {
			axios.get(`${url}/api/email/test`);
			socket.on('list-add', (data: User) => {
				console.log(data)
			})
		}
	}, [socket])
	return (
		<div>
			5번째페이지
			<p>돈이다~</p>
		</div>
	)
}

export default EmailGradeFiveth