import { SET_MAIL_TEXT, SET_MAIL_FORM, SET_MAIL_TITLE, PUT_MAIL_FORM_REQUEST, PUT_MAIL_FORM_SUCCESS } from "./actionTypes"

export const setMailTextValue = (payload: string) => {
	return {
		type: SET_MAIL_TEXT,
		payload
	}
}

export const setMailForm = (payload: MailInputState) => {
	return {
		type: SET_MAIL_FORM,
		payload
	}
}

export const setMailTitle = (payload: string) => {
	return {
		type: SET_MAIL_TITLE,
		payload
	}
}

export const putMailFormRequest = () => {
	return {
		type: PUT_MAIL_FORM_REQUEST
	}
}

const putMailFormSuccess = () => {
	return {
		type: PUT_MAIL_FORM_SUCCESS
	}
}

const putMailFormFaiure = () => {
	return {
		type: PUT_MAIL_FORM_SUCCESS
	}
}
export type MailActionType =
| ReturnType<typeof setMailTextValue>
| ReturnType<typeof setMailForm>
| ReturnType<typeof setMailTitle>
| ReturnType<typeof putMailFormRequest>
| ReturnType<typeof putMailFormSuccess>
| ReturnType<typeof putMailFormFaiure>