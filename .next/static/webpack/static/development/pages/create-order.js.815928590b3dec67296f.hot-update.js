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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    "pooja": null,
    "date": null,
    "qty": 1,
    "price": null
  }]),
      data = _useState[0],
      setData = _useState[1];

  var handleCreatePooja = function handleCreatePooja() {
    var newData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [{
      "pooja": null,
      "date": null,
      "qty": 1,
      "price": null
    }]);
    setData(newData);
  };

  var handleChangePooja = function handleChangePooja(x, selection) {
    var d = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data);

    d[x].pooja = selection;
    d[x].price = poojas[x].price;
    setData(d);
  };

  var calculateTotal = function calculateTotal() {
    var s = 0;
    data.map(function (i) {
      return s += i.price * i.qty;
    });
    return s;
  };

  var renderPoojaEntry = function renderPoojaEntry(p, i) {
    return __jsx("div", {
      className: "card p-2 my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "row m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Name"), __jsx("input", {
      className: "form-control",
      placeholder: "Enter Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))), __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Nakshatram"), __jsx("input", {
      className: "form-control",
      placeholder: "Enter Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Select Pooja"), __jsx("select", {
      onChange: function onChange(e) {
        return handleChangePooja(i, e.target.value);
      },
      value: p.pooja ? p.pooja : 'default',
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("option", {
      disabled: true,
      value: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Select Pooja"), poojas.map(function (i) {
      return __jsx("option", {
        value: i.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, i.name);
    })))), __jsx("div", {
      className: "col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Qty"), __jsx("input", {
      value: i.qty,
      className: "form-control",
      type: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Booking Date"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))))));
  };

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, data.map(function (p, i) {
    return renderPoojaEntry(p, i);
  }), __jsx("div", {
    onClick: handleCreatePooja,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Add Pooja"), __jsx("div", {
    className: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Total: ", calculateTotal()));
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ })

})
//# sourceMappingURL=create-order.js.815928590b3dec67296f.hot-update.js.map