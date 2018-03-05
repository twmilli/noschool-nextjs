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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setLength; });
/* unused harmony export clearFilters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookmark; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./actions/types.js");


var setBudget = function setBudget(value) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["c" /* SET_BUDGET */], payload: value };
};
var setRegion = function setRegion(e) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["f" /* SET_REGION */], payload: e.target.dataset.label || e.target.parentNode.dataset.label };
};

var setInterest = function setInterest(e) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["d" /* SET_INTEREST */], payload: e.target.dataset.label || e.target.parentNode.dataset.label };
};

var setLength = function setLength(value) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["e" /* SET_LENGTH */], payload: value };
};

var clearFilters = function clearFilters() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* CLEAR_FILTERS */] };
};

var bookmark = function bookmark(program) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* BOOKMARK */], payload: program };
};

/***/ }),

/***/ "./actions/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_BUDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_INTEREST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOOKMARK; });
var SET_BUDGET = 'set_budget';
var SET_REGION = 'set_region';
var SET_INTEREST = 'set_interest';
var SET_LENGTH = 'set_length';
var CLEAR_FILTERS = 'clear_filters';
var BOOKMARK = 'bookmark';

/***/ }),

/***/ "./components/Checkbox.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/Checkbox.jsx';



var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      handleClick = _ref.handleClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: checked ? 'Checkbox-container checked' : 'Checkbox-container',
      onClick: handleClick,
      onKeyPress: handleClick,
      role: 'button',
      tabIndex: 0,
      'data-label': label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'label', 'data-label': label, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      label
    )
  );
};

Checkbox.propTypes = {
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

Checkbox.defaultProps = {
  checked: true
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./components/FilterPane.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RefineList__ = __webpack_require__("./components/RefineList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RangeSlider__ = __webpack_require__("./components/RangeSlider.jsx");
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/FilterPane.jsx';







var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var formatLength = function formatLength(_ref) {
  var min = _ref.min,
      max = _ref.max;

  var sMin = void 0;
  var sMax = void 0;
  var minMonths = Math.floor(min / 30);
  var maxMonths = Math.floor(max / 30);
  if (minMonths <= 0) {
    sMin = '1 day';
  } else if (minMonths === 1) {
    sMin = minMonths + ' month';
  } else {
    sMin = minMonths + ' months';
  }
  if (maxMonths === 12) {
    sMax = 'No limit';
  } else {
    sMax = maxMonths + ' months';
  }
  if (minMonths === maxMonths) {
    return sMin;
  }
  return sMin + ' - ' + sMax;
};

var FilterPane = function FilterPane(props) {
  var budget = props.budget,
      regions = props.regions,
      interests = props.interests,
      length = props.length;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'left-filters-pane', __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'filter-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'slider-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          'Budget'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slider-label', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          '$',
          budget.min,
          ' - ',
          budget.max === 20000 ? 'No Limit' : numberWithCommas(budget.max)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'slider-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RangeSlider__["a" /* default */], {
          onChange: props.setBudget,
          value: budget,
          attributeName: 'cost',
          maxVal: 20000,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'filter-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'slider-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          'Duration'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slider-label', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          formatLength(length)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'slider-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RangeSlider__["a" /* default */], {
          onChange: props.setLength,
          value: length,
          attributeName: 'length',
          maxVal: 360,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'filter-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        'Your Interests'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RefineList__["a" /* default */], { onClick: props.setInterest, list: interests, attributeName: 'topics', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'filter-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        'Continents'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RefineList__["a" /* default */], { onClick: props.setRegion, list: regions, attributeName: 'regions', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    budget: state.budget,
    regions: state.regions,
    interests: state.interests,
    length: state.length
  };
};

FilterPane.propTypes = {
  setBudget: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  setRegion: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  budget: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    min: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    max: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  }).isRequired,
  regions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    'South America': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Africa: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Europe: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Asia: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Australia: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    'Middle East': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
  }).isRequired,
  setInterest: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  interests: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    Travel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Coding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Music: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Art: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Technology: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Medicine: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Farming: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Photography: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    Cooking: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
  }).isRequired,
  length: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    min: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    max: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  }).isRequired,
  setLength: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, {
  setBudget: __WEBPACK_IMPORTED_MODULE_4__actions__["b" /* setBudget */], setRegion: __WEBPACK_IMPORTED_MODULE_4__actions__["e" /* setRegion */], setInterest: __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* setInterest */], setLength: __WEBPACK_IMPORTED_MODULE_4__actions__["d" /* setLength */]
})(FilterPane));

/***/ }),

/***/ "./components/Layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/Layout.jsx';





var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/static/apple-touch-icon.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon-32x32.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon-16x16.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'mask-icon', href: '/static/safari-pinned-tab.svg', color: '#5bbad5', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,700', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'Easily search a curated collection of the best gap year and college alternatives to help you find your passion.', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { itemProp: 'name', content: 'Noschool.io: Discover awesome activities for your gap year.', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { itemProp: 'description', content: 'Easily search a curated collection of the best gap year and college alternatives to help you find your passion.', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { itemProp: 'image', content: 'http://d3bewr15g1kmwh.cloudfront.net/meta.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'google-site-verification', content: 'mEnIIWwRmF5ZGPx08O-oQ89TVmxzbwccWp1G1c15Cn8', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'http://noschool.io', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'Noschool.io: Discover awesome activities for your gap year.', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:description', content: 'Easily search a curated collection of the best gap year and college alternatives to help you find your passion.', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'http://d3bewr15g1kmwh.cloudfront.net/meta.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:card', content: 'summary_large_image', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:title', content: 'Noschool.io: Discover awesome activities for your gap year.', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:description', content: 'Easily search a curated collection of the best gap year and college alternatives to help you find your passion.', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:image', content: 'http://d3bewr15g1kmwh.cloudfront.net/meta.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })
    ),
    children
  );
};

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired //eslint-disable-line
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Main.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FilterPane__ = __webpack_require__("./components/FilterPane.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MainPane__ = __webpack_require__("./components/MainPane.jsx");
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/Main.jsx';




var Main = function Main() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'home-main-container', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FilterPane__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'right-main-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MainPane__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "./components/MainPane.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Programs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__ = __webpack_require__("react-instantsearch/dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_instantsearch_connectors__ = __webpack_require__("react-instantsearch/connectors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_instantsearch_connectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_instantsearch_connectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ProgramItem__ = __webpack_require__("./components/ProgramItem.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/MainPane.jsx';









var Programs = function Programs(_ref) {
  var programs = _ref.programs;

  var programList = Object.entries(programs).map(function (program) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ProgramItem__["a" /* default */], _extends({}, program[1], { key: program[0], __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'program-container', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    programList
  );
};

Programs.propTypes = {
  programs: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object // eslint-disable-line
};

var MainPane = function MainPane() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'main-pane-container', __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'main-pane-search-options', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'search-box-wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__["SearchBox"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__["SortBy"], {
        items: [{ value: 'gapyear', label: 'Most Relevent' }, { value: 'gapyear_cost_asc', label: 'Price low - high' }, { value: 'gapyear_cost_desc', label: 'Price high - low' }, { value: 'gapyear_length_asc', label: 'Length low - high' }, { value: 'gapyear_length_desc', label: 'Length high - low' }],
        defaultRefinement: 'gapyear',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'header-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'main-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        'Suggestions'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://d3bewr15g1kmwh.cloudfront.net/search-by-algolia.svg', alt: 'search by algolia', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ConnectedHits, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    })
  );
};

var CustomHits = function CustomHits(_ref2) {
  var hits = _ref2.hits,
      refine = _ref2.refine,
      hasMore = _ref2.hasMore;
  //eslint-disable-line
  var loadMoreButton = hasMore ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'bottom-border', __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'more-button', onClick: refine, role: 'button', tabIndex: '0', onKeyPress: null, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_feather__["ChevronsDown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })
    )
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'bottom-border', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'hits', __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    },
    hits.map(function (hit) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ProgramItem__["a" /* default */], { hit: hit, key: hit.objectID, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }),
    loadMoreButton
  );
};

var ConnectedHits = Object(__WEBPACK_IMPORTED_MODULE_5_react_instantsearch_connectors__["connectInfiniteHits"])(CustomHits);

var mapStateToProps = function mapStateToProps(state) {
  return {
    budget: state.budget,
    interests: state.interests,
    regions: state.regions,
    length: state.length
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { bookmark: __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* bookmark */] })(MainPane));

/***/ }),

/***/ "./components/ProgramItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pluralize__ = __webpack_require__("pluralize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pluralize__);
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/ProgramItem.jsx';





var openLink = function openLink(url) {
  var f = function f() {
    window.open(url, '_blank'); //eslint-disable-line
  };
  return f;
};

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var formatLength = function formatLength(length) {
  if (length < 30) {
    return length + ' ' + __WEBPACK_IMPORTED_MODULE_3_pluralize___default()('day', length);
  }
  var months = Math.round(length / 30);
  return months + ' ' + __WEBPACK_IMPORTED_MODULE_3_pluralize___default()('month', months);
};

var tagMap = {
  Technology: 'Tech',
  Photography: 'Photo',
  Coding: 'Code'
};

var ProgramItem = function ProgramItem(_ref) {
  var hit = _ref.hit;
  var title = hit.title,
      desc = hit.desc,
      url = hit.url,
      cost = hit.cost,
      length = hit.length,
      topics = hit.topics,
      img = hit.img;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'program-item-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'img-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'info-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          desc
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'right-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'top-container', __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'length', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            formatLength(length)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'tag', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            topics[0] in tagMap ? tagMap[topics[0]] : topics[0]
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: 'bottom-container',
            onClick: openLink(url),
            onKeyUp: openLink(url),
            role: 'button',
            tabIndex: '0',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            '$ ',
            numberWithCommas(Math.round(cost / length * 30 / 10) * 10),
            '/month'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_feather__["ArrowRight"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: 'bottom-container-mobile',
        onClick: openLink(url),
        onKeyUp: openLink(url),
        role: 'button',
        tabIndex: '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        '$ ',
        numberWithCommas(Math.round(cost / length * 30 / 10) * 10),
        '/month'
      )
    )
  );
};

ProgramItem.propTypes = {
  hit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    desc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    cost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    length: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    topics: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    img: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ProgramItem);

/***/ }),

/***/ "./components/RangeSlider.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_slider__ = __webpack_require__("rc-slider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rc_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__ = __webpack_require__("react-instantsearch/connectors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/RangeSlider.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Range = __WEBPACK_IMPORTED_MODULE_1_rc_slider___default.a.Range;


var handleStyle = {
  position: 'absolute',
  borderColor: 'white'
};

var RangeSlider = function (_Component) {
  _inherits(RangeSlider, _Component);

  function RangeSlider() {
    _classCallCheck(this, RangeSlider);

    var _this = _possibleConstructorReturn(this, (RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call(this));

    _this.onSliderChange = _this.onSliderChange.bind(_this);
    return _this;
  }

  _createClass(RangeSlider, [{
    key: 'onSliderChange',
    value: function onSliderChange(sliderState) {
      if (this.props.currentRefinement.min !== sliderState[0] || this.props.currentRefinement.max !== sliderState[1]) {
        if (sliderState[1] === this.props.maxVal) {
          this.props.refine({
            min: sliderState[0],
            max: 100000
          });
        } else {
          this.props.refine({
            min: sliderState[0],
            max: sliderState[1]
          });
        }
      }
      this.props.onChange(sliderState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          maxVal = _props.maxVal;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Range, {
        allowCross: false,
        defaultValue: [0, maxVal],
        value: [value.min, value.max],
        max: maxVal,
        handleStyle: [handleStyle, handleStyle],
        trackStyle: [{ backgroundColor: '#00EC85', height: 3 }],
        railStyle: { height: 3, backgroundColor: '#B0BECA' },
        onChange: this.onSliderChange,
        step: (maxVal - 0) / 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }]);

  return RangeSlider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RangeSlider.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    min: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    max: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired
  }).isRequired,
  maxVal: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
  currentRefinement: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, //eslint-disable-line
  refine: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__["connectRange"])(RangeSlider));

/***/ }),

/***/ "./components/RefineList.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__ = __webpack_require__("react-instantsearch/connectors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Checkbox__ = __webpack_require__("./components/Checkbox.jsx");
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/components/RefineList.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RefineList = function (_Component) {
  _inherits(RefineList, _Component);

  function RefineList() {
    _classCallCheck(this, RefineList);

    var _this = _possibleConstructorReturn(this, (RefineList.__proto__ || Object.getPrototypeOf(RefineList)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(RefineList, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.onClick(e);
      var refList = Object.entries(this.props.list).filter(function (ref) {
        return ref[1] === true;
      }).map(function (ref) {
        return ref[0];
      });
      var element = e.target.dataset.label || e.target.parentNode.dataset.label;
      var index = refList.indexOf(element);
      if (index === -1) {
        refList.push(element);
      } else {
        refList.splice(index, 1);
      }
      if (refList.length === 0) {
        refList = [null];
      }
      this.props.refine(refList);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var RefinementList = Object.entries(this.props.list).map(function (r) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Checkbox__["a" /* default */], {
          checked: _this2.props.list[r[0]],
          label: r[0],
          key: r[0],
          handleClick: _this2.handleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'check-list-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        RefinementList
      );
    }
  }]);

  return RefineList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RefineList.propTypes = {
  refine: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  list: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired //eslint-disable-line
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_instantsearch_connectors__["connectRefinementList"])(RefineList));

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__ = __webpack_require__("react-instantsearch/dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Main__ = __webpack_require__("./components/Main.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_store__ = __webpack_require__("./store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.jsx");
var _jsxFileName = '/Users/taytaytrey/Projects/gapyearproject/gap-year-web-nextjs/pages/index.jsx';










var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
      { store: __WEBPACK_IMPORTED_MODULE_6__store_store__["a" /* default */], __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_7__styles_index_scss___default.a }, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'App', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'banner', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'overlay logo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  }
                },
                'Noschool.io'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'overlay contact', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  }
                },
                'Contact'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'overlay main', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              'Discover awesome activities for your gap year'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'overlay sub', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              'Explore the world, try something new'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_instantsearch_dom__["InstantSearch"],
            {
              appId: 'AZ293N8KMQ',
              apiKey: 'ab9e458f31e3e6f9a8e73a2304de3067',
              indexName: 'gapyear',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Main__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'footer',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            'Made with '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_feather__["Heart"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            ' by ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'http://taylormilliman.me/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Taylor'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'feedback-link-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/feedback', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Leave Some Feedback! ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_feather__["Feather"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                })
              )
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reducers/budgetReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__("./actions/types.js");


var INITIAL_STATE = {
  min: 0,
  max: 20000
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["c" /* SET_BUDGET */]:
      return { min: action.payload[0], max: action.payload[1] };
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* CLEAR_FILTERS */]:
      return INITIAL_STATE;
    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__budgetReducer__ = __webpack_require__("./reducers/budgetReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regionsReducer__ = __webpack_require__("./reducers/regionsReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interestsReducer__ = __webpack_require__("./reducers/interestsReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lengthReducer__ = __webpack_require__("./reducers/lengthReducer.js");






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  budget: __WEBPACK_IMPORTED_MODULE_1__budgetReducer__["a" /* default */],
  regions: __WEBPACK_IMPORTED_MODULE_2__regionsReducer__["a" /* default */],
  interests: __WEBPACK_IMPORTED_MODULE_3__interestsReducer__["a" /* default */],
  length: __WEBPACK_IMPORTED_MODULE_4__lengthReducer__["a" /* default */]
}));

/***/ }),

/***/ "./reducers/interestsReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__("./actions/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var INITIAL_STATE = {
  Travel: true,
  Coding: true,
  Music: true,
  Art: true,
  Technology: true,
  Medicine: true,
  Farming: true,
  Photography: true,
  Cooking: true,
  Service: true,
  Environment: true,
  Language: true,
  Outdoors: true,
  Business: true
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["d" /* SET_INTEREST */]:
      {
        return _extends({}, state, _defineProperty({}, action.payload, !state[action.payload]));
      }
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* CLEAR_FILTERS */]:
      return INITIAL_STATE;
    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/lengthReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__("./actions/types.js");


var INITIAL_STATE = {
  min: 0,
  max: 360
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["e" /* SET_LENGTH */]:
      return { min: action.payload[0], max: action.payload[1] };
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* CLEAR_FILTERS */]:
      return INITIAL_STATE;
    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/regionsReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__("./actions/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var INITIAL_STATE = {
  'North America': true,
  'South America': true,
  Africa: true,
  Europe: true,
  Asia: true,
  Australia: true,
  Arctic: true,
  'Middle East': true
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["f" /* SET_REGION */]:
      {
        return _extends({}, state, _defineProperty({}, action.payload, !state[action.payload]));
      }
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* CLEAR_FILTERS */]:
      return INITIAL_STATE;
    default:
      return state;
  }
});

/***/ }),

/***/ "./store/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./reducers/index.js");



var initialState = {};
var enhancers = [];

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* default */], initialState);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "./styles/index.scss":
/***/ (function(module, exports) {

module.exports = ".main-pane-container {\n  margin: 3rem 3rem; }\n  .main-pane-container .main-pane-search-options {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row; }\n  .main-pane-container .header-container {\n    display: flex;\n    justify-content: space-between;\n    width: 100%; }\n  .main-pane-container h1 {\n    font-family: Nunito;\n    font-weight: 400;\n    color: black;\n    font-weight: normal; }\n  .main-pane-container h1.main-header {\n    font-size: 23px; }\n  .main-pane-container img {\n    width: 150px; }\n  .more-button {\n  padding: 0.5rem;\n  font-size: 15px;\n  font-family: Nunito;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 3px;\n  width: 10%;\n  border: 1px solid;\n  margin: auto;\n  background-color: #4A63FF;\n  color: white;\n  outline: none;\n  cursor: pointer; }\n  .more-button svg {\n    display: block;\n    margin: auto;\n    margin-top: 0.2rem; }\n  .more-button:hover {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: rgba(63, 63, 63, 0.1) 0 15px 50px; }\n  .search-box-wrapper {\n  flex: 4;\n  margin-right: 100px;\n  max-width: 700px; }\n  .ais-SearchBox__wrapper {\n  width: 100%;\n  margin-bottom: 2rem; }\n  .ais-SearchBox__wrapper input {\n    width: 100%;\n    flex: 4 400px;\n    padding: 15px 15px;\n    font-size: 18px;\n    color: #000;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.33);\n    transition: 0.3s ease;\n    outline: none; }\n  .ais-SearchBox__wrapper input:focus {\n    box-shadow: 6px 8px 24px 0 rgba(0, 0, 0, 0.5);\n    transition: 0.3s ease; }\n  .ais-SearchBox__wrapper button {\n    display: none; }\n  @media (max-width: 1110px) {\n  .main-pane-container {\n    margin: 2rem 1rem; }\n    .main-pane-container .bottom-border {\n      border-top: solid 1px #DAE0E3;\n      width: 100%;\n      margin-bottom: 1rem;\n      margin-top: 0.75rem; }\n  .search-box-wrapper {\n    margin-right: 50px; } }\n  .ais-SortBy__root {\n  display: block;\n  height: 40px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  background: #ffffff url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 12 7' xmlns='http://www.w3.org/2000/svg'><path d='M11 1L6.02 6 1 1' stroke-width='1.5' stroke='%23BFC7D8' fill='none' fill-rule='evenodd' stroke-linecap='round'/></svg>\") no-repeat center right 16px/10px;\n  box-shadow: 0 1px 1px 0 rgba(85, 95, 110, 0.2);\n  border: solid 1px #d4d8e3;\n  padding: 8px 16px;\n  padding-right: 32px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  color: #697782;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  border-radius: 4px;\n  text-align: left; }\n  .ais-SortBy__root:hover, .ais-SortBy__root:active {\n  box-shadow: none; }\n  .ais-SortBy__root:focus, .ais-SortBy__root:active {\n  outline: none;\n  background: #f2f2f2 url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 12 7' xmlns='http://www.w3.org/2000/svg'><path d='M11 1L6.02 6 1 1' stroke-width='1.5' stroke='%23BFC7D8' fill='none' fill-rule='evenodd' stroke-linecap='round'/></svg>\") no-repeat center right 16px/10px; }\n  @media (max-width: 500px) {\n  .main-pane-container {\n    margin: 2rem 1rem; }\n    .main-pane-container .main-pane-search-options {\n      flex-direction: column; }\n  .ais-SortBy__root {\n    max-width: 150px;\n    order: 1;\n    margin-bottom: 1rem; }\n  .search-box-wrapper {\n    order: 2; } }\n  .filter-container {\n  margin-top: 2rem;\n  font-weight: 400; }\n  .filter-container h1 {\n    font-size: 15px;\n    font-weight: 600; }\n  .slider-header {\n  margin: 0 0.5rem;\n  margin-bottom: 0.75rem;\n  font-size: 15px;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .slider-header .slider-label {\n    display: inline;\n    color: #B2BEC9; }\n  .slider-header h1 {\n    font-size: 15px;\n    color: #53667C;\n    font-weight: 600; }\n  .slider-container {\n  padding-left: 15px;\n  padding-right: 20px; }\n  .check-list-container {\n  display: -moz-flex;\n  display: flex;\n  -ms-box-orient: horizontal;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n  .left-filters-pane {\n  padding: 40px;\n  padding-top: 10px;\n  width: 270px;\n  background-color: #F5F7F9; }\n  @media (max-width: 1110px) {\n  .left-filters-pane {\n    width: 220px;\n    padding: 20px; }\n  .slider-container {\n    padding-left: 10px;\n    padding-right: 15px; } }\n  @media (max-width: 799px) {\n  .left-filters-pane {\n    width: auto;\n    padding: 2rem 15%; }\n  .slider-container {\n    padding-left: 15px;\n    padding-right: 20px; } }\n  .program-item-container {\n  display: flex;\n  outline: solid 1px #DAE0E3;\n  justify-content: space-between;\n  margin: 1rem 0;\n  min-height: 120px; }\n  .program-item-container .img-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex: 1; }\n  .program-item-container .img-container img {\n      display: block;\n      max-width: 160px;\n      max-height: 160px;\n      width: auto;\n      height: auto; }\n  .info-container {\n  padding: 0 2rem;\n  flex: 2.5;\n  color: black; }\n  .info-container h1 {\n    font-size: 20px;\n    font-family: Nunito;\n    font-weight: 600; }\n  .info-container h2 {\n    font-size: 14px;\n    color: #999999;\n    font-family: Nunito;\n    font-weight: 400; }\n  .right-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0.5rem 0; }\n  .right-container .top-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 12px;\n    font-family: Nunito;\n    font-weight: 400;\n    width: 170px; }\n  .right-container .top-container .length {\n      width: 70px;\n      height: 22px;\n      color: #B4B4B4;\n      border: 1px solid #B4B4B4;\n      text-align: center;\n      border-radius: 3px;\n      line-height: 22px; }\n  .right-container .top-container svg.bookmarked {\n      fill: #53667C; }\n  .right-container .top-container .tag {\n      background-color: #58E78F;\n      width: 70px;\n      color: white;\n      border-radius: 3px;\n      line-height: 22px;\n      text-align: center; }\n  .right-container .bottom-container {\n    border-radius: 3px;\n    width: 170px;\n    height: 40px;\n    cursor: pointer;\n    background-color: #4A63FF;\n    color: white;\n    text-align: center;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    outline: none;\n    font-weight: 300; }\n  .right-container .bottom-container p {\n      padding-left: 1.25rem; }\n  .right-container .bottom-container svg {\n      padding-right: 0.8rem; }\n  .right-container .bottom-container span {\n      position: absolute;\n      margin-top: 14px;\n      display: block;\n      border-bottom: 1px solid white;\n      width: 0%;\n      left: 1.7rem; }\n  .bottom-container:hover span {\n  -webkit-animation: underline 500ms ease-in-out;\n          animation: underline 500ms ease-in-out;\n  width: 120px; }\n  .bottom-container-mobile {\n  display: none; }\n  @-webkit-keyframes underline {\n  from {\n    width: 0%; }\n  to {\n    width: 120px; } }\n  @keyframes underline {\n  from {\n    width: 0%; }\n  to {\n    width: 120px; } }\n  @media (max-width: 1110px) {\n  .bottom-container:hover span {\n    -webkit-animation: none;\n            animation: none;\n    width: 120px;\n    display: none; }\n  .program-item-container {\n    outline: none;\n    outline: none;\n    border-top: solid 1px #DAE0E3;\n    margin: 0.3rem 0rem; }\n    .program-item-container .img-container img {\n      max-width: 90px;\n      max-height: 90px; }\n  .right-container {\n    flex: 0.5; }\n    .right-container .top-container {\n      justify-content: space-around; }\n    .right-container .bottom-container {\n      border-radius: 3px;\n      width: 120px;\n      height: 30px;\n      font-size: 14px; }\n      .right-container .bottom-container p {\n        padding-left: 0rem; }\n    .right-container .top-container {\n      width: 120px; }\n    .right-container svg {\n      display: none; } }\n  @media (max-width: 799px) {\n  .program-item-container {\n    margin: 0rem 0rem; }\n    .program-item-container .img-container {\n      flex: 0.5; }\n  .right-container {\n    display: none;\n    flex: 0; }\n  .bottom-container-mobile {\n    border-radius: 3px;\n    cursor: pointer;\n    background-color: #4A63FF;\n    color: white;\n    text-align: center;\n    outline: none;\n    font-weight: 300;\n    width: 120px;\n    height: 30px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 75%;\n    position: relative;\n    margin-bottom: 1rem; } }\n  @media (max-width: 500px) {\n  .bottom-container-mobile {\n    left: 7rem;\n    right: 0;\n    margin: auto;\n    margin-bottom: 1rem; } }\n  .Checkbox-container {\n  display: flex;\n  font-family: Nunito;\n  font-weight: 400;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  color: #53667C;\n  background-color: white;\n  width: 120px;\n  height: 30px;\n  border-radius: 3px;\n  line-height: 28px;\n  margin-top: 0.7rem;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  box-shadow: 0 4px 11px 0 rgba(63, 63, 63, 0.04); }\n  .Checkbox-container.checked {\n  background-color: #58E78F;\n  color: white; }\n  .Checkbox-container:hover {\n  background-color: #B2BEC9;\n  color: white;\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: rgba(63, 63, 63, 0.1) 0 15px 50px; }\n  @media (max-width: 1110px) {\n  .Checkbox-container {\n    width: 100px; } }\n  @media (max-width: 799px) {\n  .Checkbox-container {\n    width: 100px;\n    width: 120px; } }\n  .rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px; }\n  .rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb; }\n  .rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x; }\n  .rc-slider-handle:hover {\n  border-color: #57c5f7; }\n  .rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing; }\n  .rc-slider-handle:focus {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n  outline: none; }\n  .rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px; }\n  .rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999; }\n  .rc-slider-mark-text-active {\n  color: #666; }\n  .rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent; }\n  .rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle; }\n  .rc-slider-dot-active {\n  border-color: #96dbfa; }\n  .rc-slider-disabled {\n  background-color: #e9e9e9; }\n  .rc-slider-disabled .rc-slider-track {\n  background-color: #ccc; }\n  .rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed; }\n  .rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important; }\n  .rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px; }\n  .rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  margin-bottom: -7px;\n  touch-action: pan-y; }\n  .rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%; }\n  .rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px; }\n  .rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px; }\n  .rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px; }\n  .rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n  .rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n  .rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1); }\n  .rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06); }\n  @-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0); }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n  @keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0); }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n  @-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0); } }\n  @keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0); } }\n  .rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-tooltip-hidden {\n  display: none; }\n  .rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0; }\n  .rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9; }\n  .rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c; }\n  body {\n  margin: 0;\n  padding: 0;\n  color: #53667C;\n  overflow-x: hidden; }\n  html {\n  font-family: Nunito, \"SourceSansPro\", \"Helvetica Neue\", sans-serif; }\n  .banner:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  opacity: 0.75;\n  background-image: linear-gradient(-239deg, #001CF5 0%, #9491FF 100%); }\n  .banner {\n  position: relative;\n  background: url(\"http://d3bewr15g1kmwh.cloudfront.net/banner.png\");\n  width: 100%;\n  height: 300px;\n  background-size: cover; }\n  .banner .overlay {\n    color: white;\n    position: absolute;\n    text-align: left;\n    margin: auto; }\n  .banner .overlay.logo {\n    left: 40px;\n    top: 20px;\n    font-size: 18px;\n    font-weight: bold;\n    text-decoration: none; }\n  .banner .overlay.main {\n    font-weight: 700;\n    font-size: 44px;\n    top: 110px;\n    left: 275px; }\n  .banner .overlay.sub {\n    left: 275px;\n    top: 170px;\n    font-size: 24px;\n    font-weight: 400; }\n  .banner .overlay.contact {\n    right: 60px;\n    top: 20px;\n    font-size: 18px;\n    font-weight: bold;\n    text-decoration: none; }\n  .content-header {\n  padding: 1rem 2rem;\n  border-bottom: 1px #586994 dashed; }\n  .content-header .filters-btn {\n    background: #586994;\n    border-radius: 8px;\n    font-size: 20px;\n    color: #FFFFFF;\n    width: 7.75rem;\n    height: 2.75rem;\n    position: relative;\n    padding-left: 1.6rem;\n    border: 1px #586994 solid;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none; }\n  .content-header .filters-btn svg {\n      position: absolute;\n      bottom: 0.55rem;\n      left: 1rem; }\n  .content-header .filters-btn:hover {\n      color: #586994;\n      background-color: #fff;\n      cursor: pointer; }\n  .content-header .clear-filters-btn {\n    border: 1px solid #586994;\n    border-radius: 62px;\n    /* Clear filters: */\n    font-size: 20px;\n    font-weight: 400;\n    color: #586994;\n    width: 7.75rem;\n    height: 2.75rem;\n    margin: 0 2rem;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none; }\n  .content-header .clear-filters-btn:hover {\n      background-color: #586994;\n      color: #fff;\n      cursor: pointer; }\n  .home-main-container {\n  display: flex;\n  overflow: hidden;\n  height: 100vh;\n  position: relative;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: overflow;\n  justify-content: center; }\n  .left-filters-pane,\n.right-main-bar {\n  overflow: auto;\n  height: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none; }\n  .right-main-bar {\n  flex: 1; }\n  footer {\n  margin: 1.5rem;\n  text-align: center;\n  font-weight: 400; }\n  footer svg {\n    color: #FD4134;\n    fill: #FD4134;\n    width: 15px;\n    height: 15px; }\n  footer p {\n    line-height: 20px;\n    text-anchor: middle;\n    display: inline;\n    color: black; }\n  footer a {\n    color: #4A63FF; }\n  footer .feedback-link-container {\n    margin: 1rem; }\n  footer .feedback-link-container svg {\n      fill: white;\n      color: #4A63FF; }\n  footer .feedback-link-container a {\n      color: #4A63FF; }\n  @media (max-width: 1240px) {\n  .banner {\n    position: relative;\n    width: 100%; }\n    .banner .overlay.main {\n      top: 110px;\n      left: 80px; }\n    .banner .overlay.sub {\n      left: 80px; } }\n  @media (max-width: 1010px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 240px; }\n    .banner .overlay.main {\n      top: 70px;\n      font-size: 36px; }\n    .banner .overlay.sub {\n      top: 120px; } }\n  @media (max-width: 841px) {\n  .banner .overlay.sub {\n    top: 170px; } }\n  @media (max-width: 800px) {\n  .home-main-container {\n    display: block;\n    overflow: visible;\n    height: auto; } }\n  @media (max-width: 640px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 270px; }\n    .banner .overlay.main {\n      left: 40px;\n      font-size: 32px; }\n    .banner .overlay.sub {\n      left: 40px;\n      font-size: 17px; } }\n  @media (max-width: 450px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 270px; }\n    .banner .overlay.main {\n      left: 20px;\n      right: 20px; }\n    .banner .overlay.sub {\n      top: 210px;\n      left: 20px;\n      right: 20px; }\n    .banner .overlay.logo {\n      left: 20px; }\n    .banner .overlay.contact {\n      right: 20px; } }\n";

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "pluralize":
/***/ (function(module, exports) {

module.exports = require("pluralize");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rc-slider":
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-instantsearch/connectors":
/***/ (function(module, exports) {

module.exports = require("react-instantsearch/connectors");

/***/ }),

/***/ "react-instantsearch/dom":
/***/ (function(module, exports) {

module.exports = require("react-instantsearch/dom");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map