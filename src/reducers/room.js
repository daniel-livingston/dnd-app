const { JOIN_ROOM, LEAVE_ROOM } = require("../actions/room");

export const defaultState = {
	inRoom: false,
};

const roomReducer = (state = defaultState, action) => {
	switch (action.type) {
		case JOIN_ROOM: {
			return {
				...action.data,
				inRoom: true,
			};
		}
		case LEAVE_ROOM: {
			return {
				inRoom: false,
			};
		}
		default: {
			return state;
		}
	}
};

export default roomReducer;
