webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Goal.js":
/*!****************************!*\
  !*** ./components/Goal.js ***!
  \****************************/
/*! exports provided: LOCAL_GOAL_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_GOAL_QUERY", function() { return LOCAL_GOAL_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInput */ "./components/FormInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
var _jsxFileName = "/Users/chris/CROP/components/Goal.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query LOCAL_GOAL_QUERY {\n        goal @client {\n            name\n            sessions\n            conversions\n            conversionValue\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var LOCAL_GOAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var StyledOverview = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

var Goal =
/*#__PURE__*/
function (_Component) {
  _inherits(Goal, _Component);

  function Goal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Goal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Goal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      goal: '',
      sessions: 0,
      conversions: 0,
      conversionValue: 0
    });

    _defineProperty(_assertThisInitialized(_this), "client", null);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));

      if (_this.client) {
        var _goal;

        _this.client.writeData({
          data: {
            goal: (_goal = {}, _defineProperty(_goal, name, val), _defineProperty(_goal, "__typename", "Goal"), _goal)
          }
        });
      }
    });

    return _this;
  }

  _createClass(Goal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
        query: LOCAL_GOAL_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            client = _ref.client;
        console.log(data);
        _this2.client = client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: "goal",
          niceName: "Goal",
          onChange: _this2.handleChange,
          value: _this2.state.goal,
          placeholder: "Add in your goal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledOverview, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "number",
          name: "sessions",
          niceName: "Sessions",
          onChange: _this2.handleChange,
          value: _this2.state.sessions,
          placeholder: "Add in your sessions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "number",
          name: "conversions",
          niceName: "Conversions",
          onChange: _this2.handleChange,
          value: _this2.state.conversions,
          placeholder: "Add in your conversions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "number",
          name: "conversionValue",
          niceName: "Conversion Value",
          onChange: _this2.handleChange,
          value: _this2.state.conversionValue,
          placeholder: "Add in your conversion value",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        })));
      });
    }
  }]);

  return Goal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Goal);

/***/ })

})
//# sourceMappingURL=index.js.40466a12a9821b54e48c.hot-update.js.map