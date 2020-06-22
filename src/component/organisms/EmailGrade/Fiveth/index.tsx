import * as React from 'react'
import { useState, useEffect, useCallback } from 'react'
import * as io from 'socket.io-client'
import { url } from '../../../../_data';
import axios from 'axios';
const EmailGradeFiveth = () => {
	const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
	const [userDatas, setUserDatas] = useState([])
	const [userData, setUserData] = useState("")

	useEffect(() => {
		setSocket(io(url))
	}, [])

	useEffect(() => {
		if (socket !== null) {
			axios.get(`${url}/api/email/test`);
			socket.on('list-add', (data: string) => {
				setUserData(data)
			})
		}
	}, [socket])

	useEffect(() => {
		if (userData !== "") {
			setUserDatas([...userDatas, userData])
		}
	}, [userData])

	return (
		<div>
			5번째페이지
			<p>{userDatas.map((data) => {
				return (<div>{data}입니다</div>)
			})}</p>
		</div>
	)
}

export default EmailGradeFiveth