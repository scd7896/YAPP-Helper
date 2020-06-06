import axios from "axios"

const BASE_URL = "http://helper.yapp.co.kr:9170"

export const getRecruitData = async(): Promise<RecruitModel> => {
	const res = await axios.get(`${BASE_URL}/api/recruit`)
	const data = res.data['recruit-data']
	return {
		generation: data.generation,
		isRecruiting: data.isRecruit,
		lastDay: data.lastDay,
		startDay: data.startDay,
		URL: data.url
	}
}