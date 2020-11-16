const { validate, v4: uuid } = require("uuid");
const { RoomMap, Room, User } = require("../../../server/socket/room");

let room, rooms, user;
beforeEach(() => {
	rooms = new RoomMap();
	room = new Room();
	user = new User();
});

describe("RoomMap", () => {
	test("constructor", () => {
		const rooms = new RoomMap();
		expect(rooms._rooms).toHaveLength(0);
	});

	test("addUserToRoom", () => {
		const room = rooms.createRoom();
		expect(room.containsUser(user)).toBe(false);
		rooms.addUserToRoom(room, user);
		expect(room.containsUser(user)).toBe(true);

		expect(() => rooms.addUserToRoom(room, { id: uuid() })).toThrow();
		expect(() => rooms.addUserToRoom(new Room("ABCDEF"), user)).toThrow();
	});

	test("containsRoom", () => {
		const r = rooms.createRoom();
		expect(rooms.containsRoom(r)).toBe(true);
		expect(rooms.containsRoom(room)).toBe(false);
	});

	test("createRoom", () => {
		const room = rooms.createRoom();
		expect(Room.isValidName(room.name)).toBe(true);
		expect(rooms.size()).toBe(1);
	});

	test("deleteRoom", () => {
		const room = rooms.createRoom();
		expect(rooms.size()).toBe(1);
		const deleted = rooms.deleteRoom(room);
		expect(rooms.size()).toBe(0);
	});

	test("deleteRoomByName", () => {
		const room = rooms.createRoom();
		const name = room.name;
		expect(rooms.size()).toBe(1);
		const deleted = rooms.deleteRoomByName(name);
		expect(deleted.equals(room)).toBe(true);
		expect(rooms.size()).toBe(0);
		const notDeleted = rooms.deleteRoomByName("ABCDEF");
		expect(notDeleted).toBeUndefined();
		expect(rooms.size()).toBe(0);
	});

	test("findRoomByName", () => {
		const r = new Room("Test");
		rooms._rooms.push(r);
		const id = r.id;
		const found = rooms.findRoomById(id);
		expect(found).toEqual(r);
		const notFound = rooms.findRoomById(uuid());
		expect(notFound).toBeUndefined();
	});

	test("findRoomByName", () => {
		const r = new Room("Test");
		rooms._rooms.push(r);
		const found = rooms.findRoomByName("Test");
		expect(found).toEqual(r);
		const notFound = rooms.findRoomByName("Not found");
		expect(notFound).toBeUndefined();
	});

	test("generateUniqueRoomName", () => {
		const name = rooms.generateUniqueRoomName();
		expect(Room.isValidName(name)).toBe(true);
	});

	test("size", () => {
		expect(rooms.size()).toBe(0);
		rooms._rooms.push({ id: uuid() });
		expect(rooms.size()).toBe(1);
	});
});

describe("Room", () => {
	test("constructor", () => {
		const room = new Room("Test");
		expect(room._users).toHaveLength(0);
		expect(room.id).toBeValidUUID();
		expect(room.name).toBe("Test");
	});

	test("addUser succeeds on valid user", () => {
		const u = room.addUser(user);
		expect(u).toEqual(user);
		expect(room.size()).toEqual(1);
	});

	test("addUser fails on invalid user", () => {
		expect(() => room.addUser({ id: uuid() })).toThrow();
	});

	test("containsUser", () => {
		const u = new User();
		room.addUser(user);
		expect(room.containsUser(user)).toBe(true);
		expect(room.containsUser(u)).toBe(false);
	});

	test("deleteUser", () => {
		const u = new User();
		room.addUser(user);
		expect(room.size()).toBe(1);
		expect(room.containsUser(user)).toBe(true);
		expect(room.containsUser(u)).toBe(false);
		room.deleteUser(u);
		expect(room.size()).toBe(1);
		room.deleteUser(user);
		expect(room.containsUser(user)).toBe(false);
		expect(room.size()).toBe(0);
	});

	test("equals", () => {
		const room1 = new Room("ABCDEF");
		const room2 = new Room("FEDCBA");
		const room3 = { _id: room1.id, name: "ABCDEF" };

		expect(room1.equals(room1)).toBe(true);
		expect(room1.equals(room2)).toBe(false);
		expect(room1.equals(room3)).toBe(false);
	});

	test("findUserById", () => {
		const u = new User();
		room.addUser(user);
		const foundUser = room.findUserById(user.id);
		expect(foundUser).toEqual(user);
		const notFoundUser = room.findUserById(u.id);
		expect(notFoundUser).toBeUndefined();
	});

	test("isEmpty", () => {
		expect(room.isEmpty()).toBe(true);
		room._users.push(new User());
		expect(room.isEmpty()).toBe(false);
	});

	test("isValidName", () => {
		expect(Room.isValidName("ABCDEF")).toBe(true);
		expect(Room.isValidName("ABCDEFG")).toBe(false);
		expect(Room.isValidName("ABCDE1")).toBe(false);
		expect(Room.isValidName("abcdef")).toBe(false);
		expect(Room.isValidName("ABCDE")).toBe(false);
		expect(Room.isValidName(123456)).toBe(false);
	});

	test("isValidRoom", () => {
		const room = rooms.createRoom();
		expect(Room.isValidRoom(room)).toBe(true);
		expect(Room.isValidRoom(new Room())).toBe(false);
		expect(Room.isValidRoom({ _id: uuid(), name: "ABCDEF" })).toBe(false);
	});

	test("size", () => {
		expect(room.size()).toBe(0);
		room._users.push(new User());
		expect(room.size()).toBe(1);
	});

	test("users property is immutable", () => {
		room.addUser(user);
		const users = room.users;
		expect(users).toEqual(expect.any(Array));
		expect(users).toHaveLength(1);
		users.pop();
		expect(room.users).toHaveLength(1);
	});
});

describe("User", () => {
	test("constructor", () => {
		const user = new User();
		expect(user.id).toBeValidUUID();
		expect(user.username).toEqual(expect.any(String));
	});

	test("equals", () => {
		const validUser = new User();
		const invalidUser = { id: user.id };
		expect(user.equals(user)).toBe(true);
		expect(user.equals(validUser)).toBe(false);
		expect(user.equals(invalidUser)).toBe(false);
	});

	test("isValidUser", () => {
		expect(User.isValidUser(user)).toBe(true);
		expect(User.isValidUser({ _id: uuid() })).toBe(false);
	});
});

expect.extend({
	toBeValidUUID(received) {
		const pass = validate(received);
		if (pass) {
			return {
				message: () => `expected ${received} to not be a valid uuid`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected ${received} to be a valid uuid`,
				pass: false,
			};
		}
	},
});
