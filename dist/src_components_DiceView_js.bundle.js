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
        time: new Date(),
        name: _this.props.name || "Guest"
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
    last: state.dice.last,
    name: state.user.username
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

/***/ "./src/components/DiceHistory.js":
/*!***************************************!*\
  !*** ./src/components/DiceHistory.js ***!
  \***************************************/
/*! namespace exports */
/*! export DiceHistory [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceHistory": () => /* binding */ DiceHistory,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
;

var DiceHistory = function DiceHistory(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dice-history"
  }, props.history.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "".concat(data.time.valueOf()),
      className: "dice-history__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dice-history__item__overview"
    }, data.time.toLocaleTimeString(), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "accent"
    }, data.name), " ", "rolled ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "accent"
    }, data.total), "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dice-history__item__details"
    }, data.number, "d", data.sides, ": ", data.rolls.join(", "), " +", data.modifier));
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    history: state.dice.history
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(DiceHistory));

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
/* harmony import */ var _DiceHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceHistory */ "./src/components/DiceHistory.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
;




var DiceView = function DiceView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Dice",
    description: "Customize your dice rolls and share your rolls with everyone in the room."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dice-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiceForm__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiceHistory__WEBPACK_IMPORTED_MODULE_2__.default, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlRm9ybS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2hvb2tzL3VzZVRpdGxlLmpzIl0sIm5hbWVzIjpbIkRpY2VGb3JtIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJwcm9wcyIsInVwZGF0ZU51bWJlciIsInVwZGF0ZVNpZGVzIiwidXBkYXRlTW9kaWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJyb2xscyIsInRvdGFsIiwiaSIsIm51bWJlciIsInJvbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaWRlcyIsInB1c2giLCJtb2RpZmllciIsInRpbWUiLCJEYXRlIiwibmFtZSIsInJvbGxEaWNlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImRpY2VGb3JtIiwic2VjdGlvbnMiLCJoZWFkZXIiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbk51bWJlclNlbGVjdCIsIm9wdGlvbnMiLCJERUZBVUxUX0RJQ0VfTlVNQkVSUyIsIm9uU2lkZXNTZWxlY3QiLCJERUZBVUxUX0RJQ0VfU0lERVMiLCJvbk1vZGlmaWVyQ2hhbmdlIiwic3VibWl0IiwiYnV0dG9uSWQiLCJidXR0b25OYW1lIiwib25TdWJtaXQiLCJSZWFjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGljZSIsImxhc3QiLCJ1c2VyIiwidXNlcm5hbWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFkZFRvSGlzdG9yeSIsInVwZGF0ZURpY2VOdW1iZXIiLCJ1cGRhdGVEaWNlU2lkZXMiLCJ1cGRhdGVEaWNlTW9kaWZpZXIiLCJjb25uZWN0IiwiRGljZUhpc3RvcnkiLCJoaXN0b3J5IiwibWFwIiwiZGF0YSIsInZhbHVlT2YiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJqb2luIiwiRGljZVZpZXciLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZXJyb3JzIiwiaXNTaG93aW5nIiwibWVzc2FnZSIsInRvIiwic3RyaW5nIiwiaXNDYXJkIiwiRm9ybSIsInNlY3Rpb24iLCJpdGVtIiwiZmlsdGVyIiwiZXJyb3IiLCJvcHRpb24iLCJWaWV3IiwidXNlVGl0bGUiLCJpc0xvZ2dlZEluIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVPLElBQU1BLFFBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSwrTEFDa0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0YsS0FBVixFQUFpQixFQUFqQixDQUF0Qjs7QUFDQSxZQUFLRyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JKLEtBQXhCO0FBQ0EsS0FKRjs7QUFBQSw4TEFLaUIsVUFBQ0QsQ0FBRCxFQUFPO0FBQ3RCLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0YsS0FBVixFQUFpQixFQUFqQixDQUF0Qjs7QUFDQSxZQUFLRyxLQUFMLENBQVdFLFdBQVgsQ0FBdUJMLEtBQXZCO0FBQ0EsS0FSRjs7QUFBQSxpTUFTb0IsVUFBQ0QsQ0FBRCxFQUFPO0FBQ3pCLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0YsS0FBVixFQUFpQixFQUFqQixDQUF0Qjs7QUFDQSxZQUFLRyxLQUFMLENBQVdHLGNBQVgsQ0FBMEJOLEtBQTFCO0FBQ0EsS0FaRjs7QUFBQSx5TEFhWSxVQUFDRCxDQUFELEVBQU87QUFDakJBLE9BQUMsQ0FBQ1EsY0FBRjtBQUNBQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxZQUE1QyxDQUF5RCxVQUF6RCxFQUFxRSxVQUFyRTtBQUVBLFVBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLE1BQUtWLEtBQUwsQ0FBV1csTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDM0MsWUFBTUUsS0FBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLE1BQUtmLEtBQUwsQ0FBV2dCLEtBQTNCLEdBQW1DLENBQTlDLENBQWI7O0FBQ0FSLGFBQUssQ0FBQ1MsSUFBTixDQUFXTCxLQUFYO0FBQ0FILGFBQUssSUFBSUcsS0FBVDtBQUNBOztBQUNESCxXQUFLLElBQUksTUFBS1QsS0FBTCxDQUFXa0IsUUFBcEI7QUFFQSxVQUFNTixJQUFJLEdBQUc7QUFDWkosYUFBSyxFQUFMQSxLQURZO0FBRVpHLGNBQU0sRUFBRSxNQUFLWCxLQUFMLENBQVdXLE1BRlA7QUFHWkssYUFBSyxFQUFFLE1BQUtoQixLQUFMLENBQVdnQixLQUhOO0FBSVpFLGdCQUFRLEVBQUUsTUFBS2xCLEtBQUwsQ0FBV2tCLFFBSlQ7QUFLWlQsYUFBSyxFQUFMQSxLQUxZO0FBTVpVLFlBQUksRUFBRSxJQUFJQyxJQUFKLEVBTk07QUFPWkMsWUFBSSxFQUFFLE1BQUtyQixLQUFMLENBQVdxQixJQUFYLElBQW1CO0FBUGIsT0FBYjs7QUFVQSxZQUFLckIsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQlYsSUFBcEI7O0FBQ0FXLGdCQUFVLENBQUMsWUFBTTtBQUNoQmxCLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDa0IsZUFBNUMsQ0FBNEQsVUFBNUQ7QUFDQSxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsS0F4Q0Y7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBeUNVO0FBQ1IsVUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxnQkFBUSxFQUFFLENBQ1Q7QUFDQ0MsZ0JBQU0sRUFBRSxhQURUO0FBRUNDLGVBQUssRUFBRSxDQUNOO0FBQ0NDLGlCQUFLLEVBQUUsUUFEUjtBQUVDQyx1QkFBVyxFQUFFLG9DQUZkO0FBR0NDLGdCQUFJLEVBQUUsUUFIUDtBQUlDbEMsaUJBQUssRUFBRSxLQUFLRyxLQUFMLENBQVdXLE1BSm5CO0FBS0NxQixvQkFBUSxFQUFFLEtBQUtDLGNBTGhCO0FBTUNDLG1CQUFPLEVBQUVDLDZEQUFvQkE7QUFOOUIsV0FETSxFQVNOO0FBQ0NOLGlCQUFLLEVBQUUsT0FEUjtBQUVDQyx1QkFBVyxFQUFFLDBDQUZkO0FBR0NDLGdCQUFJLEVBQUUsUUFIUDtBQUlDbEMsaUJBQUssRUFBRSxLQUFLRyxLQUFMLENBQVdnQixLQUpuQjtBQUtDZ0Isb0JBQVEsRUFBRSxLQUFLSSxhQUxoQjtBQU1DRixtQkFBTyxFQUFFRywyREFBa0JBO0FBTjVCLFdBVE0sRUFpQk47QUFDQ1IsaUJBQUssRUFBRSxVQURSO0FBRUNDLHVCQUFXLEVBQUUsMkNBRmQ7QUFHQ0MsZ0JBQUksRUFBRSxRQUhQO0FBSUNsQyxpQkFBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV2tCLFFBSm5CO0FBS0NjLG9CQUFRLEVBQUUsS0FBS007QUFMaEIsV0FqQk07QUFGUixTQURTLENBRE07QUErQmhCQyxjQUFNLEVBQUU7QUFDUEMsa0JBQVEsRUFBRSxrQkFESDtBQUVQQyxvQkFBVSxFQUFFLFdBRkw7QUFHUEMsa0JBQVEsRUFBRSxLQUFLQTtBQUhSO0FBL0JRLE9BQWpCO0FBc0NBLDBCQUFPLGlEQUFDLDBDQUFELEVBQVVqQixRQUFWLENBQVA7QUFDQTtBQWpGRjs7QUFBQTtBQUFBLEVBQThCa0IsNENBQTlCOztBQW9GQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ25DbEMsVUFBTSxFQUFFa0MsS0FBSyxDQUFDQyxJQUFOLENBQVduQyxNQURnQjtBQUVuQ0ssU0FBSyxFQUFFNkIsS0FBSyxDQUFDQyxJQUFOLENBQVc5QixLQUZpQjtBQUduQ0UsWUFBUSxFQUFFMkIsS0FBSyxDQUFDQyxJQUFOLENBQVc1QixRQUhjO0FBSW5DNkIsUUFBSSxFQUFFRixLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFKa0I7QUFLbkMxQixRQUFJLEVBQUV3QixLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFMa0IsR0FBWjtBQUFBLENBQXhCOztBQVFBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDekNDLGdCQUFZLEVBQUUsc0JBQUN4QyxJQUFEO0FBQUEsYUFBVXVDLFFBQVEsQ0FBQ0MsNERBQVksQ0FBQ3hDLElBQUQsQ0FBYixDQUFsQjtBQUFBLEtBRDJCO0FBRXpDVSxZQUFRLEVBQUUsa0JBQUNWLElBQUQ7QUFBQSxhQUFVdUMsUUFBUSxDQUFDN0Isd0RBQVEsQ0FBQ1YsSUFBRCxDQUFULENBQWxCO0FBQUEsS0FGK0I7QUFHekNYLGdCQUFZLEVBQUUsc0JBQUNVLE1BQUQ7QUFBQSxhQUFZd0MsUUFBUSxDQUFDRSxnRUFBZ0IsQ0FBQzFDLE1BQUQsQ0FBakIsQ0FBcEI7QUFBQSxLQUgyQjtBQUl6Q1QsZUFBVyxFQUFFLHFCQUFDYyxLQUFEO0FBQUEsYUFBV21DLFFBQVEsQ0FBQ0csK0RBQWUsQ0FBQ3RDLEtBQUQsQ0FBaEIsQ0FBbkI7QUFBQSxLQUo0QjtBQUt6Q2Isa0JBQWMsRUFBRSx3QkFBQ2UsUUFBRDtBQUFBLGFBQWNpQyxRQUFRLENBQUNJLGtFQUFrQixDQUFDckMsUUFBRCxDQUFuQixDQUF0QjtBQUFBO0FBTHlCLEdBQWY7QUFBQSxDQUEzQjs7QUFRQSxpRUFBZXNDLG9EQUFPLENBQUNaLGVBQUQsRUFBa0JNLGtCQUFsQixDQUFQLENBQTZDdkQsUUFBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBRU8sSUFBTThELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN6RCxLQUFEO0FBQUEsc0JBQzFCO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRUEsS0FBSyxDQUFDMEQsT0FBTixDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSx3QkFDbEI7QUFBSyxTQUFHLFlBQUtBLElBQUksQ0FBQ3pDLElBQUwsQ0FBVTBDLE9BQVYsRUFBTCxDQUFSO0FBQW9DLGVBQVMsRUFBQztBQUE5QyxvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0VELElBQUksQ0FBQ3pDLElBQUwsQ0FBVTJDLGtCQUFWLEVBREYscUJBQ21DO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE9BQTBCRixJQUFJLENBQUN2QyxJQUEvQixDQURuQyxFQUMrRSxHQUQvRSwwQkFFUTtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUEwQnVDLElBQUksQ0FBQ25ELEtBQS9CLENBRlIsTUFERCxlQUtDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRW1ELElBQUksQ0FBQ2pELE1BRFAsT0FDZ0JpRCxJQUFJLENBQUM1QyxLQURyQixRQUM4QjRDLElBQUksQ0FBQ3BELEtBQUwsQ0FBV3VELElBQVgsQ0FBZ0IsSUFBaEIsQ0FEOUIsUUFDdURILElBQUksQ0FBQzFDLFFBRDVELENBTEQsQ0FEa0I7QUFBQSxHQUFsQixDQURGLENBRDBCO0FBQUEsQ0FBcEI7O0FBZ0JQLElBQU0wQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ25DYSxXQUFPLEVBQUViLEtBQUssQ0FBQ0MsSUFBTixDQUFXWTtBQURlLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxpRUFBZUYsb0RBQU8sQ0FBQ1osZUFBRCxDQUFQLENBQXlCYSxXQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2hCLGlEQUFDLDBDQUFEO0FBQ0MsU0FBSyxFQUFDLE1BRFA7QUFFQyxlQUFXLEVBQUM7QUFGYixrQkFJQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLGlEQUFDLDhDQUFELE9BREQsZUFFQyxpREFBQyxpREFBRCxPQUZELENBSkQsQ0FEZ0I7QUFBQSxDQUFqQjs7QUFZQSxpRUFBZUEsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDcEIxQixRQUFNLEVBQUU7QUFDUEcsWUFBUSxFQUFFLGtCQUFDOUMsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ1EsY0FBRixFQUFQO0FBQUE7QUFESDtBQURZLENBQXJCO0FBTUEsSUFBTThELFNBQVMsR0FBRztBQUNqQnhDLFVBQVEsRUFBRXlDLHlEQUFBLENBQ1RBLHVEQUFBLENBQWdCO0FBQ2Z4QyxVQUFNLEVBQUV3QyxxRUFETztBQUVmdkMsU0FBSyxFQUFFdUMseURBQUEsQ0FDTkEsdURBQUEsQ0FBZ0I7QUFDZnRDLFdBQUssRUFBRXNDLHFFQURRO0FBRWZyQyxpQkFBVyxFQUFFcUMsMERBRkU7QUFHZnBDLFVBQUksRUFBRW9DLHVEQUFBLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsUUFBbkIsRUFBNkIsTUFBN0IsRUFBcUMsVUFBckMsQ0FBaEIsRUFDSkMsVUFKYTtBQUtmdkUsV0FBSyxFQUFFc0Usa0VBTFE7QUFNZm5DLGNBQVEsRUFBRW1DLHdEQU5LO0FBT2ZFLFlBQU0sRUFBRUYseURBQUEsQ0FDUEEsdURBQUEsQ0FBZ0I7QUFDZkcsaUJBQVMsRUFBRUgsbUVBREk7QUFFZkksZUFBTyxFQUFFSixxRUFBMkJDO0FBRnJCLE9BQWhCLENBRE8sQ0FQTztBQWNmO0FBQ0FsQyxhQUFPLEVBQUVpQyx5REFBQSxDQUNSQSwyREFBQSxDQUFvQixDQUFDQSwwREFBRCxFQUFtQkEsMERBQW5CLENBQXBCLENBRFEsQ0FmTTtBQWtCZjtBQUNBSyxRQUFFLEVBQUVMLDBEQUFnQk07QUFuQkwsS0FBaEIsQ0FETSxFQXNCTEw7QUF4QmEsR0FBaEIsQ0FEUyxFQTJCUkEsVUE1QmU7QUE2QmpCTSxRQUFNLEVBQUVQLHdEQTdCUztBQThCakI1QixRQUFNLEVBQUU0Qix1REFBQSxDQUFnQjtBQUN2QjNCLFlBQVEsRUFBRTJCLDBEQURhO0FBRXZCMUIsY0FBVSxFQUFFMEIsMERBRlc7QUFHdkJ6QixZQUFRLEVBQUV5QixtRUFBeUJDO0FBSFosR0FBaEIsRUFJTEE7QUFsQ2MsQ0FBbEI7O0FBcUNBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUMzRSxLQUFEO0FBQUEsc0JBQ1o7QUFBTSxhQUFTLEVBQUVBLEtBQUssQ0FBQzBFLE1BQU4sR0FBZSxXQUFmLEdBQTZCLE1BQTlDO0FBQXNELFlBQVEsRUFBRTFFLEtBQUssQ0FBQ3VDLE1BQU4sQ0FBYUc7QUFBN0UsS0FFRTFDLEtBQUssQ0FBQzBCLFFBQU4sQ0FBZWlDLEdBQWYsQ0FBbUIsVUFBQ2lCLE9BQUQ7QUFBQSx3QkFDbkI7QUFBSyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ2pELE1BQWxCO0FBQTBCLGVBQVMsRUFBQztBQUFwQyxvQkFFQztBQUFJLGVBQVMsRUFBQztBQUFkLE9BQXNDaUQsT0FBTyxDQUFDakQsTUFBOUMsQ0FGRCxFQUtFaUQsT0FBTyxDQUFDaEQsS0FBUixDQUFjK0IsR0FBZCxDQUFrQixVQUFDa0IsSUFBRDtBQUFBLDBCQUNsQjtBQUFLLFdBQUcsRUFBRUEsSUFBSSxDQUFDaEQsS0FBZjtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLHNCQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVDO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQW1DZ0QsSUFBSSxDQUFDaEQsS0FBeEMsQ0FGRCxFQUlFZ0QsSUFBSSxDQUFDL0MsV0FBTCxpQkFDQTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUF3QytDLElBQUksQ0FBQy9DLFdBQTdDLENBTEYsRUFRRStDLElBQUksQ0FBQ1IsTUFBTCxJQUNBUSxJQUFJLENBQUNSLE1BQUwsQ0FDRVMsTUFERixDQUNTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNULFNBQWpCO0FBQUEsT0FEVCxFQUVFWCxHQUZGLENBRU0sVUFBQ29CLEtBQUQ7QUFBQSw0QkFDSjtBQUFLLGFBQUcsRUFBRUEsS0FBSyxDQUFDUixPQUFoQjtBQUF5QixtQkFBUyxFQUFDO0FBQW5DLFdBQ0VRLEtBQUssQ0FBQ1IsT0FEUixDQURJO0FBQUEsT0FGTixDQVRGLENBREQsRUFvQkVNLElBQUksQ0FBQzlDLElBQUwsS0FBYyxNQUFkLGlCQUNBLGlEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUE2QixVQUFFLEVBQUU4QyxJQUFJLENBQUNMO0FBQXRDLFNBQ0VLLElBQUksQ0FBQ2hGLEtBRFAsQ0FyQkYsRUEwQkVnRixJQUFJLENBQUM5QyxJQUFMLEtBQWMsUUFBZCxpQkFDQTtBQUNDLFlBQUksRUFBQyxRQUROO0FBRUMsaUJBQVMsRUFBQyxhQUZYO0FBR0MsYUFBSyxFQUFFOEMsSUFBSSxDQUFDaEYsS0FIYjtBQUlDLGdCQUFRLEVBQUVnRixJQUFJLENBQUM3QztBQUpoQixRQTNCRixFQW1DRTZDLElBQUksQ0FBQzlDLElBQUwsS0FBYyxRQUFkLGlCQUNBO0FBQ0MsaUJBQVMsRUFBQyxjQURYO0FBRUMsYUFBSyxFQUFFOEMsSUFBSSxDQUFDaEYsS0FGYjtBQUdDLGdCQUFRLEVBQUVnRixJQUFJLENBQUM3QztBQUhoQixTQUtFNkMsSUFBSSxDQUFDM0MsT0FBTCxDQUFheUIsR0FBYixDQUFpQixVQUFDcUIsTUFBRDtBQUFBLDRCQUNqQjtBQUFRLGFBQUcsRUFBRUEsTUFBYjtBQUFxQixlQUFLLEVBQUVBO0FBQTVCLFdBQ0VBLE1BREYsQ0FEaUI7QUFBQSxPQUFqQixDQUxGLENBcENGLEVBaURFSCxJQUFJLENBQUM5QyxJQUFMLEtBQWMsTUFBZCxpQkFDQTtBQUNDLFlBQUksRUFBQyxNQUROO0FBRUMsaUJBQVMsRUFBQyxhQUZYO0FBR0MsYUFBSyxFQUFFOEMsSUFBSSxDQUFDaEYsS0FIYjtBQUlDLGdCQUFRLEVBQUVnRixJQUFJLENBQUM3QyxRQUpoQjtBQUtDLG1CQUFXLEVBQUU2QyxJQUFJLENBQUNoRDtBQUxuQixRQWxERixFQTJERWdELElBQUksQ0FBQzlDLElBQUwsS0FBYyxVQUFkLGlCQUNBO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxpQkFBUyxFQUFDLGFBRlg7QUFHQyxhQUFLLEVBQUU4QyxJQUFJLENBQUNoRixLQUhiO0FBSUMsZ0JBQVEsRUFBRWdGLElBQUksQ0FBQzdDLFFBSmhCO0FBS0MsbUJBQVcsRUFBRTZDLElBQUksQ0FBQ2hEO0FBTG5CLFFBNURGLENBRGtCO0FBQUEsS0FBbEIsQ0FMRixDQURtQjtBQUFBLEdBQW5CLENBRkYsRUFtRkU3QixLQUFLLENBQUN1QyxNQUFOLENBQWFFLFVBQWIsaUJBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFRLE1BQUUsRUFBRXpDLEtBQUssQ0FBQ3VDLE1BQU4sQ0FBYUMsUUFBekI7QUFBbUMsYUFBUyxFQUFDO0FBQTdDLEtBQ0V4QyxLQUFLLENBQUN1QyxNQUFOLENBQWFFLFVBRGYsQ0FERCxDQXBGRixDQURZO0FBQUEsQ0FBYjs7QUE4RkFrQyxJQUFJLENBQUNWLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0FVLElBQUksQ0FBQ1QsU0FBTCxHQUFpQkEsU0FBakI7QUFFQSxpRUFBZVMsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1ULFNBQVMsR0FBRztBQUNqQnJDLE9BQUssRUFBRXNDLHFFQURVO0FBRWpCckMsYUFBVyxFQUFFcUMscUVBQTJCQztBQUZ2QixDQUFsQjtBQUtPLElBQU1hLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNqRixLQUFELEVBQVc7QUFDOUJrRiwwREFBUSxDQUFDbEYsS0FBSyxDQUFDNkIsS0FBUCxDQUFSO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUF3QzdCLEtBQUssQ0FBQzZCLEtBQTlDLENBREQsZUFFQztBQUFHLGFBQVMsRUFBQztBQUFiLEtBQTZDN0IsS0FBSyxDQUFDOEIsV0FBbkQsQ0FGRCxDQURELEVBS0U5QixLQUFLLENBQUNtRixVQUFOLGdCQUNBLGlEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQztBQUExQixLQUNFbkYsS0FBSyxDQUFDaUQsUUFEUixDQURBLGdCQUtBLGlEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQztBQUExQixjQVZGLENBREQsZUFnQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFnQ2pELEtBQUssQ0FBQ29GLFFBQXRDLENBaEJELENBREQ7QUFvQkEsQ0F2Qk07QUF5QlBILElBQUksQ0FBQ2YsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsSUFBTXRCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbkNzQyxjQUFVLEVBQUV0QyxLQUFLLENBQUNHLElBQU4sQ0FBV21DLFVBRFk7QUFFbkNsQyxZQUFRLEVBQUVKLEtBQUssQ0FBQ0csSUFBTixDQUFXQztBQUZjLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQSxpRUFBZU8sb0RBQU8sQ0FBQ1osZUFBRCxDQUFQLENBQXlCcUMsSUFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDckQsS0FBRCxFQUFXO0FBQzNCd0Qsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZoRixZQUFRLENBQUN3QixLQUFULHVCQUE4QkEsS0FBOUI7QUFDQSxHQUZRLENBQVQ7QUFHQSxDQUpEOztBQU1BLGlFQUFlcUQsUUFBZixFIiwiZmlsZSI6InNyY19jb21wb25lbnRzX0RpY2VWaWV3X2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7XHJcblx0YWRkVG9IaXN0b3J5LFxyXG5cdHJvbGxEaWNlLFxyXG5cdHVwZGF0ZURpY2VOdW1iZXIsXHJcblx0dXBkYXRlRGljZU1vZGlmaWVyLFxyXG5cdHVwZGF0ZURpY2VTaWRlcyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9kaWNlXCI7XHJcbmltcG9ydCB7IERFRkFVTFRfRElDRV9OVU1CRVJTLCBERUZBVUxUX0RJQ0VfU0lERVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGljZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdG9uTnVtYmVyU2VsZWN0ID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlTnVtYmVyKHZhbHVlKTtcclxuXHR9O1xyXG5cdG9uU2lkZXNTZWxlY3QgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVTaWRlcyh2YWx1ZSk7XHJcblx0fTtcclxuXHRvbk1vZGlmaWVyQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlTW9kaWZpZXIodmFsdWUpO1xyXG5cdH07XHJcblx0b25TdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2xsLWRpY2UtYnV0dG9uXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0Y29uc3Qgcm9sbHMgPSBbXTtcclxuXHRcdGxldCB0b3RhbCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMubnVtYmVyOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgcm9sbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucHJvcHMuc2lkZXMgKyAxKTtcclxuXHRcdFx0cm9sbHMucHVzaChyb2xsKTtcclxuXHRcdFx0dG90YWwgKz0gcm9sbDtcclxuXHRcdH1cclxuXHRcdHRvdGFsICs9IHRoaXMucHJvcHMubW9kaWZpZXI7XHJcblxyXG5cdFx0Y29uc3Qgcm9sbCA9IHtcclxuXHRcdFx0cm9sbHMsXHJcblx0XHRcdG51bWJlcjogdGhpcy5wcm9wcy5udW1iZXIsXHJcblx0XHRcdHNpZGVzOiB0aGlzLnByb3BzLnNpZGVzLFxyXG5cdFx0XHRtb2RpZmllcjogdGhpcy5wcm9wcy5tb2RpZmllcixcclxuXHRcdFx0dG90YWwsXHJcblx0XHRcdHRpbWU6IG5ldyBEYXRlKCksXHJcblx0XHRcdG5hbWU6IHRoaXMucHJvcHMubmFtZSB8fCBcIkd1ZXN0XCIsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucHJvcHMucm9sbERpY2Uocm9sbCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2xsLWRpY2UtYnV0dG9uXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9O1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGRpY2VGb3JtID0ge1xyXG5cdFx0XHRzZWN0aW9uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogXCJEaWNlIFJvbGxlclwiLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIk51bWJlclwiLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkNob29zZSB0aGUgbnVtYmVyIG9mIGRpY2UgdG8gcm9sbC5cIixcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLm51bWJlcixcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5vbk51bWJlclNlbGVjdCxcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zOiBERUZBVUxUX0RJQ0VfTlVNQkVSUyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIlNpZGVzXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQ2hvb3NlIHRoZSBudW1iZXIgb2Ygc2lkZXMgZm9yIHRoZSBkaWNlLlwiLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZWN0XCIsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucHJvcHMuc2lkZXMsXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRoaXMub25TaWRlc1NlbGVjdCxcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zOiBERUZBVUxUX0RJQ0VfU0lERVMsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJNb2RpZmllclwiLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkNob29zZSB0aGUgbW9kaWZpZXIgdG8gYWRkIG9udG8gdGhlIHJvbGwuXCIsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJudW1iZXJcIixcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5tb2RpZmllcixcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5vbk1vZGlmaWVyQ2hhbmdlLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzdWJtaXQ6IHtcclxuXHRcdFx0XHRidXR0b25JZDogXCJyb2xsLWRpY2UtYnV0dG9uXCIsXHJcblx0XHRcdFx0YnV0dG9uTmFtZTogXCJSb2xsIGRpY2VcIixcclxuXHRcdFx0XHRvblN1Ym1pdDogdGhpcy5vblN1Ym1pdCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxGb3JtIHsuLi5kaWNlRm9ybX0gLz47XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0bnVtYmVyOiBzdGF0ZS5kaWNlLm51bWJlcixcclxuXHRzaWRlczogc3RhdGUuZGljZS5zaWRlcyxcclxuXHRtb2RpZmllcjogc3RhdGUuZGljZS5tb2RpZmllcixcclxuXHRsYXN0OiBzdGF0ZS5kaWNlLmxhc3QsXHJcblx0bmFtZTogc3RhdGUudXNlci51c2VybmFtZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcblx0YWRkVG9IaXN0b3J5OiAocm9sbCkgPT4gZGlzcGF0Y2goYWRkVG9IaXN0b3J5KHJvbGwpKSxcclxuXHRyb2xsRGljZTogKHJvbGwpID0+IGRpc3BhdGNoKHJvbGxEaWNlKHJvbGwpKSxcclxuXHR1cGRhdGVOdW1iZXI6IChudW1iZXIpID0+IGRpc3BhdGNoKHVwZGF0ZURpY2VOdW1iZXIobnVtYmVyKSksXHJcblx0dXBkYXRlU2lkZXM6IChzaWRlcykgPT4gZGlzcGF0Y2godXBkYXRlRGljZVNpZGVzKHNpZGVzKSksXHJcblx0dXBkYXRlTW9kaWZpZXI6IChtb2RpZmllcikgPT4gZGlzcGF0Y2godXBkYXRlRGljZU1vZGlmaWVyKG1vZGlmaWVyKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGljZUZvcm0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEaWNlSGlzdG9yeSA9IChwcm9wcykgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdkaWNlLWhpc3RvcnknPlxyXG5cdFx0e3Byb3BzLmhpc3RvcnkubWFwKChkYXRhKSA9PiAoXHJcblx0XHRcdDxkaXYga2V5PXtgJHtkYXRhLnRpbWUudmFsdWVPZigpfWB9IGNsYXNzTmFtZT0nZGljZS1oaXN0b3J5X19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGljZS1oaXN0b3J5X19pdGVtX19vdmVydmlldyc+XHJcblx0XHRcdFx0XHR7ZGF0YS50aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTogPHNwYW4gY2xhc3NOYW1lPSdhY2NlbnQnPntkYXRhLm5hbWV9PC9zcGFuPntcIiBcIn1cclxuXHRcdFx0XHRcdHJvbGxlZCA8c3BhbiBjbGFzc05hbWU9J2FjY2VudCc+e2RhdGEudG90YWx9PC9zcGFuPiFcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGljZS1oaXN0b3J5X19pdGVtX19kZXRhaWxzJz5cclxuXHRcdFx0XHRcdHtkYXRhLm51bWJlcn1ke2RhdGEuc2lkZXN9OiB7ZGF0YS5yb2xscy5qb2luKFwiLCBcIil9ICt7ZGF0YS5tb2RpZmllcn1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpKX1cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRoaXN0b3J5OiBzdGF0ZS5kaWNlLmhpc3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERpY2VIaXN0b3J5KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGljZUZvcm0gZnJvbSBcIi4vRGljZUZvcm1cIjtcclxuaW1wb3J0IERpY2VIaXN0b3J5IGZyb20gXCIuL0RpY2VIaXN0b3J5XCI7XHJcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuXHJcbmNvbnN0IERpY2VWaWV3ID0gKCkgPT4gKFxyXG5cdDxWaWV3XHJcblx0XHR0aXRsZT0nRGljZSdcclxuXHRcdGRlc2NyaXB0aW9uPSdDdXN0b21pemUgeW91ciBkaWNlIHJvbGxzIGFuZCBzaGFyZSB5b3VyIHJvbGxzIHdpdGggZXZlcnlvbmUgaW4gdGhlIHJvb20uJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdkaWNlLWNvbnRhaW5lcic+XHJcblx0XHRcdDxEaWNlRm9ybSAvPlxyXG5cdFx0XHQ8RGljZUhpc3RvcnkgLz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvVmlldz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VWaWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcblx0c3VibWl0OiB7XHJcblx0XHRvblN1Ym1pdDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRcdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRcdHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJsaW5rXCIsIFwibnVtYmVyXCIsIFwic2VsZWN0XCIsIFwidGV4dFwiLCBcInBhc3N3b3JkXCJdKVxyXG5cdFx0XHRcdFx0XHQuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcblx0XHRcdFx0XHRlcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGlzU2hvd2luZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQpLFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlcXVpcmVkIGlmIHR5cGUgaXMgc2VsZWN0XHJcblx0XHRcdFx0XHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRcdFx0UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0Ly8gUmVxdWlyZWQgaWYgdHlwZSBpcyBsaW5rXHJcblx0XHRcdFx0XHR0bzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLmlzUmVxdWlyZWQsXHJcblx0XHR9KVxyXG5cdCkuaXNSZXF1aXJlZCxcclxuXHRpc0NhcmQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdHN1Ym1pdDogUHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdGJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0YnV0dG9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBGb3JtID0gKHByb3BzKSA9PiAoXHJcblx0PGZvcm0gY2xhc3NOYW1lPXtwcm9wcy5pc0NhcmQgPyBcImNhcmQgZm9ybVwiIDogXCJmb3JtXCJ9IG9uU3VibWl0PXtwcm9wcy5zdWJtaXQub25TdWJtaXR9PlxyXG5cdFx0ey8qIHNlY3Rpb25zIGFycmF5IGlzIHJlcXVpcmVkICovfVxyXG5cdFx0e3Byb3BzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17c2VjdGlvbi5oZWFkZXJ9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbic+XHJcblx0XHRcdFx0ey8qIFNlY3Rpb24gSGVhZGVyIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taGVhZGVyJz57c2VjdGlvbi5oZWFkZXJ9PC9oMj5cclxuXHJcblx0XHRcdFx0ey8qIGl0ZW1zIGFycmF5IGluIHNlY3Rpb25zIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdHtzZWN0aW9uLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbi1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtdXN0IGhhdmUgYSB0aXRsZSAqL31cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC10aXRsZSc+e2l0ZW0udGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7LyogRWFjaCBpdGVtIG1heSBoYXZlIGEgZGVzY3JpcHRpb24gKi99XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC1kZXNjcmlwdGlvbic+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtYXkgaGF2ZSBhIGxpc3Qgb2YgcG90ZW50aWFsIGVycm9yIGhhbmRsZXJzICovfVxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLmVycm9ycyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigoZXJyb3IpID0+IGVycm9yLmlzU2hvd2luZylcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoZXJyb3IpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZXJyb3IubWVzc2FnZX0gY2xhc3NOYW1lPSdmb3JtX19lcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFBvc3NpYmxlIGl0ZW0gdHlwZXMgKi99XHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibGlua1wiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2Zvcm1fX2xpbmsnIHRvPXtpdGVtLnRvfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwic2VsZWN0XCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9fc2VsZWN0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtvcHRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInRleHRcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KSl9XHJcblxyXG5cdFx0ey8qIE9ubHkgZGlzcGxheXMgYnV0dG9uIGlmIGJ1dHRvbiBpbmZvcm1hdGlvbiBwcm92aWRlZCAqL31cclxuXHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZSAmJiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19idXR0b24tY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPXtwcm9wcy5zdWJtaXQuYnV0dG9uSWR9IGNsYXNzTmFtZT0nZm9ybV9fYnV0dG9uJz5cclxuXHRcdFx0XHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZX1cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpfVxyXG5cdDwvZm9ybT5cclxuKTtcclxuXHJcbkZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdXNlVGl0bGUgZnJvbSBcIi4uL2hvb2tzL3VzZVRpdGxlXCI7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXcgPSAocHJvcHMpID0+IHtcclxuXHR1c2VUaXRsZShwcm9wcy50aXRsZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX2luZm8nPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX190aXRsZSc+e3Byb3BzLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9fZGVzY3JpcHRpb24nPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3Byb3BzLmlzTG9nZ2VkSW4gPyAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvJz5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLnVzZXJuYW1lfVxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvbG9naW4nPlxyXG5cdFx0XHRcdFx0XHRMb2cgaW5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2JvZHknPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5WaWV3LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRpc0xvZ2dlZEluOiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4sXHJcblx0dXNlcm5hbWU6IHN0YXRlLnVzZXIudXNlcm5hbWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFZpZXcpO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LnRpdGxlID0gYERuRCBBcHAgfCAke3RpdGxlfWA7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaXRsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==