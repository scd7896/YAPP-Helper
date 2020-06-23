import axios from 'axios'

export const putRecruitData = async (payload: IRecruit) => {
	const res = await axios.put('/api/recruit', payload)
	return res.data;
}