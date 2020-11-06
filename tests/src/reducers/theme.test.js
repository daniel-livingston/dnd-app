import reducer, { defaultTheme } from "../../../src/reducers/theme";
import { SET_THEME } from "../../../src/actions/theme";
import { THEMES } from "../../../src/constants";

test("initializes default state", () => {
	const state = reducer(undefined, {
		type: "@@INIT",
	});
	expect(state).toEqual(defaultTheme);
});

test("sets the theme", () => {
	const theme = THEMES[0];
	const themeName = theme.name;
	const state = reducer(defaultTheme, {
		type: SET_THEME,
		theme: themeName,
	});
	expect(state).toEqual(theme);
});
