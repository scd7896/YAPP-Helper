import { SET_MAIL_TEXT } from "./actionTypes"

export const setMailTextValue = (payload: string) => {
	return {
		type: SET_MAIL_TEXT,
		payload
	}
}
export type MailActionType =
| ReturnType<typeof setMailTextValue>