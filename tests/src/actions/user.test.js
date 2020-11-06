import { SET_USER, setUser } from "../../../src/actions/user";

test("creates SET_USER action object", () => {
	const user = {
		firstName: "Abe",
		lastName: "Lincoln",
		username: "Abey",
		email: "Abelincoln@usa.biz",
	};
	const action = setUser(user);
	expect(action).toEqual({
		type: SET_USER,
		user,
	});
});
