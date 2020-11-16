const chance = require("chance").Chance();
const { v4: uuid, validate } = require("uuid");

class RoomMap {
	_rooms = [];

	addUserToRoom(room, user) {
		if (!this.containsRoom(room)) {
			throw new Error("That room doesn't exist");
		}

		room.addUser(user);
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
		const room = this.findRoomByName(name);
		return this.deleteRoom(room);
	}
	findRoomById(id) {
		return this._rooms.find((room) => room.id === id);
	}
	findRoomByName(name) {
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
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get users() {
		return this._users.slice(0);
	}
	addUser(user) {
		if (!User.isValidUser(user)) {
			throw new Error("Not a valid user");
		}

		this._users.push(user);
		return user;
	}
	containsUser(user) {
		return this._users.some((u) => u.equals(user));
	}
	deleteUser(user) {
		this._users = this._users.filter((u) => !u.equals(user));
		return user;
	}
	equals(room) {
		return Room.isValidRoom(room) && this._id === room.id && this._name === room.name;
	}
	findUserById(id) {
		return this._users.find((user) => user.id === id);
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this._users.length;
	}
	static isValidName(name) {
		return /^[A-Z]{6}$/.test(name);
	}
	static isValidRoom(room) {
		return room instanceof Room && validate(room._id) && Room.isValidName(room.name);
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
	equals(user) {
		return User.isValidUser(user) && this._id === user.id;
	}
	static isValidUser(user) {
		return user instanceof User;
	}
}

module.exports = { RoomMap, Room, User };
