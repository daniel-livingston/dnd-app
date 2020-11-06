import reducer from "../../../src/reducers/socket";
import { SET_SOCKET } from "../../../src/actions/socket";

test("initializes default state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toBeNull();
});

test("sets the socket", () => {
	const socket = { socket: "object" };
	const state = reducer(null, {
		type: SET_SOCKET,
		socket,
	});
	expect(state).toEqual(socket);
});
