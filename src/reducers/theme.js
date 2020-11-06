import { SET_THEME } from "../actions/theme";
import { THEMES } from "../constants";

export const defaultTheme = THEMES[1];

const themeReducer = (state = defaultTheme, action) => {
	switch (action.type) {
		case SET_THEME: {
			const theme = THEMES.find((t) => t.name === action.theme);
			if (theme) return theme;
			return state;
		}
		default: {
			return state;
		}
	}
};

export default themeReducer;
