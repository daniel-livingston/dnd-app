import {
	ADD_TO_HISTORY,
	ROLL_DICE,
	SET_HISTORY,
	UPDATE_DICE_NUMBER,
	UPDATE_DICE_SIDES,
	UPDATE_DICE_MODIFIER,
} from "../actions/dice";

export const defaultState = {
	number: 1,
	sides: 20,
	modifier: 0,
	last: {},
	history: [],
};

const diceReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TO_HISTORY: {
			return {
				...state,
				history: [action.roll].concat(state.history),
			};
		}
		case ROLL_DICE: {
			return {
				...state,
				last: action.roll,
				history: [action.roll].concat(state.history),
			};
		}
		case SET_HISTORY: {
			return {
				...state,
				history: action.history,
			};
		}
		case UPDATE_DICE_NUMBER: {
			return {
				...state,
				number: action.number,
			};
		}
		case UPDATE_DICE_SIDES: {
			return {
				...state,
				sides: action.sides,
			};
		}
		case UPDATE_DICE_MODIFIER: {
			return {
				...state,
				modifier: action.modifier,
			};
		}
		default: {
			return state;
		}
	}
};

export default diceReducer;
