import { MailActionType } from "../action/mail"
import { SET_MAIL_TEXT } from "../action/actionTypes"

const initialState = {
	text: "",
	title: "",
	headImageURL: "",
	subImageURL: ""
}
const mail = (state: MailState = initialState, action: MailActionType): MailState => {
	switch(action.type) {
		case SET_MAIL_TEXT :
			return {
				...state,
				text: action.payload
			}
		default :
			return { ...state }
	}
}

export default mail