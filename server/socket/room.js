const chance = require("chance").Chance();
const { v4: uuid, validate } = require("uuid");
const {
	AuthError,
	InvalidRoomIdError,
	InvalidRoomNameError,
	InvalidUserError,
	InvalidUserIdError,
	NoSuchRoomError,
	InvalidRoomError,
} = require("./errors");

class RoomMap {
	_rooms = [];

	addUserToRoom(room, user) {
		if (!this.containsRoom(room)) {
			throw new NoSuchRoomError();
		}

		return room.addUser(user);
	}
	containsRoom(room) {
		return this._rooms.some((r) => r.equals(room));
	}
	createRoom() {
		const name = this.generateUniqueRoomName();
		const room = new Room(name);
		this._rooms = this._rooms.concat(room);
		return room;
	}
	deleteRoom(room) {
		this._rooms = this._rooms.filter((r) => !r.equals(room));
		return room;
	}
	deleteRoomByName(name) {
		if (!Room.isValidName(name)) {
			throw new InvalidRoomNameError();
		}

		const room = this.findRoomByName(name);
		return this.deleteRoom(room);
	}
	findRoomById(id) {
		if (!Room.isValidId(id)) {
			throw new InvalidRoomIdError();
		}

		return this._rooms.find((room) => room.id === id);
	}
	findRoomByName(name) {
		if (!Room.isValidName(name)) {
			throw new InvalidRoomNameError();
		}

		return this._rooms.find((room) => room.name === name);
	}
	generateUniqueRoomName() {
		const generateName = () => {
			return chance.string({
				length: 6,
				casing: "upper",
				alpha: true,
			});
		};

		let name = generateName();
		while (this.findRoomByName(name)) {
			name = generateName();
		}
		return name;
	}
	removeUserFromRoom(room, user) {
		if (!Room.isValidRoom(room)) {
			throw new InvalidRoomError();
		}
		if (!User.isValidUser(user)) {
			throw new InvalidUserError();
		}
		if (!room.containsUser(user)) {
			throw new AuthError();
		}

		room.removeUser(user);

		if (room.isEmpty()) {
			this.deleteRoom(room);
		}

		return user;
	}
	size() {
		return this._rooms.length;
	}
}

class Room {
	_users = [];
	constructor(name) {
		this._name = name;
		this._id = uuid();
	}
	get canvas() {
		return this._canvas;
	}
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get users() {
		return this._users.map((user) => user.username);
	}
	addUser(user) {
		if (!User.isValidUser(user)) {
			throw new InvalidUserError();
		}

		this._users.push(user);
		user.setRoom(this);
		return user;
	}
	containsUser(user) {
		return User.isValidUser(user) && this._users.some((u) => u.equals(user));
	}
	equals(room) {
		return Room.isValidRoom(room) && this._id === room.id && this._name === room.name;
	}
	findUserById(id) {
		if (!User.isValidId(id)) {
			throw new InvalidUserIdError();
		}

		return this._users.find((user) => user.id === id);
	}
	isEmpty() {
		return this.size() === 0;
	}
	static isValidId(id) {
		return validate(id);
	}
	static isValidName(name) {
		return /^[A-Z]{6}$/.test(name);
	}
	static isValidRoom(room) {
		return room instanceof Room && validate(room._id) && Room.isValidName(room.name);
	}
	removeUser(user) {
		if (!User.isValidUser(user)) {
			throw new InvalidUserError();
		}

		this._users = this._users.filter((u) => !u.equals(user));
		user.setRoom(undefined);
		return user;
	}
	setCanvas(canvas) {
		this._canvas = canvas;
	}
	size() {
		return this._users.length;
	}
}

class User {
	constructor({ username = "" } = {}) {
		this._username = username;
		this._id = uuid();
	}
	get id() {
		return this._id;
	}
	get username() {
		return this._username;
	}
	get currentRoom() {
		return this._room;
	}
	setRoom(room) {
		this._room = room;
	}
	equals(user) {
		return User.isValidUser(user) && this._id === user.id;
	}
	static isValidId(id) {
		return validate(id);
	}
	static isValidUser(user) {
		return user instanceof User && validate(user.id);
	}
}

module.exports = { RoomMap, Room, User };
