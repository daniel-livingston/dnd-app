import { JOIN_ROOM, joinRoom, LEAVE_ROOM, leaveRoom } from "../../../src/actions/room";

test("creates JOIN_ROOM action object", () => {
	const action = joinRoom({ test: "test" });
	expect(action).toMatchObject({
		type: JOIN_ROOM,
		data: { test: "test" },
	});
});

test("creates LEAVE_ROOM action object", () => {
	const action = leaveRoom();
	expect(action).toMatchObject({
		type: LEAVE_ROOM,
	});
});
