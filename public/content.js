/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chrome/message/chrome-message.ts":
/*!**********************************************!*\
  !*** ./src/chrome/message/chrome-message.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pingTab": function() { return /* binding */ pingTab; },
/* harmony export */   "sendMessageToTab": function() { return /* binding */ sendMessageToTab; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/chrome/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var pingTab = function (msg) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var tabId, action, payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentTabId)()];
                case 1:
                    tabId = _a.sent();
                    action = msg.action, payload = msg.payload;
                    chrome.tabs.sendMessage(tabId, { action: action, payload: payload }, function (response) {
                        // Check if receiving end exists
                        if (chrome.runtime.lastError) {
                            reject('NO_EXTENSION');
                            return;
                        }
                        if (!response) {
                            reject('NO_RESPONSE');
                            return;
                        }
                        resolve(response);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
var sendMessageToTab = function (_a) {
    var msg = _a.msg, successAction = _a.successAction, fallbackAction = _a.fallbackAction;
    if (chrome.runtime) {
        pingTab(msg)
            .then(function (response) {
            successAction === null || successAction === void 0 ? void 0 : successAction(response);
        })
            .catch(function (error) {
            fallbackAction === null || fallbackAction === void 0 ? void 0 : fallbackAction(error);
        });
    }
    else {
        fallbackAction === null || fallbackAction === void 0 ? void 0 : fallbackAction();
    }
};


/***/ }),

/***/ "./src/chrome/message/index.ts":
/*!*************************************!*\
  !*** ./src/chrome/message/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePassingActions": function() { return /* reexport safe */ _message_actions__WEBPACK_IMPORTED_MODULE_1__.MessagePassingActions; },
/* harmony export */   "pingTab": function() { return /* reexport safe */ _chrome_message__WEBPACK_IMPORTED_MODULE_0__.pingTab; },
/* harmony export */   "sendMessageToTab": function() { return /* reexport safe */ _chrome_message__WEBPACK_IMPORTED_MODULE_0__.sendMessageToTab; }
/* harmony export */ });
/* harmony import */ var _chrome_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chrome-message */ "./src/chrome/message/chrome-message.ts");
/* harmony import */ var _message_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-actions */ "./src/chrome/message/message-actions.ts");




/***/ }),

/***/ "./src/chrome/message/message-actions.ts":
/*!***********************************************!*\
  !*** ./src/chrome/message/message-actions.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePassingActions": function() { return /* binding */ MessagePassingActions; }
/* harmony export */ });
var MessagePassingActions;
(function (MessagePassingActions) {
    MessagePassingActions["fill"] = "fill";
})(MessagePassingActions || (MessagePassingActions = {}));


/***/ }),

/***/ "./src/chrome/utils.ts":
/*!*****************************!*\
  !*** ./src/chrome/utils.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTabId": function() { return /* binding */ getCurrentTabId; },
/* harmony export */   "getCurrentTabUrl": function() { return /* binding */ getCurrentTabUrl; }
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var queryInfo = { active: true, lastFocusedWindow: true };
var getCurrentTabUrl = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tabs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, chrome.tabs.query(queryInfo)];
            case 1:
                tabs = (_a.sent())[0];
                return [2 /*return*/, tabs === null || tabs === void 0 ? void 0 : tabs.url];
        }
    });
}); };
var getCurrentTabId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tabs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, chrome.tabs.query(queryInfo)];
            case 1:
                tabs = (_a.sent())[0];
                return [2 /*return*/, tabs.id];
        }
    });
}); };


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************************!*\
  !*** ./src/chrome/content/content.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message */ "./src/chrome/message/index.ts");

chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
    if (msg.action === _message__WEBPACK_IMPORTED_MODULE_0__.MessagePassingActions.fill) {
        var inputs = document.querySelectorAll('input');
        console.log(inputs.entries);
        console.log(inputs.values);
        console.log(inputs.item);
        for (var i = 0; i < inputs.length; i++) {
            i === 0 ? inputs[i].value = "\u10EF\u10D0\u10DB\u10D1\u10E3\u10DA" : inputs[i].value = "\u10D2\u10D0\u10D6\u10D0\u10D4\u10D5";
        }
        return;
    }
    return true;
});

}();
/******/ })()
;