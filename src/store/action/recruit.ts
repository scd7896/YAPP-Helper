import { SET_RECRUIT_VALUE, RECRUIT_DATA_REQUEST } from "./actionTypes"

export const recruitDataRequest = () => {
	return {
		type: RECRUIT_DATA_REQUEST
	}
}

export const setRecruitValue = (payload: object) => {
	return {
		type: SET_RECRUIT_VALUE,
		payload
	}
}

export type RecruitActionTypes = 
| ReturnType <typeof setRecruitValue>
| ReturnType <typeof recruitDataRequest>