const io = require("socket.io-client");

let socket;
const initializeSocket = (done) => {
	socket = io.connect("http://localhost:8080");
	socket.on("connect", () => {
		done();
	});
};

module.exports = {
	initializeSocket,
	socket,
};
