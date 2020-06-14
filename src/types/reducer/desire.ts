interface DesireState {
	keys: Array<String> | [],
	users: Array<Array<String>> | [], 
	allList: Array<User> | [],
	isError: boolean,
}

type FormKeyType = 'email' | 'name' | 'isPass' | 'meetingTime'