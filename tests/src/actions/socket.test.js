import { SET_SOCKET, setSocket } from "../../../src/actions/socket";

test("creates SET_SOCKET action object", () => {
	const socket = {
		someInfo: "yes",
	};
	const action = setSocket(socket);
	expect(action).toEqual({
		type: SET_SOCKET,
		socket,
	});
});
