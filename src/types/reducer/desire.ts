interface DesireState {
	keys: Array<String> | null,
	users: Array<Array<String>> | null, 
	allList: Array<User> | null,
	isError: boolean,
}

type FormKeyType = 'email' | 'name' | 'isPass' | 'meetingTime'