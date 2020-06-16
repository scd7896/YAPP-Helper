import axios from 'axios';

type MailFormsListByType = (type: string) => Promise<any>
export const getMailFormsByType: MailFormsListByType = async(type) => {
	axios.get('/api/mailforms')
	return {}
}