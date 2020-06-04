interface DesireState {
	keys: Array<String> | null,
	users: Array<Array<String>> | null, 
	allList: Array<User> | null,
	isError: boolean,
	viewSelect: 'all' | 'fail' | 'pass'
}

type FormKeyType = 'email' | 'name' | 'isPass' | 'meetingTime'