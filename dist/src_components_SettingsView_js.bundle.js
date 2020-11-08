(self["webpackChunkdnd"] = self["webpackChunkdnd"] || []).push([["src_components_SettingsView_js"],{

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

/***/ "./src/components/SettingsForm.js":
/*!****************************************!*\
  !*** ./src/components/SettingsForm.js ***!
  \****************************************/
/*! namespace exports */
/*! export SettingsForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsForm": () => /* binding */ SettingsForm,
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
/* harmony import */ var _actions_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/theme */ "./src/actions/theme.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
;







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var SettingsForm = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SettingsForm, _React$Component);

  var _super = _createSuper(SettingsForm);

  function SettingsForm() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SettingsForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onSubmit", function (e) {
      e.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onThemeChange", function (e) {
      _this.props.setTheme(e.target.value);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsForm, [{
    key: "render",
    value: function render() {
      var form = {
        sections: [{
          header: "Appearance",
          items: [{
            title: "Theme",
            description: "Choose the theme for the app.",
            type: "select",
            value: this.props.theme.name,
            onChange: this.onThemeChange,
            options: _constants__WEBPACK_IMPORTED_MODULE_11__.THEMES.map(function (theme) {
              return theme.name;
            })
          }]
        }],
        isCard: false,
        submit: {
          onSubmit: function onSubmit(e) {
            return e.preventDefault();
          }
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_Form__WEBPACK_IMPORTED_MODULE_9__.default, form);
    }
  }]);

  return SettingsForm;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    theme: state.theme
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setTheme: function setTheme(theme) {
      return dispatch((0,_actions_theme__WEBPACK_IMPORTED_MODULE_10__.setTheme)(theme));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, mapDispatchToProps)(SettingsForm));

/***/ }),

/***/ "./src/components/SettingsView.js":
/*!****************************************!*\
  !*** ./src/components/SettingsView.js ***!
  \****************************************/
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
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
/* harmony import */ var _SettingsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsForm */ "./src/components/SettingsForm.js");
;



var SettingsView = function SettingsView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Settings",
    description: "Customize your settings."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingsForm__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzRm9ybS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvaG9va3MvdXNlVGl0bGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwic3VibWl0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJzZWN0aW9ucyIsIlByb3BUeXBlcyIsImhlYWRlciIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImVycm9ycyIsImlzU2hvd2luZyIsIm1lc3NhZ2UiLCJvcHRpb25zIiwidG8iLCJzdHJpbmciLCJpc0NhcmQiLCJidXR0b25JZCIsImJ1dHRvbk5hbWUiLCJGb3JtIiwicHJvcHMiLCJtYXAiLCJzZWN0aW9uIiwiaXRlbSIsImZpbHRlciIsImVycm9yIiwib3B0aW9uIiwiU2V0dGluZ3NGb3JtIiwic2V0VGhlbWUiLCJ0YXJnZXQiLCJmb3JtIiwidGhlbWUiLCJuYW1lIiwib25UaGVtZUNoYW5nZSIsIlRIRU1FUyIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiLCJTZXR0aW5nc1ZpZXciLCJWaWV3IiwidXNlVGl0bGUiLCJpc0xvZ2dlZEluIiwidXNlcm5hbWUiLCJjaGlsZHJlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFH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Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3ZDLEtBQUQsRUFBVztBQUMzQjRDLGtEQUFTLENBQUMsWUFBTTtBQUNmQyxZQUFRLENBQUM3QyxLQUFULHVCQUE4QkEsS0FBOUI7QUFDQSxHQUZRLENBQVQ7QUFHQSxDQUpEOztBQU1BLGlFQUFldUMsUUFBZixFIiwiZmlsZSI6InNyY19jb21wb25lbnRzX1NldHRpbmdzVmlld19qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcblx0c3VibWl0OiB7XHJcblx0XHRvblN1Ym1pdDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRcdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRcdHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJsaW5rXCIsIFwibnVtYmVyXCIsIFwic2VsZWN0XCIsIFwidGV4dFwiLCBcInBhc3N3b3JkXCJdKVxyXG5cdFx0XHRcdFx0XHQuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcblx0XHRcdFx0XHRlcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGlzU2hvd2luZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQpLFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlcXVpcmVkIGlmIHR5cGUgaXMgc2VsZWN0XHJcblx0XHRcdFx0XHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRcdFx0UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0Ly8gUmVxdWlyZWQgaWYgdHlwZSBpcyBsaW5rXHJcblx0XHRcdFx0XHR0bzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLmlzUmVxdWlyZWQsXHJcblx0XHR9KVxyXG5cdCkuaXNSZXF1aXJlZCxcclxuXHRpc0NhcmQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdHN1Ym1pdDogUHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdGJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0YnV0dG9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBGb3JtID0gKHByb3BzKSA9PiAoXHJcblx0PGZvcm0gY2xhc3NOYW1lPXtwcm9wcy5pc0NhcmQgPyBcImNhcmQgZm9ybVwiIDogXCJmb3JtXCJ9IG9uU3VibWl0PXtwcm9wcy5zdWJtaXQub25TdWJtaXR9PlxyXG5cdFx0ey8qIHNlY3Rpb25zIGFycmF5IGlzIHJlcXVpcmVkICovfVxyXG5cdFx0e3Byb3BzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17c2VjdGlvbi5oZWFkZXJ9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbic+XHJcblx0XHRcdFx0ey8qIFNlY3Rpb24gSGVhZGVyIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taGVhZGVyJz57c2VjdGlvbi5oZWFkZXJ9PC9oMj5cclxuXHJcblx0XHRcdFx0ey8qIGl0ZW1zIGFycmF5IGluIHNlY3Rpb25zIGlzIHJlcXVpcmVkICovfVxyXG5cdFx0XHRcdHtzZWN0aW9uLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT0nZm9ybV9fc2VjdGlvbi1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24taW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtdXN0IGhhdmUgYSB0aXRsZSAqL31cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC10aXRsZSc+e2l0ZW0udGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7LyogRWFjaCBpdGVtIG1heSBoYXZlIGEgZGVzY3JpcHRpb24gKi99XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb3JtX19pbnB1dC1kZXNjcmlwdGlvbic+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtYXkgaGF2ZSBhIGxpc3Qgb2YgcG90ZW50aWFsIGVycm9yIGhhbmRsZXJzICovfVxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLmVycm9ycyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigoZXJyb3IpID0+IGVycm9yLmlzU2hvd2luZylcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoZXJyb3IpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZXJyb3IubWVzc2FnZX0gY2xhc3NOYW1lPSdmb3JtX19lcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFBvc3NpYmxlIGl0ZW0gdHlwZXMgKi99XHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibGlua1wiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2Zvcm1fX2xpbmsnIHRvPXtpdGVtLnRvfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwic2VsZWN0XCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9fc2VsZWN0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aXRlbS5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtvcHRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInRleHRcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtX19pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KSl9XHJcblxyXG5cdFx0ey8qIE9ubHkgZGlzcGxheXMgYnV0dG9uIGlmIGJ1dHRvbiBpbmZvcm1hdGlvbiBwcm92aWRlZCAqL31cclxuXHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZSAmJiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19idXR0b24tY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPXtwcm9wcy5zdWJtaXQuYnV0dG9uSWR9IGNsYXNzTmFtZT0nZm9ybV9fYnV0dG9uJz5cclxuXHRcdFx0XHRcdHtwcm9wcy5zdWJtaXQuYnV0dG9uTmFtZX1cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpfVxyXG5cdDwvZm9ybT5cclxuKTtcclxuXHJcbkZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IHNldFRoZW1lIH0gZnJvbSBcIi4uL2FjdGlvbnMvdGhlbWVcIjtcclxuaW1wb3J0IHsgVEhFTUVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0b25TdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH07XHJcblx0b25UaGVtZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLnNldFRoZW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9O1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGZvcm0gPSB7XHJcblx0XHRcdHNlY3Rpb25zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGVyOiBcIkFwcGVhcmFuY2VcIixcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJUaGVtZVwiLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkNob29zZSB0aGUgdGhlbWUgZm9yIHRoZSBhcHAuXCIsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy50aGVtZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLm9uVGhlbWVDaGFuZ2UsXHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogVEhFTUVTLm1hcCgodGhlbWUpID0+IHRoZW1lLm5hbWUpLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRpc0NhcmQ6IGZhbHNlLFxyXG5cdFx0XHRzdWJtaXQ6IHtcclxuXHRcdFx0XHRvblN1Ym1pdDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxGb3JtIHsuLi5mb3JtfSAvPjtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHR0aGVtZTogc3RhdGUudGhlbWUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG5cdHNldFRoZW1lOiAodGhlbWUpID0+IGRpc3BhdGNoKHNldFRoZW1lKHRoZW1lKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2V0dGluZ3NGb3JtKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBTZXR0aW5nc0Zvcm0gZnJvbSBcIi4vU2V0dGluZ3NGb3JtXCI7XHJcblxyXG5jb25zdCBTZXR0aW5nc1ZpZXcgPSAoKSA9PiAoXHJcblx0PFZpZXcgdGl0bGU9J1NldHRpbmdzJyBkZXNjcmlwdGlvbj0nQ3VzdG9taXplIHlvdXIgc2V0dGluZ3MuJz5cclxuXHRcdDxTZXR0aW5nc0Zvcm0gLz5cclxuXHQ8L1ZpZXc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1ZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdXNlVGl0bGUgZnJvbSBcIi4uL2hvb2tzL3VzZVRpdGxlXCI7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXcgPSAocHJvcHMpID0+IHtcclxuXHR1c2VUaXRsZShwcm9wcy50aXRsZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX2luZm8nPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX190aXRsZSc+e3Byb3BzLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9fZGVzY3JpcHRpb24nPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3Byb3BzLmlzTG9nZ2VkSW4gPyAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvJz5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLnVzZXJuYW1lfVxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9J2xpbmsnIHRvPScvbG9naW4nPlxyXG5cdFx0XHRcdFx0XHRMb2cgaW5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2JvZHknPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5WaWV3LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRpc0xvZ2dlZEluOiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4sXHJcblx0dXNlcm5hbWU6IHN0YXRlLnVzZXIudXNlcm5hbWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFZpZXcpO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LnRpdGxlID0gYERuRCBBcHAgfCAke3RpdGxlfWA7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaXRsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==