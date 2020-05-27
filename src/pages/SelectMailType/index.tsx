import * as React from 'react'
import { useEffect, useState } from 'react'
import * as io from 'socket.io-client'
import axios from 'axios'
import SelectMailTemplate from '../../component/template/SelectMailTemplate';
import SelectLayout from '../../component/template/SelectLayout'
import BigSubTitle from '../../component/atomic/FontStyle/Subtitle/Big';
import SmallSubTitle from '../../component/atomic/FontStyle/Subtitle/Small';
import HeadTitleText from '../../component/atomic/FontStyle/HeadTitle';

const SelectMailType = () => {
	const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
	useEffect(() => {
		setSocket(io("http://helper.yapp.co.kr:9170/"))
	}, [])

	useEffect(() => {
		if (socket !== null) {
			/**
			 * todo: store의 데이터를 읽어서 내용들을 reuqst를 던지자
			 */
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
			<SelectLayout>
				<HeadTitleText>헤드타이틀 테스트</HeadTitleText>
				<BigSubTitle>큰거 테스트</BigSubTitle>
				<SmallSubTitle>작은거 테스트</SmallSubTitle>
				<SelectMailTemplate />
			</SelectLayout>
		</div>
	)
}

export default SelectMailType