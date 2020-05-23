import { DesireACtionTypes } from "../action/desire";
import { SET_EXCEL_SUCCESS, SET_EXCEL_REQUEST, SET_EXCEL_FAILURE } from "../action/actionTypes";

const initialState: DesireState = {
	keys: null,
	users: null,
	passList: null,
	failList: null,
	isError: false
}

const desire = (state: DesireState = initialState, action: DesireACtionTypes): DesireState => {
	switch(action.type) {
		case SET_EXCEL_REQUEST :
			return initialState;

		case SET_EXCEL_SUCCESS :
			const copyState: DesireState = JSON.parse(JSON.stringify(state));
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
		default : return { ...state }
	}
}

export default desire;