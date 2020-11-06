export const ROLL_DICE = "ROLL_DICE";
export const rollDice = (roll) => ({
	type: ROLL_DICE,
	roll,
});

export const UPDATE_DICE_NUMBER = "UPDATE_DICE_NUMBER";
export const updateDiceNumber = (number) => ({
	type: UPDATE_DICE_NUMBER,
	number,
});

export const UPDATE_DICE_SIDES = "UPDATE_DICE_SIDES";
export const updateDiceSides = (sides) => ({
	type: UPDATE_DICE_SIDES,
	sides,
});

export const UPDATE_DICE_MODIFIER = "UPDATE_DICE_MODIFIER";
export const updateDiceModifier = (modifier) => ({
	type: UPDATE_DICE_MODIFIER,
	modifier,
});

export const SET_HISTORY = "SET_HISTORY";
export const setHistory = (history) => ({
	type: SET_HISTORY,
	history,
});

export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const addToHistory = (roll) => ({
	type: ADD_TO_HISTORY,
	roll,
});
