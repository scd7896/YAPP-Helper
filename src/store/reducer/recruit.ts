import { RecruitActionTypes } from "../action/recruit"
import { SET_RECRUIT_VALUE } from '../action/actionTypes'

const initialState: RecruitState = {
	isLoaded: false,
	isRecruiting: true,
	lastDay: "",
	startDay: "",
	URL: "",
	generation: 0
}

const recruit = (state: RecruitState = initialState, action: RecruitActionTypes) => {
	switch(action.type) {
		case SET_RECRUIT_VALUE :			
			return {
				...state,
				...action.payload
			}
		default :
			return { ...state }
	}
}

export default recruit