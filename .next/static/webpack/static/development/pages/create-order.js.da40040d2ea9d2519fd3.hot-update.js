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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var handleCreatePooja = function handleCreatePooja() {
    setData([data, {
      "pooja": null,
      "date": null,
      "qty": null
    }]);
  };

  var renderPoojaOptions = function renderPoojaOptions(i) {
    return __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Select Pooja"), __jsx("select", {
      value: i,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, poojas.map(function (i) {
      return __jsx("option", {
        value: i.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, i.name);
    })));
  };

  var renderPoojaEntry = function renderPoojaEntry(i) {
    return __jsx("div", {
      className: "card p-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "row m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, renderPoojaOptions(i.pooja)), __jsx("div", {
      className: "col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Qty"), __jsx("input", {
      value: i.qty,
      className: "form-control",
      type: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })))));
  };

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data.map(function (i) {
    return renderPoojaEntry(i);
  }), __jsx("div", {
    onClick: handleCreatePooja,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Add Pooja"));
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ })

})
//# sourceMappingURL=create-order.js.da40040d2ea9d2519fd3.hot-update.js.map