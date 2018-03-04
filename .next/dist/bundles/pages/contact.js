module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_contact_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_contact_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_contact_scss__);






var Contact = function Contact() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'contact-container' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_3__styles_contact_scss___default.a } }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_feather__["ArrowLeft"], null),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          'Back to Noschool '
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Contact'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'form',
      { method: 'POST', action: 'https://formspree.io/twm013@bucknell.edu' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'name' },
          ' Name (Required)',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'name', type: 'text', name: 'name', required: true })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'email' },
          ' Email (Required)',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'email', type: 'email', name: 'email', required: true })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'subject' },
          ' Subject',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'subject', type: 'text', name: 'subject' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'message' },
          ' Message (Required)',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: 'message', name: 'message', required: true })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'submit' },
        'Send'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0;\n  color: #53667C;\n  overflow-x: hidden; }\n\nhtml {\n  font-family: Nunito, \"SourceSansPro\", \"Helvetica Neue\", sans-serif; }\n\n.contact-container {\n  margin-top: 5rem;\n  margin-left: 8rem;\n  margin-bottom: 5rem; }\n\n.contact-container a {\n    position: absolute;\n    left: 40px;\n    top: 20px;\n    text-decoration: none;\n    color: #B4B4B4; }\n\n.contact-container a svg {\n      position: relative;\n      top: 5px;\n      width: 30px;\n      height: 20px; }\n\n.contact-container a:hover {\n      color: #53667C; }\n\n.contact-container form input {\n    max-width: 400px;\n    box-sizing: border-box;\n    padding: 0.65rem 0.7rem;\n    width: 80%;\n    display: block;\n    color: #53667C;\n    border: 1px solid #53667C;\n    margin: 1rem 0;\n    font-size: 16px; }\n\n.contact-container form input:focus, .contact-container form textarea:focus {\n    border-color: #53667C;\n    box-shadow: 0 0 2px 1px rgba(107, 119, 148, 0.5);\n    outline: none; }\n\n.contact-container form textarea {\n    box-sizing: border-box;\n    max-width: 600px;\n    padding: 0.65rem 0.7rem;\n    width: 90%;\n    height: 320px;\n    display: block;\n    color: #53667C;\n    border: 1px solid #53667C;\n    font-size: 16px !important; }\n\n.contact-container form button[type=\"submit\"] {\n    background: repeating-linear-gradient(45deg, #f0f1f4, #f0f1f4 1px, white 1px, white 6px);\n    margin: auto;\n    margin-top: 1rem;\n    padding: 0.75rem 2.5rem;\n    font-size: 1rem;\n    letter-spacing: 0.05em;\n    cursor: pointer;\n    font-weight: 400;\n    color: #53667C;\n    text-transform: uppercase;\n    border: 1px solid #53667C; }\n\n.contact-container form button[type=\"submit\"]:hover {\n      color: #58E78F;\n      border-color: #58E78F; }\n\n@media (max-width: 640px) {\n  .contact-container {\n    margin-left: 2rem; }\n    .contact-container form textarea {\n      width: 80%; }\n    .contact-container a {\n      left: 1.5rem; } }\n";

/***/ })
/******/ ]);