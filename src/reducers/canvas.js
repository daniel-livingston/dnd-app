import { SAVE_CANVAS, SET_BRUSH_COLOR, SET_IS_DRAWING, SET_LINE_WIDTH } from "../actions/canvas";

export const defaultState = {
	canvas: null,
	brushColor: "#000000",
	isDrawing: true,
	lineWidth: 1,
};

const canvasReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SAVE_CANVAS: {
			return {
				...state,
				canvas: action.canvas,
			};
		}
		case SET_BRUSH_COLOR: {
			return {
				...state,
				brushColor: action.brushColor,
			};
		}
		case SET_IS_DRAWING: {
			return {
				...state,
				isDrawing: action.isDrawing,
			};
		}
		case SET_LINE_WIDTH: {
			return {
				...state,
				lineWidth: action.lineWidth,
			};
		}
		default: {
			return state;
		}
	}
};

export default canvasReducer;
