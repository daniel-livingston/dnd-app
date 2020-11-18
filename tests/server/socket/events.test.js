const { Room, RoomMap, User } = require("../../../server/socket/room");
const { createRoom, joinRoom, leaveRoom } = require("../../../server/socket/events");
const {
	AuthError,
	InvalidRoomNameError,
	NoSuchRoomError,
} = require("../../../server/socket/errors");

let rooms, io, socket, roomOne, user, username;
beforeEach(() => {
	rooms = new RoomMap();
	roomOne = rooms.createRoom();
	socket = {
		join: jest.fn(),
		leave: jest.fn(),
	};
	username = "Test username";
	user = new User({ username });
});

describe("create room event", () => {
	test("creates room successfully", () => {
		const room = createRoom(io, socket, rooms, user);
		expect(room).toEqual(expect.any(Room));
		expect(Room.isValidRoom(room)).toBe(true);
		expect(Room.isValidName(room.name)).toBe(true);
		expect(socket.join).toHaveBeenCalledWith(room.name);
		expect(room.containsUser(user));
	});
});

describe("join room event", () => {
	test("joins room successfully", () => {
		const name = roomOne.name;
		const room = joinRoom(io, socket, rooms, user, name);
		expect(room).toEqual(roomOne);
		expect(socket.join).toHaveBeenCalledWith(room.name);
		expect(room.containsUser(user));
	});

	test("fails to join room on invalid name", () => {
		expect(() => joinRoom(io, socket, rooms, user, "Invalid name")).toThrowError(
			InvalidRoomNameError
		);
	});

	test("fails to join nonexistent room", () => {
		expect(() => joinRoom(io, socket, rooms, user, "ABCDEF")).toThrowError(NoSuchRoomError);
	});
});

describe("leave room event", () => {
	let room;
	beforeEach(() => {
		room = createRoom(io, socket, rooms, user);
	});

	test("leaves room successfully", () => {
		expect(room.containsUser(user)).toBe(true);

		leaveRoom(io, socket, rooms, user, room);
		expect(room.containsUser(user)).toBe(false);
		expect(socket.leave).toHaveBeenCalledWith(room.name);
	});

	test("throws error when leaving room while not already in one", () => {
		const userTwo = new User({ username: "Not in room" });
		expect(() => leaveRoom(io, socket, rooms, userTwo, room)).toThrowError(AuthError);
	});
});
