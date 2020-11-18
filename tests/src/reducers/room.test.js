import reducer, { defaultState } from "../../../src/reducers/room";
import { JOIN_ROOM, LEAVE_ROOM } from "../../../src/actions/room";

test("initializes state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toEqual(defaultState);
});

test("joins room", () => {
	const state = reducer(defaultState, {
		type: JOIN_ROOM,
		data: {
			canvas: "Test canvas",
			users: [],
		},
	});
	expect(state).toMatchObject({
		inRoom: true,
		canvas: "Test canvas",
		users: [],
	});
});

test("leaves room", () => {
	const state = reducer(
		{
			inRoom: true,
			canvas: "Test canvas",
			users: [],
		},
		{
			type: LEAVE_ROOM,
		}
	);

	expect(state).toMatchObject({
		inRoom: false,
	});
});
