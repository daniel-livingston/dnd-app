const io = require("socket.io-client");
const { validate } = require("uuid");
const { Room } = require("../../../server/socket/room");

let socket, socketTwo;

beforeEach((done) => {
	socket = io.connect("http://localhost:8080");
	socketTwo = io.connect("http://localhost:8080");
	socket.on("connect", () => {
		if (socketTwo.connected) {
			done();
		}
	});
	socketTwo.on("connect", () => {
		if (socket.connected) {
			done();
		}
	});
});

afterEach(() => {
	socket.disconnect();
});

test("connects client to server through socket", (done) => {
	const socket = io.connect("http://localhost:8080");
	socket.on("connect", () => {
		expect(socket).toBeConnected();
		done();
	});
});

describe("initialize event", () => {
	test("creates user data successfully", (done) => {
		socket.emit("initialize", { username: "Test username" }, (data, error) => {
			expect(error).toBeUndefined();
			expect(data).toBeTruthy();
			expect(data.message).toEqual("Successfully initialized");
			expect(validate(data.user.id)).toBe(true);
			expect(data.user.username).toEqual("Test username");
			expect(data.user.currentRoom).toBeUndefined();
			done();
		});
	});

	test("fails to initialize user data multiple times", (done) => {
		socket.emit("initialize", { username: "Test username" }, () => {
			socket.emit("initialize", { username: "Test username" }, (data, error) => {
				expect(data).toBeFalsy();
				expect(error).toBeTruthy();
				expect(error.message).toEqual("Already initialized");
				done();
			});
		});
	});
});

describe("create room event", () => {
	beforeEach((done) => {
		socket.emit("initialize", { username: "Test username" }, (data, error) => {
			done();
		});
	});

	test("creates room successfully", (done) => {
		socket.emit("create room", (data, error) => {
			expect(error).toBeFalsy();
			expect(data).toBeTruthy();
			expect(data.message).toEqual("Room created");
			expect(Room.isValidName(data.room.name)).toBe(true);
			done();
		});
	});
});

describe("join room event", () => {
	let name;
	beforeEach((done) => {
		socket.emit("initialize", { username: "Test username1" }, () => {
			socketTwo.emit("initialize", { username: "Test username2" }, () => {
				socket.emit("create room", (data, error) => {
					if (error) {
						throw new Error();
					}
					name = data.room.name;
					done();
				});
			});
		});
	});

	test("join room successfully", (done) => {
		socketTwo.emit("join room", { name }, (data, error) => {
			done();
		});
	});
});

expect.extend({
	toBeConnected(received) {
		const pass = received.connected;
		if (pass) {
			return {
				message: () => `expected socket to not be connected`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected socket to be connected`,
				pass: false,
			};
		}
	},
});
