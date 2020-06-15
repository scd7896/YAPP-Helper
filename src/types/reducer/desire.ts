interface DesireState {
	keys: Array<String>,
	users: Array<Array<String>>, 
	allList: Array<User>,
	isError: boolean,
	mailTemplates?: MailState[],
}

type FormKeyType = 'email' | 'name' | 'isPass' | 'meetingTime'