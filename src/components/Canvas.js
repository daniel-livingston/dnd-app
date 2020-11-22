import React from "react";
import { connect } from "react-redux";
import { fabric } from "fabric";
import "fabric-history";
import { GithubPicker } from "react-color";
import { saveCanvas, setBrushColor, setLineWidth, setIsDrawing } from "../actions/canvas";

export class Canvas extends React.Component {
	state = {
		canvas: undefined,
		colorPickerOpen: false,
		lineWidthOpen: false,
		updatingFromOutside: false,
	};

	/********************************
	 * Canvas Toolbar
	 */
	onClickBrushColor = () => {
		this.setState((state) => ({
			colorPickerOpen: !state.colorPickerOpen,
		}));
	};
	onClickClear = () => {
		this.clearCanvas(this.state.canvas);
		this.clearCanvasHistory(this.state.canvas);
	};
	onClickLineWidth = () => {
		this.setState((state) => ({
			lineWidthOpen: !state.lineWidthOpen,
		}));
	};
	onClickRedo = () => {
		this.redoCanvas(this.state.canvas);
	};
	onClickUndo = () => {
		this.undoCanvas(this.state.canvas);
	};
	onClickSelectObjects = () => {
		this.props.setIsDrawing(false);
		this.setDrawingMode(this.state.canvas, false);
	};
	onClickUpload = () => {
		document.getElementById("image-upload").click();
	};
	onClickUseBrush = () => {
		this.props.setIsDrawing(true);
		this.setDrawingMode(this.state.canvas, true);
	};
	onColorChange = (color) => {
		this.props.setBrushColor(color.hex);
		this.setState(() => ({
			colorPickerOpen: false,
		}));
		this.setCanvasBrushColor(this.state.canvas, color.hex);
	};
	onLineWidthChange = (e) => {
		const lineWidth = parseInt(e.target.value, 10);
		this.props.setLineWidth(lineWidth);
		this.setCanvasLineWidth(this.state.canvas, lineWidth);
	};
	onUploadImage = (e) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			const imgObj = new Image();
			imgObj.src = event.target.result;
			imgObj.onload = () => {
				const image = new fabric.Image(imgObj);
				this.addImageToCanvas(this.state.canvas, image);
			};
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	/********************************
	 * Canvas
	 */
	addImageToCanvas = (canvas, image) => {
		image.scaleToHeight(canvas.getHeight());
		canvas.add(image);
		canvas.renderAll();
	};
	clearCanvas = (canvas) => {
		canvas.clear();
	};
	clearCanvasHistory = (canvas) => {
		canvas.clearHistory();
	};
	deleteCanvasSelection = (canvas) => {
		canvas.remove(canvas.getActiveObject());
	};
	initializeCanvas = (canvas) => {
		const container = document.getElementById("canvas").parentElement.parentElement
			.parentElement;
		this.setDimensions(container, canvas, true);
		this.setProperties(canvas);
		this.initializeEvents(canvas);
		this.loadCanvas(canvas);
	};
	initializeEvents = (canvas) => {
		const container = document.getElementById("canvas").parentElement.parentElement
			.parentElement;

		// Window events
		const onWindowResize = (e) => this.setDimensions(container, canvas, false);
		const onWindowClick = (e) => {
			if (this.state.colorPickerOpen) {
				const colorContainer = document.getElementById("color-picker-container");
				const colorButton = document.getElementById("color-button");
				if (!colorContainer.contains(e.target) && !colorButton.contains(e.target)) {
					this.setState(() => ({
						colorPickerOpen: false,
					}));
				}
			}
			if (this.state.lineWidthOpen) {
				const lineWidthContainer = document.getElementById("line-width-container");
				const lineWidthButton = document.getElementById("line-width-button");
				if (!lineWidthContainer.contains(e.target) && !lineWidthButton.contains(e.target)) {
					this.setState(() => ({
						lineWidthOpen: false,
					}));
				}
			}
		};
		const onWindowKeyDown = (e) => {
			const key = e.key;
			if (key === "Delete" || key === "Backspace") {
				// Delete selected object(s) in canvas
				const activeObject = canvas.getActiveObject();
				if (activeObject) {
					if (activeObject._objects) {
						activeObject._objects.forEach((obj) => {
							canvas.remove(obj);
						});
					} else {
						canvas.remove(activeObject);
					}
				}
			} else if (key === "z" && e.ctrlKey) {
				this.onClickUndo();
			} else if ((key === "Z" && e.ctrlKey) || (key === "y" && e.ctrlKey)) {
				this.onClickRedo();
			}
		};
		window.addEventListener("resize", onWindowResize);
		window.addEventListener("click", onWindowClick);
		window.addEventListener("keydown", onWindowKeyDown);

		// Canvas events
		const onCanvasObjectAdded = () => {
			this.saveCanvas(canvas);
		};

		canvas.on("object:added", onCanvasObjectAdded);

		// Clean up events to be called in component will unmount
		this.cleanUpEvents = () => {
			window.removeEventListener("resize", onWindowResize);
			window.removeEventListener("click", onWindowClick);
			window.removeEventListener("keydown", onWindowKeyDown);
		};
	};
	loadCanvas = (canvas) => {
		if (this.props.canvas) {
			canvas.loadFromJSON(this.props.canvas);
		}
	};
	redoCanvas = (canvas) => {
		canvas.redo();
	};
	setCanvasLineWidth = (canvas, lineWidth) => {
		canvas.freeDrawingBrush.width = lineWidth;
	};
	setDimensions = (container, canvas, isFirstSizing) => {
		const getWidescreenDimensions = (container, RES_WIDTH, RES_HEIGHT) => {
			const width = window.innerWidth - 78;
			const height =
				container.clientHeight - document.getElementById("CanvasToolbar").clientHeight;

			let desiredHeight, desiredWidth;

			if (width / height >= RES_WIDTH / RES_HEIGHT) {
				desiredHeight = Math.floor(height / RES_HEIGHT) * RES_HEIGHT;
				desiredWidth = (RES_WIDTH * height) / RES_HEIGHT;
			} else {
				desiredWidth = Math.floor(width / RES_WIDTH) * RES_WIDTH;
				desiredHeight = (RES_HEIGHT * width) / RES_WIDTH;
			}
			return [desiredWidth, desiredHeight];
		};

		const [width, height] = getWidescreenDimensions(container, 16, 9);
		const oldWidth = canvas.getWidth();
		const ratio = width / oldWidth;
		const zoom = isFirstSizing ? 1 : canvas.getZoom() * ratio;
		canvas.setWidth(width);
		canvas.setHeight(height);
		canvas.calcOffset();
		canvas.setZoom(zoom);
	};
	setDrawingMode = (canvas, isDrawing) => {
		canvas.isDrawingMode = isDrawing;
	};
	setProperties = (canvas) => {
		this.setCanvasBrushColor(canvas, this.props.brushColor);
		this.setDrawingMode(canvas, this.props.isDrawing);
		this.setCanvasLineWidth(canvas, this.props.lineWidth);
	};
	saveCanvas = (canvas) => {
		this.props.saveCanvas(JSON.stringify(canvas));
	};
	undoCanvas = (canvas) => {
		canvas.undo();
	};
	setCanvasBrushColor = (canvas, color) => {
		canvas.freeDrawingBrush.color = color;
	};
	componentDidMount() {
		const canvas = new fabric.Canvas("canvas");
		this.setState(() => ({
			canvas,
		}));
		this.initializeCanvas(canvas);
	}
	componentWillUnmount() {
		this.cleanUpEvents();
	}
	render() {
		// return <canvas id='canvas'>Your browser does not support the HTML 5 canvas.</canvas>;
		return (
			<div className='canvas-wrapper'>
				<div id='CanvasToolbar' className='canvas-toolbar bg-secondary'>
					{this.props.isDrawing ? (
						<button
							title='Select objects'
							className='canvas-button'
							onClick={this.onClickSelectObjects}
						>
							<svg
								viewBox='0 0 16 16'
								className='icon-h'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M6.75 1a.75.75 0 0 0-.75.75V9.5a.5.5 0 0 1-.854.354l-2.41-2.411a.517.517 0 0 0-.809.631l2.512 4.185 1.232 2.465a.5.5 0 0 0 .447.276h6.302a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 1 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 1 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 1 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z'
								/>
							</svg>
						</button>
					) : (
						<button
							title='Use brush'
							className='canvas-button'
							onClick={this.onClickUseBrush}
						>
							<svg
								className='icon-h'
								viewBox='0 0 16 16'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z'
								/>
							</svg>
						</button>
					)}
					<button
						id='color-button'
						title='Show brush colors'
						className='canvas-button'
						onClick={this.onClickBrushColor}
					>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'
							/>
							<path
								fillRule='evenodd'
								d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'
							/>
						</svg>
					</button>
					{this.state.colorPickerOpen && (
						<div id='color-picker-container' className='canvas-toolbar__hidden'>
							<GithubPicker onChange={this.onColorChange} />
						</div>
					)}
					<button
						id='line-width-button'
						title='Show brush width options'
						className='canvas-button'
						onClick={this.onClickLineWidth}
					>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z' />
						</svg>
					</button>
					{this.state.lineWidthOpen && (
						<div id='line-width-container' className='canvas-toolbar__hidden'>
							<input
								type='range'
								min='1'
								max='50'
								value={this.props.lineWidth}
								onChange={this.onLineWidthChange}
							/>
						</div>
					)}
					<input
						id='image-upload'
						type='file'
						accept='image/*'
						onChange={this.onUploadImage}
					/>
					<button
						title='Upload image'
						className='canvas-button'
						onClick={this.onClickUpload}
					>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'
							/>
							<path
								fillRule='evenodd'
								d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z'
							/>
						</svg>
					</button>
					<button title='Undo' className='canvas-button' onClick={this.onClickUndo}>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z'
							/>
							<path d='M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z' />
						</svg>
					</button>
					<button title='Redo' className='canvas-button' onClick={this.onClickRedo}>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z'
							/>
							<path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z' />
						</svg>
					</button>
					<button title='Clear' className='canvas-button' onClick={this.onClickClear}>
						<svg
							viewBox='0 0 16 16'
							className='icon-h'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
							/>
						</svg>
					</button>
				</div>
				<div className='canvas-container__top'>
					<canvas id='canvas'>Your browser does not support the HTML 5 canvas.</canvas>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	canvas: state.canvas.canvas,
	brushColor: state.canvas.brushColor,
	isDrawing: state.canvas.isDrawing,
	lineWidth: state.canvas.lineWidth,
});

const mapDispatchToProps = (dispatch) => ({
	saveCanvas: (canvas) => dispatch(saveCanvas(canvas)),
	setBrushColor: (color) => dispatch(setBrushColor(color)),
	setIsDrawing: (isDrawing) => dispatch(setIsDrawing(isDrawing)),
	setLineWidth: (lineWidth) => dispatch(setLineWidth(lineWidth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
