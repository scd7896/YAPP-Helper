import axios from 'axios'

export const getMailFormByType = async (type: string) => {
	const res = await axios.get(`/api/mailforms/type/${type}`)
	const data = res.data;
	const mailFormObject = {
		id: data.id,
		title: data.title,
		text: data.contents,
		headImageURL: data.header_image,
		subImageURL: data.map_image,
		type: data.type
	}
	return mailFormObject;
}