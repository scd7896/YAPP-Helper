import { DesireACtionTypes } from "../action/desire";
import { SET_EXCEL_SUCCESS, SET_EXCEL_REQUEST, SET_EXCEL_FAILURE, SET_KEYINDEX_VALUE } from "../action/actionTypes";

const initialState: DesireState = {
	keys: null,
	users: null,
	passList: null,
	failList: null,
	isError: false,
	name: null,
	email: null,
	isPass: null,
	meetingTime: null
}

const desire = (state: DesireState = initialState, action: DesireACtionTypes): DesireState => {
	const copyState: DesireState = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case SET_EXCEL_REQUEST :
			return initialState;

		case SET_EXCEL_SUCCESS :
			const [keys, ...users] = action.payload;
			copyState.keys = keys;
			copyState.users = users;
			copyState.failList = null;
			copyState.passList = null;
			return copyState;
		
		case SET_EXCEL_FAILURE :
			return {
				...initialState,
				isError: true
			}
		
		case SET_KEYINDEX_VALUE :
			
		default : return { ...state }
	}
}

export default desire;