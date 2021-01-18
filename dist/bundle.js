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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/javascript/app */ \"./src/javascript/app.js\");\n\nnew _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__.default();\n\n//# sourceURL=webpack://street-fight-game/./index.js?");

/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _fightersView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fightersView */ \"./src/javascript/fightersView.js\");\n/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fightersService */ \"./src/javascript/services/fightersService.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass App {\n  constructor() {\n    this.startApp();\n  }\n\n  async startApp() {\n    try {\n      App.loadingElement.style.visibility = \"visible\";\n      const fighters = await _services_fightersService__WEBPACK_IMPORTED_MODULE_1__.fighterService.getFighters();\n      const fightersView = new _fightersView__WEBPACK_IMPORTED_MODULE_0__.default(fighters);\n      const fightersElement = fightersView.element;\n      App.rootElement.appendChild(fightersElement);\n    } catch (error) {\n      console.warn(error);\n      App.rootElement.innerText = \"Failed to load data\";\n    } finally {\n      App.loadingElement.style.visibility = \"hidden\";\n    }\n  }\n\n}\n\n_defineProperty(App, \"rootElement\", document.getElementById(\"root\"));\n\n_defineProperty(App, \"loadingElement\", document.getElementById(\"loading-overlay\"));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/app.js?");

/***/ }),

/***/ "./src/javascript/fighterView.js":
/*!***************************************!*\
  !*** ./src/javascript/fighterView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/javascript/view.js\");\n\n\nclass FighterView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(fighter, handleClick) {\n    super();\n    this.createFighter(fighter, handleClick);\n  }\n\n  createFighter(fighter, handleClick) {\n    const {\n      name,\n      source\n    } = fighter;\n    const nameElement = this.createName(name);\n    const imageElement = this.createImage(source);\n    this.element = this.createElement({\n      tagName: \"div\",\n      className: \"fighter\"\n    });\n    this.element.append(imageElement, nameElement);\n    this.element.addEventListener(\"click\", event => handleClick(event, fighter), false);\n  }\n\n  createName(name) {\n    const nameElement = this.createElement({\n      tagName: \"span\",\n      className: \"name\"\n    });\n    nameElement.innerText = name;\n    return nameElement;\n  }\n\n  createImage(source) {\n    const attributes = {\n      src: source\n    };\n    const imgElement = this.createElement({\n      tagName: \"img\",\n      className: \"fighter-image\",\n      attributes\n    });\n    return imgElement;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FighterView);\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/fighterView.js?");

/***/ }),

/***/ "./src/javascript/fightersView.js":
/*!****************************************!*\
  !*** ./src/javascript/fightersView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/javascript/view.js\");\n/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighterView */ \"./src/javascript/fighterView.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass FightersView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(fighters) {\n    super();\n\n    _defineProperty(this, \"fightersDetailsMap\", new Map());\n\n    this.handleClick = this.handleFighterClick.bind(this);\n    this.createFighters(fighters);\n  }\n\n  createFighters(fighters) {\n    const fighterElements = fighters.map(fighter => {\n      const fighterView = new _fighterView__WEBPACK_IMPORTED_MODULE_1__.default(fighter, this.handleClick);\n      return fighterView.element;\n    });\n    this.element = this.createElement({\n      tagName: \"div\",\n      className: \"fighters\"\n    });\n    this.element.append(...fighterElements);\n  }\n\n  handleFighterClick(event, fighter) {\n    this.fightersDetailsMap.set(fighter._id, fighter);\n    console.log(\"clicked\"); // get from map or load info and add to fightersMap\n    // show modal with fighter info\n    // allow to edit health and power in this modal\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FightersView);\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/fightersView.js?");

/***/ }),

/***/ "./src/javascript/helpers/apiHelper.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callApi\": () => /* binding */ callApi\n/* harmony export */ });\nconst API_URL = \"https://api.github.com/\";\n\nfunction callApi(endpoind, method) {\n  const url = API_URL + endpoind;\n  const options = {\n    method\n  };\n  const name = \"\";\n  return fetch(url, options).then(response => response.ok ? response.json() : Promise.reject(Error(\"Failed to load\"))).catch(error => {\n    throw error;\n  });\n}\n\n\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/helpers/apiHelper.js?");

/***/ }),

/***/ "./src/javascript/services/fightersService.js":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fighterService\": () => /* binding */ fighterService\n/* harmony export */ });\n/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ \"./src/javascript/helpers/apiHelper.js\");\n\n\nclass FighterService {\n  async getFighters() {\n    try {\n      const endpoint = \"repos/sahanr/street-fighter/contents/fighters.json\";\n      const apiResult = await (0,_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__.callApi)(endpoint, \"GET\");\n      return JSON.parse(atob(apiResult.content));\n    } catch (error) {\n      throw error;\n    }\n  }\n\n  async getFightersDetails() {// implement this method\n    // endpoint - 'repos/sahanr/street-fighter/contents/fighters.json'\n  }\n\n}\n\nconst fighterService = new FighterService();\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/services/fightersService.js?");

/***/ }),

/***/ "./src/javascript/view.js":
/*!********************************!*\
  !*** ./src/javascript/view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass View {\n  constructor() {\n    _defineProperty(this, \"element\", void 0);\n  }\n\n  createElement({\n    tagName,\n    className = \"\",\n    attributes = {}\n  }) {\n    const element = document.createElement(tagName);\n    element.classList.add(className);\n    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));\n    return element;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n//# sourceURL=webpack://street-fight-game/./src/javascript/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;