import { RecruitActionTypes } from "../action/recruit"
import { SET_RECRUIT_VALUE } from '../action/actionTypes'
const recruit = (state: RecruitState, action: RecruitActionTypes) => {
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