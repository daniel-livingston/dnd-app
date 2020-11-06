import reducer, { defaultState } from "../../../src/reducers/user";
import { SET_USER } from "../../../src/actions/user";

test("initializes default state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toEqual(defaultState);
});

test("sets the socket", () => {
	const user = { username: "username1324" };
	const state = reducer(null, {
		type: SET_USER,
		user,
	});
	expect(state).toEqual({
		...user,
		isLoggedIn: true,
	});
});
