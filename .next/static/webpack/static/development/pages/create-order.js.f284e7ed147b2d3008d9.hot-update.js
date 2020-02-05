webpackHotUpdate("static/development/pages/create-order.js",{

/***/ "./components/PoojaEntry.js":
/*!**********************************!*\
  !*** ./components/PoojaEntry.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/shogil/Projects/templeappfrontend/components/PoojaEntry.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PoojaEntry = function PoojaEntry(_ref) {
  var poojas = _ref.poojas;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      total = _useState[0],
      setTotal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    "pooja": null,
    "date": null,
    "qty": null
  }]),
      data = _useState2[0],
      setData = _useState2[1];

  var handleCreatePooja = function handleCreatePooja() {
    var newData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [{
      "pooja": null,
      "date": null,
      "qty": null
    }]);
    setData(newData);
  };

  var handleChangePooja = function handleChangePooja(pooja, selection) {
    console.log('heelo');
    setTotal(total + pooja.price);
  };

  var renderPoojaOptions = function renderPoojaOptions(i) {
    return __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Select Pooja"), __jsx("select", {
      value: i ? i : 'default',
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("option", {
      disabled: true,
      value: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Select Pooja"), poojas.map(function (i) {
      return __jsx("option", {
        value: i.id,
        onChange: function onChange(e) {
          return handleChangePooja(i, e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, i.name);
    })));
  };

  var renderPoojaEntry = function renderPoojaEntry(i) {
    return __jsx("div", {
      className: "card p-2 my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "row m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, renderPoojaOptions(i.pooja)), __jsx("div", {
      className: "col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Qty"), __jsx("input", {
      value: i.qty,
      className: "form-control",
      type: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Booking Date"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }))))));
  };

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, data.map(function (i) {
    return renderPoojaEntry(i);
  }), __jsx("div", {
    onClick: handleCreatePooja,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Add Pooja"), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Total: ", total)));
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ })

})
//# sourceMappingURL=create-order.js.f284e7ed147b2d3008d9.hot-update.js.map