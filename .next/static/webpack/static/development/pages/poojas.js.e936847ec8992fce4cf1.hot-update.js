webpackHotUpdate("static/development/pages/poojas.js",{

/***/ "./pages/poojas.js":
/*!*************************!*\
  !*** ./pages/poojas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dataFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dataFetch */ "./utils/dataFetch.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Base */ "./components/Base.js");

var _jsxFileName = "/home/shogil/Projects/templeappfrontend/pages/poojas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Poojas = function Poojas() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoaded = _useState[0],
      setLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isQueried = _useState3[0],
      setQueried = _useState3[1];

  var query = "{\n    listPoojas\n      {\n        id\n        name\n        price\n      }\n    }";

  var getPoojas = function getPoojas() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPoojas$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_dataFetch__WEBPACK_IMPORTED_MODULE_2__["default"])({
              query: query
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isQueried) {
      getPoojas().then(function (response) {
        setQueried(true);

        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
          setData(response.data.listPoojas);
          setLoaded(true);
        }
      });
    }
  });

  var renderPoojaCard = function renderPoojaCard(pooja) {
    return __jsx("div", {
      className: "card p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, pooja.name), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Rs. ", pooja.price));
  };

  var showLoading = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Loading"));

  return __jsx(_components_Base__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Poojas"), isLoaded ? data.map(function (i) {
    return renderPoojaCard(i);
  }) : showLoading);
};

/* harmony default export */ __webpack_exports__["default"] = (Poojas);

/***/ })

})
//# sourceMappingURL=poojas.js.e936847ec8992fce4cf1.hot-update.js.map