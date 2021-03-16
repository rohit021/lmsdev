/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_auth_pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-pages/login */ \"./client/pages/auth-pages/login.js\");\n/* harmony import */ var _pages_auth_pages_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth-pages/register */ \"./client/pages/auth-pages/register.js\");\n/* harmony import */ var _components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/routing/PrivateRoute */ \"./client/components/routing/PrivateRoute.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/register\",\n    component: _pages_auth_pages_register__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/login\",\n    component: _pages_auth_pages_login__WEBPACK_IMPORTED_MODULE_2__.default\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/MainRouter.js?");

/***/ }),

/***/ "./client/components/routing/PrivateRoute.js":
/*!***************************************************!*\
  !*** ./client/components/routing/PrivateRoute.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/apicalls */ \"./client/utils/apicalls.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: RouteComponent,\n  ...rest\n}) => {\n  const currentUser = _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n    render: routeProps => currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouteComponent, routeProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: \"/login\"\n    })\n  }));\n};\n\nconst _default = PrivateRoute;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\components\\\\routing\\\\PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\components\\\\routing\\\\PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/components/routing/PrivateRoute.js?");

/***/ }),

/***/ "./client/pages/auth-pages/login.js":
/*!******************************************!*\
  !*** ./client/pages/auth-pages/login.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/apicalls */ \"./client/utils/apicalls.js\");\n/* harmony import */ var _assets_images_img_01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/img-01.png */ \"./client/assets/images/img-01.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n // import './login.css';\n\n\n\n\n\nconst LoginPage = () => {\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n\n  const loginHandler = async e => {\n    e.preventDefault();\n    _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__.default.login(email, password).then(() => {\n      history.push(\"/\");\n      window.location.reload();\n    }, error => {\n      setError(error.response.data.error);\n      setTimeout(() => {\n        setError(\"\");\n      }, 3000);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (localStorage.getItem(\"authToken\")) {\n      history.push(\"/\");\n    }\n  }, [history]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"login-pic\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_images_img_01_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    alt: \"IMG\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: loginHandler,\n    className: \"login-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"login-form-title\"\n  }, \"Member Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Email\",\n    onChange: e => setEmail(e.target.value),\n    value: email,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-envelope\",\n    \"aria-hidden\": \"true\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"password\",\n    name: \"pass\",\n    placeholder: \"Password\",\n    onChange: e => setPassword(e.target.value),\n    value: password,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-lock\",\n    \"aria-hidden\": \"true\"\n  }))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"error-msg\",\n    role: \"alert\"\n  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-login-form-btn\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"login-form-btn\",\n    type: \"submit\"\n  }, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"forget-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"txt1\"\n  }, \"Forgot\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"txt2\",\n    href: \"#\"\n  }, \"Password?\"))))));\n};\n\n__signature__(LoginPage, \"useState{[email, setEmail](\\\"\\\")}\\nuseState{[password, setPassword](\\\"\\\")}\\nuseState{[error, setError](\\\"\\\")}\\nuseHistory{history}\\nuseEffect{}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory]);\n\nconst _default = LoginPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(LoginPage, \"LoginPage\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\pages\\\\auth-pages\\\\login.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\pages\\\\auth-pages\\\\login.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/pages/auth-pages/login.js?");

/***/ }),

/***/ "./client/pages/auth-pages/register.js":
/*!*********************************************!*\
  !*** ./client/pages/auth-pages/register.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/apicalls */ \"./client/utils/apicalls.js\");\n/* harmony import */ var _assets_images_img_01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/img-01.png */ \"./client/assets/images/img-01.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n // import './login.css';\n\n\n\n\n\nconst RegisterPage = () => {\n  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [confirmpassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (localStorage.getItem(\"authToken\")) {\n      history.push(\"/\");\n    }\n  }, [history]);\n\n  const registerHandler = async e => {\n    e.preventDefault();\n\n    if (password !== confirmpassword) {\n      setPassword(\"\");\n      setConfirmPassword(\"\");\n      setTimeout(() => {\n        setError(\"\");\n      }, 5000);\n      return setError(\"Passwords do not match\");\n    }\n\n    _utils_apicalls__WEBPACK_IMPORTED_MODULE_2__.default.register(username, email, password).then(() => {\n      history.push(\"/\");\n      window.location.reload();\n    }, error => {\n      setError(error.response.data.error);\n      setTimeout(() => {\n        setError(\"\");\n      }, 3000);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"login-pic\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_images_img_01_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    alt: \"IMG\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: registerHandler,\n    className: \"login-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"login-form-title\"\n  }, \"Register Member\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"text\",\n    name: \"text\",\n    placeholder: \"Username\",\n    value: username,\n    onChange: e => setUsername(e.target.value),\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-user-circle\",\n    \"aria-hidden\": \"true\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Email\",\n    value: email,\n    onChange: e => setEmail(e.target.value),\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-envelope\",\n    \"aria-hidden\": \"true\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"password\",\n    name: \"pass\",\n    placeholder: \"Password\",\n    onChange: e => setPassword(e.target.value),\n    value: password,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-lock\",\n    \"aria-hidden\": \"true\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrap-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"inputField\",\n    type: \"password\",\n    name: \"pass\",\n    placeholder: \"Confirm Password\",\n    value: confirmpassword,\n    onChange: e => setConfirmPassword(e.target.value),\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"focus-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"symbol-input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-lock\",\n    \"aria-hidden\": \"true\"\n  })))))));\n};\n\n__signature__(RegisterPage, \"useState{[username, setUsername](\\\"\\\")}\\nuseState{[email, setEmail](\\\"\\\")}\\nuseState{[password, setPassword](\\\"\\\")}\\nuseState{[confirmpassword, setConfirmPassword](\\\"\\\")}\\nuseState{[error, setError](\\\"\\\")}\\nuseHistory{history}\\nuseEffect{}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory]);\n\nconst _default = RegisterPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(RegisterPage, \"RegisterPage\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\pages\\\\auth-pages\\\\register.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\pages\\\\auth-pages\\\\register.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/pages/auth-pages/register.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#4f83cc',\n      main: '#01579b',\n      dark: '#002f6c',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#9fffe0',\n      main: '#69f0ae',\n      dark: '#2bbd7e',\n      contrastText: '#000'\n    },\n    openTitle: '#002f6c',\n    protectedTitle: '#2bbd7e',\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/theme.js?");

/***/ }),

/***/ "./client/utils/apicalls.js":
/*!**********************************!*\
  !*** ./client/utils/apicalls.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst API_URL = \"http://localhost:5000\"; // https://formbackend11.herokuapp.com\";\n\nconst config = {\n  header: {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json'\n  }\n};\n\nconst login = (email, password) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + \"/auth/login\", {\n    email,\n    password\n  }, config).then(response => {\n    if (response.data) {\n      localStorage.setItem(\"authUser\", JSON.stringify(response.data.user));\n      localStorage.setItem(\"authToken\", JSON.stringify(response.data.token));\n    }\n\n    return response.data;\n  });\n};\n\nconst register = (username, email, password) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + \"/auth/register\", {\n    username,\n    email,\n    password\n  }, config).then(response => {\n    if (response.data) {\n      localStorage.setItem(\"authUser\", JSON.stringify(response.data.user));\n      localStorage.setItem(\"authToken\", JSON.stringify(response.data.token));\n    }\n\n    return response.data;\n  });\n}; // checking user is loggeg in\n\n\nconst isAuthenticated = () => {\n  if (typeof window == \"undefined\") {\n    return false;\n  }\n\n  if (localStorage.getItem(\"authToken\")) {\n    return JSON.stringify(localStorage.getItem(\"authUser\"));\n  } else {\n    return false;\n  }\n};\n\nconst signout = function (next) {\n  if (typeof window !== \"undefined\") {\n    localStorage.removeItem(\"authToken\");\n    localStorage.removeItem(\"authName\");\n    next();\n    return fetch(`${API_URL}/auth/signout`, {\n      method: \"GET\"\n    }).then(response => console.log(\"signout success\")).catch(err => console.log(err));\n  }\n};\n\nconst _default = {\n  login,\n  register,\n  isAuthenticated,\n  signout\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(API_URL, \"API_URL\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(login, \"login\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(register, \"register\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(isAuthenticated, \"isAuthenticated\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\client\\\\utils\\\\apicalls.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./client/utils/apicalls.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module) => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nmodule.exports = {\n  DB: {\n    uri:  false ? 0 : 'mongodb://localhost:27017/lms-dev',\n    options: {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      useCreateIndex: true\n    },\n    // Enable mongoose debug mode\n    debug: process.env.MONGODB_DEBUG || true\n  },\n  env: \"development\" || 0,\n  PORT: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\"\n};\n\n//# sourceURL=webpack://lmsdev/./config/config.js?");

/***/ }),

/***/ "./server/controllers/formdata.controller.js":
/*!***************************************************!*\
  !*** ./server/controllers/formdata.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n/**\r\n * Module dependencies.\r\n */\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar Form = __webpack_require__(/*! ../models/Form.model */ \"./server/models/Form.model.js\"),\n    errorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\"),\n    async = __webpack_require__(/*! async */ \"async\"); // Method to Create Form\n\n\nexports.createForm = function (req, res) {\n  var data = req.body; // console.log(req.body)\n\n  var errorResult = {\n    error: true,\n    message: \"\"\n  };\n  async.waterfall([function (done) {\n    if (!data.name) {\n      errorResult.message += \"name is missing \";\n    }\n\n    if (!data.date) {\n      errorResult.message += \" date is missing\";\n    }\n\n    if (!data.phone) {\n      errorResult.message += \" Phone number is missing\";\n    }\n\n    if (data.phone.length != 10) {\n      errorResult.message += \" Phone number not valid\";\n    }\n\n    if (!data.organization) {\n      errorResult.message += \" organization is missing\";\n    }\n\n    if (!data.source) {\n      errorResult.message += \" source is missing\";\n    }\n\n    if (errorResult.message) done(errorResult);else done(null, data);\n  }, function (data) {\n    var formdata = new Form(data);\n    formdata.save(function (err, result) {\n      if (err) {\n        // console.log(\"error----------\", err);\n        return res.status(400).json({\n          error: errorHandler.getErrorMessage(err)\n        });\n      } else {\n        var outputResult = {\n          id: result._id,\n          name: result.name,\n          phone: result.phone\n        };\n        res.json({\n          success: 1,\n          \"message\": \"Form Added Successfully\",\n          outputResult\n        });\n      }\n    });\n  }], function (err) {\n    console.log(\"error----------\", err);\n    return res.status(400).send({\n      message: err.message\n    });\n  });\n}; // Method to Get all Forms\n\n\nexports.getAllForms = function (req, res) {\n  var data = req.body; // console.log(data);\n\n  var matchQuery = {};\n  if (data.organization) matchQuery.organization = data.organization;\n  if (data.source) matchQuery.source = data.source;\n  if (data.startDate && data.endDate) matchQuery.date = {\n    $gte: data.startDate,\n    $lte: data.endDate\n  }; // console.log(matchQuery);\n\n  Form.find(matchQuery).sort({\n    date: -1\n  }).exec(function (err, forms) {\n    // Form.aggregate(\n    //     [\n    //     //     {\n    //     //     $match: ''\n    //     // },\n    //     // matchCheck,\n    //     {\n    //         \"$project\": {\n    //             \"_id\": \"$_id\",\n    //             \"name\": \"$name\",\n    //             \"date\": \"$date\",\n    //             \"phone\": \"$phone\",\n    //             \"organization\": \"$organization\",\n    //             \"rating\": \"$rating\",\n    //         }\n    //     }, {\n    //         \"$sort\": sort\n    //     },\n    //     ], function (err, forms) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: \"Something went wrong\"\n      });\n    }\n\n    if (forms.length) {\n      return res.json({\n        status: 1,\n        \"Total Records\": forms.length,\n        forms\n      });\n    }\n\n    return res.status(200).send({\n      status: 1,\n      message: 'No Data found'\n    });\n  });\n}; // Method to Get a particlular Form By ID\n\n\nexports.getForm = function (req, res) {\n  var formID = req.query.id;\n  Form.findOne({\n    _id: formID\n  }).exec(function (err, form) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: 'Something went wrong'\n      });\n    }\n\n    if (form) {\n      return res.json(form);\n    }\n\n    return res.status(200).send({\n      status: 1,\n      message: 'No Form Stored with this ID'\n    });\n  });\n}; // Method to Update Form By ID\n\n\nexports.updateForm = function (req, res) {\n  var data = req.body;\n  Form.findOne({\n    _id: data.id\n  }).exec(function (err, form) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: 'Form Id is not correct'\n      });\n    }\n\n    if (form) {\n      if (data.name) {\n        form.name = data.name;\n      }\n\n      if (data.date) {\n        form.date = data.date;\n      }\n\n      if (data.phone) {\n        form.phone = data.phone;\n      }\n\n      if (data.organization) {\n        form.organization = data.organization;\n      }\n\n      if (data.source) {\n        form.source = data.source;\n      }\n\n      form.save(function (err, result) {\n        if (err) {\n          console.log(\"error----------\", err);\n          return res.status(400).send({\n            \"message\": err\n          });\n        } else {\n          var outputResult = {\n            id: result._id,\n            name: result.name\n          };\n          res.json({\n            success: 1,\n            \"message\": \"Form Updated Successfully\",\n            outputResult\n          });\n        }\n      });\n    } else {\n      return res.json({\n        status: 0,\n        message: 'No Form Stored with this Id '\n      });\n    }\n  });\n}; // Method to delete a particlular Form\n\n\nexports.deleteForm = function (req, res) {\n  var formID = req.body.id;\n  Form.findOneAndDelete({\n    _id: formID\n  }).exec(function (err, form) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: 'something went wrong'\n      });\n    }\n\n    if (form) {\n      res.json({\n        status: 1,\n        message: \"Successfully Deleted\",\n        \"Form Detail\": form\n      });\n    } else {\n      return res.status(200).send(\"No Data found with this Id\");\n    }\n  });\n}; // Method to Delete all Forms\n\n\nexports.deleteAllForms = function (req, res) {\n  Form.deleteMany({}).exec(function (err, forms) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: 'No Form found'\n      });\n    }\n\n    res.send({\n      status: 1,\n      message: \"All Forms Successfully Deleted \"\n    });\n  });\n};\n\n//# sourceURL=webpack://lmsdev/./server/controllers/formdata.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n/**\r\n * Module dependencies.\r\n */\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar User = __webpack_require__(/*! ../models/User.model */ \"./server/models/User.model.js\"),\n    mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    async = __webpack_require__(/*! async */ \"async\"),\n    config = __webpack_require__(/*! ../../config/config */ \"./config/config.js\"),\n    jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"),\n    bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\"); // Method to Create New User\n\n\nexports.createUser = function (req, res) {\n  var data = req.body;\n  if (!data.email || !data.password) return res.status(400).json({\n    error: \"Please enter all required fields.\"\n  });\n  if (data.password.length < 6) return res.status(400).json({\n    error: \"Please enter a password of at least 6 characters.\"\n  });\n  User.findOne({\n    email: data.email\n  }).exec(function (err, user) {\n    if (user) {\n      return res.status(400).json({\n        error: \"Email Already Exists\"\n      });\n    } else {\n      // console.log(data);\n      const newUser = new User(data);\n      bcrypt.genSalt(10, function (err, salt) {\n        bcrypt.hash(data.password, salt, function (err, hash) {\n          if (err) console.log(err);else {\n            newUser.password = hash;\n            newUser.save(function (err, result) {\n              if (err) {\n                console.log(\"error----------\", err);\n                return res.status(400).send({\n                  \"message\": err\n                });\n              } else {\n                const payload = {\n                  userId: result._id,\n                  email: result.email\n                };\n                jwt.sign(payload, config.secretKey, {\n                  expiresIn: 3600\n                }, (err, token) => {\n                  // console.log(token);\n                  res.cookie(\"token\", token, {\n                    httpOnly: true,\n                    expire: new Date() + 9999\n                  });\n                  res.status(200).json({\n                    token,\n                    user: {\n                      name: result.username,\n                      email: result.email\n                    }\n                  });\n                });\n              }\n            });\n          }\n        });\n      });\n    }\n  });\n}; // Method to Login the User\n\n\nexports.loginUser = function (req, res) {\n  var data = req.body;\n  var errorResult = {};\n  async.waterfall([function (done) {\n    if (!data.email || data.email == '') {\n      errorResult.email = \" email is required\";\n    }\n\n    if (!data.password || data.password == '') {\n      errorResult.password = \" password is required\";\n    }\n\n    if (data.password.length < 6) return res.status(400).json({\n      error: \"Please enter a password of at least 6 characters.\"\n    });\n    if (Object.keys(errorResult).length) done(errorResult);else done(null, data);\n  }, function (data) {\n    User.findOne({\n      email: data.email\n    }).exec(function (err, user) {\n      if (!user) {\n        return res.status(400).json({\n          error: \"User Not Found\"\n        });\n      } else {\n        bcrypt.compare(data.password, user.password, (err, result) => {\n          if (result) {\n            const payload = {\n              userId: user.id,\n              email: user.email\n            };\n            jwt.sign(payload, config.secretKey, {\n              expiresIn: 3600\n            }, (err, token) => {\n              res.cookie(\"token\", token, {\n                httpOnly: true,\n                expire: new Date() + 9999\n              });\n              res.status(200).json({\n                token,\n                user: {\n                  name: user.username,\n                  email: user.email\n                }\n              });\n            });\n          } else {\n            return res.status(400).json({\n              error: \"Password Incorrect\"\n            });\n          }\n        });\n      }\n    });\n  }], function (err) {\n    console.log(\"error----------\", err);\n    return res.status(400).send({\n      message: err\n    });\n  });\n}; // Method to Logout the User\n\n\nexports.logOutUser = function (req, res) {\n  res.clearCookie(\"token\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n}; // Method to verify the User\n\n\nexports.loggedIn = function (req, res) {\n  try {\n    const token = req.cookies.token;\n    console.log(token);\n    if (!token) return res.json(false);\n    jwt.verify(token, config.secretKey);\n    res.send(true);\n  } catch (err) {\n    res.json(false);\n  }\n}; // Method to Get all Users\n\n\nexports.getAllUsers = function (req, res) {\n  User.find({}).exec(function (err, users) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: \"Something went wrong\"\n      });\n    }\n\n    if (users.length) {\n      return res.json({\n        \"Total Records\": users.length,\n        data: users\n      });\n    }\n\n    return res.status(200).send({\n      status: 1,\n      message: 'No Data found'\n    });\n  });\n}; // Method to Delete all Users\n\n\nexports.deleteAllUsers = function (req, res) {\n  User.deleteMany({}).exec(function (err, users) {\n    if (err) {\n      return res.status(400).send({\n        status: 0,\n        message: 'No users found'\n      });\n    }\n\n    res.send({\n      status: 1,\n      message: \"All users Successfully Deleted \"\n    });\n  });\n};\n\n//# sourceURL=webpack://lmsdev/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if ((_config_config__WEBPACK_IMPORTED_MODULE_0___default().env) === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/devBundle.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/**\n * Get unique error field name\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nexports.getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/Form.model.js":
/*!*************************************!*\
  !*** ./server/models/Form.model.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/**\r\n * Module dependencies.\r\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n      Schema = mongoose.Schema;\n/**\r\n * FormSchema\r\n */\n\n\nconst FormSchema = new Schema({\n  name: {\n    type: String,\n    lowercase: true,\n    required: true\n  },\n  email: {\n    type: String,\n    lowercase: true,\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: true\n  },\n  phone: {\n    type: String,\n    // unique: 'Phone Number already exists',\n    lowercase: true,\n    default: ''\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  },\n  organization: {\n    type: String,\n    maxlength: 30\n  },\n  source: {\n    type: String,\n    maxlength: 30\n  },\n  created_at: {\n    type: Date,\n    default: Date.now\n  },\n  updated_at: {\n    type: Date,\n    default: Date.now\n  },\n  created_by: {\n    type: mongoose.Schema.ObjectId,\n    ref: 'User'\n  }\n});\nFormSchema.pre('save', function (next) {\n  this.updated_at = new Date();\n  next();\n});\nmodule.exports = mongoose.model('Form', FormSchema);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Schema, \"Schema\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\models\\\\Form.model.js\");\n  reactHotLoader.register(FormSchema, \"FormSchema\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\models\\\\Form.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/models/Form.model.js?");

/***/ }),

/***/ "./server/models/User.model.js":
/*!*************************************!*\
  !*** ./server/models/User.model.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/**\r\n * Module dependencies.\r\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    Schema = mongoose.Schema;\n/**\r\n * UserSchema\r\n */\n\n\nvar UserSchema = new Schema({\n  username: {\n    type: String,\n    trim: true,\n    minlenght: 3,\n    maxlength: 100,\n    required: true\n  },\n  email: {\n    type: String,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  created_at: {\n    type: Date,\n    default: Date.now\n  },\n  updated_at: {\n    type: Date,\n    default: Date.now\n  }\n});\nUserSchema.pre('save', function (next) {\n  this.updated_at = new Date();\n  next();\n});\nmodule.exports = mongoose.model('users', UserSchema);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Schema, \"Schema\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\models\\\\User.model.js\");\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\models\\\\User.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/models/User.model.js?");

/***/ }),

/***/ "./server/routes/formdata.routes.js":
/*!******************************************!*\
  !*** ./server/routes/formdata.routes.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = __webpack_require__(/*! express */ \"express\").Router();\n\nconst formcontroller = __webpack_require__(/*! ../controllers/formdata.controller */ \"./server/controllers/formdata.controller.js\"); // Single event Routes\n\n\nrouter.route('/data').post(formcontroller.createForm).get(formcontroller.getForm).put(formcontroller.updateForm).delete(formcontroller.deleteForm); //Multiple Events Routes\n\nrouter.route('/datas').get(formcontroller.getAllForms).delete(formcontroller.deleteAllForms);\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\routes\\\\formdata.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/routes/formdata.routes.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = __webpack_require__(/*! express */ \"express\").Router(),\n    UserRoutes = __webpack_require__(/*! ./user.routes */ \"./server/routes/user.routes.js\"),\n    FormRoutes = __webpack_require__(/*! ./formdata.routes */ \"./server/routes/formdata.routes.js\");\n\nrouter.use('/api/form', FormRoutes);\nrouter.use('/auth', UserRoutes);\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\routes\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/routes/index.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = __webpack_require__(/*! express */ \"express\").Router();\n\nconst usercontroller = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\"); // Single event Routes\n\n\nrouter.route('/register').post(usercontroller.createUser);\nrouter.route('/login').post(usercontroller.loginUser);\nrouter.route('/logout').get(usercontroller.logOutUser);\nrouter.route('/loggedIn').get(usercontroller.loggedIn);\nrouter.route('/getusers').get(usercontroller.getAllUsers);\nrouter.route('/deleteAll').delete(usercontroller.deleteAllUsers);\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar express = __webpack_require__(/*! express */ \"express\"),\n    app = express(),\n    path = __webpack_require__(/*! path */ \"path\"),\n    mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    cors = __webpack_require__(/*! cors */ \"cors\"),\n    chalk = __webpack_require__(/*! chalk */ \"chalk\"),\n    cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\"),\n    helmet = __webpack_require__(/*! helmet */ \"helmet\"),\n    compress = __webpack_require__(/*! compression */ \"compression\"),\n    config = __webpack_require__(/*! ../config/config */ \"./config/config.js\"),\n    bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\"),\n    ApiRoutes = __webpack_require__(/*! ./routes */ \"./server/routes/index.js\"); // modules for server side rendering\n\n\n\n\n\n\n\n\n //end\n//comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd(); //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_7__.default.compile(app); // Normal express config middlewares\n\napp.use(__webpack_require__(/*! morgan */ \"morgan\")('dev'));\napp.use(bodyParser.json());\napp.use(cookieParser());\napp.use(compress()); // secure apps by setting various HTTP headers\n\napp.use(helmet()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));\napp.use(cors({\n  origin: [\"http://localhost:3000\", \"https://formfrontend.netlify.app\"],\n  credentials: true\n})); // Custom api routes\n\napp.use('/', ApiRoutes);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_6__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_2__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_4__.default)({\n    markup: markup,\n    css: css\n  }));\n}); // Catch unauthorised errors\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n/** connect to MongoDB datastore */\n\nmongoose.connect(config.DB.uri, config.DB.options).then(() => {\n  console.log(chalk.green.bold('Server successfully connected with MongoDB!'));\n  app.listen(config.PORT, function () {\n    console.log('Listening on port ' + config.PORT);\n    mongoose.set('debug', config.DB.debug);\n  });\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <meta\n            name=\"viewport\"\n            content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n          >\n          <title>MERN Expense Tracker</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none;\n                color: #2bbd7e\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\DELL\\\\Desktop\\\\lmsdev\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://lmsdev/./webpack.config.client.js?");

/***/ }),

/***/ "./client/assets/images/img-01.png":
/*!*****************************************!*\
  !*** ./client/assets/images/img-01.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"168936143fc1fe800f6202d60a5b1045.png\");\n\n//# sourceURL=webpack://lmsdev/./client/assets/images/img-01.png?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("async");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("chalk");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;