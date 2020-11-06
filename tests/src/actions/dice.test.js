import {
	ADD_TO_HISTORY,
	ROLL_DICE,
	SET_HISTORY,
	UPDATE_DICE_MODIFIER,
	UPDATE_DICE_NUMBER,
	UPDATE_DICE_SIDES,
	addToHistory,
	rollDice,
	setHistory,
	updateDiceModifier,
	updateDiceNumber,
	updateDiceSides,
} from "../../../src/actions/dice";

test("creates ADD_TO_HISTORY action object", () => {
	const roll = {
		rolls: [1, 2],
		number: 2,
		sides: 6,
		modifier: 0,
		total: 3,
		time: new Date(),
	};
	const action = addToHistory(roll);
	expect(action).toEqual({
		type: ADD_TO_HISTORY,
		roll,
	});
});

test("creates ROLL_DICE action object", () => {
	const roll = {
		rolls: [1, 2],
		number: 2,
		sides: 6,
		modifier: 0,
		total: 3,
		time: new Date(),
	};
	const action = rollDice(roll);
	expect(action).toEqual({
		type: ROLL_DICE,
		roll,
	});
});

test("creates SET_HISTORY action object", () => {
	const history = [
		{
			rolls: [1, 2],
			number: 2,
			sides: 6,
			modifier: 0,
			total: 3,
			time: new Date(),
		},
	];
	const action = setHistory(history);
	expect(action).toEqual({
		type: SET_HISTORY,
		history,
	});
});

test("creates UPDATE_DICE_MODIFIER action object", () => {
	const modifier = -1;
	const action = updateDiceModifier(modifier);
	expect(action).toEqual({
		type: UPDATE_DICE_MODIFIER,
		modifier,
	});
});

test("creates UPDATE_DICE_NUMBER action object", () => {
	const number = 3;
	const action = updateDiceNumber(number);
	expect(action).toEqual({
		type: UPDATE_DICE_NUMBER,
		number,
	});
});

test("creates UPDATE_DICE_SIDES action object", () => {
	const sides = 12;
	const action = updateDiceSides(sides);
	expect(action).toEqual({
		type: UPDATE_DICE_SIDES,
		sides,
	});
});
