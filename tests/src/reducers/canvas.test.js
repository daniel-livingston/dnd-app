import reducer, { defaultState } from "../../../src/reducers/canvas";
import {
	SAVE_CANVAS,
	SET_BRUSH_COLOR,
	SET_IS_DRAWING,
	SET_LINE_WIDTH,
} from "../../../src/actions/canvas";

test("initializes to default state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toEqual(defaultState);
});

test("saves canvas", () => {
	const canvas = JSON.stringify({ a: 1 });
	const state = reducer(defaultState, {
		type: SAVE_CANVAS,
		canvas,
	});
	expect(state).toEqual({
		...defaultState,
		canvas,
	});
});

test("sets brush color", () => {
	const brushColor = "#fefefe";
	const state = reducer(defaultState, {
		type: SET_BRUSH_COLOR,
		brushColor,
	});
	expect(state).toEqual({
		...defaultState,
		brushColor,
	});
});

test("sets is drawing", () => {
	const state = reducer(defaultState, {
		type: SET_IS_DRAWING,
		isDrawing: false,
	});
	expect(state).toEqual({
		...defaultState,
		isDrawing: false,
	});

	const otherState = reducer(state, {
		type: SET_IS_DRAWING,
		isDrawing: true,
	});
	expect(otherState).toEqual({
		...state,
		isDrawing: true,
	});
});

test("sets line width", () => {
	const lineWidth = 40;
	const state = reducer(defaultState, {
		type: SET_LINE_WIDTH,
		lineWidth,
	});
	expect(state).toEqual({
		...defaultState,
		lineWidth,
	});
});
