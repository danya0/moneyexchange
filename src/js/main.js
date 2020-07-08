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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _modules_section1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/section1 */ \"./src/js/modules/section1.js\");\n/* harmony import */ var _modules_section4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/section4 */ \"./src/js/modules/section4.js\");\n/* harmony import */ var _modules_section1Anim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/section1Anim */ \"./src/js/modules/section1Anim.js\");\n/* harmony import */ var _modules_section2Anim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/section2Anim */ \"./src/js/modules/section2Anim.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_section1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_section4__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_section1Anim__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_modules_section2Anim__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var button = $('#header-profile-btn'),\n      block = $('#header-profile-block');\n  button.click(function () {\n    block.slideToggle();\n  });\n  $(window).resize(function () {\n    if (window.innerWidth >= 768) {\n      block.css('display', '');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/section1.js":
/*!************************************!*\
  !*** ./src/js/modules/section1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var selects = $('.form-input-block__select'),\n      selectItem = $('.select-item');\n  selects.click(function (e) {\n    $(this).children('.select__icon').toggleClass('select__icon_active');\n    $(this).children('.select__body').slideToggle();\n  });\n  selectItem.each(function (index, item) {\n    var currentIcon = $(item).parents('.form-input-block__select').children('.select__header').children('.select__current').children('.select-item-current').children('img'),\n        currentText = $(item).parents('.form-input-block__select').children('.select__header').children('.select__current').children('.select-item-current').children('span');\n    $(item).click(function (e) {\n      currentIcon.attr('src', $(this).children('img').attr('src'));\n      currentText.text($(this).children('span').text());\n      countValue();\n    });\n  });\n  var firstInput = $('.form-input-block:first input'),\n      lastInput = $('.form-input-block:last input');\n  firstInput.change(function (e) {\n    e.preventDefault();\n    countValue();\n  });\n\n  function countValue() {\n    var firstSelect = $('.select-item-current:first span'),\n        lastSelect = $('.select-item-current:last span'),\n        firstInputVal = +firstInput.val(),\n        firstValue = 0,\n        lastValue = 0;\n    var rub = 1,\n        usd = 69,\n        eur = 73;\n\n    if (firstSelect.text() == 'RUB') {\n      firstValue = rub;\n    } else if (firstSelect.text() == 'USD') {\n      firstValue = usd;\n    } else if (firstSelect.text() == 'EUR') {\n      firstValue = eur;\n    }\n\n    if (lastSelect.text() == 'RUB') {\n      lastValue = rub;\n    } else if (lastSelect.text() == 'USD') {\n      lastValue = usd;\n    } else if (lastSelect.text() == 'EUR') {\n      lastValue = eur;\n    }\n\n    lastInput.val((firstInputVal / lastValue * firstValue).toFixed(2));\n  }\n\n  countValue();\n});\n\n//# sourceURL=webpack:///./src/js/modules/section1.js?");

/***/ }),

/***/ "./src/js/modules/section1Anim.js":
/*!****************************************!*\
  !*** ./src/js/modules/section1Anim.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $(window).bind('scroll', function (e) {\n    parallaxScroll();\n  });\n\n  function parallaxScroll() {\n    var scrolled = $(window).scrollTop();\n    $('.section1-bg').css('top', 0 - scrolled * 0.25 + 'px');\n\n    if (scrolled > 1000) {\n      $('.section1-bg').css('top', '');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/section1Anim.js?");

/***/ }),

/***/ "./src/js/modules/section2Anim.js":
/*!****************************************!*\
  !*** ./src/js/modules/section2Anim.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var images = $('.advantages-block__img');\n  $(window).scroll(function () {\n    if ($(window).scrollTop() > 200) {\n      $(images).removeClass('unvisible');\n      setTimeout(function () {\n        images.css('transition', '0.5s');\n        images.addClass('img-hover');\n      }, 2500);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/section2Anim.js?");

/***/ }),

/***/ "./src/js/modules/section4.js":
/*!************************************!*\
  !*** ./src/js/modules/section4.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('.slider').slick({\n    infinite: true,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    prevArrow: '<div class=\"slider-arrow slider-arrow-prev\"> <div class=\"slider-arrow__line slider-arrow-prev__line\"></div> </div>',\n    nextArrow: '<div class=\"slider-arrow slider-arrow-next\"> <div class=\"slider-arrow__line slider-arrow-next__line\"></div> </div>',\n    responsive: [{\n      breakpoint: 780,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n  $('.slider-arrow-prev').mouseover(function () {\n    $('.slider-arrow-next__line').addClass('slider-arrow-next__line_small');\n  });\n  $('.slider-arrow-prev').mouseout(function () {\n    $('.slider-arrow-next__line').removeClass('slider-arrow-next__line_small');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/section4.js?");

/***/ })

/******/ });