import {
	SAVE_CANVAS,
	SET_BRUSH_COLOR,
	SET_IS_DRAWING,
	SET_LINE_WIDTH,
	saveCanvas,
	setBrushColor,
	setIsDrawing,
	setLineWidth,
} from "../../../src/actions/canvas";

test("creates the SAVE_CANVAS action object", () => {
	const json = JSON.stringify({ a: 1 });
	const action = saveCanvas(json);
	expect(action).toEqual({
		type: SAVE_CANVAS,
		canvas: json,
	});
});

test("creates the SET_BRUSH_COLOR action object", () => {
	const color = "#CCCCCC";
	const action = setBrushColor(color);
	expect(action).toEqual({
		type: SET_BRUSH_COLOR,
		brushColor: color,
	});
});

test("creates the SET_IS_DRAWING action object", () => {
	const action = setIsDrawing(true);
	expect(action).toEqual({
		type: SET_IS_DRAWING,
		isDrawing: true,
	});

	const notDrawingAction = setIsDrawing(false);
	expect(notDrawingAction).toEqual({
		type: SET_IS_DRAWING,
		isDrawing: false,
	});
});

test("creates the SET_LINE_WIDTH action object", () => {
	const lineWidth = 40;
	const action = setLineWidth(lineWidth);
	expect(action).toEqual({
		type: SET_LINE_WIDTH,
		lineWidth,
	});
});
