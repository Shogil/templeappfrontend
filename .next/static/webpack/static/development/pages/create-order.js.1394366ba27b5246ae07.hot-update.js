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
  var data = [{
    "pooja": null,
    "date": null,
    "qty": null
  }];

  var handleCreatePooja = function handleCreatePooja() {
    data.push({
      "pooja": null,
      "date": null,
      "qty": null
    });
  };

  var renderPoojaOptions = function renderPoojaOptions(i) {
    return __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Select Pooja"), __jsx("select", {
      value: i,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, poojas.map(function (i) {
      return __jsx("option", {
        value: i.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
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
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "row m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, renderPoojaOptions(i.pooja)), __jsx("div", {
      className: "col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Qty"), __jsx("input", {
      value: i.qty,
      className: "form-control",
      type: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })))));
  };

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, data.map(function (i) {
    return renderPoojaEntry(i);
  }), __jsx("div", {
    onClick: handleCreatePooja,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Add Pooja"));
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ })

})
//# sourceMappingURL=create-order.js.1394366ba27b5246ae07.hot-update.js.map