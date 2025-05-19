/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupHeader: () => (/* binding */ setupHeader)\n/* harmony export */ });\nfunction setupHeader() {\r\n    const cartButtons = document.querySelectorAll(\".header__cart-button\");\r\n    const cartCloseButton = document.querySelector(\".cart__close\");\r\n    const cart = document.querySelector(\".cart\");\r\n    const addToBagButton = document.querySelector(\".button--primary\");\r\n    let isCartOpen = false;\r\n\r\n    const backdrop = document.createElement(\"div\");\r\n    backdrop.className = \"cart-backdrop\";\r\n    document.body.appendChild(backdrop);\r\n\r\n    const openCart = async () => {\r\n        if (isCartOpen) return;\r\n\r\n        cart.classList.add(\"is-open\", \"is-loading\");\r\n        backdrop.classList.add(\"is-visible\");\r\n        document.body.style.overflow = \"hidden\";\r\n\r\n        await new Promise((resolve) => setTimeout(resolve, 1000));\r\n\r\n        cart.classList.remove(\"is-loading\");\r\n        isCartOpen = true;\r\n    };\r\n\r\n    const closeCart = () => {\r\n        if (!isCartOpen) return;\r\n        isCartOpen = false;\r\n        cart.classList.remove(\"is-open\");\r\n        backdrop.classList.remove(\"is-visible\");\r\n        document.body.style.overflow = \"\";\r\n    };\r\n\r\n    cartButtons.forEach((button) => {\r\n        button.addEventListener(\"click\", openCart);\r\n    });\r\n\r\n    addToBagButton.addEventListener(\"click\", openCart);\r\n    cartCloseButton.addEventListener(\"click\", closeCart);\r\n    backdrop.addEventListener(\"click\", closeCart);\r\n}\r\n\n\n//# sourceURL=webpack://idhl-technical-test/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n\r\n\r\n(0,_components_header__WEBPACK_IMPORTED_MODULE_0__.setupHeader)();\r\n\n\n//# sourceURL=webpack://idhl-technical-test/./src/js/main.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;