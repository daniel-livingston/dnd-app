const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = new express.Router();

// Create a new user (aka register an account)
router.post("/", (req, res) => {
	const { email, password, username } = req.body;
	User.register({ username, email }, password, (error, user) => {
		if (error) {
			// Error is with password validation
			if (Array.isArray(error)) {
				return res.status(400).send({
					error: {
						name: "PasswordInvalidError",
						message: "The password does not meet the listed requirements",
					},
				});
			}

			// Error is with repeat email
			if (error.keyValue) {
				return res.status(400).send({
					error: {
						name: "EmailExistsError",
						message: "A user with the given email is already registered",
					},
				});
			}

			// Error is with repeat username
			if (error.name && error.name === "UserExistsError") {
				return res.status(400).send({ error });
			}

			return res.status(400).send({
				error: {
					name: "InvalidInputError",
					message: "The provided information is not complete",
				},
			});
		}

		req.login(user, (error) => {
			if (error) {
				console.log(error);
			}
		});
		res.status(201).send(user);
	});
});

// Login as existing user
router.post("/login", passport.authenticate("local"), (req, res) => {
	res.status(200).send(req.user);
});

// Log out as logged in user
router.post("/logout", (req, res) => {
	if (!req.user) {
		return res.status(401).send();
	}

	req.logout();
	res.send({ message: "Successfully logged out" });
});

// Get currently logged in user's profile details
router.get("/me", (req, res) => {
	if (!req.user) {
		return res.status(401).send();
	}

	res.send(req.user);
});

// Delete currently logged in user
router.delete("/me", async (req, res) => {
	if (!req.user) {
		return res.status(401).send();
	}

	const user = await User.findByIdAndDelete(req.user._id);
	if (!user) {
		res.status(500).send({ error: "Account could not be deleted" });
	}
	req.logout();
	res.send({ message: "Account successfully deleted" });
});

module.exports = router;
