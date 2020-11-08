(self["webpackChunkdnd"] = self["webpackChunkdnd"] || []).push([["src_components_DiceView_js"],{

/***/ "./src/components/DiceForm.js":
/*!************************************!*\
  !*** ./src/components/DiceForm.js ***!
  \************************************/
/*! namespace exports */
/*! export DiceForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceForm": () => /* binding */ DiceForm,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var _actions_dice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/dice */ "./src/actions/dice.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
;







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var DiceForm = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DiceForm, _React$Component);

  var _super = _createSuper(DiceForm);

  function DiceForm() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DiceForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onNumberSelect", function (e) {
      var value = parseInt(e.target.value, 10);

      _this.props.updateNumber(value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onSidesSelect", function (e) {
      var value = parseInt(e.target.value, 10);

      _this.props.updateSides(value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onModifierChange", function (e) {
      var value = parseInt(e.target.value, 10);

      _this.props.updateModifier(value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onSubmit", function (e) {
      e.preventDefault();
      document.getElementById("roll-dice-button").setAttribute("disabled", "disabled");
      var rolls = [];
      var total = 0;

      for (var i = 0; i < _this.props.number; i++) {
        var _roll = Math.floor(Math.random() * _this.props.sides + 1);

        rolls.push(_roll);
        total += _roll;
      }

      total += _this.props.modifier;
      var roll = {
        rolls: rolls,
        number: _this.props.number,
        sides: _this.props.sides,
        modifier: _this.props.modifier,
        total: total,
        time: new Date()
      };

      _this.props.rollDice(roll);

      setTimeout(function () {
        document.getElementById("roll-dice-button").removeAttribute("disabled");
      }, 100);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DiceForm, [{
    key: "render",
    value: function render() {
      var diceForm = {
        sections: [{
          header: "Dice Roller",
          items: [{
            title: "Number",
            description: "Choose the number of dice to roll.",
            type: "select",
            value: this.props.number,
            onChange: this.onNumberSelect,
            options: _constants__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_DICE_NUMBERS
          }, {
            title: "Sides",
            description: "Choose the number of sides for the dice.",
            type: "select",
            value: this.props.sides,
            onChange: this.onSidesSelect,
            options: _constants__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_DICE_SIDES
          }, {
            title: "Modifier",
            description: "Choose the modifier to add onto the roll.",
            type: "number",
            value: this.props.modifier,
            onChange: this.onModifierChange
          }]
        }],
        submit: {
          buttonId: "roll-dice-button",
          buttonName: "Roll dice",
          onSubmit: this.onSubmit
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_Form__WEBPACK_IMPORTED_MODULE_9__.default, diceForm);
    }
  }]);

  return DiceForm;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    number: state.dice.number,
    sides: state.dice.sides,
    modifier: state.dice.modifier,
    last: state.dice.last
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToHistory: function addToHistory(roll) {
      return dispatch((0,_actions_dice__WEBPACK_IMPORTED_MODULE_10__.addToHistory)(roll));
    },
    rollDice: function rollDice(roll) {
      return dispatch((0,_actions_dice__WEBPACK_IMPORTED_MODULE_10__.rollDice)(roll));
    },
    updateNumber: function updateNumber(number) {
      return dispatch((0,_actions_dice__WEBPACK_IMPORTED_MODULE_10__.updateDiceNumber)(number));
    },
    updateSides: function updateSides(sides) {
      return dispatch((0,_actions_dice__WEBPACK_IMPORTED_MODULE_10__.updateDiceSides)(sides));
    },
    updateModifier: function updateModifier(modifier) {
      return dispatch((0,_actions_dice__WEBPACK_IMPORTED_MODULE_10__.updateDiceModifier)(modifier));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, mapDispatchToProps)(DiceForm));

/***/ }),

/***/ "./src/components/DiceView.js":
/*!************************************!*\
  !*** ./src/components/DiceView.js ***!
  \************************************/
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
/* harmony import */ var _DiceForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceForm */ "./src/components/DiceForm.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
;



var DiceView = function DiceView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Dice",
    description: "Customize your dice rolls and share your rolls with everyone in the room."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dice-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiceForm__WEBPACK_IMPORTED_MODULE_1__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiceView);

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
;


var defaultProps = {
  submit: {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }
};
var propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().exact({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().exact({
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
      description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["link", "number", "select", "text", "password"]).isRequired,
      value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any.isRequired),
      onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
      errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().exact({
        isShowing: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
        message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
      })),
      // Required if type is select
      options: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])),
      // Required if type is link
      to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })).isRequired
  })).isRequired,
  isCard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  submit: prop_types__WEBPACK_IMPORTED_MODULE_1___default().exact({
    buttonId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    buttonName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
  }).isRequired
};

var Form = function Form(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: props.isCard ? "card form" : "form",
    onSubmit: props.submit.onSubmit
  }, props.sections.map(function (section) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: section.header,
      className: "form__section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "form__section-header"
    }, section.header), section.items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: item.title,
        className: "form__section-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form__section-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "form__input-title"
      }, item.title), item.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "form__input-description"
      }, item.description), item.errors && item.errors.filter(function (error) {
        return error.isShowing;
      }).map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: error.message,
          className: "form__error"
        }, error.message);
      })), item.type === "link" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        className: "form__link",
        to: item.to
      }, item.value), item.type === "number" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        className: "form__input",
        value: item.value,
        onChange: item.onChange
      }), item.type === "select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        className: "form__select",
        value: item.value,
        onChange: item.onChange
      }, item.options.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: option,
          value: option
        }, option);
      })), item.type === "text" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "form__input",
        value: item.value,
        onChange: item.onChange,
        placeholder: item.title
      }), item.type === "password" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "password",
        className: "form__input",
        value: item.value,
        onChange: item.onChange,
        placeholder: item.title
      }));
    }));
  }), props.submit.buttonName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form__button-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    id: props.submit.buttonId,
    className: "form__button"
  }, props.submit.buttonName)));
};

Form.defaultProps = defaultProps;
Form.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlRm9ybS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2hvb2tzL3VzZVRpdGxlLmpzIl0sIm5hbWVzIjpbIkRpY2VGb3JtIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJwcm9wcyIsInVwZGF0ZU51bWJlciIsInVwZGF0ZVNpZGVzIiwidXBkYXRlTW9kaWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJyb2xscyIsInRvdGFsIiwiaSIsIm51bWJlciIsInJvbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaWRlcyIsInB1c2giLCJtb2RpZmllciIsInRpbWUiLCJEYXRlIiwicm9sbERpY2UiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiZGljZUZvcm0iLCJzZWN0aW9ucyIsImhlYWRlciIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uTnVtYmVyU2VsZWN0Iiwib3B0aW9ucyIsIkRFRkFVTFRfRElDRV9OVU1CRVJTIiwib25TaWRlc1NlbGVjdCIsIkRFRkFVTFRfRElDRV9TSURFUyIsIm9uTW9kaWZpZXJDaGFuZ2UiLCJzdWJtaXQiLCJidXR0b25JZCIsImJ1dHRvbk5hbWUiLCJvblN1Ym1pdCIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkaWNlIiwibGFzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWRkVG9IaXN0b3J5IiwidXBkYXRlRGljZU51bWJlciIsInVwZGF0ZURpY2VTaWRlcyIsInVwZGF0ZURpY2VNb2RpZmllciIsImNvbm5lY3QiLCJEaWNlVmlldyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJlcnJvcnMiLCJpc1Nob3dpbmciLCJtZXNzYWdlIiwidG8iLCJzdHJpbmciLCJpc0NhcmQiLCJGb3JtIiwibWFwIiwic2VjdGlvbiIsIml0ZW0iLCJmaWx0ZXIiLCJlcnJvciIsIm9wdGlvbiIsIlZpZXciLCJ1c2VUaXRsZSIsImlzTG9nZ2VkSW4iLCJ1c2VybmFtZSIsImNoaWxkcmVuIiwidXNlciIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRU8sSUFBTUEsUUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLCtMQUNrQixVQUFDQyxDQUFELEVBQU87QUFDdkIsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTRixLQUFWLEVBQWlCLEVBQWpCLENBQXRCOztBQUNBLFlBQUtHLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkosS0FBeEI7QUFDQSxLQUpGOztBQUFBLDhMQUtpQixVQUFDRCxDQUFELEVBQU87QUFDdEIsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTRixLQUFWLEVBQWlCLEVBQWpCLENBQXRCOztBQUNBLFlBQUtHLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QkwsS0FBdkI7QUFDQSxLQVJGOztBQUFBLGlNQVNvQixVQUFDRCxDQUFELEVBQU87QUFDekIsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTRixLQUFWLEVBQWlCLEVBQWpCLENBQXRCOztBQUNBLFlBQUtHLEtBQUwsQ0FBV0csY0FBWCxDQUEwQk4sS0FB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REQsZUFFQztBQUFHLGFBQVMsRUFBQztBQUFiLEtBQTZDNUIsS0FBSyxDQUFDNkIsV0FBbkQsQ0FGRCxDQURELEVBS0U3QixLQUFLLENBQUMwRSxVQUFOLGdCQUNBLGlEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQztBQUExQixLQUNFMUUsS0FBSyxDQUFDMkUsUUFEUixDQURBLGdCQUtBLGlEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQztBQUExQixjQVZGLENBREQsZUFnQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFnQzNFLEtBQUssQ0FBQzRFLFFBQXRDLENBaEJELENBREQ7QUFvQkEsQ0F2Qk07QUF5QlBKLElBQUksQ0FBQ2hCLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLElBQU1iLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbkM4QixjQUFVLEVBQUU5QixLQUFLLENBQUNpQyxJQUFOLENBQVdILFVBRFk7QUFFbkNDLFlBQVEsRUFBRS9CLEtBQUssQ0FBQ2lDLElBQU4sQ0FBV0Y7QUFGYyxHQUFaO0FBQUEsQ0FBeEI7O0FBS0EsaUVBQWV0QixvREFBTyxDQUFDVixlQUFELENBQVAsQ0FBeUI2QixJQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM3QyxLQUFELEVBQVc7QUFDM0JrRCxrREFBUyxDQUFDLFlBQU07QUFDZnpFLFlBQVEsQ0FBQ3VCLEtBQVQsdUJBQThCQSxLQUE5QjtBQUNBLEdBRlEsQ0FBVDtBQUdBLENBSkQ7O0FBTUEsaUVBQWU2QyxRQUFmLEUiLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfRGljZVZpZXdfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRUb0hpc3RvcnksXHJcblx0cm9sbERpY2UsXHJcblx0dXBkYXRlRGljZU51bWJlcixcclxuXHR1cGRhdGVEaWNlTW9kaWZpZXIsXHJcblx0dXBkYXRlRGljZVNpZGVzLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2RpY2VcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9ESUNFX05VTUJFUlMsIERFRkFVTFRfRElDRV9TSURFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWNlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0b25OdW1iZXJTZWxlY3QgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVOdW1iZXIodmFsdWUpO1xyXG5cdH07XHJcblx0b25TaWRlc1NlbGVjdCA9IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVNpZGVzKHZhbHVlKTtcclxuXHR9O1xyXG5cdG9uTW9kaWZpZXJDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVNb2RpZmllcih2YWx1ZSk7XHJcblx0fTtcclxuXHRvblN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvbGwtZGljZS1idXR0b25cIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRjb25zdCByb2xscyA9IFtdO1xyXG5cdFx0bGV0IHRvdGFsID0gMDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5udW1iZXI7IGkrKykge1xyXG5cdFx0XHRjb25zdCByb2xsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wcm9wcy5zaWRlcyArIDEpO1xyXG5cdFx0XHRyb2xscy5wdXNoKHJvbGwpO1xyXG5cdFx0XHR0b3RhbCArPSByb2xsO1xyXG5cdFx0fVxyXG5cdFx0dG90YWwgKz0gdGhpcy5wcm9wcy5tb2RpZmllcjtcclxuXHJcblx0XHRjb25zdCByb2xsID0ge1xyXG5cdFx0XHRyb2xscyxcclxuXHRcdFx0bnVtYmVyOiB0aGlzLnByb3BzLm51bWJlcixcclxuXHRcdFx0c2lkZXM6IHRoaXMucHJvcHMuc2lkZXMsXHJcblx0XHRcdG1vZGlmaWVyOiB0aGlzLnByb3BzLm1vZGlmaWVyLFxyXG5cdFx0XHR0b3RhbCxcclxuXHRcdFx0dGltZTogbmV3IERhdGUoKSxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5yb2xsRGljZShyb2xsKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvbGwtZGljZS1idXR0b25cIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcblx0XHR9LCAxMDApO1xyXG5cdH07XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgZGljZUZvcm0gPSB7XHJcblx0XHRcdHNlY3Rpb25zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGVyOiBcIkRpY2UgUm9sbGVyXCIsXHJcblx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiTnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQ2hvb3NlIHRoZSBudW1iZXIgb2YgZGljZSB0byByb2xsLlwiLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZWN0XCIsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucHJvcHMubnVtYmVyLFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLm9uTnVtYmVyU2VsZWN0LFxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6IERFRkFVTFRfRElDRV9OVU1CRVJTLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiU2lkZXNcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJDaG9vc2UgdGhlIG51bWJlciBvZiBzaWRlcyBmb3IgdGhlIGRpY2UuXCIsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5zaWRlcyxcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5vblNpZGVzU2VsZWN0LFxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6IERFRkFVTFRfRElDRV9TSURFUyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIk1vZGlmaWVyXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQ2hvb3NlIHRoZSBtb2RpZmllciB0byBhZGQgb250byB0aGUgcm9sbC5cIixcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBcIm51bWJlclwiLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLm1vZGlmaWVyLFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLm9uTW9kaWZpZXJDaGFuZ2UsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHN1Ym1pdDoge1xyXG5cdFx0XHRcdGJ1dHRvbklkOiBcInJvbGwtZGljZS1idXR0b25cIixcclxuXHRcdFx0XHRidXR0b25OYW1lOiBcIlJvbGwgZGljZVwiLFxyXG5cdFx0XHRcdG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gPEZvcm0gey4uLmRpY2VGb3JtfSAvPjtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRudW1iZXI6IHN0YXRlLmRpY2UubnVtYmVyLFxyXG5cdHNpZGVzOiBzdGF0ZS5kaWNlLnNpZGVzLFxyXG5cdG1vZGlmaWVyOiBzdGF0ZS5kaWNlLm1vZGlmaWVyLFxyXG5cdGxhc3Q6IHN0YXRlLmRpY2UubGFzdCxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcblx0YWRkVG9IaXN0b3J5OiAocm9sbCkgPT4gZGlzcGF0Y2goYWRkVG9IaXN0b3J5KHJvbGwpKSxcclxuXHRyb2xsRGljZTogKHJvbGwpID0+IGRpc3BhdGNoKHJvbGxEaWNlKHJvbGwpKSxcclxuXHR1cGRhdGVOdW1iZXI6IChudW1iZXIpID0+IGRpc3BhdGNoKHVwZGF0ZURpY2VOdW1iZXIobnVtYmVyKSksXHJcblx0dXBkYXRlU2lkZXM6IChzaWRlcykgPT4gZGlzcGF0Y2godXBkYXRlRGljZVNpZGVzKHNpZGVzKSksXHJcblx0dXBkYXRlTW9kaWZpZXI6IChtb2RpZmllcikgPT4gZGlzcGF0Y2godXBkYXRlRGljZU1vZGlmaWVyKG1vZGlmaWVyKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGljZUZvcm0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEaWNlRm9ybSBmcm9tIFwiLi9EaWNlRm9ybVwiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcblxyXG5jb25zdCBEaWNlVmlldyA9ICgpID0+IChcclxuXHQ8Vmlld1xyXG5cdFx0dGl0bGU9J0RpY2UnXHJcblx0XHRkZXNjcmlwdGlvbj0nQ3VzdG9taXplIHlvdXIgZGljZSByb2xscyBhbmQgc2hhcmUgeW91ciByb2xscyB3aXRoIGV2ZXJ5b25lIGluIHRoZSByb29tLidcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGljZS1jb250YWluZXInPlxyXG5cdFx0XHQ8RGljZUZvcm0gLz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvVmlldz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VWaWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcblx0c3VibWl0OiB7XHJcblx0XHRvblN1Ym1pdDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRcdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRcdHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJsaW5rXCIsIFwibnVtYmVyXCIsIFwic2VsZWN0XCIsIFwidGV4dFwiLCBcInBhc3N3b3JkXCJdKVxyXG5cdFx0XHRcdFx0XHQuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcblx0XHRcdFx0XHRlcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGlzU2hvd2luZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQpLFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlcXVpcmVkIGlmIHR5cGUgaXMgc2VsZWN0XHJcblx0XHRcdFx0XHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRcdFx0UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0Ly8gUmVxdWlyZWQgaWYgdHlwZSBpcyBsaW5rXHJcblx0XHRcdFx0XHR0bzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLmlzUmVxdWlyZWQsXHJcblx0XHR9KVxyXG5cdCkuaXNSZXF1aXJlZCxcclxuXHRpc0NhcmQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdHN1Ym1pdDogUHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdGJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0YnV0dG9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBGb3JtID0gKHByb3BzKSA9PiAoXHJcblx0PGZvcm0gY2xhc3NOYW1lPXtwcm9wcy5pc0NhcmQgPyBcImNhcmQgZm9ybVwiIDogXCJmb3JtXCJ9IG9uU3VibWl0PXtwcm9wcy5zdWJtaXQub25TdWJtaXR9PlxyXG5cdFx0ey8qIHNlY3Rpb25zIGFycmF5IGlzIHJlcXVpcmVkICovfVxyXG5cdFx0e3Byb3BzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17c2VjdGlvbi5oZWFkZXJ9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbic+XHJcblx0XHRcdFx0ey8qIFNlY3Rpb24gSGVhZGVyIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taGVhZGVyJz57c2VjdGlvbi5oZWFkZXJ9PC9oMj5cclxuXHJcblx0XHRcdFx0ey8qIGl0ZW1zIGFycmF5IGluIHNlY3Rpb25zIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdHtzZWN0aW9uLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbi1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtdXN0IGhhdmUgYSB0aXRsZSAqL31cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC10aXRsZSc+e2l0ZW0udGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7LyogRWFjaCBpdGVtIG1heSBoYXZlIGEgZGVzY3JpcHRpb24gKi99XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC1kZXNjcmlwdGlvbic+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtYXkgaGF2ZSBhIGxpc3Qgb2YgcG90ZW50aWFsIGVycm9yIGhhbmRsZXJzICovfVxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLmVycm9ycyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigoZXJyb3IpID0+IGVycm9yLmlzU2hvd2luZylcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoZXJyb3IpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZXJyb3IubWVzc2FnZX0gY2xhc3NOYW1lPSdmb3JtX19lcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFBvc3NpYmxlIGl0ZW0gdHlwZXMgKi99XHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibGlua1wiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2Zvcm1fX2xpbmsnIHRvPXtpdGVtLnRvfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwic2VsZWN0XCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9fc2VsZWN0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtvcHRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInRleHRcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KSl9XHJcblxyXG5cdFx0ey8qIE9ubHkgZGlzcGxheXMgYnV0dG9uIGlmIGJ1dHRvbiBpbmZvcm1hdGlvbiBwcm92aWRlZCAqL31cclxuXHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZSAmJiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19idXR0b24tY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPXtwcm9wcy5zdWJtaXQuYnV0dG9uSWR9IGNsYXNzTmFtZT0nZm9ybV9fYnV0dG9uJz5cclxuXHRcdFx0XHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZX1cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpfVxyXG5cdDwvZm9ybT5cclxuKTtcclxuXHJcbkZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdXNlVGl0bGUgZnJvbSBcIi4uL2hvb2tzL3VzZVRpdGxlXCI7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXcgPSAocHJvcHMpID0+IHtcclxuXHR1c2VUaXRsZShwcm9wcy50aXRsZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX2luZm8nPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX190aXRsZSc+e3Byb3BzLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9fZGVzY3JpcHRpb24nPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3Byb3BzLmlzTG9nZ2VkSW4gPyAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvJz5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLnVzZXJuYW1lfVxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvbG9naW4nPlxyXG5cdFx0XHRcdFx0XHRMb2cgaW5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2JvZHknPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5WaWV3LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRpc0xvZ2dlZEluOiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4sXHJcblx0dXNlcm5hbWU6IHN0YXRlLnVzZXIudXNlcm5hbWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFZpZXcpO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LnRpdGxlID0gYERuRCBBcHAgfCAke3RpdGxlfWA7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaXRsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==