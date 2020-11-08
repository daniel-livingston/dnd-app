(self["webpackChunkdnd"] = self["webpackChunkdnd"] || []).push([["src_components_CanvasView_js"],{

/***/ "./src/components/Canvas.js":
/*!**********************************!*\
  !*** ./src/components/Canvas.js ***!
  \**********************************/
/*! namespace exports */
/*! export Canvas [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => /* binding */ Canvas,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fabric_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fabric-history */ "./node_modules/fabric-history/src/index.min.js");
/* harmony import */ var fabric_history__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fabric_history__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* harmony import */ var _actions_canvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/canvas */ "./src/actions/canvas.js");
;








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Canvas = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Canvas, _React$Component);

  var _super = _createSuper(Canvas);

  function Canvas() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Canvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
      canvas: undefined,
      colorPickerOpen: false,
      lineWidthOpen: false,
      updatingFromOutside: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickBrushColor", function () {
      _this.setState(function (state) {
        return {
          colorPickerOpen: !state.colorPickerOpen
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickClear", function () {
      _this.clearCanvas(_this.state.canvas);

      _this.clearCanvasHistory(_this.state.canvas);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickLineWidth", function () {
      _this.setState(function (state) {
        return {
          lineWidthOpen: !state.lineWidthOpen
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickRedo", function () {
      _this.redoCanvas(_this.state.canvas);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickUndo", function () {
      _this.undoCanvas(_this.state.canvas);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickSelectObjects", function () {
      _this.props.setIsDrawing(false);

      _this.setDrawingMode(_this.state.canvas, false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickUpload", function () {
      document.getElementById("image-upload").click();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickUseBrush", function () {
      _this.props.setIsDrawing(true);

      _this.setDrawingMode(_this.state.canvas, true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onColorChange", function (color) {
      _this.props.setBrushColor(color.hex);

      _this.setState(function () {
        return {
          colorPickerOpen: false
        };
      });

      _this.setCanvasBrushColor(_this.state.canvas, color.hex);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onLineWidthChange", function (e) {
      var lineWidth = parseInt(e.target.value, 10);

      _this.props.setLineWidth(lineWidth);

      _this.setCanvasLineWidth(_this.state.canvas, lineWidth);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onUploadImage", function (e) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var imgObj = new Image();
        imgObj.src = event.target.result;

        imgObj.onload = function () {
          var image = new fabric__WEBPACK_IMPORTED_MODULE_10__.fabric.Image(imgObj);

          _this.addImageToCanvas(_this.state.canvas, image);
        };
      };

      reader.readAsDataURL(e.target.files[0]);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "addImageToCanvas", function (canvas, image) {
      image.scaleToHeight(canvas.getHeight());
      canvas.add(image);
      canvas.renderAll();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "clearCanvas", function (canvas) {
      canvas.clear();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "clearCanvasHistory", function (canvas) {
      canvas.clearHistory();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "deleteCanvasSelection", function (canvas) {
      canvas.remove(canvas.getActiveObject());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "initializeCanvas", function (canvas) {
      var container = document.getElementById("canvas").parentElement.parentElement;

      _this.setDimensions(container, canvas, true);

      _this.setProperties(canvas);

      _this.initializeEvents(canvas);

      _this.loadCanvas(canvas);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "initializeEvents", function (canvas) {
      var container = document.getElementById("canvas").parentElement.parentElement; // Window events

      var onWindowResize = function onWindowResize(e) {
        return _this.setDimensions(container, canvas, false);
      };

      var onWindowClick = function onWindowClick(e) {
        if (_this.state.colorPickerOpen) {
          var colorContainer = document.getElementById("color-picker-container");
          var colorButton = document.getElementById("color-button");

          if (!colorContainer.contains(e.target) && !colorButton.contains(e.target)) {
            _this.setState(function () {
              return {
                colorPickerOpen: false
              };
            });
          }
        }

        if (_this.state.lineWidthOpen) {
          var lineWidthContainer = document.getElementById("line-width-container");
          var lineWidthButton = document.getElementById("line-width-button");

          if (!lineWidthContainer.contains(e.target) && !lineWidthButton.contains(e.target)) {
            _this.setState(function () {
              return {
                lineWidthOpen: false
              };
            });
          }
        }
      };

      var onWindowKeyDown = function onWindowKeyDown(e) {
        var key = e.key;

        if (key === "Delete" || key === "Backspace") {
          // Delete selected object(s) in canvas
          var activeObject = canvas.getActiveObject();

          if (activeObject) {
            if (activeObject._objects) {
              activeObject._objects.forEach(function (obj) {
                canvas.remove(obj);
              });
            } else {
              canvas.remove(activeObject);
            }
          }
        } else if (key === "z" && e.ctrlKey) {
          _this.onClickUndo();
        } else if (key === "Z" && e.ctrlKey || key === "y" && e.ctrlKey) {
          _this.onClickRedo();
        }
      };

      window.addEventListener("resize", onWindowResize);
      window.addEventListener("click", onWindowClick);
      window.addEventListener("keydown", onWindowKeyDown); // Canvas events

      var onCanvasObjectAdded = function onCanvasObjectAdded() {
        _this.saveCanvas(canvas);
      };

      canvas.on("object:added", onCanvasObjectAdded); // Clean up events to be called in component will unmount

      _this.cleanUpEvents = function () {
        window.removeEventListener("resize", onWindowResize);
        window.removeEventListener("click", onWindowClick);
        window.removeEventListener("keydown", onWindowKeyDown);
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "loadCanvas", function (canvas) {
      if (_this.props.canvas) {
        canvas.loadFromJSON(_this.props.canvas);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "redoCanvas", function (canvas) {
      canvas.redo();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setCanvasLineWidth", function (canvas, lineWidth) {
      canvas.freeDrawingBrush.width = lineWidth;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setDimensions", function (container, canvas, isFirstSizing) {
      var getWidescreenDimensions = function getWidescreenDimensions(container, RES_WIDTH, RES_HEIGHT) {
        var width = container.clientWidth;
        var height = container.clientHeight;
        var desiredHeight, desiredWidth;

        if (width / height >= RES_WIDTH / RES_HEIGHT) {
          desiredHeight = Math.floor(height / RES_HEIGHT) * RES_HEIGHT;
          desiredWidth = RES_WIDTH * height / RES_HEIGHT;
        } else {
          desiredWidth = Math.floor(width / RES_WIDTH) * RES_WIDTH;
          desiredHeight = RES_HEIGHT * width / RES_WIDTH;
        }

        return [desiredWidth, desiredHeight];
      };

      var _getWidescreenDimensi = getWidescreenDimensions(container, 16, 9),
          _getWidescreenDimensi2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getWidescreenDimensi, 2),
          width = _getWidescreenDimensi2[0],
          height = _getWidescreenDimensi2[1];

      var oldWidth = canvas.getWidth();
      var ratio = width / oldWidth;
      var zoom = isFirstSizing ? 1 : canvas.getZoom() * ratio;
      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.calcOffset();
      canvas.setZoom(zoom);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setDrawingMode", function (canvas, isDrawing) {
      canvas.isDrawingMode = isDrawing;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setProperties", function (canvas) {
      _this.setCanvasBrushColor(canvas, _this.props.brushColor);

      _this.setDrawingMode(canvas, _this.props.isDrawing);

      _this.setCanvasLineWidth(canvas, _this.props.lineWidth);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "saveCanvas", function (canvas) {
      _this.props.saveCanvas(JSON.stringify(canvas));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "undoCanvas", function (canvas) {
      canvas.undo();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "setCanvasBrushColor", function (canvas, color) {
      canvas.freeDrawingBrush.color = color;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var canvas = new fabric__WEBPACK_IMPORTED_MODULE_10__.fabric.Canvas("canvas");
      this.setState(function () {
        return {
          canvas: canvas
        };
      });
      this.initializeCanvas(canvas);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpEvents();
    }
  }, {
    key: "render",
    value: function render() {
      // return <canvas id='canvas'>Your browser does not support the HTML 5 canvas.</canvas>;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "canvas-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "canvas-toolbar"
      }, this.props.isDrawing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Select objects",
        className: "canvas-toolbar__button",
        onClick: this.onClickSelectObjects
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M6.75 1a.75.75 0 0 0-.75.75V9.5a.5.5 0 0 1-.854.354l-2.41-2.411a.517.517 0 0 0-.809.631l2.512 4.185 1.232 2.465a.5.5 0 0 0 .447.276h6.302a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 1 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 1 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 1 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Use brush",
        className: "canvas-toolbar__button",
        onClick: this.onClickUseBrush
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        className: "canvas-toolbar__icon",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        id: "color-button",
        title: "Show brush colors",
        className: "canvas-toolbar__button",
        onClick: this.onClickBrushColor
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
      }))), this.state.colorPickerOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        id: "color-picker-container",
        className: "canvas-toolbar__hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_color__WEBPACK_IMPORTED_MODULE_12__.GithubPicker, {
        onChange: this.onColorChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        id: "line-width-button",
        title: "Show brush width options",
        className: "canvas-toolbar__button",
        onClick: this.onClickLineWidth
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        d: "M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      }))), this.state.lineWidthOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        id: "line-width-container",
        className: "canvas-toolbar__hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("input", {
        type: "range",
        min: "1",
        max: "50",
        value: this.props.lineWidth,
        onChange: this.onLineWidthChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("input", {
        id: "image-upload",
        type: "file",
        accept: "image/*",
        onChange: this.onUploadImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Upload image",
        className: "canvas-toolbar__button",
        onClick: this.onClickUpload
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Undo",
        className: "canvas-toolbar__button",
        onClick: this.onClickUndo
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Redo",
        className: "canvas-toolbar__button",
        onClick: this.onClickRedo
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", {
        title: "Clear",
        className: "canvas-toolbar__button",
        onClick: this.onClickClear
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("svg", {
        viewBox: "0 0 16 16",
        className: "canvas-toolbar__icon",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("path", {
        fillRule: "evenodd",
        d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "canvas-container__top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("canvas", {
        id: "canvas"
      }, "Your browser does not support the HTML 5 canvas.")));
    }
  }]);

  return Canvas;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    canvas: state.canvas.canvas,
    brushColor: state.canvas.brushColor,
    isDrawing: state.canvas.isDrawing,
    lineWidth: state.canvas.lineWidth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveCanvas: function saveCanvas(canvas) {
      return dispatch((0,_actions_canvas__WEBPACK_IMPORTED_MODULE_13__.saveCanvas)(canvas));
    },
    setBrushColor: function setBrushColor(color) {
      return dispatch((0,_actions_canvas__WEBPACK_IMPORTED_MODULE_13__.setBrushColor)(color));
    },
    setIsDrawing: function setIsDrawing(isDrawing) {
      return dispatch((0,_actions_canvas__WEBPACK_IMPORTED_MODULE_13__.setIsDrawing)(isDrawing));
    },
    setLineWidth: function setLineWidth(lineWidth) {
      return dispatch((0,_actions_canvas__WEBPACK_IMPORTED_MODULE_13__.setLineWidth)(lineWidth));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(mapStateToProps, mapDispatchToProps)(Canvas));

/***/ }),

/***/ "./src/components/CanvasView.js":
/*!**************************************!*\
  !*** ./src/components/CanvasView.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/components/Canvas.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
;



var CanvasView = function CanvasView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Canvas",
    description: "Draw with others in the party to show a map, a scene, or to just have fun."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Canvas__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasView);

/***/ }),

/***/ "./src/components/View.js":
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/*! namespace exports */
/*! export View [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => /* binding */ View,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTitle */ "./src/hooks/useTitle.js");
;




var propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
var View = function View(props) {
  (0,_hooks_useTitle__WEBPACK_IMPORTED_MODULE_3__.default)(props.title);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content__header__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "content__header__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "content__header__description"
  }, props.description)), props.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "link",
    to: "/"
  }, props.username) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "link",
    to: "/login"
  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content__body"
  }, props.children));
};
View.propTypes = propTypes;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(View));

/***/ }),

/***/ "./src/hooks/useTitle.js":
/*!*******************************!*\
  !*** ./src/hooks/useTitle.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
;

var useTitle = function useTitle(title) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "DnD App | ".concat(title);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTitle);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9WaWV3LmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9ob29rcy91c2VUaXRsZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJjYW52YXMiLCJ1bmRlZmluZWQiLCJjb2xvclBpY2tlck9wZW4iLCJsaW5lV2lkdGhPcGVuIiwidXBkYXRpbmdGcm9tT3V0c2lkZSIsInNldFN0YXRlIiwic3RhdGUiLCJjbGVhckNhbnZhcyIsImNsZWFyQ2FudmFzSGlzdG9yeSIsInJlZG9DYW52YXMiLCJ1bmRvQ2FudmFzIiwicHJvcHMiLCJzZXRJc0RyYXdpbmciLCJzZXREcmF3aW5nTW9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImNvbG9yIiwic2V0QnJ1c2hDb2xvciIsImhleCIsInNldENhbnZhc0JydXNoQ29sb3IiLCJlIiwibGluZVdpZHRoIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldExpbmVXaWR0aCIsInNldENhbnZhc0xpbmVXaWR0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImltZ09iaiIsIkltYWdlIiwic3JjIiwicmVzdWx0IiwiaW1hZ2UiLCJmYWJyaWMiLCJhZGRJbWFnZVRvQ2FudmFzIiwicmVhZEFzRGF0YVVSTCIsImZpbGVzIiwic2NhbGVUb0hlaWdodCIsImdldEhlaWdodCIsImFkZCIsInJlbmRlckFsbCIsImNsZWFyIiwiY2xlYXJIaXN0b3J5IiwicmVtb3ZlIiwiZ2V0QWN0aXZlT2JqZWN0IiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsInNldERpbWVuc2lvbnMiLCJzZXRQcm9wZXJ0aWVzIiwiaW5pdGlhbGl6ZUV2ZW50cyIsImxvYWRDYW52YXMiLCJvbldpbmRvd1Jlc2l6ZSIsIm9uV2luZG93Q2xpY2siLCJjb2xvckNvbnRhaW5lciIsImNvbG9yQnV0dG9uIiwiY29udGFpbnMiLCJsaW5lV2lkdGhDb250YWluZXIiLCJsaW5lV2lkdGhCdXR0b24iLCJvbldpbmRvd0tleURvd24iLCJrZXkiLCJhY3RpdmVPYmplY3QiLCJfb2JqZWN0cyIsImZvckVhY2giLCJvYmoiLCJjdHJsS2V5Iiwib25DbGlja1VuZG8iLCJvbkNsaWNrUmVkbyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNhbnZhc09iamVjdEFkZGVkIiwic2F2ZUNhbnZhcyIsIm9uIiwiY2xlYW5VcEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2FkRnJvbUpTT04iLCJyZWRvIiwiZnJlZURyYXdpbmdCcnVzaCIsIndpZHRoIiwiaXNGaXJzdFNpemluZyIsImdldFdpZGVzY3JlZW5EaW1lbnNpb25zIiwiUkVTX1dJRFRIIiwiUkVTX0hFSUdIVCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGVzaXJlZEhlaWdodCIsImRlc2lyZWRXaWR0aCIsIk1hdGgiLCJmbG9vciIsIm9sZFdpZHRoIiwiZ2V0V2lkdGgiLCJyYXRpbyIsInpvb20iLCJnZXRab29tIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJjYWxjT2Zmc2V0Iiwic2V0Wm9vbSIsImlzRHJhd2luZyIsImlzRHJhd2luZ01vZGUiLCJicnVzaENvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZG8iLCJpbml0aWFsaXplQ2FudmFzIiwib25DbGlja1NlbGVjdE9iamVjdHMiLCJvbkNsaWNrVXNlQnJ1c2giLCJvbkNsaWNrQnJ1c2hDb2xvciIsIm9uQ29sb3JDaGFuZ2UiLCJvbkNsaWNrTGluZVdpZHRoIiwib25MaW5lV2lkdGhDaGFuZ2UiLCJvblVwbG9hZEltYWdlIiwib25DbGlja1VwbG9hZCIsIm9uQ2xpY2tDbGVhciIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0IiwiQ2FudmFzVmlldyIsInByb3BUeXBlcyIsInRpdGxlIiwiUHJvcFR5cGVzIiwiZGVzY3JpcHRpb24iLCJpc1JlcXVpcmVkIiwiVmlldyIsInVzZVRpdGxlIiwiaXNMb2dnZWRJbiIsInVzZXJuYW1lIiwiY2hpbGRyZW4iLCJ1c2VyIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxzTEFDUztBQUNQQyxZQUFNLEVBQUVDLFNBREQ7QUFFUEMscUJBQWUsRUFBRSxLQUZWO0FBR1BDLG1CQUFhLEVBQUUsS0FIUjtBQUlQQyx5QkFBbUIsRUFBRTtBQUpkLEtBRFQ7O0FBQUEsa01BV3FCLFlBQU07QUFDekIsWUFBS0MsUUFBTCxDQUFjLFVBQUNDLEtBQUQ7QUFBQSxlQUFZO0FBQ3pCSix5QkFBZSxFQUFFLENBQUNJLEtBQUssQ0FBQ0o7QUFEQyxTQUFaO0FBQUEsT0FBZDtBQUdBLEtBZkY7O0FBQUEsNkxBZ0JnQixZQUFNO0FBQ3BCLFlBQUtLLFdBQUwsQ0FBaUIsTUFBS0QsS0FBTCxDQUFXTixNQUE1Qjs7QUFDQSxZQUFLUSxrQkFBTCxDQUF3QixNQUFLRixLQUFMLENBQVdOLE1BQW5DO0FBQ0EsS0FuQkY7O0FBQUEsaU1Bb0JvQixZQUFNO0FBQ3hCLFlBQUtLLFFBQUwsQ0FBYyxVQUFDQyxLQUFEO0FBQUEsZUFBWTtBQUN6QkgsdUJBQWEsRUFBRSxDQUFDRyxLQUFLLENBQUNIO0FBREcsU0FBWjtBQUFBLE9BQWQ7QUFHQSxLQXhCRjs7QUFBQSw0TEF5QmUsWUFBTTtBQUNuQixZQUFLTSxVQUFMLENBQWdCLE1BQUtILEtBQUwsQ0FBV04sTUFBM0I7QUFDQSxLQTNCRjs7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QXhCOztBQUtBLGlFQUFlVixvREFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJVLElBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsS0FBRCxFQUFXO0FBQzNCVSxrREFBUyxDQUFDLFlBQU07QUFDZnpILFlBQVEsQ0FBQytHLEtBQVQsdUJBQThCQSxLQUE5QjtBQUNBLEdBRlEsQ0FBVDtBQUdBLENBSkQ7O0FBTUEsaUVBQWVLLFFBQWYsRSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19DYW52YXNWaWV3X2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBmYWJyaWMgfSBmcm9tIFwiZmFicmljXCI7XHJcbmltcG9ydCBcImZhYnJpYy1oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEdpdGh1YlBpY2tlciB9IGZyb20gXCJyZWFjdC1jb2xvclwiO1xyXG5pbXBvcnQgeyBzYXZlQ2FudmFzLCBzZXRCcnVzaENvbG9yLCBzZXRMaW5lV2lkdGgsIHNldElzRHJhd2luZyB9IGZyb20gXCIuLi9hY3Rpb25zL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRjYW52YXM6IHVuZGVmaW5lZCxcclxuXHRcdGNvbG9yUGlja2VyT3BlbjogZmFsc2UsXHJcblx0XHRsaW5lV2lkdGhPcGVuOiBmYWxzZSxcclxuXHRcdHVwZGF0aW5nRnJvbU91dHNpZGU6IGZhbHNlLFxyXG5cdH07XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdCAqIENhbnZhcyBUb29sYmFyXHJcblx0ICovXHJcblx0b25DbGlja0JydXNoQ29sb3IgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuXHRcdFx0Y29sb3JQaWNrZXJPcGVuOiAhc3RhdGUuY29sb3JQaWNrZXJPcGVuLFxyXG5cdFx0fSkpO1xyXG5cdH07XHJcblx0b25DbGlja0NsZWFyID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5jbGVhckNhbnZhcyh0aGlzLnN0YXRlLmNhbnZhcyk7XHJcblx0XHR0aGlzLmNsZWFyQ2FudmFzSGlzdG9yeSh0aGlzLnN0YXRlLmNhbnZhcyk7XHJcblx0fTtcclxuXHRvbkNsaWNrTGluZVdpZHRoID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcblx0XHRcdGxpbmVXaWR0aE9wZW46ICFzdGF0ZS5saW5lV2lkdGhPcGVuLFxyXG5cdFx0fSkpO1xyXG5cdH07XHJcblx0b25DbGlja1JlZG8gPSAoKSA9PiB7XHJcblx0XHR0aGlzLnJlZG9DYW52YXModGhpcy5zdGF0ZS5jYW52YXMpO1xyXG5cdH07XHJcblx0b25DbGlja1VuZG8gPSAoKSA9PiB7XHJcblx0XHR0aGlzLnVuZG9DYW52YXModGhpcy5zdGF0ZS5jYW52YXMpO1xyXG5cdH07XHJcblx0b25DbGlja1NlbGVjdE9iamVjdHMgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLnNldElzRHJhd2luZyhmYWxzZSk7XHJcblx0XHR0aGlzLnNldERyYXdpbmdNb2RlKHRoaXMuc3RhdGUuY2FudmFzLCBmYWxzZSk7XHJcblx0fTtcclxuXHRvbkNsaWNrVXBsb2FkID0gKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS11cGxvYWRcIikuY2xpY2soKTtcclxuXHR9O1xyXG5cdG9uQ2xpY2tVc2VCcnVzaCA9ICgpID0+IHtcclxuXHRcdHRoaXMucHJvcHMuc2V0SXNEcmF3aW5nKHRydWUpO1xyXG5cdFx0dGhpcy5zZXREcmF3aW5nTW9kZSh0aGlzLnN0YXRlLmNhbnZhcywgdHJ1ZSk7XHJcblx0fTtcclxuXHRvbkNvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLnNldEJydXNoQ29sb3IoY29sb3IuaGV4KTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuXHRcdFx0Y29sb3JQaWNrZXJPcGVuOiBmYWxzZSxcclxuXHRcdH0pKTtcclxuXHRcdHRoaXMuc2V0Q2FudmFzQnJ1c2hDb2xvcih0aGlzLnN0YXRlLmNhbnZhcywgY29sb3IuaGV4KTtcclxuXHR9O1xyXG5cdG9uTGluZVdpZHRoQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IGxpbmVXaWR0aCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcblx0XHR0aGlzLnByb3BzLnNldExpbmVXaWR0aChsaW5lV2lkdGgpO1xyXG5cdFx0dGhpcy5zZXRDYW52YXNMaW5lV2lkdGgodGhpcy5zdGF0ZS5jYW52YXMsIGxpbmVXaWR0aCk7XHJcblx0fTtcclxuXHRvblVwbG9hZEltYWdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblx0XHRyZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdGNvbnN0IGltZ09iaiA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWdPYmouc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuXHRcdFx0aW1nT2JqLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1nT2JqKTtcclxuXHRcdFx0XHR0aGlzLmFkZEltYWdlVG9DYW52YXModGhpcy5zdGF0ZS5jYW52YXMsIGltYWdlKTtcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblx0fTtcclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0ICogQ2FudmFzXHJcblx0ICovXHJcblx0YWRkSW1hZ2VUb0NhbnZhcyA9IChjYW52YXMsIGltYWdlKSA9PiB7XHJcblx0XHRpbWFnZS5zY2FsZVRvSGVpZ2h0KGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblx0XHRjYW52YXMuYWRkKGltYWdlKTtcclxuXHRcdGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuXHR9O1xyXG5cdGNsZWFyQ2FudmFzID0gKGNhbnZhcykgPT4ge1xyXG5cdFx0Y2FudmFzLmNsZWFyKCk7XHJcblx0fTtcclxuXHRjbGVhckNhbnZhc0hpc3RvcnkgPSAoY2FudmFzKSA9PiB7XHJcblx0XHRjYW52YXMuY2xlYXJIaXN0b3J5KCk7XHJcblx0fTtcclxuXHRkZWxldGVDYW52YXNTZWxlY3Rpb24gPSAoY2FudmFzKSA9PiB7XHJcblx0XHRjYW52YXMucmVtb3ZlKGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKSk7XHJcblx0fTtcclxuXHRpbml0aWFsaXplQ2FudmFzID0gKGNhbnZhcykgPT4ge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0dGhpcy5zZXREaW1lbnNpb25zKGNvbnRhaW5lciwgY2FudmFzLCB0cnVlKTtcclxuXHRcdHRoaXMuc2V0UHJvcGVydGllcyhjYW52YXMpO1xyXG5cdFx0dGhpcy5pbml0aWFsaXplRXZlbnRzKGNhbnZhcyk7XHJcblx0XHR0aGlzLmxvYWRDYW52YXMoY2FudmFzKTtcclxuXHR9O1xyXG5cdGluaXRpYWxpemVFdmVudHMgPSAoY2FudmFzKSA9PiB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gV2luZG93IGV2ZW50c1xyXG5cdFx0Y29uc3Qgb25XaW5kb3dSZXNpemUgPSAoZSkgPT4gdGhpcy5zZXREaW1lbnNpb25zKGNvbnRhaW5lciwgY2FudmFzLCBmYWxzZSk7XHJcblx0XHRjb25zdCBvbldpbmRvd0NsaWNrID0gKGUpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuY29sb3JQaWNrZXJPcGVuKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yLXBpY2tlci1jb250YWluZXJcIik7XHJcblx0XHRcdFx0Y29uc3QgY29sb3JCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yLWJ1dHRvblwiKTtcclxuXHRcdFx0XHRpZiAoIWNvbG9yQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY29sb3JCdXR0b24uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcblx0XHRcdFx0XHRcdGNvbG9yUGlja2VyT3BlbjogZmFsc2UsXHJcblx0XHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnN0YXRlLmxpbmVXaWR0aE9wZW4pIHtcclxuXHRcdFx0XHRjb25zdCBsaW5lV2lkdGhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtd2lkdGgtY29udGFpbmVyXCIpO1xyXG5cdFx0XHRcdGNvbnN0IGxpbmVXaWR0aEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS13aWR0aC1idXR0b25cIik7XHJcblx0XHRcdFx0aWYgKCFsaW5lV2lkdGhDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmICFsaW5lV2lkdGhCdXR0b24uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcblx0XHRcdFx0XHRcdGxpbmVXaWR0aE9wZW46IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IG9uV2luZG93S2V5RG93biA9IChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGtleSA9IGUua2V5O1xyXG5cdFx0XHRpZiAoa2V5ID09PSBcIkRlbGV0ZVwiIHx8IGtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG5cdFx0XHRcdC8vIERlbGV0ZSBzZWxlY3RlZCBvYmplY3QocykgaW4gY2FudmFzXHJcblx0XHRcdFx0Y29uc3QgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG5cdFx0XHRcdGlmIChhY3RpdmVPYmplY3QpIHtcclxuXHRcdFx0XHRcdGlmIChhY3RpdmVPYmplY3QuX29iamVjdHMpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlT2JqZWN0Ll9vYmplY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNhbnZhcy5yZW1vdmUob2JqKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjYW52YXMucmVtb3ZlKGFjdGl2ZU9iamVjdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gXCJ6XCIgJiYgZS5jdHJsS2V5KSB7XHJcblx0XHRcdFx0dGhpcy5vbkNsaWNrVW5kbygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKChrZXkgPT09IFwiWlwiICYmIGUuY3RybEtleSkgfHwgKGtleSA9PT0gXCJ5XCIgJiYgZS5jdHJsS2V5KSkge1xyXG5cdFx0XHRcdHRoaXMub25DbGlja1JlZG8oKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25XaW5kb3dDbGljayk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25XaW5kb3dLZXlEb3duKTtcclxuXHJcblx0XHQvLyBDYW52YXMgZXZlbnRzXHJcblx0XHRjb25zdCBvbkNhbnZhc09iamVjdEFkZGVkID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNhdmVDYW52YXMoY2FudmFzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y2FudmFzLm9uKFwib2JqZWN0OmFkZGVkXCIsIG9uQ2FudmFzT2JqZWN0QWRkZWQpO1xyXG5cclxuXHRcdC8vIENsZWFuIHVwIGV2ZW50cyB0byBiZSBjYWxsZWQgaW4gY29tcG9uZW50IHdpbGwgdW5tb3VudFxyXG5cdFx0dGhpcy5jbGVhblVwRXZlbnRzID0gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25XaW5kb3dDbGljayk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbldpbmRvd0tleURvd24pO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cdGxvYWRDYW52YXMgPSAoY2FudmFzKSA9PiB7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5jYW52YXMpIHtcclxuXHRcdFx0Y2FudmFzLmxvYWRGcm9tSlNPTih0aGlzLnByb3BzLmNhbnZhcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZWRvQ2FudmFzID0gKGNhbnZhcykgPT4ge1xyXG5cdFx0Y2FudmFzLnJlZG8oKTtcclxuXHR9O1xyXG5cdHNldENhbnZhc0xpbmVXaWR0aCA9IChjYW52YXMsIGxpbmVXaWR0aCkgPT4ge1xyXG5cdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSBsaW5lV2lkdGg7XHJcblx0fTtcclxuXHRzZXREaW1lbnNpb25zID0gKGNvbnRhaW5lciwgY2FudmFzLCBpc0ZpcnN0U2l6aW5nKSA9PiB7XHJcblx0XHRjb25zdCBnZXRXaWRlc2NyZWVuRGltZW5zaW9ucyA9IChjb250YWluZXIsIFJFU19XSURUSCwgUkVTX0hFSUdIVCkgPT4ge1xyXG5cdFx0XHRjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuXHRcdFx0Y29uc3QgaGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcblx0XHRcdGxldCBkZXNpcmVkSGVpZ2h0LCBkZXNpcmVkV2lkdGg7XHJcblxyXG5cdFx0XHRpZiAod2lkdGggLyBoZWlnaHQgPj0gUkVTX1dJRFRIIC8gUkVTX0hFSUdIVCkge1xyXG5cdFx0XHRcdGRlc2lyZWRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAvIFJFU19IRUlHSFQpICogUkVTX0hFSUdIVDtcclxuXHRcdFx0XHRkZXNpcmVkV2lkdGggPSAoUkVTX1dJRFRIICogaGVpZ2h0KSAvIFJFU19IRUlHSFQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGVzaXJlZFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAvIFJFU19XSURUSCkgKiBSRVNfV0lEVEg7XHJcblx0XHRcdFx0ZGVzaXJlZEhlaWdodCA9IChSRVNfSEVJR0hUICogd2lkdGgpIC8gUkVTX1dJRFRIO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBbZGVzaXJlZFdpZHRoLCBkZXNpcmVkSGVpZ2h0XTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gZ2V0V2lkZXNjcmVlbkRpbWVuc2lvbnMoY29udGFpbmVyLCAxNiwgOSk7XHJcblx0XHRjb25zdCBvbGRXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xyXG5cdFx0Y29uc3QgcmF0aW8gPSB3aWR0aCAvIG9sZFdpZHRoO1xyXG5cdFx0Y29uc3Qgem9vbSA9IGlzRmlyc3RTaXppbmcgPyAxIDogY2FudmFzLmdldFpvb20oKSAqIHJhdGlvO1xyXG5cdFx0Y2FudmFzLnNldFdpZHRoKHdpZHRoKTtcclxuXHRcdGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHRcdGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblx0XHRjYW52YXMuc2V0Wm9vbSh6b29tKTtcclxuXHR9O1xyXG5cdHNldERyYXdpbmdNb2RlID0gKGNhbnZhcywgaXNEcmF3aW5nKSA9PiB7XHJcblx0XHRjYW52YXMuaXNEcmF3aW5nTW9kZSA9IGlzRHJhd2luZztcclxuXHR9O1xyXG5cdHNldFByb3BlcnRpZXMgPSAoY2FudmFzKSA9PiB7XHJcblx0XHR0aGlzLnNldENhbnZhc0JydXNoQ29sb3IoY2FudmFzLCB0aGlzLnByb3BzLmJydXNoQ29sb3IpO1xyXG5cdFx0dGhpcy5zZXREcmF3aW5nTW9kZShjYW52YXMsIHRoaXMucHJvcHMuaXNEcmF3aW5nKTtcclxuXHRcdHRoaXMuc2V0Q2FudmFzTGluZVdpZHRoKGNhbnZhcywgdGhpcy5wcm9wcy5saW5lV2lkdGgpO1xyXG5cdH07XHJcblx0c2F2ZUNhbnZhcyA9IChjYW52YXMpID0+IHtcclxuXHRcdHRoaXMucHJvcHMuc2F2ZUNhbnZhcyhKU09OLnN0cmluZ2lmeShjYW52YXMpKTtcclxuXHR9O1xyXG5cdHVuZG9DYW52YXMgPSAoY2FudmFzKSA9PiB7XHJcblx0XHRjYW52YXMudW5kbygpO1xyXG5cdH07XHJcblx0c2V0Q2FudmFzQnJ1c2hDb2xvciA9IChjYW52YXMsIGNvbG9yKSA9PiB7XHJcblx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC5jb2xvciA9IGNvbG9yO1xyXG5cdH07XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zdCBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhcImNhbnZhc1wiKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuXHRcdFx0Y2FudmFzLFxyXG5cdFx0fSkpO1xyXG5cdFx0dGhpcy5pbml0aWFsaXplQ2FudmFzKGNhbnZhcyk7XHJcblx0fVxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5jbGVhblVwRXZlbnRzKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdC8vIHJldHVybiA8Y2FudmFzIGlkPSdjYW52YXMnPllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBIVE1MIDUgY2FudmFzLjwvY2FudmFzPjtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYW52YXMtd3JhcHBlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhbnZhcy10b29sYmFyJz5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzRHJhd2luZyA/IChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPSdTZWxlY3Qgb2JqZWN0cydcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NhbnZhcy10b29sYmFyX19idXR0b24nXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNsaWNrU2VsZWN0T2JqZWN0c31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAxNiAxNidcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2ljb24nXHJcblx0XHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQ9J002Ljc1IDFhLjc1Ljc1IDAgMCAwLS43NS43NVY5LjVhLjUuNSAwIDAgMS0uODU0LjM1NGwtMi40MS0yLjQxMWEuNTE3LjUxNyAwIDAgMC0uODA5LjYzMWwyLjUxMiA0LjE4NSAxLjIzMiAyLjQ2NWEuNS41IDAgMCAwIC40NDcuMjc2aDYuMzAyYS41LjUgMCAwIDAgLjQzNC0uMjUybDEuMzk1LTIuNDQyYTIuNSAyLjUgMCAwIDAgLjMxNy0uOTkxbC4yNzItMi43MTVhMSAxIDAgMCAwLS45OTUtMS4xSDEzLjV2MWEuNS41IDAgMSAxLTEgMFY3LjE1NGE0LjIwOCA0LjIwOCAwIDAgMC0uMi0uMjZjLS4xODctLjIyMi0uMzY4LS4zODMtLjQ4Ni0uNDMtLjEyNC0uMDUtLjM5Mi0uMDYzLS43MDgtLjAzOWE0Ljg0NCA0Ljg0NCAwIDAgMC0uMTA2LjAxVjhhLjUuNSAwIDEgMS0xIDBWNS45ODZjMC0uMTY3LS4wNzMtLjI3Mi0uMTUtLjMxNGExLjY1NyAxLjY1NyAwIDAgMC0uNDQ4LS4xODJjLS4xNzktLjAzNS0uNS0uMDQtLjgxNi0uMDI3bC0uMDg2LjAwNFY4YS41LjUgMCAxIDEtMSAwVjEuNzVBLjc1Ljc1IDAgMCAwIDYuNzUgMXpNOC41IDQuNDY2VjEuNzVhMS43NSAxLjc1IDAgMSAwLTMuNSAwdjYuNTQzTDMuNDQzIDYuNzM2QTEuNTE3IDEuNTE3IDAgMCAwIDEuMDcgOC41ODhsMi40OTEgNC4xNTMgMS4yMTUgMi40M0ExLjUgMS41IDAgMCAwIDYuMTE4IDE2aDYuMzAyYTEuNSAxLjUgMCAwIDAgMS4zMDItLjc1NmwxLjM5NS0yLjQ0MWEzLjUgMy41IDAgMCAwIC40NDQtMS4zODlsLjI3Mi0yLjcxNWEyIDIgMCAwIDAtMS45OS0yLjE5OWgtLjU4MmE1LjExNCA1LjExNCAwIDAgMC0uMTk1LS4yNDhjLS4xOTEtLjIyOS0uNTEtLjU2OC0uODgtLjcxNi0uMzY0LS4xNDYtLjg0Ni0uMTMyLTEuMTU4LS4xMDhsLS4xMzIuMDEyYTEuMjYgMS4yNiAwIDAgMC0uNTYtLjY0MiAyLjYzNCAyLjYzNCAwIDAgMC0uNzM4LS4yODhjLS4zMS0uMDYyLS43MzktLjA1OC0xLjA1LS4wNDZsLS4wNDguMDAyem0yLjA5NCAyLjAyNXonXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0aXRsZT0nVXNlIGJydXNoJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2xpY2tVc2VCcnVzaH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2ljb24nXHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnXHJcblx0XHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQ9J00xNS44MjUuMTJhLjUuNSAwIDAgMSAuMTMyLjU4NGMtMS41MyAzLjQzLTQuNzQzIDguMTctNy4wOTUgMTAuNjRhNi4wNjcgNi4wNjcgMCAwIDEtMi4zNzMgMS41MzRjLS4wMTguMjI3LS4wNi41MzgtLjE2Ljg2OC0uMjAxLjY1OS0uNjY3IDEuNDc5LTEuNzA4IDEuNzRhOC4xMTcgOC4xMTcgMCAwIDEtMy4wNzguMTMyIDMuNjU4IDMuNjU4IDAgMCAxLS41NjMtLjEzNSAxLjM4MiAxLjM4MiAwIDAgMS0uNDY1LS4yNDcuNzE0LjcxNCAwIDAgMS0uMjA0LS4yODguNjIyLjYyMiAwIDAgMSAuMDA0LS40NDNjLjA5NS0uMjQ1LjMxNi0uMzguNDYxLS40NTIuMzkzLS4xOTcuNjI1LS40NTMuODY3LS44MjYuMDk0LS4xNDQuMTg0LS4yOTcuMjg3LS40NzJsLjExNy0uMTk4Yy4xNTEtLjI1NS4zMjYtLjU0LjU0Ni0uODQ4LjUyOC0uNzM5IDEuMi0uOTI1IDEuNzQ2LS44OTYuMTI2LjAwNy4yNDMuMDI1LjM0OC4wNDguMDYyLS4xNzIuMTQyLS4zOC4yMzgtLjYwOC4yNjEtLjYxOS42NTgtMS40MTkgMS4xODctMi4wNjkgMi4xNzUtMi42NyA2LjE4LTYuMjA2IDkuMTE3LTguMTA0YS41LjUgMCAwIDEgLjU5Ni4wNHpNNC43MDUgMTEuOTEyYTEuMjMgMS4yMyAwIDAgMC0uNDE5LS4xYy0uMjQ3LS4wMTMtLjU3NC4wNS0uODguNDc5YTExLjAxIDExLjAxIDAgMCAwLS41Ljc3N2wtLjEwNC4xNzdjLS4xMDcuMTgxLS4yMTMuMzYyLS4zMi41MjgtLjIwNi4zMTctLjQzOC42MS0uNzYuODYxYTcuMTI3IDcuMTI3IDAgMCAwIDIuNjU3LS4xMmMuNTU5LS4xMzkuODQzLS41NjkuOTkzLTEuMDZhMy4xMjEgMy4xMjEgMCAwIDAgLjEyNi0uNzVsLS43OTMtLjc5MnptMS40NC4wMjZjLjEyLS4wNC4yNzctLjEuNDU4LS4xODNhNS4wNjggNS4wNjggMCAwIDAgMS41MzUtMS4xYzEuOS0xLjk5NiA0LjQxMi01LjU3IDYuMDUyLTguNjMxLTIuNTkxIDEuOTI3LTUuNTY2IDQuNjYtNy4zMDIgNi43OTItLjQ0Mi41NDMtLjc5NiAxLjI0My0xLjA0MiAxLjgyNmExMS41MDcgMTEuNTA3IDAgMCAwLS4yNzYuNzIxbC41NzUuNTc1em0tNC45NzMgMy4wNGwuMDA3LS4wMDVhLjAzMS4wMzEgMCAwIDEtLjAwNy4wMDR6bTMuNTgyLTMuMDQzbC4wMDIuMDAxaC0uMDAyeidcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0aWQ9J2NvbG9yLWJ1dHRvbidcclxuXHRcdFx0XHRcdFx0dGl0bGU9J1Nob3cgYnJ1c2ggY29sb3JzJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NhbnZhcy10b29sYmFyX19idXR0b24nXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25DbGlja0JydXNoQ29sb3J9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9faWNvbidcclxuXHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRkPSdNNy4yMS44QzcuNjkuMjk1IDggMCA4IDBjLjEwOS4zNjMuMjM0LjcwOC4zNzEgMS4wMzguODEyIDEuOTQ2IDIuMDczIDMuMzUgMy4xOTcgNC42QzEyLjg3OCA3LjA5NiAxNCA4LjM0NSAxNCAxMGE2IDYgMCAwIDEtMTIgMEMyIDYuNjY4IDUuNTggMi41MTcgNy4yMS44em0uNDEzIDEuMDIxQTMxLjI1IDMxLjI1IDAgMCAwIDUuNzk0IDMuOTljLS43MjYuOTUtMS40MzYgMi4wMDgtMS45NiAzLjA3QzMuMzA0IDguMTMzIDMgOS4xMzggMyAxMGE1IDUgMCAwIDAgMTAgMGMwLTEuMjAxLS43OTYtMi4xNTctMi4xODEtMy43bC0uMDMtLjAzMkM5Ljc1IDUuMTEgOC41IDMuNzIgNy42MjMgMS44MnonXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRkPSdNNC41NTMgNy43NzZjLjgyLTEuNjQxIDEuNzE3LTIuNzUzIDIuMDkzLTMuMTNsLjcwOC43MDhjLS4yOS4yOS0xLjEyOCAxLjMxMS0xLjkwNyAyLjg3bC0uODk0LS40NDh6J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5jb2xvclBpY2tlck9wZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdjb2xvci1waWNrZXItY29udGFpbmVyJyBjbGFzc05hbWU9J2NhbnZhcy10b29sYmFyX19oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxHaXRodWJQaWNrZXIgb25DaGFuZ2U9e3RoaXMub25Db2xvckNoYW5nZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpZD0nbGluZS13aWR0aC1idXR0b24nXHJcblx0XHRcdFx0XHRcdHRpdGxlPSdTaG93IGJydXNoIHdpZHRoIG9wdGlvbnMnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNsaWNrTGluZVdpZHRofVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdFx0dmlld0JveD0nMCAwIDE2IDE2J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2ljb24nXHJcblx0XHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAgMy41QS41LjUgMCAwIDEgLjUgM2gxNWEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAxLS41LjVILjVhLjUuNSAwIDAgMS0uNS0uNXYtMnptMCA1QS41LjUgMCAwIDEgLjUgOGgxNWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVILjVhLjUuNSAwIDAgMS0uNS0uNXYtMXptMCA0YS41LjUgMCAwIDEgLjUtLjVoMTVhLjUuNSAwIDAgMSAwIDFILjVhLjUuNSAwIDAgMS0uNS0uNXonIC8+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5saW5lV2lkdGhPcGVuICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nbGluZS13aWR0aC1jb250YWluZXInIGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2hpZGRlbic+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdyYW5nZSdcclxuXHRcdFx0XHRcdFx0XHRcdG1pbj0nMSdcclxuXHRcdFx0XHRcdFx0XHRcdG1heD0nNTAnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5saW5lV2lkdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkxpbmVXaWR0aENoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9J2ltYWdlLXVwbG9hZCdcclxuXHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0YWNjZXB0PSdpbWFnZS8qJ1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vblVwbG9hZEltYWdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0dGl0bGU9J1VwbG9hZCBpbWFnZSdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9fYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2xpY2tVcGxvYWR9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9faWNvbidcclxuXHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRkPSdNLjUgOS45YS41LjUgMCAwIDEgLjUuNXYyLjVhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi0yLjVhLjUuNSAwIDAgMSAxIDB2Mi41YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ydi0yLjVhLjUuNSAwIDAgMSAuNS0uNXonXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRkPSdNNy42NDYgMS4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMyAzYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDIuNzA3VjExLjVhLjUuNSAwIDAgMS0xIDBWMi43MDdMNS4zNTQgNC44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMy0zeidcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nVW5kbydcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9fYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2xpY2tVbmRvfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdFx0dmlld0JveD0nMCAwIDE2IDE2J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2ljb24nXHJcblx0XHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPSdldmVub2RkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0ZD0nTTggM2E1IDUgMCAxIDEtNC41NDYgMi45MTQuNS41IDAgMCAwLS45MDgtLjQxN0E2IDYgMCAxIDAgOCAydjF6J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTggNC40NjZWLjUzNGEuMjUuMjUgMCAwIDAtLjQxLS4xOTJMNS4yMyAyLjMwOGEuMjUuMjUgMCAwIDAgMCAuMzg0bDIuMzYgMS45NjZBLjI1LjI1IDAgMCAwIDggNC40NjZ6JyAvPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nUmVkbydcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9fYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZWRvfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdFx0dmlld0JveD0nMCAwIDE2IDE2J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2ljb24nXHJcblx0XHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPSdldmVub2RkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0ZD0nTTggM2E1IDUgMCAxIDAgNC41NDYgMi45MTQuNS41IDAgMCAxIC45MDgtLjQxN0E2IDYgMCAxIDEgOCAydjF6J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTggNC40NjZWLjUzNGEuMjUuMjUgMCAwIDEgLjQxLS4xOTJsMi4zNiAxLjk2NmMuMTIuMS4xMi4yODQgMCAuMzg0TDguNDEgNC42NThBLjI1LjI1IDAgMCAxIDggNC40NjZ6JyAvPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nQ2xlYXInXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FudmFzLXRvb2xiYXJfX2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNsaWNrQ2xlYXJ9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjYW52YXMtdG9vbGJhcl9faWNvbidcclxuXHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRkPSdNNC42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCA3LjI5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDguNzA4TDguNzA3IDhsMi42NDcgMi42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDguNzA3bC0yLjY0NiAyLjY0N2EuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA4IDQuNjQ2IDUuMzU0YS41LjUgMCAwIDEgMC0uNzA4eidcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYW52YXMtY29udGFpbmVyX190b3AnPlxyXG5cdFx0XHRcdFx0PGNhbnZhcyBpZD0nY2FudmFzJz5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgSFRNTCA1IGNhbnZhcy48L2NhbnZhcz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGNhbnZhczogc3RhdGUuY2FudmFzLmNhbnZhcyxcclxuXHRicnVzaENvbG9yOiBzdGF0ZS5jYW52YXMuYnJ1c2hDb2xvcixcclxuXHRpc0RyYXdpbmc6IHN0YXRlLmNhbnZhcy5pc0RyYXdpbmcsXHJcblx0bGluZVdpZHRoOiBzdGF0ZS5jYW52YXMubGluZVdpZHRoLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHRzYXZlQ2FudmFzOiAoY2FudmFzKSA9PiBkaXNwYXRjaChzYXZlQ2FudmFzKGNhbnZhcykpLFxyXG5cdHNldEJydXNoQ29sb3I6IChjb2xvcikgPT4gZGlzcGF0Y2goc2V0QnJ1c2hDb2xvcihjb2xvcikpLFxyXG5cdHNldElzRHJhd2luZzogKGlzRHJhd2luZykgPT4gZGlzcGF0Y2goc2V0SXNEcmF3aW5nKGlzRHJhd2luZykpLFxyXG5cdHNldExpbmVXaWR0aDogKGxpbmVXaWR0aCkgPT4gZGlzcGF0Y2goc2V0TGluZVdpZHRoKGxpbmVXaWR0aCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhbnZhcyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5cclxuY29uc3QgQ2FudmFzVmlldyA9ICgpID0+IChcclxuXHQ8Vmlld1xyXG5cdFx0dGl0bGU9J0NhbnZhcydcclxuXHRcdGRlc2NyaXB0aW9uPSdEcmF3IHdpdGggb3RoZXJzIGluIHRoZSBwYXJ0eSB0byBzaG93IGEgbWFwLCBhIHNjZW5lLCBvciB0byBqdXN0IGhhdmUgZnVuLidcclxuXHQ+XHJcblx0XHQ8Q2FudmFzIC8+XHJcblx0PC9WaWV3PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzVmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB1c2VUaXRsZSBmcm9tIFwiLi4vaG9va3MvdXNlVGl0bGVcIjtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmlldyA9IChwcm9wcykgPT4ge1xyXG5cdHVzZVRpdGxlKHByb3BzLnRpdGxlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9faW5mbyc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX3RpdGxlJz57cHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX19kZXNjcmlwdGlvbic+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7cHJvcHMuaXNMb2dnZWRJbiA/IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy8nPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMudXNlcm5hbWV9XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy9sb2dpbic+XHJcblx0XHRcdFx0XHRcdExvZyBpblxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9fYm9keSc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcblZpZXcucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzTG9nZ2VkSW46IHN0YXRlLnVzZXIuaXNMb2dnZWRJbixcclxuXHR1c2VybmFtZTogc3RhdGUudXNlci51c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVmlldyk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlVGl0bGUgPSAodGl0bGUpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgRG5EIEFwcCB8ICR7dGl0bGV9YDtcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRpdGxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9