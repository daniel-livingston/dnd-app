const mongoose = require("mongoose");
const User = require("../../server/models/user");

const userOne = {
	_id: new mongoose.Types.ObjectId(),
	email: "authuser@test.com",
	username: "authuser",
};
const userOnePassword = "PasswordAuth1234!";

// Delete all entries in test db and register some starting users
const initializeDb = async () => {
	await User.deleteMany();
	await User.register(userOne, userOnePassword);
};

const teardownDb = async () => {
	await mongoose.disconnect();
};

module.exports = {
	initializeDb,
	teardownDb,
	userOne,
	userOnePassword,
};
