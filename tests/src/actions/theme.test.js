import { SET_THEME, setTheme } from "../../../src/actions/theme";
import { THEMES } from "../../../src/constants";

test("creates SET_THEME action object", () => {
	const theme = THEMES[0];
	const action = setTheme(theme);
	expect(action).toEqual({
		type: SET_THEME,
		theme,
	});
});
