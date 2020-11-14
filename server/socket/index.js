const socketio = require("socket.io");

const initializeSocket = (server) => {
	const io = socketio(server);
	io.on("connection", (socket) => {
		console.log("User has connected");
	});
};

module.exports = { initializeSocket };
