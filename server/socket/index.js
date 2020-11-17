const socketio = require("socket.io");
const { RoomMap, User } = require("./room");
const { createRoom, joinRoom, leaveRoom } = require("./events");
const { InternalServerError } = require("./errors");

const initializeSocket = (server) => {
	const rooms = new RoomMap();
	const io = socketio(server);
	io.on("connection", (socket) => {
		let user = new User();
		let room;

		socket.on("initialize", (data) => {
			user = new User({ username: data.username });
		});

		socket.on("create room", () => {
			try {
				if (room) {
					leaveRoom(io, socket, rooms, user, room);
				}
				room = createRoom(io, socket, rooms, user);
			} catch (e) {
				socket.emit("create room", InternalServerError);
			}
		});

		socket.on("join room", (data) => {
			const { name } = data;
			try {
				if (room) {
					leaveRoom(io, socket, rooms, user, room);
				}
				room = joinRoom(io, socket, rooms, user, name);
			} catch (e) {
				socket.emit("join room", InternalServerError);
			}
		});

		socket.on("leave room", () => {
			try {
				leaveRoom(io, socket, rooms, user, room);
			} catch (e) {
				socket.emit("leave room", e.name);
			}
		});
	});
};

module.exports = { initializeSocket };
