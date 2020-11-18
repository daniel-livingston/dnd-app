const socketio = require("socket.io");
const { RoomMap, User } = require("./room");
const { createRoom, joinRoom, leaveRoom, updateUserList } = require("./events");

const initializeSocket = (server) => {
	const rooms = new RoomMap();
	const io = socketio(server);
	io.on("connection", (socket) => {
		let user;
		let room;

		// Callbacks always take two arguments. First is return data. Second is error data
		socket.on("initialize", (data, callback) => {
			if (user) {
				return callback(undefined, { message: "Already initialized" });
			}

			user = new User({ username: data.username });
			callback({
				message: "Successfully initialized",
				user: { id: user.id, username: user.username, currentRoom: user.currentRoom },
			});
		});

		socket.on("create room", (callback) => {
			try {
				if (room) {
					leaveRoom(io, socket, rooms, user, room);
				}
				room = createRoom(io, socket, rooms, user);
				callback({
					message: "Room created",
					room: { name: room.name, users: room.users },
				});
			} catch (e) {
				callback(undefined, e);
			}
		});

		socket.on("join room", (data, callback) => {
			const { name } = data;
			try {
				if (room) {
					leaveRoom(io, socket, rooms, user, room);
				}
				room = joinRoom(io, socket, rooms, user, name);
				updateUserList(io, socket, room);
				callback({ message: "Room joined", room: { name: room.name, users: room.users } });
			} catch (e) {
				callback(undefined, e);
			}
		});

		socket.on("leave room", (callback) => {
			try {
				leaveRoom(io, socket, rooms, user, room);
				updateUserList(io, socket, room);
				callback({ message: "Room left" });
			} catch (e) {
				callback(undefined, e);
			}
		});
	});
};

module.exports = { initializeSocket };
