import { SET_RECRUIT_VALUE } from "./actionTypes"

export const setRecruitValue = (payload: object) => {
	return {
		type: SET_RECRUIT_VALUE,
		payload
	}
}

export type RecruitActionTypes = 
| ReturnType <typeof setRecruitValue>
