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
    }, data.time.toLocaleTimeString(), ": ", data.name, " rolled ", data.total, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlRm9ybS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9EaWNlVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2hvb2tzL3VzZVRpdGxlLmpzIl0sIm5hbWVzIjpbIkRpY2VGb3JtIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJwcm9wcyIsInVwZGF0ZU51bWJlciIsInVwZGF0ZVNpZGVzIiwidXBkYXRlTW9kaWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJyb2xscyIsInRvdGFsIiwiaSIsIm51bWJlciIsInJvbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaWRlcyIsInB1c2giLCJtb2RpZmllciIsInRpbWUiLCJEYXRlIiwicm9sbERpY2UiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiZGljZUZvcm0iLCJzZWN0aW9ucyIsImhlYWRlciIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uTnVtYmVyU2VsZWN0Iiwib3B0aW9ucyIsIkRFRkFVTFRfRElDRV9OVU1CRVJTIiwib25TaWRlc1NlbGVjdCIsIkRFRkFVTFRfRElDRV9TSURFUyIsIm9uTW9kaWZpZXJDaGFuZ2UiLCJzdWJtaXQiLCJidXR0b25JZCIsImJ1dHRvbk5hbWUiLCJvblN1Ym1pdCIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkaWNlIiwibGFzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWRkVG9IaXN0b3J5IiwidXBkYXRlRGljZU51bWJlciIsInVwZGF0ZURpY2VTaWRlcyIsInVwZGF0ZURpY2VNb2RpZmllciIsImNvbm5lY3QiLCJEaWNlSGlzdG9yeSIsImhpc3RvcnkiLCJtYXAiLCJkYXRhIiwidmFsdWVPZiIsInRvTG9jYWxlVGltZVN0cmluZyIsIm5hbWUiLCJqb2luIiwiRGljZVZpZXciLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZXJyb3JzIiwiaXNTaG93aW5nIiwibWVzc2FnZSIsInRvIiwic3RyaW5nIiwiaXNDYXJkIiwiRm9ybSIsInNlY3Rpb24iLCJpdGVtIiwiZmlsdGVyIiwiZXJyb3IiLCJvcHRpb24iLCJWaWV3IiwidXNlVGl0bGUiLCJpc0xvZ2dlZEluIiwidXNlcm5hbWUiLCJjaGlsZHJlbiIsInVzZXIiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVPLElBQU1BLFFBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSwrTEFDa0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0YsS0FBVixFQUFpQixFQUFqQixDQUF0Qjs7QUFDQSxZQUFLRyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JKLEtBQXhCO0FBQ0EsS0FKRjs7QUFBQSw4TEFLaUIsVUFBQ0QsQ0FBRCxFQUFPO0FBQ3RCLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0YsS0FBVixFQUFpQixFQUFqQixDQUF0Qjs7QUFDQSxZQUFLRyxLQUFMLENBQVdFLFdBQVgsQ0FBdUJMLEtBQXZCO0FBQ0EsS0FSRjs7QUFBQSxpTUFTb0IsVUFBQ0QsQ0FB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RCxlQUVDO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBNkM1QixLQUFLLENBQUM2QixXQUFuRCxDQUZELENBREQsRUFLRTdCLEtBQUssQ0FBQ2lGLFVBQU4sZ0JBQ0EsaURBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBdUIsTUFBRSxFQUFDO0FBQTFCLEtBQ0VqRixLQUFLLENBQUNrRixRQURSLENBREEsZ0JBS0EsaURBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBdUIsTUFBRSxFQUFDO0FBQTFCLGNBVkYsQ0FERCxlQWdCQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQWdDbEYsS0FBSyxDQUFDbUYsUUFBdEMsQ0FoQkQsQ0FERDtBQW9CQSxDQXZCTTtBQXlCUEosSUFBSSxDQUFDZixTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxJQUFNckIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNuQ3FDLGNBQVUsRUFBRXJDLEtBQUssQ0FBQ3dDLElBQU4sQ0FBV0gsVUFEWTtBQUVuQ0MsWUFBUSxFQUFFdEMsS0FBSyxDQUFDd0MsSUFBTixDQUFXRjtBQUZjLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQSxpRUFBZTdCLG9EQUFPLENBQUNWLGVBQUQsQ0FBUCxDQUF5Qm9DLElBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3BELEtBQUQsRUFBVztBQUMzQnlELGtEQUFTLENBQUMsWUFBTTtBQUNmaEYsWUFBUSxDQUFDdUIsS0FBVCx1QkFBOEJBLEtBQTlCO0FBQ0EsR0FGUSxDQUFUO0FBR0EsQ0FKRDs7QUFNQSxpRUFBZW9ELFFBQWYsRSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19EaWNlVmlld19qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQge1xyXG5cdGFkZFRvSGlzdG9yeSxcclxuXHRyb2xsRGljZSxcclxuXHR1cGRhdGVEaWNlTnVtYmVyLFxyXG5cdHVwZGF0ZURpY2VNb2RpZmllcixcclxuXHR1cGRhdGVEaWNlU2lkZXMsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvZGljZVwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX0RJQ0VfTlVNQkVSUywgREVGQVVMVF9ESUNFX1NJREVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpY2VGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRvbk51bWJlclNlbGVjdCA9IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZU51bWJlcih2YWx1ZSk7XHJcblx0fTtcclxuXHRvblNpZGVzU2VsZWN0ID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlU2lkZXModmFsdWUpO1xyXG5cdH07XHJcblx0b25Nb2RpZmllckNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZU1vZGlmaWVyKHZhbHVlKTtcclxuXHR9O1xyXG5cdG9uU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9sbC1kaWNlLWJ1dHRvblwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdGNvbnN0IHJvbGxzID0gW107XHJcblx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLm51bWJlcjsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnByb3BzLnNpZGVzICsgMSk7XHJcblx0XHRcdHJvbGxzLnB1c2gocm9sbCk7XHJcblx0XHRcdHRvdGFsICs9IHJvbGw7XHJcblx0XHR9XHJcblx0XHR0b3RhbCArPSB0aGlzLnByb3BzLm1vZGlmaWVyO1xyXG5cclxuXHRcdGNvbnN0IHJvbGwgPSB7XHJcblx0XHRcdHJvbGxzLFxyXG5cdFx0XHRudW1iZXI6IHRoaXMucHJvcHMubnVtYmVyLFxyXG5cdFx0XHRzaWRlczogdGhpcy5wcm9wcy5zaWRlcyxcclxuXHRcdFx0bW9kaWZpZXI6IHRoaXMucHJvcHMubW9kaWZpZXIsXHJcblx0XHRcdHRvdGFsLFxyXG5cdFx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnByb3BzLnJvbGxEaWNlKHJvbGwpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9sbC1kaWNlLWJ1dHRvblwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuXHRcdH0sIDEwMCk7XHJcblx0fTtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBkaWNlRm9ybSA9IHtcclxuXHRcdFx0c2VjdGlvbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkZXI6IFwiRGljZSBSb2xsZXJcIixcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJOdW1iZXJcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJDaG9vc2UgdGhlIG51bWJlciBvZiBkaWNlIHRvIHJvbGwuXCIsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5udW1iZXIsXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRoaXMub25OdW1iZXJTZWxlY3QsXHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogREVGQVVMVF9ESUNFX05VTUJFUlMsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJTaWRlc1wiLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkNob29zZSB0aGUgbnVtYmVyIG9mIHNpZGVzIGZvciB0aGUgZGljZS5cIixcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnNpZGVzLFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLm9uU2lkZXNTZWxlY3QsXHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogREVGQVVMVF9ESUNFX1NJREVTLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiTW9kaWZpZXJcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJDaG9vc2UgdGhlIG1vZGlmaWVyIHRvIGFkZCBvbnRvIHRoZSByb2xsLlwiLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucHJvcHMubW9kaWZpZXIsXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRoaXMub25Nb2RpZmllckNoYW5nZSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0c3VibWl0OiB7XHJcblx0XHRcdFx0YnV0dG9uSWQ6IFwicm9sbC1kaWNlLWJ1dHRvblwiLFxyXG5cdFx0XHRcdGJ1dHRvbk5hbWU6IFwiUm9sbCBkaWNlXCIsXHJcblx0XHRcdFx0b25TdWJtaXQ6IHRoaXMub25TdWJtaXQsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8Rm9ybSB7Li4uZGljZUZvcm19IC8+O1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdG51bWJlcjogc3RhdGUuZGljZS5udW1iZXIsXHJcblx0c2lkZXM6IHN0YXRlLmRpY2Uuc2lkZXMsXHJcblx0bW9kaWZpZXI6IHN0YXRlLmRpY2UubW9kaWZpZXIsXHJcblx0bGFzdDogc3RhdGUuZGljZS5sYXN0LFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHRhZGRUb0hpc3Rvcnk6IChyb2xsKSA9PiBkaXNwYXRjaChhZGRUb0hpc3Rvcnkocm9sbCkpLFxyXG5cdHJvbGxEaWNlOiAocm9sbCkgPT4gZGlzcGF0Y2gocm9sbERpY2Uocm9sbCkpLFxyXG5cdHVwZGF0ZU51bWJlcjogKG51bWJlcikgPT4gZGlzcGF0Y2godXBkYXRlRGljZU51bWJlcihudW1iZXIpKSxcclxuXHR1cGRhdGVTaWRlczogKHNpZGVzKSA9PiBkaXNwYXRjaCh1cGRhdGVEaWNlU2lkZXMoc2lkZXMpKSxcclxuXHR1cGRhdGVNb2RpZmllcjogKG1vZGlmaWVyKSA9PiBkaXNwYXRjaCh1cGRhdGVEaWNlTW9kaWZpZXIobW9kaWZpZXIpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWNlRm9ybSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpY2VIaXN0b3J5ID0gKHByb3BzKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9J2RpY2UtaGlzdG9yeSc+XHJcblx0XHR7cHJvcHMuaGlzdG9yeS5tYXAoKGRhdGEpID0+IChcclxuXHRcdFx0PGRpdiBrZXk9e2Ake2RhdGEudGltZS52YWx1ZU9mKCl9YH0gY2xhc3NOYW1lPSdkaWNlLWhpc3RvcnlfX2l0ZW0nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaWNlLWhpc3RvcnlfX2l0ZW1fX292ZXJ2aWV3Jz5cclxuXHRcdFx0XHRcdHtkYXRhLnRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9OiB7ZGF0YS5uYW1lfSByb2xsZWQge2RhdGEudG90YWx9IVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaWNlLWhpc3RvcnlfX2l0ZW1fX2RldGFpbHMnPlxyXG5cdFx0XHRcdFx0e2RhdGEubnVtYmVyfWR7ZGF0YS5zaWRlc306IHtkYXRhLnJvbGxzLmpvaW4oXCIsIFwiKX0gK3tkYXRhLm1vZGlmaWVyfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGhpc3Rvcnk6IHN0YXRlLmRpY2UuaGlzdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGljZUhpc3RvcnkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEaWNlRm9ybSBmcm9tIFwiLi9EaWNlRm9ybVwiO1xyXG5pbXBvcnQgRGljZUhpc3RvcnkgZnJvbSBcIi4vRGljZUhpc3RvcnlcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5cclxuY29uc3QgRGljZVZpZXcgPSAoKSA9PiAoXHJcblx0PFZpZXdcclxuXHRcdHRpdGxlPSdEaWNlJ1xyXG5cdFx0ZGVzY3JpcHRpb249J0N1c3RvbWl6ZSB5b3VyIGRpY2Ugcm9sbHMgYW5kIHNoYXJlIHlvdXIgcm9sbHMgd2l0aCBldmVyeW9uZSBpbiB0aGUgcm9vbS4nXHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2RpY2UtY29udGFpbmVyJz5cclxuXHRcdFx0PERpY2VGb3JtIC8+XHJcblx0XHRcdDxEaWNlSGlzdG9yeSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9WaWV3PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZVZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuXHRzdWJtaXQ6IHtcclxuXHRcdG9uU3VibWl0OiAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcblx0c2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0aGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0XHRcdFx0dHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImxpbmtcIiwgXCJudW1iZXJcIiwgXCJzZWxlY3RcIiwgXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIl0pXHJcblx0XHRcdFx0XHRcdC5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0dmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuXHRcdFx0XHRcdGVycm9yczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRcdFx0XHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdFx0XHRcdFx0aXNTaG93aW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCksXHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVxdWlyZWQgaWYgdHlwZSBpcyBzZWxlY3RcclxuXHRcdFx0XHRcdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFx0XHRQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQvLyBSZXF1aXJlZCBpZiB0eXBlIGlzIGxpbmtcclxuXHRcdFx0XHRcdHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCkuaXNSZXF1aXJlZCxcclxuXHRcdH0pXHJcblx0KS5pc1JlcXVpcmVkLFxyXG5cdGlzQ2FyZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0c3VibWl0OiBQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0YnV0dG9uSWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRidXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0b25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0fSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IEZvcm0gPSAocHJvcHMpID0+IChcclxuXHQ8Zm9ybSBjbGFzc05hbWU9e3Byb3BzLmlzQ2FyZCA/IFwiY2FyZCBmb3JtXCIgOiBcImZvcm1cIn0gb25TdWJtaXQ9e3Byb3BzLnN1Ym1pdC5vblN1Ym1pdH0+XHJcblx0XHR7Lyogc2VjdGlvbnMgYXJyYXkgaXMgcmVxdWlyZWQgKi99XHJcblx0XHR7cHJvcHMuc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcblx0XHRcdDxkaXYga2V5PXtzZWN0aW9uLmhlYWRlcn0gY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uJz5cclxuXHRcdFx0XHR7LyogU2VjdGlvbiBIZWFkZXIgaXMgcmVxdWlyZWQgKi99XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbi1oZWFkZXInPntzZWN0aW9uLmhlYWRlcn08L2gyPlxyXG5cclxuXHRcdFx0XHR7LyogaXRlbXMgYXJyYXkgaW4gc2VjdGlvbnMgaXMgcmVxdWlyZWQgKi99XHJcblx0XHRcdFx0e3NlY3Rpb24uaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uLWJvZHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHR7LyogRWFjaCBpdGVtIG11c3QgaGF2ZSBhIHRpdGxlICovfVxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX2lucHV0LXRpdGxlJz57aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiBFYWNoIGl0ZW0gbWF5IGhhdmUgYSBkZXNjcmlwdGlvbiAqL31cclxuXHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0LWRlc2NyaXB0aW9uJz57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHR7LyogRWFjaCBpdGVtIG1heSBoYXZlIGEgbGlzdCBvZiBwb3RlbnRpYWwgZXJyb3IgaGFuZGxlcnMgKi99XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0uZXJyb3JzICYmXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmVycm9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IuaXNTaG93aW5nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKChlcnJvcikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtlcnJvci5tZXNzYWdlfSBjbGFzc05hbWU9J2Zvcm1fX2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvci5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogUG9zc2libGUgaXRlbSB0eXBlcyAqL31cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJsaW5rXCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nZm9ybV9fbGluaycgdG89e2l0ZW0udG99PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJudW1iZXJcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm1fX2lucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJzZWxlY3RcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19zZWxlY3QnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLm9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e29wdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwidGV4dFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm1fX2lucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtpdGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInBhc3N3b3JkXCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm1fX2lucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtpdGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpKX1cclxuXHJcblx0XHR7LyogT25seSBkaXNwbGF5cyBidXR0b24gaWYgYnV0dG9uIGluZm9ybWF0aW9uIHByb3ZpZGVkICovfVxyXG5cdFx0e3Byb3BzLnN1Ym1pdC5idXR0b25OYW1lICYmIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2J1dHRvbi1jb250YWluZXInPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9e3Byb3BzLnN1Ym1pdC5idXR0b25JZH0gY2xhc3NOYW1lPSdmb3JtX19idXR0b24nPlxyXG5cdFx0XHRcdFx0e3Byb3BzLnN1Ym1pdC5idXR0b25OYW1lfVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCl9XHJcblx0PC9mb3JtPlxyXG4pO1xyXG5cclxuRm9ybS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcbkZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB1c2VUaXRsZSBmcm9tIFwiLi4vaG9va3MvdXNlVGl0bGVcIjtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmlldyA9IChwcm9wcykgPT4ge1xyXG5cdHVzZVRpdGxlKHByb3BzLnRpdGxlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9faW5mbyc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX3RpdGxlJz57cHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX19kZXNjcmlwdGlvbic+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7cHJvcHMuaXNMb2dnZWRJbiA/IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy8nPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMudXNlcm5hbWV9XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy9sb2dpbic+XHJcblx0XHRcdFx0XHRcdExvZyBpblxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9fYm9keSc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcblZpZXcucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzTG9nZ2VkSW46IHN0YXRlLnVzZXIuaXNMb2dnZWRJbixcclxuXHR1c2VybmFtZTogc3RhdGUudXNlci51c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVmlldyk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlVGl0bGUgPSAodGl0bGUpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgRG5EIEFwcCB8ICR7dGl0bGV9YDtcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRpdGxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9