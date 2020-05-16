import { DesireACtionTypes } from "../action/desire";
import { SET_KEY_VALUES } from "../action/actionTypes";

const initialState: DesireState = {
	keys: [],
	users: []
}

const desire = (state: DesireState = initialState, action: DesireACtionTypes): DesireState => {
	switch(action.type) {
		case SET_KEY_VALUES :
			const copyState = { ...state };
			const [keys, ...users] = action.payload;
			copyState.keys = keys;
			copyState.users = users;
			return copyState;
		default : return { ...state }
	}
}

export default desire;