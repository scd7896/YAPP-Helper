import { MailActionType } from "../action/mail"
import { SET_MAIL_TEXT, SET_MAIL_FORM, SET_MAIL_SELECTINDEX, SET_MAIL_TITLE, SET_MAIL_HEADIMAGE } from "../action/actionTypes"

const initialState: MailInputState = {
	id: -1,
	text: "",
	title: "",
	type: "",
	headImageURL: "",
	subImageURL: "",
	headImage: null,
	subImage: null,
	selectIndex: 0
}
const mail = (state: MailInputState = initialState, action: MailActionType): MailInputState => {
	switch(action.type) {
		case SET_MAIL_TEXT :
			return {
				...state,
				text: action.payload
			}
		case SET_MAIL_TITLE :
			return {
				...state,
				title: action.payload
			}
		case SET_MAIL_HEADIMAGE :
			const headURL = URL.createObjectURL(action.payload)
			console.log('파일은', action.payload)
			return {
				...state,
				headImage: action.payload,
				headImageURL: headURL
			}
		case SET_MAIL_FORM :
			return {
				...state,
				...action.payload
			}
		case SET_MAIL_SELECTINDEX :
			return {
				...state,
				selectIndex: action.payload
			}
		default :
			return { ...state }
	}
}

export default mail