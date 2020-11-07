const mongoose = require("mongoose");
const request = require("supertest");
const { app } = require("../../../server/app");
const User = require("../../../server/models/user");
const { initializeDb, teardownDb, userOne, userOnePassword } = require("../../fixtures/db");

const testUserPassword = "Password0987";
const testUser1 = {
	email: "jim@test.com",
	username: "jimtest",
};

const getCookie = async () => {
	let cookie;
	await request(app)
		.post("/users/login")
		.send({ username: userOne.username, password: userOnePassword })
		.expect((res) => {
			cookie = res.header["set-cookie"];
		});
	return cookie;
};

beforeEach(initializeDb);
afterAll(teardownDb);

describe("POST /users", () => {
	const route = "/users";
	test("creates a user when provided valid information", async () => {
		const response = await request(app)
			.post(route)
			.send({ ...testUser1, password: testUserPassword })
			.expect(201);

		expect(response.body).not.toBeError();
		expect(response.body).toHaveCorrectData(testUser1);
		await expect(testUser1).toBeInDatabase();
		expect(response).toHaveSetAuth();
	});

	test("does not create the user when the email address is missing", async () => {
		const response = await request(app)
			.post(route)
			.send({ ...testUser1, email: undefined, password: testUserPassword })
			.expect(400);

		expect(response.body).toBeError();
		await expect(testUser1).not.toBeInDatabase();
		expect(response).not.toHaveSetAuth();
	});

	test("does not create the user when the email address is taken", async () => {
		const response = await request(app)
			.post(route)
			.send({ ...testUser1, email: userOne.email, password: testUserPassword })
			.expect(400);

		expect(response.body).toBeError();
		await expect(testUser1).not.toBeInDatabase();
		expect(response).not.toHaveSetAuth();
	});

	test("does not create the user when the username is missing", async () => {
		const response = await request(app)
			.post(route)
			.send({ ...testUser1, username: undefined, password: testUserPassword })
			.expect(400);

		expect(response.body).toBeError();
		await expect(testUser1).not.toBeInDatabase();
		expect(response).not.toHaveSetAuth();
	});

	test("does not create the user when the username is taken", async () => {
		const response = await request(app)
			.post(route)
			.send({ ...testUser1, username: userOne.username, password: testUserPassword })
			.expect(400);

		expect(response.body).toBeError();
		await expect({ ...testUser1, username: undefined }).not.toBeInDatabase();
		expect(response).not.toHaveSetAuth();
	});

	test("does not create the user when the password does not meet requirements", async () => {
		const testPassword = async (password) => {
			const response = await request(app)
				.post(route)
				.send({ ...testUser1, password })
				.expect(400);
			expect(response.body).toBeError();
			await expect(testUser1).not.toBeInDatabase();
			expect(response).not.toHaveSetAuth();
		};

		await testPassword("Ba12!");
		await testPassword(
			"Basdlfkjlksdfjljkljakldsjfklajghguidvnoiurjij1234123nfkfAFD!!!jfkasljfkalsdjngjknafjknlaskdflanmgndjkfgnanfdklasmnflka"
		);
		await testPassword("Banana  1234!");
		await testPassword("Bannananana");
		await testPassword("bnanaa12345!");
		await testPassword("BANANA12345!");
	});
});

describe("POST /users/login", () => {
	const route = "/users/login";

	test("logs in user with username and password", async () => {
		const response = await request(app)
			.post(route)
			.send({ username: userOne.username, password: userOnePassword })
			.expect(200);

		expect(response.body).toHaveCorrectData(userOne);
		expect(response).toHaveSetAuth();
	});

	test("logs in user with email and password", async () => {
		const response = await request(app)
			.post(route)
			.send({ username: userOne.email, password: userOnePassword })
			.expect(200);

		expect(response.body).toHaveCorrectData(userOne);
		expect(response).toHaveSetAuth();
	});

	test("does not log in user with invalid credentials", async () => {
		const response = await request(app)
			.post(route)
			.send({ username: userOne.username, password: "Wrongpassword1234" })
			.expect(401);
	});
});

describe("POST /users/logout", () => {
	const route = "/users/logout";

	test("logs out user who is currently logged in", async () => {
		const cookie = await getCookie();
		await request(app).post(route).set("Cookie", cookie).send().expect(200);
	});

	test("does nothing when user is not logged in", async () => {
		await request(app).post(route).send().expect(401);
	});
});

describe("GET /users/me", () => {
	const route = "/users/me";

	test("gets user profile when logged in", async () => {
		const cookie = await getCookie();
		const response = await request(app).get(route).set("Cookie", cookie).send().expect(200);
		expect(response.body).toHaveCorrectData(userOne);
	});

	test("does not get user profiled when not logged in", async () => {
		await request(app).get(route).send().expect(401);
	});
});

describe("DELETE /users/me", () => {
	const route = "/users/me";

	test("deletes user profile when logged in", async () => {
		const cookie = await getCookie();
		const response = await request(app).delete(route).set("Cookie", cookie).send().expect(200);
		expect(userOne).not.toBeInDatabase();
		expect(response).not.toHaveSetAuth();
	});

	test("does not get user profiled when not logged in", async () => {
		await request(app).delete(route).send().expect(401);
	});
});

expect.extend({
	toBeError(received) {
		const pass = !!received.error;
		if (pass) {
			return {
				message: () => `expected response not to be an error: ${received.error.name}`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected response to be an error`,
				pass: false,
			};
		}
	},
	toHaveCorrectData(received, user) {
		let errors = [];
		const pass = Object.keys(received).reduce((pass, key) => {
			if (key === "_id") {
				if (!mongoose.Types.ObjectId.isValid(received[key])) {
					errors.push(key);
					return false;
				}
				return pass;
			}
			if (user[key]) {
				if (user[key] !== received[key]) {
					errors.push(key);
					return false;
				}
				return pass;
			}
			return pass;
		});
		if (pass) {
			return {
				message: () => `expected user not to have correct data`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected user to have correct data: errors in ${errors.toString()}`,
				pass: false,
			};
		}
	},
	async toBeInDatabase(received) {
		let user;
		if (received.username) {
			user = await User.findOne({ username: received.username });
		} else {
			user = await User.findOne({ email: received.email });
		}
		const pass = !!user;
		if (pass) {
			return {
				message: () => `expected user to not be in database`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected user to be in database`,
				pass: false,
			};
		}
	},
	toHaveSetAuth(received) {
		const pass = !!received.header["set-cookie"];
		if (pass) {
			return {
				message: () => `expected user to not be logged in`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected user to be logged in`,
				pass: false,
			};
		}
	},
});
