module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Base.js":
/*!****************************!*\
  !*** ./components/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.sass */ "./styles/style.sass");
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shogil/Projects/templeappfrontend/components/Base.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Base = ({
  children
}) => {
  return __jsx("div", {
    style: {
      background: '#eee'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./components/PoojaEntry.js":
/*!**********************************!*\
  !*** ./components/PoojaEntry.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/shogil/Projects/templeappfrontend/components/PoojaEntry.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PoojaEntry = ({
  poojas
}) => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    "pooja": null,
    "date": null,
    "qty": 1,
    "price": null
  }]);

  const handleCreatePooja = () => {
    const newData = [...data, {
      "pooja": null,
      "date": null,
      "qty": 1,
      "price": null
    }];
    setData(newData);
  };

  const handleChangePooja = (x, selection) => {
    const d = [...data];
    d[x].pooja = poojas[selection].id;
    d[x].price = poojas[selection].price;
    setData(d);
  };

  const handleQtyChange = (x, value) => {
    const d = [...data];
    d[x].qty = value;
    setData(d);
  };

  const calculateTotal = () => {
    let s = 0;
    data.map(i => s += i.price * i.qty);
    return s;
  };

  console.log(data);

  const renderPoojaEntry = (p, i) => __jsx("div", {
    className: "card p-2 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "row m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Name"), __jsx("input", {
    className: "form-control",
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Nakshatram"), __jsx("input", {
    className: "form-control",
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Select Pooja"), __jsx("select", {
    onChange: e => handleChangePooja(i, e.target.value),
    value: p.pooja ? p.pooja : 'default',
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("option", {
    disabled: true,
    value: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Select Pooja"), poojas.map((p, i) => __jsx("option", {
    value: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, p.name, " (Rs. ", p.price, ")"))))), __jsx("div", {
    className: "col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Qty"), __jsx("input", {
    onChange: e => handleQtyChange(i, e.target.value),
    value: i.qty,
    className: "form-control",
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Booking Date"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }))))));

  return __jsx("div", {
    className: "my-4 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, data.map((p, i) => renderPoojaEntry(p, i)), __jsx("div", {
    onClick: handleCreatePooja,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Add Pooja"), __jsx("div", {
    className: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Total: ", calculateTotal()));
};

/* harmony default export */ __webpack_exports__["default"] = (PoojaEntry);

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/create-order.js":
/*!*******************************!*\
  !*** ./pages/create-order.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dataFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dataFetch */ "./utils/dataFetch.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Base */ "./components/Base.js");
/* harmony import */ var _components_PoojaEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PoojaEntry */ "./components/PoojaEntry.js");
var _jsxFileName = "/home/shogil/Projects/templeappfrontend/pages/create-order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Poojas = () => {
  const {
    0: isLoaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isQueried,
    1: setQueried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const query = `{
    listPoojas
      {
        id
        name
        price
      }
    }`;

  const getPoojas = async () => await Object(_utils_dataFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
    query
  });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isQueried) {
      getPoojas().then(response => {
        setQueried(true);

        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
          setData(response.data.listPoojas);
          setLoaded(true);
        }
      });
    }
  });
  return __jsx(_components_Base__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "container py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: "row m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "card w-100 p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("h1", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Create Order"), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Name"), __jsx("input", {
    className: "form-control",
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Nakshatram"), __jsx("input", {
    className: "form-control",
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))), isLoaded ? __jsx(_components_PoojaEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    poojas: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Poojas);

/***/ }),

/***/ "./styles/style.sass":
/*!***************************!*\
  !*** ./styles/style.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/dataFetch.js":
/*!****************************!*\
  !*** ./utils/dataFetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'http://127.0.0.1:8000/';
/* harmony default export */ __webpack_exports__["default"] = (({
  query,
  variables
}) => {
  const body = {
    query,
    variables
  };
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Authorization: token ? `JWT ${token}` : null,

    },
    body: JSON.stringify(body)
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(API_URL, apiConfig).then(function (response) {
    const contentType = response.headers.get('content-type');

    if (response.ok) {
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(json => json);
      }

      if (contentType && contentType.indexOf('text') !== -1) {
        return response.text().then(text => text);
      }

      return response;
    }

    console.error(`Response status ${response.status} during dataFetch for url ${response.url}.`);
    throw response;
  });
});

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/create-order.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shogil/Projects/templeappfrontend/pages/create-order.js */"./pages/create-order.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ })

/******/ });
//# sourceMappingURL=create-order.js.map