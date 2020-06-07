interface excelKeySetFormState {
	name: number | null
	email: number | null
	isPass: number | null
	meetingTime?: number | null
}
type SetFormKey = 'name' | 'email' | 'isPass' | 'meetingTime'

interface excelValueChangePayload {
	key: SetFormKey
	value: number
}