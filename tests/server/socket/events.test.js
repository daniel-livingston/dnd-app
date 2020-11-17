const { Room, RoomMap, User } = require("../../../server/socket/room");
const { createRoom, joinRoom } = require("../../../server/socket/events");
const { InvalidRoomNameError, NoSuchRoomError } = require("../../../server/socket/errors");

let rooms, io, socket, roomOne, user, username;
beforeEach(() => {
	rooms = new RoomMap();
	roomOne = rooms.createRoom();
	socket = {
		join: jest.fn(),
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
