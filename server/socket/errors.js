class AuthError extends Error {
	constructor(message) {
		super(message);
		this.name = "AuthError";
	}
}

class InvalidRoomError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidRoomError";
	}
}

class InvalidRoomIdError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidRoomIdError";
	}
}

class InvalidRoomNameError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidRoomNameError";
	}
}

class InvalidUserError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidUserError";
	}
}

class InvalidUserIdError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidUserIdError";
	}
}

class NoSuchRoomError extends Error {
	constructor(message) {
		super(message);
		this.name = "NoSuchRoomError";
	}
}

module.exports = {
	AuthError,
	InvalidRoomError,
	InvalidRoomNameError,
	InvalidRoomIdError,
	InvalidUserError,
	InvalidUserIdError,
	NoSuchRoomError,
};
