export const SAVE_CANVAS = "SAVE_CANVAS";
export const saveCanvas = (canvas) => ({
	type: SAVE_CANVAS,
	canvas: canvas,
});

export const SET_BRUSH_COLOR = "SET_BRUSH_COLOR";
export const setBrushColor = (brushColor) => ({
	type: SET_BRUSH_COLOR,
	brushColor,
});

export const SET_IS_DRAWING = "SET_IS_DRAWING";
export const setIsDrawing = (isDrawing) => ({
	type: SET_IS_DRAWING,
	isDrawing,
});

export const SET_LINE_WIDTH = "SET_LINE_WIDTH";
export const setLineWidth = (lineWidth) => ({
	type: SET_LINE_WIDTH,
	lineWidth,
});
