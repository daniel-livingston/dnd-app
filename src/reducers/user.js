import { SET_USER } from "../actions/user";

export const defaultState = {
	isLoggedIn: false,
};

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USER: {
			return {
				...action.user,
				isLoggedIn: true,
			};
		}
		default: {
			return state;
		}
	}
};

export default userReducer;
