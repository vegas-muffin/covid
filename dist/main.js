/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/scss.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"../node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss.scss */ \"./styles/scss.scss\");\n\r\n\r\n\r\n// sidebar\r\nconst bodyOverflow = document.querySelector(\"body\");\r\nconst btns = document.querySelectorAll(\".burger__menu-btn\");\r\nconst modalOverlay = document.querySelector(\".sidebar-modal__overlay\");\r\nconst modals = document.querySelectorAll(\".sidebar-modal__window\");\r\nconst sidebarModal = document.querySelector(\".sidebar-modal\");\r\nconst menuBtn = document.querySelector(\".menu-btn__burger\");\r\nconst sbmlink = document.querySelectorAll(\".sidebar-modal__link\");\r\nlet sideBarOpen = false;\r\n//sidebar end\r\n\r\n//\r\nconst CASESLIST = document.querySelector(\".cases__list\");\r\nconst DEATHSLIST = document.querySelector(\".deaths__list\");\r\nconst RECOVEREDLIST = document.querySelector(\".recovered__list\");\r\n//\r\n\r\n// SIDEBAR****************************************************\r\nbtns.forEach((el) => {\r\n  el.addEventListener(\"click\", (e) => {\r\n    let path = e.currentTarget.getAttribute(\"data-path\");\r\n    modals.forEach((el) => {\r\n      el.classList.remove(\"sidebar-modal_visible\");\r\n    });\r\n    if (sideBarOpen === false) {\r\n      document\r\n        .querySelector(`[data-target=\"${path}\"]`)\r\n        .classList.add(\"sidebar-modal_visible\");\r\n      bodyOverflow.classList.add(\"overflow-hidden\");\r\n      modalOverlay.classList.add(\"sidebar-modal__overlay_visible\");\r\n      sidebarModal.classList.add(\"sidebar-modal-main_visible\");\r\n      menuBtn.classList.add(\"menu-btn_open\");\r\n      sideBarOpen = true;\r\n    } else if (sideBarOpen === true) {\r\n      bodyOverflow.classList.remove(\"overflow-hidden\");\r\n      modalOverlay.classList.remove(\"sidebar-modal__overlay_visible\");\r\n      sidebarModal.classList.remove(\"sidebar-modal-main_visible\");\r\n      menuBtn.classList.remove(\"menu-btn_open\");\r\n      sideBarOpen = false;\r\n    }\r\n  });\r\n});\r\n\r\nmodalOverlay.addEventListener(\"click\", (e) => {\r\n  if (e.target == modalOverlay && sideBarOpen == true) {\r\n    bodyOverflow.classList.remove(\"overflow-hidden\");\r\n    modalOverlay.classList.remove(\"sidebar-modal__overlay_visible\");\r\n    sidebarModal.classList.remove(\"sidebar-modal-main_visible\");\r\n    menuBtn.classList.remove(\"menu-btn_open\");\r\n    sideBarOpen = false;\r\n    modals.forEach((el) => {\r\n      el.classList.remove(\"sidebar-modal_visible\");\r\n    });\r\n  }\r\n});\r\n\r\nconst back = document.querySelector(\".sidebar-modal__back\");\r\nback.addEventListener(\"click\", (e) => {\r\n  if (sideBarOpen == true) {\r\n    bodyOverflow.classList.remove(\"overflow-hidden\");\r\n    modalOverlay.classList.remove(\"sidebar-modal__overlay_visible\");\r\n    sidebarModal.classList.remove(\"sidebar-modal-main_visible\");\r\n    menuBtn.classList.remove(\"menu-btn_open\");\r\n    sideBarOpen = false;\r\n    modals.forEach((el) => {\r\n      el.classList.remove(\"sidebar-modal_visible\");\r\n    });\r\n  }\r\n});\r\n\r\n// CASES\r\n\r\nasync function getCases() {\r\n  const url = `https://api.covid19api.com/summary`;\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n\r\n  let listCountry = ``;\r\n\r\n  for (let i = 0; i < data.Countries.length; i += 1) {\r\n    listCountry += `<li class=\"cases__item\"><span class=\"cases__count\">${data.Countries[i].TotalConfirmed}</span><span class=\"cases__country\">${data.Countries[i].Country}</span></li>`;\r\n  }\r\n\r\n  CASESLIST.insertAdjacentHTML(\"beforeend\", listCountry);\r\n}\r\n\r\n// DEATHS\r\nasync function getDeaths() {\r\n  const url = `https://api.covid19api.com/summary`;\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n\r\n  let listDeaths = ``;\r\n\r\n  for (let i = 0; i < data.Countries.length; i += 1) {\r\n    listDeaths += `<li class=\"deaths__item\"><span class=\"deaths__count\">${data.Countries[i].TotalDeaths}</span><span class=\"deaths__country\">${data.Countries[i].Country}</span></li>`;\r\n  }\r\n\r\n  DEATHSLIST.insertAdjacentHTML(\"beforeend\", listDeaths);\r\n}\r\n// RECOVERED\r\nasync function getRecovered() {\r\n  const url = `https://api.covid19api.com/summary`;\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n\r\n  let listRecovered = ``;\r\n\r\n  for (let i = 0; i < data.Countries.length; i += 1) {\r\n    listRecovered += `<li class=\"recovered__item\"><span class=\"recovered__count\">${data.Countries[i].TotalRecovered}</span><span class=\"recovered__country\">${data.Countries[i].Country}</span></li>`;\r\n  }\r\n  RECOVEREDLIST.insertAdjacentHTML(\"beforeend\", listRecovered);\r\n}\r\n\r\ngetCases();\r\ngetDeaths();\r\ngetRecovered();\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.js","vendors-node_modules_bootstrap_dist_js_bootstrap_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;