interface DesireState {
	keys: Array<String> | null,
	users: Array<Array<String>> | null,
	passList: Array<User> | null,
	failList: Array<User> | null,
	isError: boolean
}