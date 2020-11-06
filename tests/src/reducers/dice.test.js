import reducer, { defaultState } from "../../../src/reducers/dice";
import {
	ADD_TO_HISTORY,
	ROLL_DICE,
	SET_HISTORY,
	UPDATE_DICE_MODIFIER,
	UPDATE_DICE_NUMBER,
	UPDATE_DICE_SIDES,
} from "../../../src/actions/dice";

test("initializes to default state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toEqual(defaultState);
});

test("adds roll to history", () => {
	const firstRoll = {
		rolls: [1, 2],
		data: {
			total: 3,
		},
	};
	const firstState = reducer(defaultState, {
		type: ADD_TO_HISTORY,
		roll: firstRoll,
	});
	expect(firstState).toEqual({
		...defaultState,
		history: [firstRoll],
	});

	const secondRoll = {
		rolls: [5, 4],
		data: {
			total: 9,
		},
	};
	const secondState = reducer(firstState, {
		type: ADD_TO_HISTORY,
		roll: secondRoll,
	});
	expect(secondState).toEqual({
		...defaultState,
		history: [secondRoll, firstRoll],
	});
});

test("rolls dice", () => {
	const roll = {
		rolls: [1, 6, 5],
		data: {
			number: 3,
			sides: 6,
			modifier: 0,
			total: 12,
		},
	};
	const state = reducer(defaultState, {
		type: ROLL_DICE,
		roll,
	});
	expect(state).toEqual({
		...defaultState,
		last: roll,
		history: [roll],
	});
});

test("sets history", () => {
	const history = [
		{
			rolls: [1, 6, 5],
			data: {
				number: 3,
				sides: 6,
				modifier: 0,
				total: 12,
			},
		},
	];
	const state = reducer(defaultState, {
		type: SET_HISTORY,
		history,
	});
	expect(state).toEqual({
		...defaultState,
		history,
	});
});

test("updates dice modifier", () => {
	const modifier = -1;
	const state = reducer(defaultState, {
		type: UPDATE_DICE_MODIFIER,
		modifier,
	});
	expect(state).toEqual({
		...defaultState,
		modifier,
	});
});

test("updates dice number", () => {
	const number = 3;
	const state = reducer(defaultState, {
		type: UPDATE_DICE_NUMBER,
		number,
	});
	expect(state).toEqual({
		...defaultState,
		number,
	});
});

test("updates dice sides", () => {
	const sides = 12;
	const state = reducer(defaultState, {
		type: UPDATE_DICE_SIDES,
		sides,
	});
	expect(state).toEqual({
		...defaultState,
		sides,
	});
});
