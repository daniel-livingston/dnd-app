const io = require("socket.io-client");

let s;

afterEach(() => {
	s.disconnect();
});

test("connects client to server through socket", (done) => {
	s = io.connect("http://localhost:8080");
	s.on("connect", () => {
		expect(s).toBeConnected();
		done();
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
