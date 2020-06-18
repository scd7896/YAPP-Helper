import axios from 'axios'
interface Payload {
	id: number;
	type: string;
	title: string;
	contents: string;
	headImage: File;
	mapImage: File;
}
export const putMailForm = async (payload: Payload) => {
	const formData = new FormData();
	if (payload.headImage) {
		formData.append('header_image', payload.headImage)
	}
	if (payload.mapImage) {
		formData.append('map_image', payload.mapImage)
	}
	formData.append('type', payload.type);
	formData.append('title', payload.title);
	formData.append('contents', payload.contents);

	const res = await axios.put(`/api/mailforms/${payload.id}`, formData);
	
	return res.data;	
}