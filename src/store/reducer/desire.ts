import { DesireACtionTypes } from "../action/desire";
import { SET_EXCEL_SUCCESS, SET_EXCEL_REQUEST, SET_EXCEL_FAILURE, SET_KEYINDEX_VALUE, USERLIST_SET_BY_FORMDATA_REQUEST, USERLIST_SET_BY_FORMDATA_RESULT } from "../action/actionTypes";

const initialState: DesireState = {
	keys: [],
	users: [],
	allList: [],
	viewSelect: 'all',
	isError: false,
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
			copyState.allList = [];
			return copyState;
		
		case SET_EXCEL_FAILURE :
			return {
				...initialState,
				isError: true
			}
		
		case USERLIST_SET_BY_FORMDATA_REQUEST :
			copyState.allList = [];
			return { ...copyState }

		case USERLIST_SET_BY_FORMDATA_RESULT :
			copyState.allList = action.payload;
			return { ...copyState }

		case SET_KEYINDEX_VALUE :
			
		default : return { ...state }
	}
}

export default desire;