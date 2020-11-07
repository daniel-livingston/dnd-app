const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const passwordValidator = require("password-validator");
const validator = require("validator");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Not a valid email");
			}
		},
	},
	dateCreated: {
		type: Date,
		default: Date.now(),
	},
});

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	delete userObject.attempts;
	delete userObject.last;
	delete userObject.hash;
	delete userObject.salt;
	delete userObject.__v;
	return userObject;
};

const passwordSchema = new passwordValidator();
passwordSchema
	.is()
	.min(8)
	.is()
	.max(50)
	.has()
	.uppercase()
	.has()
	.lowercase()
	.has()
	.digits(1)
	.has()
	.not()
	.spaces();

userSchema.plugin(passportLocalMongoose, {
	passwordValidator(password, cb) {
		if (!passwordSchema.validate(password)) {
			const errors = passwordSchema.validate(password, { list: true });
			return cb(errors);
		}
		cb();
	},
	usernameQueryFields: ["email"],
	limitAttempts: true,
	maxAttempts: 10,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
