(self["webpackChunkdnd"] = self["webpackChunkdnd"] || []).push([["src_components_HomeView_js"],{

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

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! namespace exports */
/*! export Home [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => /* binding */ Home,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
;


var Home = function Home(props) {
  var signInForm = {
    sections: [{
      header: "You are not signed in",
      items: [{
        title: "Create an account",
        description: "Create an account if you don't already have one.",
        type: "link",
        to: "/signup",
        value: "Sign up"
      }, {
        title: "Log in",
        description: "Log in to an existing account.",
        type: "link",
        to: "/login",
        value: "Log in"
      }]
    }],
    isCard: true
  };
  var joinRoomForm = {
    sections: [{
      header: "Create or join a room",
      items: [{
        title: "Create a room",
        description: "Create a room with the settings you want.",
        type: "link",
        to: "/create",
        value: "Create"
      }, {
        title: "Join a room",
        description: "Join an existing room using a room code.",
        type: "link",
        to: "/join",
        value: "Join"
      }]
    }],
    isCard: true
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home"
  }, props.isLoggedIn ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.default, signInForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.default, joinRoomForm)));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Home));

/***/ }),

/***/ "./src/components/HomeView.js":
/*!************************************!*\
  !*** ./src/components/HomeView.js ***!
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
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/components/Home.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
;



var HomeView = function HomeView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Home",
    description: "Create or join a room to play with friends."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2RuZC8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2NvbXBvbmVudHMvSG9tZVZpZXcuanMiLCJ3ZWJwYWNrOi8vZG5kLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qcyIsIndlYnBhY2s6Ly9kbmQvLi9zcmMvaG9va3MvdXNlVGl0bGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwic3VibWl0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJzZWN0aW9ucyIsIlByb3BUeXBlcyIsImhlYWRlciIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImVycm9ycyIsImlzU2hvd2luZyIsIm1lc3NhZ2UiLCJvcHRpb25zIiwidG8iLCJzdHJpbmciLCJpc0NhcmQiLCJidXR0b25JZCIsImJ1dHRvbk5hbWUiLCJGb3JtIiwicHJvcHMiLCJtYXAiLCJzZWN0aW9uIiwiaXRlbSIsImZpbHRlciIsImVycm9yIiwib3B0aW9uIiwiSG9tZSIsInNpZ25JbkZvcm0iLCJqb2luUm9vbUZvcm0iLCJpc0xvZ2dlZEluIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyIiwidXNlcm5hbWUiLCJjb25uZWN0IiwiSG9tZVZpZXciLCJWaWV3IiwidXNlVGl0bGUiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDcEJDLFFBQU0sRUFBRTtBQUNQQyxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBO0FBREg7QUFEWSxDQUFyQjtBQU1B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QjtBQUNBLEdBRlEsQ0FBVDtBQUdBLENBSkQ7O0FBTUEsaUVBQWVrQyxRQUFmLEUiLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfSG9tZVZpZXdfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG5cdHN1Ym1pdDoge1xyXG5cdFx0b25TdWJtaXQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHRzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRQcm9wVHlwZXMuZXhhY3Qoe1xyXG5cdFx0XHRoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdFx0aXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG5cdFx0XHRcdFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRcdFx0XHR0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wibGlua1wiLCBcIm51bWJlclwiLCBcInNlbGVjdFwiLCBcInRleHRcIiwgXCJwYXNzd29yZFwiXSlcclxuXHRcdFx0XHRcdFx0LmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHR2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG5cdFx0XHRcdFx0ZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0XHRcdFx0UHJvcFR5cGVzLmV4YWN0KHtcclxuXHRcdFx0XHRcdFx0XHRpc1Nob3dpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KSxcclxuXHJcblx0XHRcdFx0XHQvLyBSZXF1aXJlZCBpZiB0eXBlIGlzIHNlbGVjdFxyXG5cdFx0XHRcdFx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXHJcblx0XHRcdFx0XHRcdFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdC8vIFJlcXVpcmVkIGlmIHR5cGUgaXMgbGlua1xyXG5cdFx0XHRcdFx0dG86IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KS5pc1JlcXVpcmVkLFxyXG5cdFx0fSlcclxuXHQpLmlzUmVxdWlyZWQsXHJcblx0aXNDYXJkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHRzdWJtaXQ6IFByb3BUeXBlcy5leGFjdCh7XHJcblx0XHRidXR0b25JZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGJ1dHRvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgRm9ybSA9IChwcm9wcykgPT4gKFxyXG5cdDxmb3JtIGNsYXNzTmFtZT17cHJvcHMuaXNDYXJkID8gXCJjYXJkIGZvcm1cIiA6IFwiZm9ybVwifSBvblN1Ym1pdD17cHJvcHMuc3VibWl0Lm9uU3VibWl0fT5cclxuXHRcdHsvKiBzZWN0aW9ucyBhcnJheSBpcyByZXF1aXJlZCAqL31cclxuXHRcdHtwcm9wcy5zZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuXHRcdFx0PGRpdiBrZXk9e3NlY3Rpb24uaGVhZGVyfSBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24nPlxyXG5cdFx0XHRcdHsvKiBTZWN0aW9uIEhlYWRlciBpcyByZXF1aXJlZCAqL31cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uLWhlYWRlcic+e3NlY3Rpb24uaGVhZGVyfTwvaDI+XHJcblxyXG5cdFx0XHRcdHsvKiBpdGVtcyBhcnJheSBpbiBzZWN0aW9ucyBpcyByZXF1aXJlZCAqL31cclxuXHRcdFx0XHR7c2VjdGlvbi5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9J2Zvcm1fX3NlY3Rpb24tYm9keSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19zZWN0aW9uLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiBFYWNoIGl0ZW0gbXVzdCBoYXZlIGEgdGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9faW5wdXQtdGl0bGUnPntpdGVtLnRpdGxlfTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEVhY2ggaXRlbSBtYXkgaGF2ZSBhIGRlc2NyaXB0aW9uICovfVxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLmRlc2NyaXB0aW9uICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9ybV9faW5wdXQtZGVzY3JpcHRpb24nPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdHsvKiBFYWNoIGl0ZW0gbWF5IGhhdmUgYSBsaXN0IG9mIHBvdGVudGlhbCBlcnJvciBoYW5kbGVycyAqL31cclxuXHRcdFx0XHRcdFx0XHR7aXRlbS5lcnJvcnMgJiZcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5pc1Nob3dpbmcpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKGVycm9yKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2Vycm9yLm1lc3NhZ2V9IGNsYXNzTmFtZT0nZm9ybV9fZXJyb3InPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBQb3NzaWJsZSBpdGVtIHR5cGVzICovfVxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcImxpbmtcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPSdmb3JtX19saW5rJyB0bz17aXRlbS50b30+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcIm51bWJlclwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXRlbS50eXBlID09PSBcInNlbGVjdFwiICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm1fX3NlbGVjdCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2l0ZW0ub25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3B0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpdGVtLnR5cGUgPT09IFwicGFzc3dvcmRcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybV9faW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtpdGVtLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cclxuXHRcdHsvKiBPbmx5IGRpc3BsYXlzIGJ1dHRvbiBpZiBidXR0b24gaW5mb3JtYXRpb24gcHJvdmlkZWQgKi99XHJcblx0XHR7cHJvcHMuc3VibWl0LmJ1dHRvbk5hbWUgJiYgKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fYnV0dG9uLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD17cHJvcHMuc3VibWl0LmJ1dHRvbklkfSBjbGFzc05hbWU9J2Zvcm1fX2J1dHRvbic+XHJcblx0XHRcdFx0XHR7cHJvcHMuc3VibWl0LmJ1dHRvbk5hbWV9XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KX1cclxuXHQ8L2Zvcm0+XHJcbik7XHJcblxyXG5Gb3JtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuRm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBzaWduSW5Gb3JtID0ge1xyXG5cdFx0c2VjdGlvbnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogXCJZb3UgYXJlIG5vdCBzaWduZWQgaW5cIixcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJDcmVhdGUgYW4gYWNjb3VudFwiLFxyXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJDcmVhdGUgYW4gYWNjb3VudCBpZiB5b3UgZG9uJ3QgYWxyZWFkeSBoYXZlIG9uZS5cIixcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJsaW5rXCIsXHJcblx0XHRcdFx0XHRcdHRvOiBcIi9zaWdudXBcIixcclxuXHRcdFx0XHRcdFx0dmFsdWU6IFwiU2lnbiB1cFwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiTG9nIGluXCIsXHJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkxvZyBpbiB0byBhbiBleGlzdGluZyBhY2NvdW50LlwiLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiBcImxpbmtcIixcclxuXHRcdFx0XHRcdFx0dG86IFwiL2xvZ2luXCIsXHJcblx0XHRcdFx0XHRcdHZhbHVlOiBcIkxvZyBpblwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdGlzQ2FyZDogdHJ1ZSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBqb2luUm9vbUZvcm0gPSB7XHJcblx0XHRzZWN0aW9uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBcIkNyZWF0ZSBvciBqb2luIGEgcm9vbVwiLFxyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkNyZWF0ZSBhIHJvb21cIixcclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQ3JlYXRlIGEgcm9vbSB3aXRoIHRoZSBzZXR0aW5ncyB5b3Ugd2FudC5cIixcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJsaW5rXCIsXHJcblx0XHRcdFx0XHRcdHRvOiBcIi9jcmVhdGVcIixcclxuXHRcdFx0XHRcdFx0dmFsdWU6IFwiQ3JlYXRlXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJKb2luIGEgcm9vbVwiLFxyXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJKb2luIGFuIGV4aXN0aW5nIHJvb20gdXNpbmcgYSByb29tIGNvZGUuXCIsXHJcblx0XHRcdFx0XHRcdHR5cGU6IFwibGlua1wiLFxyXG5cdFx0XHRcdFx0XHR0bzogXCIvam9pblwiLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJKb2luXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0aXNDYXJkOiB0cnVlLFxyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lJz5cclxuXHRcdFx0XHR7cHJvcHMuaXNMb2dnZWRJbiA/IG51bGwgOiA8Rm9ybSB7Li4uc2lnbkluRm9ybX0gLz59XHJcblx0XHRcdFx0PEZvcm0gey4uLmpvaW5Sb29tRm9ybX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzTG9nZ2VkSW46IHN0YXRlLnVzZXIuaXNMb2dnZWRJbixcclxuXHR1c2VybmFtZTogc3RhdGUudXNlci51c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSG9tZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcblxyXG5jb25zdCBIb21lVmlldyA9ICgpID0+IChcclxuXHQ8VmlldyB0aXRsZT0nSG9tZScgZGVzY3JpcHRpb249J0NyZWF0ZSBvciBqb2luIGEgcm9vbSB0byBwbGF5IHdpdGggZnJpZW5kcy4nPlxyXG5cdFx0PEhvbWUgLz5cclxuXHQ8L1ZpZXc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lVmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB1c2VUaXRsZSBmcm9tIFwiLi4vaG9va3MvdXNlVGl0bGVcIjtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmlldyA9IChwcm9wcykgPT4ge1xyXG5cdHVzZVRpdGxlKHByb3BzLnRpdGxlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfX2hlYWRlcl9faW5mbyc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250ZW50X19oZWFkZXJfX3RpdGxlJz57cHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nY29udGVudF9faGVhZGVyX19kZXNjcmlwdGlvbic+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7cHJvcHMuaXNMb2dnZWRJbiA/IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy8nPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMudXNlcm5hbWV9XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT0nbGluaycgdG89Jy9sb2dpbic+XHJcblx0XHRcdFx0XHRcdExvZyBpblxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9fYm9keSc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcblZpZXcucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzTG9nZ2VkSW46IHN0YXRlLnVzZXIuaXNMb2dnZWRJbixcclxuXHR1c2VybmFtZTogc3RhdGUudXNlci51c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVmlldyk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlVGl0bGUgPSAodGl0bGUpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgRG5EIEFwcCB8ICR7dGl0bGV9YDtcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRpdGxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9