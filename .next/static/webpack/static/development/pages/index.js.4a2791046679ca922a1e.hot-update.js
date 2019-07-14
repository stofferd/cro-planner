webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FormInput.js":
/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/chris/CROP/components/FormInput.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    text-transform: uppercase;\n    input {\n        display: block;\n        border: 0;\n        background: transparent;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject(), function (props) {
  return props.theme.green;
});

var FormInput = function FormInput(_ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      niceName = _ref.niceName,
      value = _ref.value,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, niceName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onChange,
    name: name,
    id: name,
    value: value,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ })

})
//# sourceMappingURL=index.js.4a2791046679ca922a1e.hot-update.js.map