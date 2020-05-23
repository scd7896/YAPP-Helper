import { DesireACtionTypes } from "../action/desire";
import { SET_KEY_VALUES } from "../action/actionTypes";

const initialState: DesireState = {
	keys: [],
	users: [],
	passList: [],
	failList: [],
}

const desire = (state: DesireState = initialState, action: DesireACtionTypes): DesireState => {
	switch(action.type) {
		case SET_KEY_VALUES :
			const copyState: DesireState = JSON.parse(JSON.stringify(state));
			const [keys, ...users] = action.payload;
			copyState.keys = keys;
			copyState.users = users;
			copyState.failList = [];
			copyState.passList = [];
			return copyState;
		default : return { ...state }
	}
}

export default desire;