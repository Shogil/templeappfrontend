webpackHotUpdate("static/development/pages/create-order.js",{

/***/ "./components/PoojaEntry.js":
/*!**********************************!*\
  !*** ./components/PoojaEntry.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/shogil/Projects/templeappfrontend/components/PoojaEntry.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PoojaEntry = function PoojaEntry(_ref) {
  var poojas = _ref.poojas;

  var renderPoojaOptions = __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Select Pooja"), __jsx("select", {
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, poojas.map(function (i) {
    return __jsx("option", {
      value: i.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, i.name);
  })));

  var renderPoojaEntry = __jsx("div", {
    className: "card p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "row m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, renderPoojaOptions), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Qty"), __jsx("input", {
    className: "form-control",
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))));

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, renderPoojaEntry);
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ })

})
//# sourceMappingURL=create-order.js.c81c36239a27bee78584.hot-update.js.map