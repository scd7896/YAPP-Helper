interface DesireState {
	keys: Array<String> | null,
	users: Array<Array<String>> | null, 
	allList: Array<User> | null,
	isError: boolean,
	name: number | null
	email: number | null
	isPass: number | null
	meetingTime?: number | null,
	viewSelect: 'all' | 'fail' | 'pass'
}