interface DesireState {
	keys: Array<String>,
	users: Array<Array<String>>, 
	allList: Array<User>,
	isError: boolean,
	mailTemplates?: MailState[] | null,
}

type FormKeyType = 'email' | 'name' | 'isPass' | 'meetingTime'