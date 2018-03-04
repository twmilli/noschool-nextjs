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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch/connectors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch/dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "react-feather"
var external__react_feather_ = __webpack_require__(2);
var external__react_feather__default = /*#__PURE__*/__webpack_require__.n(external__react_feather_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-instantsearch/dom"
var dom_ = __webpack_require__(6);
var dom__default = /*#__PURE__*/__webpack_require__.n(dom_);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(7);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(17);
var assets_default = /*#__PURE__*/__webpack_require__.n(assets);

// EXTERNAL MODULE: ./node_modules/rc-tooltip/assets/bootstrap.css
var bootstrap = __webpack_require__(18);
var bootstrap_default = /*#__PURE__*/__webpack_require__.n(bootstrap);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-instantsearch/connectors"
var connectors_ = __webpack_require__(5);
var connectors__default = /*#__PURE__*/__webpack_require__.n(connectors_);

// CONCATENATED MODULE: ./components/Checkbox.jsx



var Checkbox_Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      handleClick = _ref.handleClick;
  return external__react__default.a.createElement(
    'div',
    {
      className: checked ? 'Checkbox-container checked' : 'Checkbox-container',
      onClick: handleClick,
      onKeyPress: handleClick,
      role: 'button',
      tabIndex: 0,
      'data-label': label
    },
    external__react__default.a.createElement(
      'p',
      { className: 'label', 'data-label': label },
      label
    )
  );
};

Checkbox_Checkbox.defaultProps = {
  checked: true
};

/* harmony default export */ var components_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: ./components/RefineList.jsx
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RefineList_RefineList = function (_Component) {
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
        return external__react__default.a.createElement(components_Checkbox, {
          checked: _this2.props.list[r[0]],
          label: r[0],
          key: r[0],
          handleClick: _this2.handleClick
        });
      });
      return external__react__default.a.createElement(
        'div',
        { className: 'check-list-container' },
        RefinementList
      );
    }
  }]);

  return RefineList;
}(external__react_["Component"]);

/* harmony default export */ var components_RefineList = (Object(connectors_["connectRefinementList"])(RefineList_RefineList));
// CONCATENATED MODULE: ./actions/types.js
var SET_BUDGET = 'set_budget';
var SET_REGION = 'set_region';
var SET_INTEREST = 'set_interest';
var SET_LENGTH = 'set_length';
var CLEAR_FILTERS = 'clear_filters';
var BOOKMARK = 'bookmark';
// CONCATENATED MODULE: ./actions/index.js


var actions_setBudget = function setBudget(value) {
  return { type: SET_BUDGET, payload: value };
};
var actions_setRegion = function setRegion(e) {
  return { type: SET_REGION, payload: e.target.dataset.label || e.target.parentNode.dataset.label };
};

var actions_setInterest = function setInterest(e) {
  return { type: SET_INTEREST, payload: e.target.dataset.label || e.target.parentNode.dataset.label };
};

var actions_setLength = function setLength(value) {
  return { type: SET_LENGTH, payload: value };
};

var actions_clearFilters = function clearFilters() {
  return { type: CLEAR_FILTERS };
};

var actions_bookmark = function bookmark(program) {
  return { type: BOOKMARK, payload: program };
};
// EXTERNAL MODULE: external "rc-slider"
var external__rc_slider_ = __webpack_require__(19);
var external__rc_slider__default = /*#__PURE__*/__webpack_require__.n(external__rc_slider_);

// CONCATENATED MODULE: ./components/RangeSlider.jsx
var RangeSlider__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function RangeSlider__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RangeSlider__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function RangeSlider__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Range = external__rc_slider__default.a.Range;


var handleStyle = {
  position: 'absolute',
  borderColor: 'white'
};

var RangeSlider_RangeSlider = function (_Component) {
  RangeSlider__inherits(RangeSlider, _Component);

  function RangeSlider() {
    RangeSlider__classCallCheck(this, RangeSlider);

    var _this = RangeSlider__possibleConstructorReturn(this, (RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call(this));

    _this.onSliderChange = _this.onSliderChange.bind(_this);
    return _this;
  }

  RangeSlider__createClass(RangeSlider, [{
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

      return external__react__default.a.createElement(Range, {
        allowCross: false,
        defaultValue: [0, maxVal],
        value: [value.min, value.max],
        max: maxVal,
        handleStyle: [handleStyle, handleStyle],
        trackStyle: [{ backgroundColor: '#00EC85', height: 3 }],
        railStyle: { height: 3, backgroundColor: '#B0BECA' },
        onChange: this.onSliderChange,
        step: (maxVal - 0) / 20
      });
    }
  }]);

  return RangeSlider;
}(external__react_["Component"]);

/* harmony default export */ var components_RangeSlider = (Object(connectors_["connectRange"])(RangeSlider_RangeSlider));
// CONCATENATED MODULE: ./components/FilterPane.jsx

 //eslint-disable-line







var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var FilterPane_formatLength = function formatLength(_ref) {
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

var FilterPane_FilterPane = function FilterPane(props) {
  var budget = props.budget,
      regions = props.regions,
      interests = props.interests,
      length = props.length;

  return external__react__default.a.createElement(
    'div',
    { className: 'left-filters-pane' },
    external__react__default.a.createElement(
      'div',
      { className: 'filter-container' },
      external__react__default.a.createElement(
        'div',
        { className: 'slider-header' },
        external__react__default.a.createElement(
          'h1',
          null,
          'Budget'
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'slider-label' },
          '$',
          budget.min,
          ' - ',
          budget.max === 20000 ? 'No Limit' : numberWithCommas(budget.max)
        )
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'slider-container' },
        external__react__default.a.createElement(components_RangeSlider, {
          onChange: props.setBudget,
          value: budget,
          attributeName: 'cost',
          maxVal: 20000
        })
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'filter-container' },
      external__react__default.a.createElement(
        'div',
        { className: 'slider-header' },
        external__react__default.a.createElement(
          'h1',
          null,
          'Duration'
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'slider-label' },
          FilterPane_formatLength(length)
        )
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'slider-container' },
        external__react__default.a.createElement(components_RangeSlider, {
          onChange: props.setLength,
          value: length,
          attributeName: 'length',
          maxVal: 360
        })
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'filter-container' },
      external__react__default.a.createElement(
        'h1',
        null,
        'Your Interests'
      ),
      external__react__default.a.createElement(components_RefineList, { onClick: props.setInterest, list: interests, attributeName: 'topics' })
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'filter-container' },
      external__react__default.a.createElement(
        'h1',
        null,
        'Continents'
      ),
      external__react__default.a.createElement(components_RefineList, { onClick: props.setRegion, list: regions, attributeName: 'regions' })
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

/* harmony default export */ var components_FilterPane = (Object(external__react_redux_["connect"])(mapStateToProps, {
  setBudget: actions_setBudget, setRegion: actions_setRegion, setInterest: actions_setInterest, setLength: actions_setLength
})(FilterPane_FilterPane));
// EXTERNAL MODULE: external "pluralize"
var external__pluralize_ = __webpack_require__(20);
var external__pluralize__default = /*#__PURE__*/__webpack_require__.n(external__pluralize_);

// CONCATENATED MODULE: ./components/ProgramItem.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var ProgramItem_Mobile = function Mobile(props) {
  return external__react__default.a.createElement(external__react_responsive__default.a, _extends({}, props, { maxWidth: 799 }));
};
var ProgramItem_Desktop = function Desktop(props) {
  return external__react__default.a.createElement(external__react_responsive__default.a, _extends({}, props, { minWidth: 800 }));
};

var openLink = function openLink(url) {
  var f = function f() {
    window.open(url, '_blank'); //eslint-disable-line
  };
  return f;
};

var ProgramItem_numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var ProgramItem_formatLength = function formatLength(length) {
  if (length < 30) {
    return length + ' ' + external__pluralize__default()('day', length);
  }
  var months = Math.round(length / 30);
  return months + ' ' + external__pluralize__default()('month', months);
};

var tagMap = {
  Technology: 'Tech',
  Photography: 'Photo',
  Coding: 'Code'
};

var ProgramItem_DesktopProgramItem = function DesktopProgramItem(_ref) {
  var length = _ref.length,
      topics = _ref.topics,
      url = _ref.url,
      cost = _ref.cost,
      img = _ref.img,
      title = _ref.title,
      desc = _ref.desc;
  return external__react__default.a.createElement(
    'div',
    { className: 'program-item-container' },
    external__react__default.a.createElement(
      'div',
      { className: 'img-container' },
      external__react__default.a.createElement('img', { src: img, alt: '' })
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'info-container' },
      external__react__default.a.createElement(
        'h1',
        null,
        title
      ),
      external__react__default.a.createElement(
        'h2',
        null,
        desc
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'right-container' },
      external__react__default.a.createElement(
        'div',
        { className: 'top-container' },
        external__react__default.a.createElement(
          'div',
          { className: 'length' },
          ProgramItem_formatLength(length)
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'tag' },
          topics[0] in tagMap ? tagMap[topics[0]] : topics[0]
        )
      ),
      external__react__default.a.createElement(
        'div',
        {
          className: 'bottom-container',
          onClick: openLink(url),
          onKeyUp: openLink(url),
          role: 'button',
          tabIndex: '0'
        },
        external__react__default.a.createElement(
          'p',
          null,
          '$ ',
          ProgramItem_numberWithCommas(Math.round(cost / length * 30 / 10) * 10),
          '/month'
        ),
        external__react__default.a.createElement(external__react_feather_["ArrowRight"], null),
        external__react__default.a.createElement('span', null)
      )
    )
  );
};

var ProgramItem_MobileProgramItem = function MobileProgramItem(_ref2) {
  var length = _ref2.length,
      url = _ref2.url,
      cost = _ref2.cost,
      img = _ref2.img,
      title = _ref2.title,
      desc = _ref2.desc;
  return external__react__default.a.createElement(
    'div',
    { className: 'mobile-wrapper' },
    external__react__default.a.createElement(
      'div',
      { className: 'program-item-container mobile' },
      external__react__default.a.createElement(
        'div',
        { className: 'img-container' },
        external__react__default.a.createElement('img', { src: img, alt: '' })
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'info-container' },
        external__react__default.a.createElement(
          'h1',
          null,
          title
        ),
        external__react__default.a.createElement(
          'h2',
          null,
          desc
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'bottom-container mobile',
        onClick: openLink(url),
        onKeyUp: openLink(url),
        role: 'button',
        tabIndex: '0'
      },
      external__react__default.a.createElement(
        'p',
        null,
        '$ ',
        Math.round(cost / length * 30 / 10) * 10,
        '/month'
      )
    )
  );
};

var ProgramItem_ProgramItem = function ProgramItem(_ref3) {
  var hit = _ref3.hit;
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(
      ProgramItem_Mobile,
      null,
      external__react__default.a.createElement(ProgramItem_MobileProgramItem, hit)
    ),
    external__react__default.a.createElement(
      ProgramItem_Desktop,
      null,
      external__react__default.a.createElement(ProgramItem_DesktopProgramItem, hit)
    )
  );
};

/* harmony default export */ var components_ProgramItem = (ProgramItem_ProgramItem);
// CONCATENATED MODULE: ./components/MainPane.jsx
var MainPane__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var MainPane_Programs = function Programs(_ref) {
  var programs = _ref.programs;

  var programList = Object.entries(programs).map(function (program) {
    return external__react__default.a.createElement(components_ProgramItem, MainPane__extends({}, program[1], { key: program[0] }));
  });
  return external__react__default.a.createElement(
    'div',
    { className: 'program-container' },
    programList
  );
};

var MainPane_MainPane = function MainPane() {
  return external__react__default.a.createElement(
    'div',
    { className: 'main-pane-container' },
    external__react__default.a.createElement(
      'div',
      { className: 'main-pane-search-options' },
      external__react__default.a.createElement(
        'div',
        { className: 'search-box-wrapper' },
        external__react__default.a.createElement(dom_["SearchBox"], null)
      ),
      external__react__default.a.createElement(dom_["SortBy"], {
        items: [{ value: 'gapyear', label: 'Most Relevent' }, { value: 'gapyear_cost_asc', label: 'Price low - high' }, { value: 'gapyear_cost_desc', label: 'Price high - low' }, { value: 'gapyear_length_asc', label: 'Length low - high' }, { value: 'gapyear_length_desc', label: 'Length high - low' }],
        defaultRefinement: 'gapyear'
      })
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'header-container' },
      external__react__default.a.createElement(
        'h1',
        { className: 'main-header' },
        'Suggestions'
      ),
      external__react__default.a.createElement('img', { src: 'http://d3bewr15g1kmwh.cloudfront.net/search-by-algolia.svg', alt: 'search by algolia' })
    ),
    external__react__default.a.createElement(ConnectedHits, null)
  );
};

var MainPane_CustomHits = function CustomHits(_ref2) {
  var hits = _ref2.hits,
      refine = _ref2.refine,
      hasMore = _ref2.hasMore;
  //eslint-disable-line
  var loadMoreButton = hasMore ? external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement('div', { className: 'bottom-border' }),
    external__react__default.a.createElement(
      'div',
      { className: 'more-button', onClick: refine, role: 'button', tabIndex: '0', onKeyPress: null },
      external__react__default.a.createElement(external__react_feather_["ChevronsDown"], null)
    )
  ) : external__react__default.a.createElement('div', { className: 'bottom-border' });
  return external__react__default.a.createElement(
    'div',
    { id: 'hits' },
    hits.map(function (hit) {
      return external__react__default.a.createElement(components_ProgramItem, { hit: hit, key: hit.objectID });
    }),
    loadMoreButton
  );
};

var ConnectedHits = Object(connectors_["connectInfiniteHits"])(MainPane_CustomHits);

var MainPane_mapStateToProps = function mapStateToProps(state) {
  return {
    budget: state.budget,
    interests: state.interests,
    regions: state.regions,
    length: state.length
  };
};

/* harmony default export */ var components_MainPane = (Object(external__react_redux_["connect"])(MainPane_mapStateToProps, { bookmark: actions_bookmark })(MainPane_MainPane));
// CONCATENATED MODULE: ./components/Desktop.jsx




var Desktop_Desktop = function Desktop() {
  return external__react__default.a.createElement(
    'div',
    { className: 'home-main-container' },
    external__react__default.a.createElement(components_FilterPane, null),
    external__react__default.a.createElement(
      'div',
      { className: 'right-main-bar' },
      external__react__default.a.createElement(components_MainPane, null)
    )
  );
};

/* harmony default export */ var components_Desktop = (Desktop_Desktop);
// CONCATENATED MODULE: ./components/Mobile.jsx




var Mobile_Mobile = function Mobile() {
  return external__react__default.a.createElement(
    'div',
    { className: 'mobile-home-main-container' },
    external__react__default.a.createElement('div', { className: 'filters-toggle-btn' }),
    external__react__default.a.createElement(components_FilterPane, null),
    external__react__default.a.createElement(components_MainPane, null)
  );
};

/* harmony default export */ var components_Mobile = (Mobile_Mobile);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// CONCATENATED MODULE: ./reducers/budgetReducer.js


var INITIAL_STATE = {
  min: 0,
  max: 20000
};

/* harmony default export */ var budgetReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case SET_BUDGET:
      return { min: action.payload[0], max: action.payload[1] };
    case CLEAR_FILTERS:
      return INITIAL_STATE;
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./reducers/regionsReducer.js
var regionsReducer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var regionsReducer_INITIAL_STATE = {
  'North America': true,
  'South America': true,
  Africa: true,
  Europe: true,
  Asia: true,
  Australia: true,
  Arctic: true,
  'Middle East': true
};

/* harmony default export */ var regionsReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : regionsReducer_INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case SET_REGION:
      {
        return regionsReducer__extends({}, state, _defineProperty({}, action.payload, !state[action.payload]));
      }
    case CLEAR_FILTERS:
      return regionsReducer_INITIAL_STATE;
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./reducers/interestsReducer.js
var interestsReducer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function interestsReducer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var interestsReducer_INITIAL_STATE = {
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

/* harmony default export */ var interestsReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : interestsReducer_INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case SET_INTEREST:
      {
        return interestsReducer__extends({}, state, interestsReducer__defineProperty({}, action.payload, !state[action.payload]));
      }
    case CLEAR_FILTERS:
      return interestsReducer_INITIAL_STATE;
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./reducers/lengthReducer.js


var lengthReducer_INITIAL_STATE = {
  min: 0,
  max: 360
};

/* harmony default export */ var lengthReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lengthReducer_INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case SET_LENGTH:
      return { min: action.payload[0], max: action.payload[1] };
    case CLEAR_FILTERS:
      return lengthReducer_INITIAL_STATE;
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./reducers/index.js






/* harmony default export */ var reducers = (Object(external__redux_["combineReducers"])({
  budget: budgetReducer,
  regions: regionsReducer,
  interests: interestsReducer,
  length: lengthReducer
}));
// CONCATENATED MODULE: ./store/store.js



var initialState = {};
var enhancers = [];

var store = Object(external__redux_["createStore"])(reducers, initialState);

/* harmony default export */ var store_store = (store);
// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(21);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./pages/index.jsx
var pages__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };












var pages_DesktopContainer = function DesktopContainer(props) {
  return external__react__default.a.createElement(external__react_responsive__default.a, pages__extends({}, props, { minWidth: 800 }));
};
var pages_MobileContainer = function MobileContainer(props) {
  return external__react__default.a.createElement(external__react_responsive__default.a, pages__extends({}, props, { maxWidth: 799 }));
};

var pages_Index = function Index() {
  return external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store_store },
    external__react__default.a.createElement(
      'div',
      null,
      external__react__default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles_default.a } }),
      external__react__default.a.createElement(
        'div',
        { className: 'App' },
        external__react__default.a.createElement(
          dom_["InstantSearch"],
          {
            appId: 'AZ293N8KMQ',
            apiKey: 'ab9e458f31e3e6f9a8e73a2304de3067',
            indexName: 'gapyear'
          },
          external__react__default.a.createElement(
            'div',
            { className: 'banner' },
            external__react__default.a.createElement(
              link__default.a,
              { href: '/' },
              external__react__default.a.createElement(
                'a',
                { className: 'overlay logo' },
                'Noschool.io'
              )
            ),
            external__react__default.a.createElement(
              link__default.a,
              { href: '/contact' },
              external__react__default.a.createElement(
                'a',
                { className: 'overlay contact' },
                'Contact'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'overlay main' },
              'Discover awesome activities for your gap year'
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'overlay sub' },
              'Explore the world, try something new'
            )
          ),
          external__react__default.a.createElement(
            pages_DesktopContainer,
            null,
            external__react__default.a.createElement(components_Desktop, null)
          ),
          external__react__default.a.createElement(
            pages_MobileContainer,
            null,
            external__react__default.a.createElement(components_Mobile, null)
          )
        )
      ),
      external__react__default.a.createElement(
        'footer',
        null,
        external__react__default.a.createElement(
          'p',
          null,
          'Made with '
        ),
        external__react__default.a.createElement(external__react_feather_["Heart"], null),
        ' ',
        external__react__default.a.createElement(
          'p',
          null,
          ' by ',
          external__react__default.a.createElement(
            'a',
            { href: 'http://taylormilliman.me/' },
            'Taylor'
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'feedback-link-container' },
          external__react__default.a.createElement(
            link__default.a,
            { href: '/feedback' },
            external__react__default.a.createElement(
              'a',
              null,
              'Leave Some Feedback! ',
              external__react__default.a.createElement(external__react_feather_["Feather"], null)
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  -ms-touch-action: none;\n      touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  -ms-touch-action: pan-x;\n      touch-action: pan-x;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-handle:focus {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n  outline: none;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  margin-bottom: -7px;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = ".rc-tooltip.rc-tooltip-zoom-enter,\n.rc-tooltip.rc-tooltip-zoom-leave {\n  display: block;\n}\n.rc-tooltip-zoom-enter,\n.rc-tooltip-zoom-appear {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-play-state: paused;\n}\n.rc-tooltip-zoom-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  animation-play-state: paused;\n}\n.rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,\n.rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {\n  animation-name: rcToolTipZoomIn;\n  animation-play-state: running;\n}\n.rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {\n  animation-name: rcToolTipZoomOut;\n  animation-play-state: running;\n}\n@keyframes rcToolTipZoomIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcToolTipZoomOut {\n  0% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  opacity: 0.9;\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top,\n.rc-tooltip-placement-topLeft,\n.rc-tooltip-placement-topRight {\n  padding: 5px 0 9px 0;\n}\n.rc-tooltip-placement-right,\n.rc-tooltip-placement-rightTop,\n.rc-tooltip-placement-rightBottom {\n  padding: 0 5px 0 9px;\n}\n.rc-tooltip-placement-bottom,\n.rc-tooltip-placement-bottomLeft,\n.rc-tooltip-placement-bottomRight {\n  padding: 9px 0 5px 0;\n}\n.rc-tooltip-placement-left,\n.rc-tooltip-placement-leftTop,\n.rc-tooltip-placement-leftBottom {\n  padding: 0 9px 0 5px;\n}\n.rc-tooltip-inner {\n  padding: 8px 10px;\n  color: #fff;\n  text-align: left;\n  text-decoration: none;\n  background-color: #373737;\n  border-radius: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n  min-height: 34px;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow,\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  bottom: 4px;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #373737;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  left: 50%;\n}\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  right: 15%;\n}\n.rc-tooltip-placement-right .rc-tooltip-arrow,\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow,\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  left: 4px;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #373737;\n}\n.rc-tooltip-placement-right .rc-tooltip-arrow {\n  top: 50%;\n}\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n.rc-tooltip-placement-left .rc-tooltip-arrow,\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow,\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  right: 4px;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #373737;\n}\n.rc-tooltip-placement-left .rc-tooltip-arrow {\n  top: 50%;\n}\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n.rc-tooltip-placement-bottom .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  top: 4px;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #373737;\n}\n.rc-tooltip-placement-bottom .rc-tooltip-arrow {\n  left: 50%;\n}\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  right: 15%;\n}\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("pluralize");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = ".main-pane-container {\n  margin: 3rem 3rem; }\n  .main-pane-container .main-pane-search-options {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n  .main-pane-container .header-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    width: 100%; }\n  .main-pane-container h1 {\n    font-family: Nunito;\n    font-weight: 400;\n    color: black;\n    font-weight: normal; }\n  .main-pane-container h1.main-header {\n    font-size: 23px; }\n  .main-pane-container img {\n    width: 150px; }\n  .more-button {\n  padding: 0.5rem;\n  font-size: 15px;\n  font-family: Nunito;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 3px;\n  width: 10%;\n  border: 1px solid;\n  margin: auto;\n  background-color: #4A63FF;\n  color: white;\n  outline: none;\n  cursor: pointer; }\n  .more-button svg {\n    display: block;\n    margin: auto;\n    margin-top: 0.2rem; }\n  .more-button:hover {\n  transform: translateY(-1px);\n  box-shadow: rgba(63, 63, 63, 0.1) 0 15px 50px; }\n  .search-box-wrapper {\n  -ms-flex: 4;\n      flex: 4;\n  margin-right: 100px;\n  max-width: 700px; }\n  .ais-SearchBox__wrapper {\n  width: 100%;\n  margin-bottom: 2rem; }\n  .ais-SearchBox__wrapper input {\n    width: 100%;\n    -ms-flex: 4 400px;\n        flex: 4 400px;\n    padding: 15px 15px;\n    font-size: 18px;\n    color: #000;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.33);\n    transition: 0.3s ease;\n    outline: none; }\n  .ais-SearchBox__wrapper input:focus {\n    box-shadow: 6px 8px 24px 0 rgba(0, 0, 0, 0.5);\n    transition: 0.3s ease; }\n  .ais-SearchBox__wrapper button {\n    display: none; }\n  @media (max-width: 1110px) {\n  .main-pane-container {\n    margin: 2rem 1rem; }\n    .main-pane-container .bottom-border {\n      border-top: solid 1px #DAE0E3;\n      width: 100%;\n      margin-bottom: 1rem;\n      margin-top: 0.75rem; }\n  .search-box-wrapper {\n    margin-right: 50px; } }\n  .ais-SortBy__root {\n  display: block;\n  height: 40px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  background: #ffffff url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 12 7' xmlns='http://www.w3.org/2000/svg'><path d='M11 1L6.02 6 1 1' stroke-width='1.5' stroke='%23BFC7D8' fill='none' fill-rule='evenodd' stroke-linecap='round'/></svg>\") no-repeat center right 16px/10px;\n  box-shadow: 0 1px 1px 0 rgba(85, 95, 110, 0.2);\n  border: solid 1px #d4d8e3;\n  padding: 8px 16px;\n  padding-right: 32px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  color: #697782;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  border-radius: 4px;\n  text-align: left; }\n  .ais-SortBy__root:hover, .ais-SortBy__root:active {\n  box-shadow: none; }\n  .ais-SortBy__root:focus, .ais-SortBy__root:active {\n  outline: none;\n  background: #f2f2f2 url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 12 7' xmlns='http://www.w3.org/2000/svg'><path d='M11 1L6.02 6 1 1' stroke-width='1.5' stroke='%23BFC7D8' fill='none' fill-rule='evenodd' stroke-linecap='round'/></svg>\") no-repeat center right 16px/10px; }\n  @media (max-width: 500px) {\n  .main-pane-container {\n    margin: 2rem 1rem; }\n    .main-pane-container .main-pane-search-options {\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .ais-SortBy__root {\n    max-width: 150px;\n    -ms-flex-order: 1;\n        order: 1;\n    margin-bottom: 1rem; }\n  .search-box-wrapper {\n    -ms-flex-order: 2;\n        order: 2; } }\n  .filter-container {\n  margin-top: 2rem;\n  font-weight: 400; }\n  .filter-container h1 {\n    font-size: 15px;\n    font-weight: 600; }\n  .slider-header {\n  margin: 0 0.5rem;\n  margin-bottom: 0.75rem;\n  font-size: 15px;\n  font-weight: 400;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center; }\n  .slider-header .slider-label {\n    display: inline;\n    color: #B2BEC9; }\n  .slider-header h1 {\n    font-size: 15px;\n    color: #53667C;\n    font-weight: 600; }\n  .slider-container {\n  padding-left: 15px;\n  padding-right: 20px; }\n  .check-list-container {\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: flex;\n  -ms-box-orient: horizontal;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .left-filters-pane {\n  padding: 40px;\n  padding-top: 10px;\n  width: 270px;\n  background-color: #F5F7F9; }\n  @media (max-width: 1110px) {\n  .left-filters-pane {\n    width: 220px;\n    padding: 20px; }\n  .slider-container {\n    padding-left: 10px;\n    padding-right: 15px; } }\n  @media (max-width: 799px) {\n  .left-filters-pane {\n    width: auto;\n    padding: 2rem 15%; }\n  .slider-container {\n    padding-left: 15px;\n    padding-right: 20px; } }\n  .program-item-container {\n  display: -ms-flexbox;\n  display: flex;\n  outline: solid 1px #DAE0E3;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin: 1rem 0;\n  min-height: 120px; }\n  .program-item-container .img-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex: 1;\n        flex: 1; }\n  .program-item-container .img-container img {\n      display: block;\n      max-width: 160px;\n      max-height: 160px;\n      width: auto;\n      height: auto; }\n  .info-container {\n  padding: 0 2rem;\n  -ms-flex: 2.5;\n      flex: 2.5;\n  color: black; }\n  .info-container h1 {\n    font-size: 20px;\n    font-family: Nunito;\n    font-weight: 600; }\n  .info-container h2 {\n    font-size: 14px;\n    color: #999999;\n    font-family: Nunito;\n    font-weight: 400; }\n  .right-container {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 0.5rem 0; }\n  .right-container .top-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    font-size: 12px;\n    font-family: Nunito;\n    font-weight: 400;\n    width: 170px; }\n  .right-container .top-container .length {\n      width: 70px;\n      height: 22px;\n      color: #B4B4B4;\n      border: 1px solid #B4B4B4;\n      text-align: center;\n      border-radius: 3px;\n      line-height: 22px; }\n  .right-container .top-container svg.bookmarked {\n      fill: #53667C; }\n  .right-container .top-container .tag {\n      background-color: #58E78F;\n      width: 70px;\n      color: white;\n      border-radius: 3px;\n      line-height: 22px;\n      text-align: center; }\n  .right-container .bottom-container {\n    border-radius: 3px;\n    width: 170px;\n    height: 40px;\n    cursor: pointer;\n    background-color: #4A63FF;\n    color: white;\n    text-align: center;\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    outline: none;\n    font-weight: 300; }\n  .right-container .bottom-container p {\n      padding-left: 1.25rem; }\n  .right-container .bottom-container svg {\n      padding-right: 0.8rem; }\n  .right-container .bottom-container span {\n      position: absolute;\n      margin-top: 14px;\n      display: block;\n      border-bottom: 1px solid white;\n      width: 0%;\n      left: 1.7rem; }\n  .bottom-container:hover span {\n  animation: underline 500ms ease-in-out;\n  width: 120px; }\n  .program-item-container.mobile .img-container {\n  -ms-flex: 0.5;\n      flex: 0.5; }\n  .mobile-wrapper .bottom-container {\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #4A63FF;\n  color: white;\n  text-align: center;\n  outline: none;\n  font-weight: 300;\n  width: 120px;\n  height: 30px;\n  font-size: 14px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  left: 75%;\n  position: relative; }\n  @keyframes underline {\n  from {\n    width: 0%; }\n  to {\n    width: 120px; } }\n  @media (max-width: 1110px) {\n  .bottom-container:hover span {\n    animation: none;\n    width: 120px;\n    display: none; }\n  .program-item-container {\n    outline: none;\n    outline: none;\n    border-top: solid 1px #DAE0E3;\n    margin: 0.3rem 0rem; }\n    .program-item-container .img-container img {\n      max-width: 90px;\n      max-height: 90px; }\n  .right-container {\n    -ms-flex: 0.5;\n        flex: 0.5; }\n    .right-container .top-container {\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n    .right-container .bottom-container {\n      border-radius: 3px;\n      width: 120px;\n      height: 30px;\n      font-size: 14px; }\n      .right-container .bottom-container p {\n        padding-left: 0rem; }\n    .right-container .top-container {\n      width: 120px; }\n    .right-container svg {\n      display: none; } }\n  @media (max-width: 799px) {\n  .program-item-container {\n    margin: 0rem 0rem; }\n  .mobile-wrapper {\n    margin-bottom: 1rem; } }\n  @media (max-width: 500px) {\n  .mobile-wrapper .bottom-container {\n    left: 7rem;\n    right: 0;\n    margin: auto; } }\n  .Checkbox-container {\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Nunito;\n  font-weight: 400;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 15px;\n  color: #53667C;\n  background-color: white;\n  width: 120px;\n  height: 30px;\n  border-radius: 3px;\n  line-height: 28px;\n  margin-top: 0.7rem;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  box-shadow: 0 4px 11px 0 rgba(63, 63, 63, 0.04); }\n  .Checkbox-container.checked {\n  background-color: #58E78F;\n  color: white; }\n  .Checkbox-container:hover {\n  background-color: #B2BEC9;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: rgba(63, 63, 63, 0.1) 0 15px 50px; }\n  @media (max-width: 1110px) {\n  .Checkbox-container {\n    width: 100px; } }\n  @media (max-width: 799px) {\n  .Checkbox-container {\n    width: 100px;\n    width: 120px; } }\n  .rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  -ms-touch-action: none;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px; }\n  .rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb; }\n  .rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  -ms-touch-action: pan-x;\n  touch-action: pan-x; }\n  .rc-slider-handle:hover {\n  border-color: #57c5f7; }\n  .rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing; }\n  .rc-slider-handle:focus {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n  outline: none; }\n  .rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px; }\n  .rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999; }\n  .rc-slider-mark-text-active {\n  color: #666; }\n  .rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent; }\n  .rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle; }\n  .rc-slider-dot-active {\n  border-color: #96dbfa; }\n  .rc-slider-disabled {\n  background-color: #e9e9e9; }\n  .rc-slider-disabled .rc-slider-track {\n  background-color: #ccc; }\n  .rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed; }\n  .rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important; }\n  .rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px; }\n  .rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  margin-bottom: -7px;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y; }\n  .rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%; }\n  .rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px; }\n  .rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px; }\n  .rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px; }\n  .rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px; }\n  .rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused; }\n  .rc-slider-tooltip-zoom-down-leave {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused; }\n  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running; }\n  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running; }\n  .rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1); }\n  .rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06); }\n  @keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0); }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1); } }\n  @keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1); }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0); } }\n  .rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  .rc-slider-tooltip-hidden {\n  display: none; }\n  .rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0; }\n  .rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9; }\n  .rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c; }\n  body {\n  margin: 0;\n  padding: 0;\n  color: #53667C;\n  overflow-x: hidden; }\n  html {\n  font-family: Nunito, \"SourceSansPro\", \"Helvetica Neue\", sans-serif; }\n  .banner:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  opacity: 0.75;\n  background-image: linear-gradient(-239deg, #001CF5 0%, #9491FF 100%); }\n  .banner {\n  position: relative;\n  background: url(\"http://d3bewr15g1kmwh.cloudfront.net/banner.png\");\n  width: 100%;\n  height: 300px;\n  background-size: cover; }\n  .banner .overlay {\n    color: white;\n    position: absolute;\n    text-align: left;\n    margin: auto; }\n  .banner .overlay.logo {\n    left: 40px;\n    top: 20px;\n    font-size: 18px;\n    font-weight: bold;\n    text-decoration: none; }\n  .banner .overlay.main {\n    font-weight: 700;\n    font-size: 44px;\n    top: 110px;\n    left: 275px; }\n  .banner .overlay.sub {\n    left: 275px;\n    top: 170px;\n    font-size: 24px;\n    font-weight: 400; }\n  .banner .overlay.contact {\n    right: 60px;\n    top: 20px;\n    font-size: 18px;\n    font-weight: bold;\n    text-decoration: none; }\n  .content-header {\n  padding: 1rem 2rem;\n  border-bottom: 1px #586994 dashed; }\n  .content-header .filters-btn {\n    background: #586994;\n    border-radius: 8px;\n    font-size: 20px;\n    color: #FFFFFF;\n    width: 7.75rem;\n    height: 2.75rem;\n    position: relative;\n    padding-left: 1.6rem;\n    border: 1px #586994 solid;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none; }\n  .content-header .filters-btn svg {\n      position: absolute;\n      bottom: 0.55rem;\n      left: 1rem; }\n  .content-header .filters-btn:hover {\n      color: #586994;\n      background-color: #fff;\n      cursor: pointer; }\n  .content-header .clear-filters-btn {\n    border: 1px solid #586994;\n    border-radius: 62px;\n    /* Clear filters: */\n    font-size: 20px;\n    font-weight: 400;\n    color: #586994;\n    width: 7.75rem;\n    height: 2.75rem;\n    margin: 0 2rem;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none; }\n  .content-header .clear-filters-btn:hover {\n      background-color: #586994;\n      color: #fff;\n      cursor: pointer; }\n  .home-main-container {\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  height: 100vh;\n  position: relative;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: overflow;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .left-filters-pane,\n.right-main-bar {\n  overflow: auto;\n  height: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none; }\n  .right-main-bar {\n  -ms-flex: 1;\n      flex: 1; }\n  footer {\n  margin: 1.5rem;\n  text-align: center;\n  font-weight: 400; }\n  footer svg {\n    color: #FD4134;\n    fill: #FD4134;\n    width: 15px;\n    height: 15px; }\n  footer p {\n    line-height: 20px;\n    text-anchor: middle;\n    display: inline;\n    color: black; }\n  footer a {\n    color: #4A63FF; }\n  footer .feedback-link-container {\n    margin: 1rem; }\n  footer .feedback-link-container svg {\n      fill: white;\n      color: #4A63FF; }\n  footer .feedback-link-container a {\n      color: #4A63FF; }\n  @media (max-width: 1240px) {\n  .banner {\n    position: relative;\n    width: 100%; }\n    .banner .overlay.main {\n      top: 110px;\n      left: 80px; }\n    .banner .overlay.sub {\n      left: 80px; } }\n  @media (max-width: 1010px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 240px; }\n    .banner .overlay.main {\n      top: 70px;\n      font-size: 36px; }\n    .banner .overlay.sub {\n      top: 120px; } }\n  @media (max-width: 841px) {\n  .banner .overlay.sub {\n    top: 170px; } }\n  @media (max-width: 640px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 270px; }\n    .banner .overlay.main {\n      left: 40px;\n      font-size: 32px; }\n    .banner .overlay.sub {\n      left: 40px;\n      font-size: 17px; } }\n  @media (max-width: 450px) {\n  .banner {\n    position: relative;\n    width: 100%;\n    height: 270px; }\n    .banner .overlay.main {\n      left: 20px;\n      right: 20px; }\n    .banner .overlay.sub {\n      top: 210px;\n      left: 20px;\n      right: 20px; }\n    .banner .overlay.logo {\n      left: 20px; }\n    .banner .overlay.contact {\n      right: 20px; } }\n";

/***/ })
/******/ ]);