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
      options: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzRm9ybS5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvaG9va3MvdXNlVGl0bGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwic3VibWl0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJzZWN0aW9ucyIsIlByb3BUeXBlcyIsImhlYWRlciIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImVycm9ycyIsImlzU2hvd2luZyIsIm1lc3NhZ2UiLCJvcHRpb25zIiwidG8iLCJzdHJpbmciLCJpc0NhcmQiLCJidXR0b25JZCIsImJ1dHRvbk5hbWUiLCJGb3JtIiwicHJvcHMiLCJtYXAiLCJzZWN0aW9uIiwiaXRlbSIsImZpbHRlciIsImVycm9yIiwib3B0aW9uIiwiU2V0dGluZ3NGb3JtIiwic2V0VGhlbWUiLCJ0YXJnZXQiLCJmb3JtIiwidGhlbWUiLCJuYW1lIiwib25UaGVtZUNoYW5nZSIsIlRIRU1FUyIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiLCJTZXR0aW5nc1ZpZXciLCJWaWV3IiwidXNlVGl0bGUiLCJpc0xvZ2dlZEluIiwidXNlcm5hbWUiLCJjaGlsZHJlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFH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QUFYQSxRQUFXLENBQUN2QyxLQUFELEVBQVc7QUFDM0I0QyxrREFBUyxDQUFDLFlBQU07QUFDZkMsWUFBUSxDQUFDN0MsS0FBVCx1QkFBOEJBLEtBQTlCO0FBQ0EsR0FGUSxDQUFUO0FBR0EsQ0FKRDs7QUFNQSxpRUFBZXVDLFFBQWYsRSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19TZXR0aW5nc1ZpZXdfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG5cdHN1Ym1pdDoge1xyXG5cdFx0b25TdWJtaXQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHRzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdFx0aXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRcdFx0XHR0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wibGlua1wiLCBcIm51bWJlclwiLCBcInNlbGVjdFwiLCBcInRleHRcIiwgXCJwYXNzd29yZFwiXSlcclxuXHRcdFx0XHRcdFx0LmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHR2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG5cdFx0XHRcdFx0ZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRcdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0XHRcdFx0XHRpc1Nob3dpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KSxcclxuXHJcblx0XHRcdFx0XHQvLyBSZXF1aXJlZCBpZiB0eXBlIGlzIHNlbGVjdFxyXG5cdFx0XHRcdFx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKSxcclxuXHRcdFx0XHRcdC8vIFJlcXVpcmVkIGlmIHR5cGUgaXMgbGlua1xyXG5cdFx0XHRcdFx0dG86IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KS5pc1JlcXVpcmVkLFxyXG5cdFx0fSlcclxuXHQpLmlzUmVxdWlyZWQsXHJcblx0aXNDYXJkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHRzdWJtaXQ6IFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRidXR0b25JZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGJ1dHRvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgRm9ybSA9IChwcm9wcykgPT4gKFxyXG5cdDxmb3JtIGNsYXNzTmFtZT17cHJvcHMuaXNDYXJkID8gXCJjYXJkIGZvcm1cIiA6IFwiZm9ybVwifSBvblN1Ym1pdD17cHJvcHMuc3VibWl0Lm9uU3VibWl0fT5cclxuXHRcdHsvKiBzZWN0aW9ucyBhcnJheSBpcyByZXF1aXJlZCAqL31cclxuXHRcdHtwcm9wcy5zZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuXHRcdFx0PGRpdiBrZXk9e3NlY3Rpb24uaGVhZGVyfSBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24nPlxyXG5cdFx0XHRcdHsvKiBTZWN0aW9uIEhlYWRlciBpcyByZXF1aXJlZCAqL31cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uLWhlYWRlcic+e3NlY3Rpb24uaGVhZGVyfTwvaDI+XHJcblxyXG5cdFx0XHRcdHsvKiBpdGVtcyBhcnJheSBpbiBzZWN0aW9ucyBpcyByZXF1aXJlZCAqL31cclxuXHRcdFx0XHR7c2VjdGlvbi5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24tYm9keSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiBFYWNoIGl0ZW0gbXVzdCBoYXZlIGEgdGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9faW5wdXQtdGl0bGUnPntpdGVtLnRpdGxlfTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtYXkgaGF2ZSBhIGRlc2NyaXB0aW9uICovfVxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLmRlc2NyaXB0aW9uICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9ybV9faW5wdXQtZGVzY3JpcHRpb24nPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdHsvKiBFYWNoIGl0ZW0gbWF5IGhhdmUgYSBsaXN0IG9mIHBvdGVudGlhbCBlcnJvciBoYW5kbGVycyAqL31cclxuXHRcdFx0XHRcdFx0XHR7aXRlbS5lcnJvcnMgJiZcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5pc1Nob3dpbmcpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKGVycm9yKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2Vycm9yLm1lc3NhZ2V9IGNsYXNzTmFtZT0nZm9ybV9fZXJyb3InPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBQb3NzaWJsZSBpdGVtIHR5cGVzICovfVxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcImxpbmtcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPSdmb3JtX19saW5rJyB0bz17aXRlbS50b30+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcIm51bWJlclwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInNlbGVjdFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm1fX3NlbGVjdCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3B0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwicGFzc3dvcmRcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cclxuXHRcdHsvKiBPbmx5IGRpc3BsYXlzIGJ1dHRvbiBpZiBidXR0b24gaW5mb3JtYXRpb24gcHJvdmlkZWQgKi99XHJcblx0XHR7cHJvcHMuc3VibWl0LmJ1dHRvbk5hbWUgJiYgKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fYnV0dG9uLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD17cHJvcHMuc3VibWl0LmJ1dHRvbklkfSBjbGFzc05hbWU9J2Zvcm1fX2J1dHRvbic+XHJcblx0XHRcdFx0XHR7cHJvcHMuc3VibWl0LmJ1dHRvbk5hbWV9XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KX1cclxuXHQ8L2Zvcm0+XHJcbik7XHJcblxyXG5Gb3JtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuRm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gXCIuLi9hY3Rpb25zL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRIRU1FUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdG9uU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9O1xyXG5cdG9uVGhlbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0dGhpcy5wcm9wcy5zZXRUaGVtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fTtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBmb3JtID0ge1xyXG5cdFx0XHRzZWN0aW9uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogXCJBcHBlYXJhbmNlXCIsXHJcblx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiVGhlbWVcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJDaG9vc2UgdGhlIHRoZW1lIGZvciB0aGUgYXBwLlwiLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZWN0XCIsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudGhlbWUubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5vblRoZW1lQ2hhbmdlLFxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6IFRIRU1FUy5tYXAoKHRoZW1lKSA9PiB0aGVtZS5uYW1lKSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0aXNDYXJkOiBmYWxzZSxcclxuXHRcdFx0c3VibWl0OiB7XHJcblx0XHRcdFx0b25TdWJtaXQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8Rm9ybSB7Li4uZm9ybX0gLz47XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0dGhlbWU6IHN0YXRlLnRoZW1lLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHRzZXRUaGVtZTogKHRoZW1lKSA9PiBkaXNwYXRjaChzZXRUaGVtZSh0aGVtZSkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNldHRpbmdzRm9ybSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NGb3JtIGZyb20gXCIuL1NldHRpbmdzRm9ybVwiO1xyXG5cclxuY29uc3QgU2V0dGluZ3NWaWV3ID0gKCkgPT4gKFxyXG5cdDxWaWV3IHRpdGxlPSdTZXR0aW5ncycgZGVzY3JpcHRpb249J0N1c3RvbWl6ZSB5b3VyIHNldHRpbmdzLic+XHJcblx0XHQ8U2V0dGluZ3NGb3JtIC8+XHJcblx0PC9WaWV3PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NWaWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHVzZVRpdGxlIGZyb20gXCIuLi9ob29rcy91c2VUaXRsZVwiO1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0ZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3ID0gKHByb3BzKSA9PiB7XHJcblx0dXNlVGl0bGUocHJvcHMudGl0bGUpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX19pbmZvJz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9fdGl0bGUnPntwcm9wcy50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX2Rlc2NyaXB0aW9uJz57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtwcm9wcy5pc0xvZ2dlZEluID8gKFxyXG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPSdsaW5rJyB0bz0nLyc+XHJcblx0XHRcdFx0XHRcdHtwcm9wcy51c2VybmFtZX1cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPSdsaW5rJyB0bz0nL2xvZ2luJz5cclxuXHRcdFx0XHRcdFx0TG9nIGluXHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X19ib2R5Jz57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuVmlldy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0aXNMb2dnZWRJbjogc3RhdGUudXNlci5pc0xvZ2dlZEluLFxyXG5cdHVzZXJuYW1lOiBzdGF0ZS51c2VyLnVzZXJuYW1lLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShWaWV3KTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC50aXRsZSA9IGBEbkQgQXBwIHwgJHt0aXRsZX1gO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGl0bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=