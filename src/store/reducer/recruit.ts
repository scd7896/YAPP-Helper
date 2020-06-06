import { RecruitActionTypes } from "../action/recruit"
import { SET_RECRUIT_VALUE, RECRUIT_DATA_REQUEST } from '../action/actionTypes'

const initialState: RecruitState = {
	isLoaded: false,
	isRecruiting: true,
	lastDay: "",
	startDay: "",
	URL: "",
	generation: 0,
	isError: false
}

const recruit = (state: RecruitState = initialState, action: RecruitActionTypes) => {
	switch(action.type) {
		case SET_RECRUIT_VALUE :			
			return {
				...state,
				...action.payload
			}
		case RECRUIT_DATA_REQUEST :
			return {
				...initialState
			}
		default :
			return { ...state }
	}
}

export default recruit