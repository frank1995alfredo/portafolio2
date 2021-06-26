module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\ReactJs\\PortFolio\\portfolio3\\components\\Layout.jsx";





const Layout = ({
  children,
  title,
  footer = true,
  dark = false
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const handleRouteChange = url => {
      console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: dark ? "bg-primary transition contenedor" : "transition contenedor",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "container py-4",
      children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: dark ? 'text-center text-light' : "text-center",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), footer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-primary text-light text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\xA9 Franklin Ca\xF1adas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Esta p\xE1gina est\xE1 desarrollada con Next js, Html5, Bootstrap5 y css3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "2021 Todos los derechos reservados."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\ReactJs\\PortFolio\\portfolio3\\components\\Navbar.jsx";


const Navbar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
  className: "navbar navbar-expand-lg navbar-dark bg-primary",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "navbar-brand",
        children: "Portafolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-offset-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/intereses",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "navbar-brand",
          children: "Intereses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/certificados",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "navbar-brand",
          children: "Certificados"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/github",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "navbar-brand",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\ReactJs\\PortFolio\\portfolio3\\pages\\index.jsx";




const Index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "row",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card card-body fondo text-light",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "foto.jpg",
              alt: "",
              className: "img-fluid",
              style: {
                height: "200px",
                width: "220px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Franklin Ca\xF1adas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "Desarrollador web API REST"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "texto-justificado",
              children: ["Hola, mi nombre es Franklin Ca\xF1adas, tengo 26 a\xF1os, soy estudiante egresado de Ing. Sistemas Computacionales me gusta trabajar en equipo, compartir ideas, escribir c\xF3digo, resolver problemas, compartir conocimientos, aprender de los dem\xE1s, ayudar a los dem\xE1s con lo que este a mi alcance.", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn-light",
              tabindex: "-1",
              href: "cv.pdf",
              target: "_blank",
              children: "Ver CV"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), "   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://api.whatsapp.com/send?phone=593999637950",
                target: "_blank",
                children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  class: "bi bi-whatsapp",
                  viewBox: "0 0 16 16",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "btn btn-success",
                    d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 96
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 14
            }, undefined), "   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-secondary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://t.me/FranklinPcCoder",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  class: "bi bi-telegram",
                  viewBox: "0 0 16 16",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "btn btn-success",
                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 18
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 14
            }, undefined), "   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-primary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://www.facebook.com/profile.php?id=100013908435606",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  class: "bi bi-facebook",
                  viewBox: "0 0 16 16",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "btn btn-success",
                    d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 16
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 14
            }, undefined), "   "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row py-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-light",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Habilidades"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined), _profile__WEBPACK_IMPORTED_MODULE_2__["skills"].map((skill, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "py-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: skill.skill
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "progress",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "progress-bar  progress-bar-animation",
                role: "progressbar",
                style: {
                  width: `${skill.porcentage}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              children: skill.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-light",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Sobre mi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: _profile__WEBPACK_IMPORTED_MODULE_2__["experiences"].map((experience, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: experience.titulo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: experience.descripcion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card card-body bg-primary",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-center text-light",
              children: "Portafolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined), _profile__WEBPACK_IMPORTED_MODULE_2__["proyectos"].map((proyecto, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4 p-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card h-100",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overflow",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: `${proyecto.imagen}`,
                  className: "card-img-top",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: proyecto.nombre
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "texto-justificado",
                  children: proyecto.descripcion
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: proyecto.ruta,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "btn btn-outline-primary",
                    children: "Saber mas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./profile.jsx":
/*!*********************!*\
  !*** ./profile.jsx ***!
  \*********************/
/*! exports provided: skills, experiences, proyectos, certificados, posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proyectos", function() { return proyectos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certificados", function() { return certificados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
const skills = [{
  skill: "Javascript",
  porcentage: 65,
  text: "Básico - Intermedio"
}, {
  skill: "Typescript",
  porcentage: 15,
  text: "Básico"
}, {
  skill: "Html 5",
  porcentage: 70,
  text: "Intermedio"
}, {
  skill: "Css",
  porcentage: 25,
  text: "Básico"
}, {
  skill: "React Js",
  porcentage: 65,
  text: "Básico - Intermedio"
}, {
  skill: "Next Js",
  porcentage: 35,
  text: "Básico"
}, {
  skill: "Golang + Gin + Rest Api",
  porcentage: 65,
  text: "Básico - Intermedio"
}, {
  skill: "Sql Server",
  porcentage: 60,
  text: "Básico - Intermedio"
}, {
  skill: "Php - Laravel + Rest Api + PostgreSql",
  porcentage: 60,
  text: "Básico - Intermedio"
}, {
  skill: "Django Rest Framework + PostgreSql",
  porcentage: 15,
  text: "Básico"
}, {
  skill: "Bootstrap 4 - 5",
  porcentage: 70,
  text: "Intermedio"
}];
const experiences = [{
  titulo: "Aprendizaje",
  descripcion: 'Me gusta realizar cursos en udemy, libros o youtube cada año para estar al día con mis conocimientos y reforzar técnicas de escritura código.'
}, {
  titulo: "Universidad",
  descripcion: 'Estudiante titulado de Ing. Sistemas Computacionales.'
}, {
  titulo: "Desarrollo web",
  descripcion: 'Con Laravel, Golang - Gin o Django Rest Framework puedo desarrollar proyectos SPA los cuáles pueden ser consumidos con React Js usando css, html, bootstrap'
}, {
  titulo: "Tecnología",
  descripcion: 'Me encanta la tecnología, me gusta estar al día con las tecnologías que salen cada año y aplicarlas de alguna forma.'
}, {
  titulo: "Proyectos",
  descripcion: 'He realizado proyectos personales los cuales están en mi cuenta de github.'
}, {
  titulo: "Trabajo",
  descripcion: '2020 - 2020 como programador en la Universidad Estatal de Milagro en Django Python.'
}];
const proyectos = [{
  nombre: 'Proyecto en Go + Rest Api',
  descripcion: 'Es  un proyecto personal escrito en Golang con el framework Gin, como base de datos usa PostgreSql, se puede consumir con React js.',
  imagen: 'go.png',
  ruta: '/go'
}, {
  nombre: 'Proyecto en Laravel + Rest Api',
  descripcion: 'Es un proyecto personal que usa los mismos modelos que el proyecto en Go, como base de datos usa PostgreSql, al igual que en Go, este se puede consumir con React Js.',
  imagen: 'laravel.png',
  ruta: '/laravel'
}, {
  nombre: 'Front End Sistema Laravel',
  descripcion: 'Es una plantilla que descarge para consumir la api hecha en laravel, esta hecho en React Js y reactstrap.',
  imagen: 'black-dashboard-react.gif',
  ruta: '/react'
}, {
  nombre: 'CV 1',
  descripcion: 'Es la primera versión de mi CV, está hecho con React Js, html5, css3, bootstrap 5.',
  imagen: 'porta1.png',
  ruta: '/cv'
}, {
  nombre: 'Mapa con Javascript',
  descripcion: 'Es una mini práctica con javascript en el cuál se dibuja un mapa y se muestran distintos puntos.',
  imagen: 'mapa.png',
  ruta: '/mapa'
}, {
  nombre: 'CV 2',
  descripcion: 'Es una actualización de mi CV.',
  imagen: 'porta2.png',
  ruta: '/cv2'
}];
const certificados = [{
  titulo: 'Typescript',
  descripcion: "Curso de Typescript en la plataforma Udemy",
  certificado: 'typescript.pdf',
  imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaHVsbzvj9yYhtOIWptx6XhKRuAR1DxGc_w&usqp=CAU'
}, {
  titulo: "Javacript",
  descripcion: "Curso de Javascript en la plataforma Udemy",
  certificado: 'javascript.pdf',
  imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNE0HLQ1I8Vg1GN-kHcZDV7bbJpVW3TlZa8A&usqp=CAU'
}, {
  titulo: "Go",
  descripcion: "Curso de Go en la plataforma Udemy",
  certificado: 'go.pdf',
  imagenURL: 'data:image/png;base64,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'
}, {
  titulo: "Django - Python",
  descripcion: "Curso de Python en la plataforma Udemy",
  certificado: 'python.pdf',
  imagenURL: 'data:image/png;base64,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'
}, {
  titulo: "React Js",
  descripcion: "Curso de React Js en la plataforma Udemy",
  certificado: 'react.pdf',
  imagenURL: 'data:image/png;base64,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'
}];
const posts = [{
  titulo: 'Aprendizaje',
  contenido: 'Aprender sobre nuevas tecnologías haciendo cursos en las plataformas de Udemy, Platzy o Youtube.',
  imagenURL: 'https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png'
}, {
  titulo: 'Tiempo libre',
  contenido: 'Leer, estudiar matemáticas, realizar ejercicio físico, videojuegos, escuchar música.',
  imagenURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYVGBgaGBUYGBoYGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhESHDQhISE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0P//AABEIAKoBKAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA+EAACAQIDBQYDBwIDCQAAAAABAgADEQQhMQUSQVFhBhMicYGRMqGxBxRCYnLR8FLBM4LhFRYjQ5Ki0vHy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAAIDAQAAAAAAAAAAAAABEQISIUFRMf/aAAwDAQACEQMRAD8A0apJLRxES05tuAjgscqSVUlwRBY8LJAkXdlwQlZwWThJ27GJqDdnbsn3YhSTDUO5F3I8iNJjFRlI3djmMZvRhpwkgkJeMNWASDHGDo4k4aBxjGEUtI2eQjmjCkUNFvCm7sULFM5VJgKkcZIlKcwlkZ1FuQesRJal+cGqLzMdVDs0jdxziVCsHdhylwc7xneRjMOUgaoOUmNCu8EUV1gPeTi4jAccSnWMOKXr7QFnEZvCMZWAxyjn7RJXswiSYeG73ZIiSVUjrSppoWLEJiqIDlEULFVZKEmhGFnbsm3ZG7iEN3YxyBEdydJF3fMwpjuJEzGTlAINXxKJ8TAeZtHU1zSByYDie0+ETJq1O/IMCfYSoxHbrCj4XLfpRj/aMhl+NC5MEqVCJlq/b6j+FKh9APqYDU7cof8Alv7r+8y3JWxO0iuq38jJqG3KRyJKnqMveefVO2an/lsPUSA9paTahl8xeSymfXq6YlWzVgfIxrvPOtn7WW4KOPK/9prtnY/fsDrJpZi5pZw5KV4PhUtmYPtTtXg8MPHVVm4JTIdj6DTzM1IzVsmEvrGYzGUKAvUqIg/MwH1nnVbtZtDHsUwidyml1zb1c5D0klD7OGc72IrMzHW5LH3Msxbxz9uLzH/aBgUyV2c/kUke+kosT9pCHKnQqH9W6v7y6wvYbCU7XQv+o2+ktE2NQT4KSD0vNeWd4sC/bbFPfcw4HK5ZvoBB221tJ/hQDyQn6memfdgPwoPJRI6qLxNvYSZV7T1HmDYjajcG9EkJqbTHBvVVnp7MumZ00udZEx6W88oXs8xbaOPT4lv5rGN2rrKbPTX3InpFd7cFtoLkZzOdp9mJUpO4VQ6i915coNU+H7TAgGohVWyBBBUHrxEvUYMAVsRb6zLbI2G9SiWCkq2pAuPMDnblCMJVq4UhXW6DQ/0jz5TKa0DgZfONYEHhwjqGJRxcbtuBvximouYsPcfvCowPKdHPa5yGX5hx555ToR6UTEBjY9EmmSqsnRJyJJMhA5VikgRjVJGxjAruTIyvOczzEfaJ2lbD0hTpNao98xqq8WlwaTae3sNhx/xKiL0uL+0xu1PtIUndw1JnP9TeFfQameYJvO43mLMxAuSSbnzntHZzs3SoU1O4C5AJJAyuOF5NaySbWP73a2M4singo3Rbzk1H7ParnerVrnqxYz0hffp/MpzPbhb5S4nb4xOH+z3Dj4nY+QtDqfY3DL+AnzImkepyPsCZA5PM/IfWTDtVP/u5h10op6mMbYtAD/CT5yzqNzP/AHAQeobjhbIDxceUGqt9jULf4SfOV+J2DQb8FvKXVVxbeJsDpYix8oHVY9fkfpM1qMR2g7Nikpq0yd0fEDqsoaeMqjJXceTGei7XXew1cHgl/aVnY/ZKBQ7qCzZ58BLq4yNRsQ48TVnHUuw+cE3bZHKey1dppSupVRl/SJmu1uyErYf71SUBlPj3Rqp42iX0nh6R2cwSUsNTVAANxSbcSRe8tWS+plH2Ixq18HRYZ2TdboUO6b+0u6gt/a+XoBxmmL+o2YaDOQPUP/yL285LUFtfPPK/QKNfWQvYZsbXAtvHdFzaw3BnqR7yohrjQ5C2tz7ZDyg7re5zvbgoF+Vi3K0JZWJuN8Zi9lVL2J/q8XD9tYH4SBu2P6Var1G65y4ceflIqGo+drrofifey/EBuiQFOWfD4GPHm3W8KqqVH4gB+ZKa6aZC/X3g7ujZHdYAm1i7nIhgch7egkWIXBU6G1+SKPS/r7QTFXZGBOqtcb45Xyt1yhxA03GysBdLDMDMX/mUic2v4CLbw/AL2uMs9DwhXnexO0NTDMaaG3izU+JGHJhzHMWhuK2i7vZk8DZlb5gn+k84HsHBq+Ke4UgcGvbM8CONpfYzCAZjToG+pEmFCphDTAek28h4cjytwPSG0ceGHC/XK/yg3dso30Of4lOjdGHPrK5qxU76HK+YJ+E9ZcZ7NC76jwnQm5t0ucp0Dwm0A4Ga38yM/adMtPWVpSUACDmvyiBiZplOavKNJvI0HGSCWRDSbRjmOcxh+k0obH4laaM7GwAJngu28a+LxD1MyCbL0UZCegfaRtgqncqfE5sbcuJ8pkMLgWVUCKd9iABz9pi301IjwWCWnuFrbxdfrPaVGQtfQaDy4meQbf2TXwz0nqkEMRaxHhIsbHkf2nreFqB0RhY3VdLvw9uESHLMliUm1geV+J+kZUNjo1v8oAsAb3JkwDdeWZA+SiNbD6fCuRud0Hy8T6ZXHr76YDO4LcL+bnX9ItykZSxI3Ceu5lfTVjCHdMgX0JyDa34EIOG6SBw9bSNkT+hjpnuEjLQ3b9WvnykAdY2va56A0xvX03QeZIHmRIHbqSDcA76W81POGvYaIQfDa4ReIva/9OpH5cpBWUWzTjp4MrDU3PQe0lakA1Vv+K/Twnh/6+UBr0yB+HP8tr+0PqgAbwQ8slU2Fgb5cLWHpK6uiKLfDcC+RXLPXkcjJWpFbtZW+7so/G6JqTkSL/KGbN8JK8AAB6QbagKtSTkDUa5z5CS7MbPrncH5yNQB2rHhvNJ2HVatBqbC4Zd0jzlD2mS9Nuglj9m9bIjpE/Wb+Jew9U4PFV8BUNgWL0+INtQOdxY+hnoTAaZ72thYtbnf8ImQ+0TYbsqY3Dg99RIJ3dSotoBqennDezvavD4qmPEiPlvo53d0jjzfPP8AadGb58xeLlcGw1uV4HM+J24m2gvrfjBRmLgfq3LboOd71n18wNVEJrOrEAshyWxPiJJZr2TQCwHiN9TpbOCqVuSWB3TbxMrt0KpkouGb+XuZDsAcwLte90DOeo3nsueRy5GRVrHItc2IIZyeKgWVOtvK/WPxOKTIO6DI2323uWe4uRPQwdsfSBsaqgdHRBaxyAGfH5Q1hjqQLgGwuTZEQepc5a/34xCxNwTcC5J3zfPQEKLW6QWttvDKCDWpC+oHjJ894/vAKva3CrrVJ8t0A26AaGRco16asctM9VdieV72Az3vccoLiQqIzkboC3v3Srbjnc5ZmU+L7bYfMIj1CScrtax4C3nK3E1MdjQVSj3SHUm4J876yDuxtLeFWroGe3xFcgMsh5zSOL5sRYm2TtnyAEbsvZgw9MU1ZxYZm62vx9dfeTVAebf9SjztlFNUm0cOwF0KkcgWJt6iZOpjWR/Ep5EcCJ6BUBHFuXxjT2lPtXZiPc2sT+YW9JNSyKbDV7WZSd1tM7el+E6dhsP3bbh+E6HkZ0rL21KJUZx9src46o280SnmSfQemp/nKJBIBOMW0jc52/mc2aZlBsbiNxS3T5woN65dPbkJiu3u1DSpsARcg266Dz4jS0L+vP8AaWI+8Yp31VTui+nX+dJs+xmzd+oahHhQWAza54kAeXMTI9mtlvUZVUGxOeVz1ynseyMCtFAijPQiwORzIIGQPnMzz5W3FJ272Z3+FfdBLpaolrHQ3OgsARfiZ3Y/awq4RCpUsg3WGbMNSN2muuWeZGhmkelvFlNrHg13y5BfhAsMh1nmb4TGbMxDtQptUoVCWKLckZ/C27xG9lLSXZj0WprusSAbg2ZEFjfJQPEdQL5aXvIgOQuCQckZr2va7ObcvnzEx9Ht8g+LDVkbiETkLW3jnynHt4gtuYaueW8GJ9L+cada1xYnRje+Q31XezzzQdDl0MHAINzu3HEd45y6Hj7zG4zt5VQbwwpQG9i+V5UV+3+Lf4UUehMzqzjXotSmMxuZXYgd1fMjM3JzJzz43tB6qA/FoLXDIviABAHoJ5tU7R45/wAVh0BipUdxerWxA/QAPnJrXWtpXqoouzIpA1ZAmmQORz0vlzlSvaLC038Rapa3gpbzb1uB3jbWVWHwmDvdzUc5f4hYfSW9DuFXwU0W/wDQQfrIYrq+KevVfEVF3N8DcQHJUQeEbwyucyb84ds5rkA/PIjkcsj5iQ1ih0JUn/Kf2kmEFj63yH15eYk9tZ4FbdS9NuoPrlBPs4rWe3n9ZY7RW6Hymf7C1N2vbkxHzl9s38e200uouL3BBB0sdbty1vz0Ey21ewGDrMX3GRjc+DwAnmV/AvTXzmowreH2zOZ6ZD5DyMlbQ8P+7O/H+ozq5S5+PPW+zdALria44E3NvJRqYx+wCjXE1guWti5v0noB48/mf2lPtOu6Kd2wJ48fcyWRqc79YfafZLC0Rd8RWAtldhvE/pEoG2JTqeHD0Kzn+t23R7TVUcGhffqkuxPE3+svKOOpoLAACY3W7b9159Q+z2u2bbqdL3lgn2bW+KoPSbVtqrbX2kLbTU/6mMY7cmaTsIqZq5B6G06r2cqppWf/AKiZom2kOk47QBEYu1knwmIp8S3mLxn+0XXJ0BHlNc2KUwV1pPcFJMp2+xQDayH4lz8pKuLQ8B7QjE7ERvhNpUYnY1RLlSSI2myicVTRxkPlOlT3lRLggzo06vZ3Nhlqx3R5nj6CSqthYcMpFT8Tk8E8A/Uc3P0HvCLTpHM2McdOPL5nl6yYjlaRWucyDb/X/KPrlKqDEuFUnLLicvMBjkLdBwE8g7YYpq+IWmtznc5Hn1zM9K7QYvcQtfmL8eWbtpr+HlMJ2Y2d3tZqrAZnK5Ogy8zDU+tX2Q2SEQEgXtoTfp8K6+s05GVj0sLZeQQaes6nSCKBawAF7ZD5ZmdfL+KP3MMkYc/LP/wH942pwzGmd8h7COQ/wCwkZFvT39bwIXZVvdVAHJBb5zG7c2++8UoIoOfiIv7ATX4qjvggzOY3ZBU3WZ5bnhrjntQYXYD12DVnY8r6DyByEvsJ2Yw41BPmZGjumRBhSYw/vMY1bfQqnseglrIvrGvs2jnZFkP3oniJ3enmIyJ5BYnYtM6L7GUuJ2OVN0JFuc0tR8soFiXIksWWsq28DZoVg6pBEmxKAwailjI2vsSvgFv5eZLs625inH5wfcXmrLeCZDDndxbdd0/UTVZj3TAPdRly+euf1MLCk9P5w/eVexam8in8oh1arladXH2V3UZCU2PQNeGPc65CC1WA6yWqzGPwXFb+kpquEfXObOvUTjA3qpwWc66cayho1LcY5KTjnNKRfgJG2HvJjWqQBhqY8Oecs2wgjDgwJcTQSt5xe8hL0bQfd6RgUVpImJGhkTUpGUhMidqaNwEWDZidIzj05ECiwFhcn1JLE9SSSYsUCLOzBjfzkfSRPyte3Qc9baCS70hrNYZ/6ewgYvtaxfwi2tszvEf2EtOy+zwiAj1sP7wXG0N9xmfi5fSafC0N1AIa9HMbf6fvEF9ZNuc4toEIBiGnJTGNAjKjlB6ygyapUtBne8CrxdEcpTYinaXuJaVFcznyb4q5qhEQYoySoogzpMNp/vca+IgpERpNXI6u4MgQZxHM6kc40xao3gImQxvhxIPMH5ETX01unpMlttbVkPUj5TTL2Ds5if8Agr5SzKnhnMl2Trl1CjhNvSp5TpLscuUygKtM8YDVpE6S7ejzg1RAJLCVS/cucUYUDhJsXj0TiJn8b2iUZLMtTat3QDlBqlZBxmWxO23bSV1XHudW+cavWtdVx6DiIHV2ugmTfF82kD4tecmrjUVNsrBn2wOEzTYwSNsaI2mNI+15E21DM8cbGHGQL9tpmdKD73OkH0VGsI+0Qid3FHYZwbEp4TCywguN3ivKBn8Ow70CaZDkLTK4Zd2qLzVI43QTDVLuTjBMTtJEGZHvM/j+1qL8OflJaSWtO7gamC1sai6kTzzHdrXN7G0ocVt921aZ7L1+vS8VtumOIlRie0i8DPN6u0XPOCNiKhmba1OMb/EbdvxgD7WvxmQD1DzkirU6yNNMdpdYw48c5nwj9Yu68itAMUDxnGvKC7iOXEsIw1dGtH06ovKqni+cnWoDoZMXWnwz+GZntIlnRvzSxwGLsbGDdpAGUEcxLGa2/YNPBeb9LATzbsNibIBNBtvtItJCAc5uXI58pbyW209qJTBJImH2r2pLEhJndo7Veq12JtylXWxQWZvJqcZFjiMa75sxgFTFqJXVMQzHKMFLiTI2nq48nSDtWc84pZFkTYrlCHbjHWd3XMyBq7GRtUPEwCii840lYKakaXlwFl1jTVEFG8Y5aLGRExridGLhTOjwY+mzGbpMlJgOM2mlMXZhOziLCAQXHVkVcyBMntXtoouEFzMftLtHUqXu9hyBmbyjc41b7Z2+iP4DmDIMR2vdlsptMPia5YmLh0ZhrJa3kW2M2y7asT6ytfEu2l5IuHUamP71F0mdXAy4V21vJ0wI4xj4zlaQPijzk1RwpovKcayCVbVxxJjDWWEWpxichGHHjlK3vki98sA848cvlO+/DlK44hIn3hIwWf3teUd3yGVXfrFGIWMNWZRTpG7hXSALih/DJkxo5yKsaVf3j8bXuljAiwOYiVHusaVfbG2l3aZawfF4wu12MqsO+UdUq8o0SYjE8BBgvFpGzhczBKmKvpEKNesBpBqlbrIArtJUwROsuYiM1RG75OghqYGELhbcI2L1VYRjJFwp4yzWj0ju7PKTsvUCmEEkXDgcIWKZ5Re5PKTaYGFMR25CRhzHLhTGgQLFllSwJM6TyjY7Y7as1xTyHOY7HbYdzdmLesrXcnUxhqKJ0vLWZMStVdo1aXMwd8XyEHfEOeEjQmsyiMTGbsCfe4yPcJMuIMqY+DPiyYz7uY4Ycy+DyjasTG7x5ycYYx33aNiYEtOtDRhoow0djAVou7D1w0lXDSdl6qwUzF7sy2XDCOGHjsvVUd0Y4UDLhcOI8UBJ2Oqk+7NENFhL3uhGmiI7HVX4WqRkYVviSnDiKKImbVxCrgRj1OUK7oRVoiTTFX93ZznDsNs/pLHD4a80OzdnrL2pkijw2yGPCXOF7PE6iabC4VRaWtCmJZEtZel2aHKTf7urymsCiKUmsY71jm2AOUjOwhymwenIHSMO9ZQ7FHKRtskDhNQ6SB0jDszv+zBFGzhyl6UjdwSYdlZSwIiS2VROjGdeXLgHPAx42a3Iz0FaS8h7CQ1kHIe0mOrCHBW/DGmjbhNPiVHKVteRYpa1AQRUAMt8RpKx/iln4lTimIvdiPWdM60Z3Ynd2JJEgR7gjgkfHJKI1TpJVpE8IXh1GWUsKKjlApxhzynd1aXzqLaQKrIK60S8IeQQEiRxj0kEW7F3DCkkqSgEUjJqeGPKHrCaMCHC4U8pfYJLQehLKhLEqwwwlhSgWHh9ObjnU6R9oixwlZprLIXSTmMeEAVEgziWFSBVYWBHMiLyWpB3kU8VJ0iE6RH/2Q=='
}, {
  titulo: 'Otros idiomas',
  contenido: 'Practicar inglés, aunque se lo básico quiero seguir aprendiendo.',
  imagenURL: 'data:image/jpeg;base64,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'
}, {
  titulo: 'La natureza',
  contenido: 'Me gusta salir a conocer las distintan formas de vida que existen fuera de la ciudad y estar en contacto con la naturaleza.',
  imagenURL: 'https://concepto.de/wp-content/uploads/2015/03/naturaleza-medio-ambiente-e1505407093531.jpeg'
}, {
  titulo: 'Viajes',
  contenido: 'Aunque mas he viajado dentro del Ecuador me gustaria conocer otros paises.',
  imagenURL: 'https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg'
}];

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsIk5hdmJhciIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJza2lsbHMiLCJza2lsbCIsImluZGV4IiwicG9yY2VudGFnZSIsImV4cGVyaWVuY2VzIiwiZXhwZXJpZW5jZSIsInRpdHVsbyIsImRlc2NyaXBjaW9uIiwicHJveWVjdG9zIiwicHJveWVjdG8iLCJpbWFnZW4iLCJub21icmUiLCJydXRhIiwiY2VydGlmaWNhZG9zIiwiY2VydGlmaWNhZG8iLCJpbWFnZW5VUkwiLCJwb3N0cyIsImNvbnRlbmlkbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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RUFBRTtBQUpmLENBekJ3QixDQUFyQjtBQWlDQSxNQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVYsUUFBTSxFQUFFLGFBRFo7QUFFSVcsV0FBUyxFQUFFLGtHQUZmO0FBR0lGLFdBQVMsRUFBRTtBQUhmLENBRGlCLEVBTWpCO0FBQ0lULFFBQU0sRUFBRSxjQURaO0FBRUlXLFdBQVMsRUFBRSxzRkFGZjtBQUdJRixXQUFTLEVBQUU7QUFIZixDQU5pQixFQVdqQjtBQUNJVCxRQUFNLEVBQUUsZUFEWjtBQUVJVyxXQUFTLEVBQUUsa0VBRmY7QUFHSUYsV0FBUyxFQUFFO0FBSGYsQ0FYaUIsRUFnQmpCO0FBQ0lULFFBQU0sRUFBRSxhQURaO0FBRUlXLFdBQVMsRUFBRSw2SEFGZjtBQUdJRixXQUFTLEVBQUU7QUFIZixDQWhCaUIsRUFxQmpCO0FBQ0lULFFBQU0sRUFBRSxRQURaO0FBRUlXLFdBQVMsRUFBRSw0RUFGZjtBQUdJRixXQUFTLEVBQUU7QUFIZixDQXJCaUIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ2hLUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gXCJiZy1wcmltYXJ5IHRyYW5zaXRpb24gY29udGVuZWRvclwiIDogXCJ0cmFuc2l0aW9uIGNvbnRlbmVkb3JcIn0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgXHJcbiAgICAgICAgIHt0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17ZGFyayA/ICd0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0JyA6IFwidGV4dC1jZW50ZXJcIn0gPlxyXG4gICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICl9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICBcclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAge2Zvb3RlciAmJiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDE+JmNvcHk7IEZyYW5rbGluIENhw7FhZGFzPC9oMT5cclxuICAgICAgICAgICAgPHA+RXN0YSBww6FnaW5hIGVzdMOhIGRlc2Fycm9sbGFkYSBjb24gTmV4dCBqcywgSHRtbDUsIEJvb3RzdHJhcDUgeSBjc3MzPC9wPlxyXG4gICAgICAgICAgICA8cD4yMDIxIFRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Qb3J0YWZvbGlvPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtb2Zmc2V0LTQnPlxyXG4gICAgICA8TGluayBocmVmPVwiL2ludGVyZXNlc1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgSW50ZXJlc2VzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY2VydGlmaWNhZG9zXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+Q2VydGlmaWNhZG9zPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZ2l0aHViXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R2l0SHViPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKFxuICBwYXJzZWRIcmVmOiBVcmxPYmplY3QsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYXBwbHlCYXNlUGF0aCA9IHRydWVcbikge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICApXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICByZXR1cm4gcGFyc2VkSHJlZlxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55W11cbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzUGF0aCksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHNraWxscywgZXhwZXJpZW5jZXMsIHByb3llY3RvcyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICB7LyoqSGVhZGVyICovfVxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGZvbmRvIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJmb3RvLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCIyMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICA8aDE+RnJhbmtsaW4gQ2HDsWFkYXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMz5EZXNhcnJvbGxhZG9yIHdlYiBBUEkgUkVTVDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG8tanVzdGlmaWNhZG9cIj5cclxuICAgICAgICAgICAgICAgIEhvbGEsIG1pIG5vbWJyZSBlcyBGcmFua2xpbiBDYcOxYWRhcywgdGVuZ28gMjYgYcOxb3MsIHNveVxyXG4gICAgICAgICAgICAgICAgZXN0dWRpYW50ZSBlZ3Jlc2FkbyBkZSBJbmcuIFNpc3RlbWFzIENvbXB1dGFjaW9uYWxlcyBtZSBndXN0YVxyXG4gICAgICAgICAgICAgICAgdHJhYmFqYXIgZW4gZXF1aXBvLCBjb21wYXJ0aXIgaWRlYXMsIGVzY3JpYmlyIGPDs2RpZ28sIHJlc29sdmVyXHJcbiAgICAgICAgICAgICAgICBwcm9ibGVtYXMsIGNvbXBhcnRpciBjb25vY2ltaWVudG9zLCBhcHJlbmRlciBkZSBsb3MgZGVtw6FzLFxyXG4gICAgICAgICAgICAgICAgYXl1ZGFyIGEgbG9zIGRlbcOhcyBjb24gbG8gcXVlIGVzdGUgYSBtaSBhbGNhbmNlLntcIiBcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiY3YucGRmXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmVyIENWXHJcbiAgICAgICAgICAgICAgPC9hPntcIiAgIFwifVxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTkzOTk5NjM3OTUwXCIgIHRhcmdldD1cIl9ibGFua1wiPiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktd2hhdHNhcHBcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIGQ9XCJNMTMuNjAxIDIuMzI2QTcuODU0IDcuODU0IDAgMCAwIDcuOTk0IDBDMy42MjcgMCAuMDY4IDMuNTU4LjA2NCA3LjkyNmMwIDEuMzk5LjM2NiAyLjc2IDEuMDU3IDMuOTY1TDAgMTZsNC4yMDQtMS4xMDJhNy45MzMgNy45MzMgMCAwIDAgMy43OS45NjVoLjAwNGM0LjM2OCAwIDcuOTI2LTMuNTU4IDcuOTMtNy45M0E3Ljg5OCA3Ljg5OCAwIDAgMCAxMy42IDIuMzI2ek03Ljk5NCAxNC41MjFhNi41NzMgNi41NzMgMCAwIDEtMy4zNTYtLjkybC0uMjQtLjE0NC0yLjQ5NC42NTQuNjY2LTIuNDMzLS4xNTYtLjI1MWE2LjU2IDYuNTYgMCAwIDEtMS4wMDctMy41MDVjMC0zLjYyNiAyLjk1Ny02LjU4NCA2LjU5MS02LjU4NGE2LjU2IDYuNTYgMCAwIDEgNC42NiAxLjkzMSA2LjU1NyA2LjU1NyAwIDAgMSAxLjkyOCA0LjY2Yy0uMDA0IDMuNjM5LTIuOTYxIDYuNTkyLTYuNTkyIDYuNTkyem0zLjYxNS00LjkzNGMtLjE5Ny0uMDk5LTEuMTctLjU3OC0xLjM1My0uNjQ2LS4xODItLjA2NS0uMzE1LS4wOTktLjQ0NS4wOTktLjEzMy4xOTctLjUxMy42NDYtLjYyNy43NzUtLjExNC4xMzMtLjIzMi4xNDgtLjQzLjA1LS4xOTctLjEtLjgzNi0uMzA4LTEuNTkyLS45ODUtLjU5LS41MjUtLjk4NS0xLjE3NS0xLjEwMy0xLjM3Mi0uMTE0LS4xOTgtLjAxMS0uMzA0LjA4OC0uNDAzLjA4Ny0uMDg4LjE5Ny0uMjMyLjI5Ni0uMzQ2LjEtLjExNC4xMzMtLjE5OC4xOTgtLjMzLjA2NS0uMTM0LjAzNC0uMjQ4LS4wMTUtLjM0Ny0uMDUtLjA5OS0uNDQ1LTEuMDc2LS42MTItMS40Ny0uMTYtLjM4OS0uMzIzLS4zMzUtLjQ0NS0uMzQtLjExNC0uMDA3LS4yNDctLjAwNy0uMzgtLjAwN2EuNzI5LjcyOSAwIDAgMC0uNTI5LjI0N2MtLjE4Mi4xOTgtLjY5MS42NzctLjY5MSAxLjY1NCAwIC45NzcuNzEgMS45MTYuODEgMi4wNDkuMDk4LjEzMyAxLjM5NCAyLjEzMiAzLjM4MyAyLjk5Mi40Ny4yMDUuODQuMzI2IDEuMTI5LjQxOC40NzUuMTUyLjkwNC4xMjkgMS4yNDYuMDguMzgtLjA1OCAxLjE3MS0uNDggMS4zMzgtLjk0My4xNjQtLjQ2NC4xNjQtLjg2LjExNC0uOTQzLS4wNDktLjA4NC0uMTgyLS4xMzMtLjM4LS4yMzJ6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgPC9idXR0b24+e1wiICAgXCJ9XHJcbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8YSAgaHJlZj1cImh0dHBzOi8vdC5tZS9GcmFua2xpblBjQ29kZXJcIiAgdGFyZ2V0PVwiX2JsYW5rXCI+ICBcclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXRlbGVncmFtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIGQ9XCJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwek04LjI4NyA1LjkwNmMtLjc3OC4zMjQtMi4zMzQuOTk0LTQuNjY2IDIuMDEtLjM3OC4xNS0uNTc3LjI5OC0uNTk1LjQ0Mi0uMDMuMjQzLjI3NS4zMzkuNjkuNDdsLjE3NS4wNTVjLjQwOC4xMzMuOTU4LjI4OCAxLjI0My4yOTQuMjYuMDA2LjU0OS0uMS44NjgtLjMyIDIuMTc5LTEuNDcxIDMuMzA0LTIuMjE0IDMuMzc0LTIuMjMuMDUtLjAxMi4xMi0uMDI2LjE2Ni4wMTYuMDQ3LjA0MS4wNDIuMTIuMDM3LjE0MS0uMDMuMTI5LTEuMjI3IDEuMjQxLTEuODQ2IDEuODE3LS4xOTMuMTgtLjMzLjMwNy0uMzU4LjMzNmE4LjE1NCA4LjE1NCAwIDAgMS0uMTg4LjE4NmMtLjM4LjM2Ni0uNjY0LjY0LjAxNSAxLjA4OC4zMjcuMjE2LjU4OS4zOTMuODUuNTcxLjI4NC4xOTQuNTY4LjM4Ny45MzYuNjI5LjA5My4wNi4xODMuMTI1LjI3LjE4Ny4zMzEuMjM2LjYzLjQ0OC45OTcuNDE0LjIxNC0uMDIuNDM1LS4yMi41NDctLjgyLjI2NS0xLjQxNy43ODYtNC40ODYuOTA2LTUuNzUxYTEuNDI2IDEuNDI2IDAgMCAwLS4wMTMtLjMxNS4zMzcuMzM3IDAgMCAwLS4xMTQtLjIxNy41MjYuNTI2IDAgMCAwLS4zMS0uMDkzYy0uMy4wMDUtLjc2My4xNjYtMi45ODQgMS4wOXpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj57XCIgICBcIn1cclxuICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8YSAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD0xMDAwMTM5MDg0MzU2MDZcIiAgdGFyZ2V0PVwiX2JsYW5rXCI+ICBcclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWZhY2Vib29rXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkPVwiTTE2IDguMDQ5YzAtNC40NDYtMy41ODItOC4wNS04LTguMDVDMy41OCAwLS4wMDIgMy42MDMtLjAwMiA4LjA1YzAgNC4wMTcgMi45MjYgNy4zNDcgNi43NSA3Ljk1MXYtNS42MjVoLTIuMDNWOC4wNUg2Ljc1VjYuMjc1YzAtMi4wMTcgMS4xOTUtMy4xMzEgMy4wMjItMy4xMzEuODc2IDAgMS43OTEuMTU3IDEuNzkxLjE1N3YxLjk4aC0xLjAwOWMtLjk5MyAwLTEuMzAzLjYyMS0xLjMwMyAxLjI1OHYxLjUxaDIuMjE4bC0uMzU0IDIuMzI2SDkuMjVWMTZjMy44MjQtLjYwNCA2Ljc1LTMuOTM0IDYuNzUtNy45NTF6XCIvPlxyXG4gICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgPC9idXR0b24+e1wiICAgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcblxyXG4gICAgey8qKnNlZ3VuZGEgc2VjY2lvbiAqL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctbGlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoMj5IYWJpbGlkYWRlczwvaDI+XHJcbiAgICAgICAgICAgIHtza2lsbHMubWFwKChza2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxoNT57c2tpbGwuc2tpbGx9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7c2tpbGwucG9yY2VudGFnZX0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoNj57c2tpbGwudGV4dH08L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgxPlNvYnJlIG1pPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57ZXhwZXJpZW5jZS50aXR1bG99PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2V4cGVyaWVuY2UuZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHsvKipwb3J0YWZvbGlvICovfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+UG9ydGFmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJveWVjdG9zLm1hcCgocHJveWVjdG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwLTJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm95ZWN0by5pbWFnZW59YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57cHJveWVjdG8ubm9tYnJlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG8tanVzdGlmaWNhZG9cIj57cHJveWVjdG8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3llY3RvLnJ1dGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj5TYWJlciBtYXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDY1LFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljbyAtIEludGVybWVkaW9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJUeXBlc2NyaXB0XCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogMTUsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiSHRtbCA1XCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogNzAsXHJcbiAgICAgICAgdGV4dDogXCJJbnRlcm1lZGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiQ3NzXCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogMjUsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiUmVhY3QgSnNcIixcclxuICAgICAgICBwb3JjZW50YWdlOiA2NSxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY28gLSBJbnRlcm1lZGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiTmV4dCBKc1wiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDM1LFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljb1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiR29sYW5nICsgR2luICsgUmVzdCBBcGlcIixcclxuICAgICAgICBwb3JjZW50YWdlOiA2NSxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY28gLSBJbnRlcm1lZGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiU3FsIFNlcnZlclwiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDYwLFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljbyAtIEludGVybWVkaW9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJQaHAgLSBMYXJhdmVsICsgUmVzdCBBcGkgKyBQb3N0Z3JlU3FsXCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogNjAsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvIC0gSW50ZXJtZWRpb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiBcIkRqYW5nbyBSZXN0IEZyYW1ld29yayArIFBvc3RncmVTcWxcIixcclxuICAgICAgICBwb3JjZW50YWdlOiAxNSxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY29cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJCb290c3RyYXAgNCAtIDVcIixcclxuICAgICAgICBwb3JjZW50YWdlOiA3MCxcclxuICAgICAgICB0ZXh0OiBcIkludGVybWVkaW9cIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0ICBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgIHRpdHVsbzogXCJBcHJlbmRpemFqZVwiLFxyXG4gICAgICAgZGVzY3JpcGNpb246ICdNZSBndXN0YSByZWFsaXphciBjdXJzb3MgZW4gdWRlbXksIGxpYnJvcyBvIHlvdXR1YmUgY2FkYSBhw7FvIHBhcmEgZXN0YXIgYWwgZMOtYSBjb24gbWlzIGNvbm9jaW1pZW50b3MgeSByZWZvcnphciB0w6ljbmljYXMgZGUgZXNjcml0dXJhIGPDs2RpZ28uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIlVuaXZlcnNpZGFkXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFc3R1ZGlhbnRlIHRpdHVsYWRvIGRlIEluZy4gU2lzdGVtYXMgQ29tcHV0YWNpb25hbGVzLicsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIkRlc2Fycm9sbG8gd2ViXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdDb24gTGFyYXZlbCwgR29sYW5nIC0gR2luIG8gRGphbmdvIFJlc3QgRnJhbWV3b3JrIHB1ZWRvIGRlc2Fycm9sbGFyIHByb3llY3RvcyBTUEEgbG9zIGN1w6FsZXMgcHVlZGVuIHNlciBjb25zdW1pZG9zIGNvbiBSZWFjdCBKcyB1c2FuZG8gY3NzLCBodG1sLCBib290c3RyYXAnLFxyXG4gICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIlRlY25vbG9nw61hXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdNZSBlbmNhbnRhIGxhIHRlY25vbG9nw61hLCBtZSBndXN0YSBlc3RhciBhbCBkw61hIGNvbiBsYXMgdGVjbm9sb2fDrWFzIHF1ZSBzYWxlbiBjYWRhIGHDsW8geSBhcGxpY2FybGFzIGRlIGFsZ3VuYSBmb3JtYS4nLFxyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgIHRpdHVsbzogXCJQcm95ZWN0b3NcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0hlIHJlYWxpemFkbyBwcm95ZWN0b3MgcGVyc29uYWxlcyBsb3MgY3VhbGVzIGVzdMOhbiBlbiBtaSBjdWVudGEgZGUgZ2l0aHViLicsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgIHRpdHVsbzogXCJUcmFiYWpvXCIsXHJcbiAgICAgICAgIGRlc2NyaXBjaW9uOiAnMjAyMCAtIDIwMjAgY29tbyBwcm9ncmFtYWRvciBlbiBsYSBVbml2ZXJzaWRhZCBFc3RhdGFsIGRlIE1pbGFncm8gZW4gRGphbmdvIFB5dGhvbi4nLFxyXG4gICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm95ZWN0b3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiAnUHJveWVjdG8gZW4gR28gKyBSZXN0IEFwaScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFcyAgdW4gcHJveWVjdG8gcGVyc29uYWwgZXNjcml0byBlbiBHb2xhbmcgY29uIGVsIGZyYW1ld29yayBHaW4sIGNvbW8gYmFzZSBkZSBkYXRvcyB1c2EgUG9zdGdyZVNxbCwgc2UgcHVlZGUgY29uc3VtaXIgY29uIFJlYWN0IGpzLicsXHJcbiAgICAgICAgaW1hZ2VuOiAnZ28ucG5nJyxcclxuICAgICAgICBydXRhOiAnL2dvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBub21icmU6ICdQcm95ZWN0byBlbiBMYXJhdmVsICsgUmVzdCBBcGknLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiAnRXMgdW4gcHJveWVjdG8gcGVyc29uYWwgcXVlIHVzYSBsb3MgbWlzbW9zIG1vZGVsb3MgcXVlIGVsIHByb3llY3RvIGVuIEdvLCBjb21vIGJhc2UgZGUgZGF0b3MgdXNhIFBvc3RncmVTcWwsIGFsIGlndWFsIHF1ZSBlbiBHbywgZXN0ZSBzZSBwdWVkZSBjb25zdW1pciBjb24gUmVhY3QgSnMuJyxcclxuICAgICAgICBpbWFnZW46ICdsYXJhdmVsLnBuZycsXHJcbiAgICAgICAgcnV0YTogJy9sYXJhdmVsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBub21icmU6ICdGcm9udCBFbmQgU2lzdGVtYSBMYXJhdmVsJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0VzIHVuYSBwbGFudGlsbGEgcXVlIGRlc2NhcmdlIHBhcmEgY29uc3VtaXIgbGEgYXBpIGhlY2hhIGVuIGxhcmF2ZWwsIGVzdGEgaGVjaG8gZW4gUmVhY3QgSnMgeSByZWFjdHN0cmFwLicsXHJcbiAgICAgICAgaW1hZ2VuOiAnYmxhY2stZGFzaGJvYXJkLXJlYWN0LmdpZicsXHJcbiAgICAgICAgcnV0YTogJy9yZWFjdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiAnQ1YgMScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFcyBsYSBwcmltZXJhIHZlcnNpw7NuIGRlIG1pIENWLCBlc3TDoSBoZWNobyBjb24gUmVhY3QgSnMsIGh0bWw1LCBjc3MzLCBib290c3RyYXAgNS4nLFxyXG4gICAgICAgIGltYWdlbjogJ3BvcnRhMS5wbmcnLFxyXG4gICAgICAgIHJ1dGE6ICcvY3YnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5vbWJyZTogJ01hcGEgY29uIEphdmFzY3JpcHQnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiAnRXMgdW5hIG1pbmkgcHLDoWN0aWNhIGNvbiBqYXZhc2NyaXB0IGVuIGVsIGN1w6FsIHNlIGRpYnVqYSB1biBtYXBhIHkgc2UgbXVlc3RyYW4gZGlzdGludG9zIHB1bnRvcy4nLFxyXG4gICAgICAgIGltYWdlbjogJ21hcGEucG5nJyxcclxuICAgICAgICBydXRhOiAnL21hcGEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5vbWJyZTogJ0NWIDInLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiAnRXMgdW5hIGFjdHVhbGl6YWNpw7NuIGRlIG1pIENWLicsXHJcbiAgICAgICAgaW1hZ2VuOiAncG9ydGEyLnBuZycsXHJcbiAgICAgICAgcnV0YTogJy9jdjInXHJcbiAgICB9LFxyXG4gICBcclxuICBcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGNlcnRpZmljYWRvcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdUeXBlc2NyaXB0JyxcclxuICAgICAgICBkZXNjcmlwY2lvbjogXCJDdXJzbyBkZSBUeXBlc2NyaXB0IGVuIGxhIHBsYXRhZm9ybWEgVWRlbXlcIixcclxuICAgICAgICBjZXJ0aWZpY2FkbzogJ3R5cGVzY3JpcHQucGRmJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUZWFIVnNienZqOXlZaHRPSVdwdHg2WGhLUnVBUjFEeEdjX3cmdXNxcD1DQVUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogXCJKYXZhY3JpcHRcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogXCJDdXJzbyBkZSBKYXZhc2NyaXB0IGVuIGxhIHBsYXRhZm9ybWEgVWRlbXlcIixcclxuICAgICAgICBjZXJ0aWZpY2FkbzogJ2phdmFzY3JpcHQucGRmJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTTkUwSExRMUk4VmcxR04ta0hjWkRWN2JiSnBWVzNUbFphOEEmdXNxcD1DQVUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogXCJHb1wiLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBcIkN1cnNvIGRlIEdvIGVuIGxhIHBsYXRhZm9ybWEgVWRlbXlcIixcclxuICAgICAgICBjZXJ0aWZpY2FkbzogJ2dvLnBkZicsXHJcbiAgICAgICAgaW1hZ2VuVVJMOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTc0FBQUNwQ0FNQUFBQkVkZXZoQUFBQlUxQk1WRVgvLy85cTErVC8vdjhBQUFCcDJPUnExK2IvLy8xcTJPSnIxdWFpNCt0ajBkdGoxdUhlOS9uNy8vOWgwOTdrK1BqMjBxTm0xdWhnMU9MMi8vL3E1K2RyM09sdTMrbncvZjJXM09MNitQajEwNkdWa1pFa1ZWeHYzdTV1ejlscHc5SjAxK096cjY1Um1hUHo4ZkZBUUVEZTN0N0c3TzdTOC9XbW9xSzA1dXg0MU56Y3ZwWkxUMCtGMTl5OTdPNlozK00wY1hqU3o4L0F2YjJibHBWdGFXbDNjM05PVkZZa1MxQkJnNGxmcTdWbXpOdzZSMHFhbVpYTXpzZUlob1VzVjFvdk5Uc3piSEZRU1VzY0xDdEtrSjVqdU1RMVJVcE9hbTlKVzJWTm9xZGNYbUphcDdNL05UUXBYMlY1ZW5kQ1ZsZ1hNemswT1RreldGY09GUlVlTVRnVUlTZ1dVbFE1ZW40VlEwc3BLQ29BTURvYkJ3Qmt2Y0l6U0U1dndOR2RpV3hTU0QrNXBZcDdZMG5PcjQyemxuVmlYMUdSZldYQ3BYOHpNaW5jdzZGSGpvOGxHUVpUUUNwZlVFQ3NtSFQvMzdacVgwM21zK0d4QUFBVkxrbEVRVlI0bk8xZC8wUGl4clpQY0NZSkNRRUpKc0V2Q1FGWGtDZ2dLQXJhWXQyVjdxdldyWHU3dmQyK3VzOXR1M2U3OW5YWC92OC92WmtFRURMNUJodDFuK1p6YjlHVmZKbjU1Snd6NTV3NU02R29HREZpeElnUkkwYU1HREZpeElnUkkwYU1HREZpeElnUkkwYU1HREZpeEhpQVlCYWFyZTNsSFl4MmIzbTcxVnBZdk84bWZZbFliVzYzZC9mT09xVnVZWDlmMzBmb2QwdWRyWldEbmErK2pnbTdBZFBzN1I1Mityb2hXNkJwRmdDYWh1aFhUVFAwZm1mdnBMaDYzMjM4TXRCc3YrbjBGVTJETU10eGtBWTBoSWdxU0NPMkVHZ0FaRmt2N2UwMEVhZjMzZFI3eHZvM1d3VkxsaEFBeTdJMlF4RFM0MEIwRlk2ZXJ0MTNXKzhQV0VxS3owcUdqRlFPazRRL1dERGtDZ3NYUk5LRmxSTFFMQXMxZmFXZHdPY3R0SXF0TmVwUlNSbkRVR3RQampXWnBUbEVFWUJaMmlMS2txT0I4ckZBTXk2NnA5MitiaGt4cGZ2TkdsVThPQ3AxUzF2ZnJ0OTMrKzhDelJlN3ovL3JaSG1Cb3BaWGRBVkFxTWw2b1ZCQWRoMXp4WTI0Z2xBMnZqczhXUzYyaXNzbmg2Y2FJbFRtOXI1SGNxZ2dxNitWbmp4NGM3K3d1ZFZuWmMzb25yM1lLY2tjK3JWNzlzUE9pK1dkazVWalEwR1dDUXk0QWtBNy9YWjk2QzBzYnI4dXlBQUM1ZWhZczZTUDFTNStXWHpZV3RnOFI2S0UxSW5WakdkOUpGVGE2Y3Yxb1h5MFRqcWFaZHd4VndES1p6MzhWOFlDOHIrZWRoVmt2NVNqamliTGtFTzBYV3plWTBkdUgydm5sdlhHcHVoVkFVQ1dPL3dLL1RVeC9McDFidGdESVBxVTkxclczNFpjVWRUVEM2eVh5c3BwLzBKQkI3QktwM1UvdmJnYnZOUVJQOGphc055YnZreEQ4ODNhRFZFWXE5OGFRMXQxUkJDeGVBNVo5STN4Ykc3dVVPTUE0TGlITEZqRmtneWgwaTkxMmEwU1VqZGxqL0NZMWxZMHkxcHAzWjdMNmNjeWxpZDlibTZ1cE5Fc3JhMDhZUFAreEVCbXFJUzZPdmRjNFdqdHJ5SjV5SEtYeFdxb25idlo3UU1aODRpdjhDOWt1NERjYWQ1NmsrOExpNGNLQ3d4TTFZOEc5akpmVWd6QnlPb0tzdmcwM1Y5R3J1WmEweUUzdlFzY0FOSGFxN2tPaW9pQVhIcTRCbXR0Q3lrZTFxQzVVMFNJZklyZHlkYTZRdy9iKzRnT0RVdk1DVHB3VXZKYUpVdXdZUGVWd1dLdUhyQmNyUjBoZDFQK2FXN3VXL1FUeWxzTDFPSVR4TWZ5eEVIcmZXelQvcDJnbGpHcGN4Tk1MdnhzeFkyczlnWXBNMkwwOWNOTjFsZzZDQW8velhXeGp5V3ZJQ0d5K0ppUWp0WXhVaS9saUtKK3NiNmJNUEdyMlBJanlKMVRSQ2pzNzl4dCsrOFFDV3BYUno0VmEvd2tZeDlMKzI5cTBhSmo3c1g0VVdzV1Y4OHBDbi9UYXJmSHYxczlzODZrNmNLaERJRnh2bkMzSGJoVHJQMWJneXpvZHJCUWpMaHE5azRtanJHNFdsbWtOdEYzQzE5TmhNak5qcDI3b2JVOVE5RmZmMzIzcmI5VGlOVDJsZ2JrNXdYc1V0THkyU0tGemRWYWI0S1A0aW5tNnJoRk5TMlptN0JJNjkxQlBrdnVkTDk3aWZ6WXV3Z0lHY1p5bDFWVlRWVXFsUlQ2aWROQkRKVklCSjA1aVVGakdldGM3SUtMQVNkOHRWZFF6aldjMEtQbDQ2Yk54eThUTjIzdnN4d0hkQ1JyelNkek8yTmFKb3JVZ1RIZ0N2Wi94UVJQMmRwWm9XYktlWlBqK0RUUDh6ckhjYlZxQmZFMUpWY1cxMlVFVEhjdXhBbklaOXJaKzFtR21DdWdJMXZVUEhuWm14Q2R4VU1VQUhHY2RvWUh3SWx2Uk95M0Q3bmlMTDI5WGE2dzg4ZFFhcm5HQ3hMMmo5RzRaR1ZCSUMxSWVyNGlCa3RHd3I2SW1DbFg4M3Fha3l3SUVzZWIrWG9tS0ZtSnhYbTlDeTJ1YUdYUEpVUkJmanZPSmNQOWw4UlhDNi9sVVdaWjJic1RkMEdzMUhnTzNYU1loSVQyYjNnNlFPTHJZcGpVckZwcDhHbEJRSDRobmt3WTVzUlpJVzNXMVNDMnFCMTljRmNXS1ZyQzRibC9qYndDVGI2NE1MVCtpZVBNaFZmNlRmNWR3VzZvR1BSY1B4TnFWZWZvWWU1LzdBTm50MkdXRmN5eTNTTnZpSlU4THdrNDBRUXhWMk16Q0pBRHduNGpFNkFicjdUQjRVTDJHRVV5aklneCtHN3QzSkFMUjlpSXZlcjJOeWRjZ3VLZW5kb2F6RlYwYnoySHJGWjVpZmFIVk10UURCbW5XVUIvVnFzbVVsNE8rbHdnNzh2VzZvbzhPbFR1OU96bk1yaGhjUS9KMDl3QUpYMmxOL1RhRjRzSHgvTFlQWUJjZU9GNWgyaFFNUVVhQkhCRkMzelpVNjdFYWxyQzRhc1BWZmdDZFIvbFdQdjVwdE1vSmp5NENYOWJ1OGNLTFo4UHVmcEpsdnRIUDdTWHYxcnU3UjZXRE1jdHRRTTBFTjJTYlVlWHplWFQ5SmdjZXdHd1VvUHNxNlVtRlZNQ1dQWDgrUWEwVUZNOTlSakh2eU91Z0d3Y3Yya1hXODNXZXZ2TnNTNnpOMkkxTi9jL01wUVZ2ZC90NjZ3Q1dYdHU5WWFyODl2aENZTmh5and5S0p5ZjlveTZJTlZVb3FjSlNxM1orb3ZOc2ovbExPUXJYbHh0ZDhlVmlRYWFwbmRMcGIvNis0cENad3ZmWHI0ZFV2WGI3MXVHOVdUUW83RW5XY2U1a3M5V2I4ZTJZeWV4S2dHWXpYSlp6dGt4TndpbXlrdzZ4UXlWNGdmeXhLR20rMGtXbnRjRDZicEhXM3I2NUxGQW9mRjhLWWNDUmJEL2NtUCsrdkxEajNPL3ZMMjhXbHI2NDQzQllkdUkyQ0s1UWdQaHJYQ0ZCcHVHRkdCbHhvQWJaNGdUQnA1QmxvcjFaY2g1RGFucWJ1QjM5ajJ2SW05dExDRmN6Nk1mOHhnYmJ6emxGK2Y1Ym9jcnRRYTQ4RnhodjBuSWp5c1J3eVFsUEdVZUdzaWJSR1M1b2UwOXVuQ2JpSjhsekpOTjFmelN1NUxzY2F6Y2RVbEFSOEJVUWpVRm5NV2VnaXRBajNWVlRGQjVhVUlEd25ERlNtZzhKWi84aWFkMEF2by8xeFpEUzRpckFXTmJYbHlCQzVmSmk4K25pc21aV2NoTzAxZkxWOTFQamE1QTFTeFptNFlzQkU2cXVOajNUVzlOTnY0MWJ4RzA4Y2U3ald0THdyemxDdWkzNDJCaEJRUkVuVTRRVjZBbURxbktDeHlZaUdkQ1VjV3hPam1jSXE2OGI5djlmZjU2NC9KamU3TzMvUFE5TWxvYmI3eEhJbk1uOHRBWm0zVmhtaTdlUUtyajFxRC9WMmU4QUMwMFNBL2VSNjZ5Y3Zmd2wxNXJrY0twbU9hei8zdzhjM3FnWXpDK2o1Z3BuRGFvQzJBcVUzTURIUXNXUTVVRk1OdjVOTTJuaUx6RnJqZFh5RXhxbS9pT1R4WVF4VDhZS0lyMjRZcE1SSGd4RUJvcDNyMXRxTWxBUUVCQnM5Y0FaNXYzREE5Y2h3VThZWTdjQ0V3anNPd2hDUTZZUkZOM2ZMZ0NySEtDZzg3TlZjVFZwdUViWlNqUFErdWdtZ3BBeG01a3pnUWVaa2FTOUh5MVhrL21kY0ZEeHdRVzU3Tk1UMVBIU1hxdGtVdzJhcnprRVpIRGROblo4TGJIczdNQWxBUHNxbXl1b2dGMHg4aENuK2hWK1NHc3RGVDRJT1J0MnZPQUpUcUtzM3RwdlpvWlpESnptYVRoWU1zcWJRVVFSZEVVY3F4Y3VFS3hCMi9XTStyd3dUVncvb0lrRk5LbXMrVTd1aTlYaDZ1VUpWZm9RTU4zT0FvZEVHWk1HbWVPY0h5SG93QnVsRWF5eTFMUi93eDdDS3FrU1RrR0xDZng1UW5keUZWNWNOTUZpSVZmRXZoYVhVVVB4VTFuZ01Bbk14TlhVSk5wMWlXbVpvV01RMVhhdWw4c3FaeHVVOVRDSEU0K0hCaStZWUo3eFFNSjBVeW4rZlFZSnY2QklLRXhUTVNaWHQwdHpBVlNVcVVTaWJHK0pxaVVPZlk5a0hneldWR3hCdFlFUURZWlNvM01jSDVqaElyaHBqRkMzc0hWdHA5YzBheXlzcjUrWHRnck5rK3dhK1VuVjY5RFVVV0pRY1lxbGJLejRsV0I1QW9LZklXNElvUENJRXVlZ0lUc1dLT1NvZXlKaXJwRXhNa3NMZWdWeXNVbFYydUNpeFlhb29PclV5LzNrc1pQQ1JxbnA0ajBVcWVnMEw1Y3lYdmh1QW9IaGxKWm1oeExvSmtocFJkblBJMHNMYVgxZkQxMTgyZlZoQ1JYa3FreXJobVhuRW1UNEZPVEJ4VTlYWEc3ZFlnRkd0ZHVPeE5XSkZmVFRBNEdoZGtNaGJ4UVFxNmttbXFwSjNFd2t6RnIxWlE2K0plTk9uTFlKN2xDLzZqbDNKUE1DU2JEazMwU0hDRjA4OWlmS3d4Y3d6Mm9zZlhtNm5DMmlWUVAxbFMzNTJ5cWxFdlowemhCTjhqeGtNaFZRVlAxYmdoU1dlS0crY2xEbWovN2NoVWFzM0xsMVhLWHA4S25wc2hTbDlQRUZRQ2ZZYnd2SU5iSU85WW1IK1JDWkZ6NTlUd1pHdXFnNFZuaURrTGQ2ZTFhMU5uOEpjWmg5NXh3Y2NnTGpJTXBrMjZ0bnBzUWdOVTlKU1FiTGdQd0JGZWVFeWhNWFlKQ09FaTg3V1NtSkZLdWF1SVV3VGtLajRoTWpDa2lzZkthRTZNU0x1WmRjZ3dsaDJIbEN2aVNKWjk1UHJBVVRuSmtFU0RNRG5Eem13T1dTOE80cEFkQWV0eGJ3R05meGdkcTBqR3pqRHVld3M2WUoxY2lsU1NjTE1uaG9aeHJkRGdFY2VYMTFKbEdqVURlQlEwVW55V3RVZHBLMEUwQ2d0cUVFRkFONUxSaXg5WHJ3M2tCVmpDRHlrUEtrdE5IRVJ3aDRjdXdPdWdQWEpJVUFERkVRdDUrNmlwUEJHaXdQdEhWaWtRUGZBcVdIZnptK0hBQW9INEhjSlZKTzArVEptWjBFaWpPaTRhcm8rbXJQOXpVd1JxcHlvTFRPd0YwN21hdU5vRWlKVHpDQTN2Tmg4ZUhnMnRkRFJwRlJaN2d5dUZnN2VqRWRXZmpLc0tGQUZVeVEyZU9WVmdscUlwQUI4OUNUeUx2ZTBjTGhEaEtqcG5DWHVFekdMckIxRng1MlZpTUJ1SDFTZzBVN3c2NUVrVVRjS0VtVnNjdVFHU2pTSkJ5NWVCcXVSK0pneVVmVFZkWmkvcnRNbndOREpwQlpETlJxOGU0clFSVnpKQ1FNb0ZORW9rd1o0SmdFVmVqUmNQVjJiUmMxWEZWSFRmSVlPRlBibi9Rb1p4T2NEWGhNWWkxS1dhUmh4ZFFBNzJ6REU4TUtBNnVpcWZUMzlnRjh0bVVTOFZ6ZXBhejgzMmpzZzRvMkY2N3loTmM0WkIvcUlOTUtqMTlrODFjWUF4V2xweDZMVGtTRGMxVG54bUg4SkNQcHVTcU1lYXRTMUN5Zm1adHVVcWxpYVR1Zm1ZVXplQlRwelhzTkcyNEpDZ2NTQXJPd0lvZm55UmNLNjYzL1pNeVlTSC85ZmJ0VG5HS0tNUXFBclpRdDFHdFZnZUZZbTVjcFliMVhjaGo5NXNpOElJUkpGZDQydFY1WGZPRzRQVzN2Ny83NC9KWWprSUpsZU9yK2ZsUEh5S3BhbkRoU2hxYmRaOXBmcFQzU2NmWVVNazg4cWlJWk9ISmIzZ08vcytPUEwxRWs1Q1BQK0hDaC9kUlROVzdjQ1dNYkRzanppSldkRHJqNTZSZ1ZJa0VscEFjY01WOHVKb2ZjQldGWE1tbGQxWjl5UHNJMWhCbVhMaEtqbnlHM0w3MW5kMW9Pd1VKZ3V1cnNxa0FxbktHWXk0SDNneSt5Ny9aVlZWL2xpTGhDdlF2cmN0ZDczNCtWeWdjSk9MQjBXUWRJeHJTRUlOeS9qQitxZFFJdUdsZGNuQUZ3R2c4MkxtNjNKaGZXcnErUEkySXEvZTRwdVpERkVvb0dnUlhnQnY2a2d5Vkk2ZCt6TUFhWlZiM04xaXFRVHU0WWtGdE9FdS84T01scnFwNi8yczNHaDBzL1ByK0dvblZreWhTeVRVeUhnUkpuNmlvS2dVVll5T0Q1Ui9rTk1nc0RsOGVWVFMwcjY3UndOVmNqb1lyb1BkYTMxLytjZG1MWUE4ZXBrcjRvc2hmVlQyNVN2RjBJRmNBN09kODZrNnFaTlRFbWpkTG1oYWVmSHhTeFBGZ2NJMTlLSzZlVW1LelY0eGt1NkpxbHVnNVJBYkhyYXZXN0dDWURnQnZpOFZnWTBWWVNNRjVQRVAxQ3Y2SjlOQ3dqWG9rQ3dKU0VzbVZWNmFBVVd2UTZXKzdpUmlnZVU4dExQTXU4M25ZSXh0MXhrNCs3MFRFbFh4aTExWkZ3QldUMHdsWmg1RGxLdVRsR1Z6bTcrd0FFQXlEZFpsenR5YjR5UVdoWWpVTlhMaHFVSXp6d2U4WTBYQ2xIVEJSY1lWRE16Zi9XQ283RjdMZ3dnOUlkQk55NVNRUnIyRG9aV3B5blFBMmdabThhNGJIemRIL1JvdkVYbUd1b2lzWXJidG1Fa0E2bVp2a0tsZVZPSmFzN1RQRWxIdDRMU1dkUzFCemRTTERaeDlaZFRHOHI1Vkl1R0xsNTVFeGhTdVAzTzhpNEJXUjFGQjQxYm9wdWN3dXNWSUYxd1M2bkk0T05xcTJHUnEvQXVIMWN5dzBYZGIxSmc3bGFMZ0NNMHhPZU1NclBtWUZ2bEV1VnpLWlNybmU0Q1c3azVOZFpXRVNxV3JkUFhVS0FPU1Q5WW9xaXFLYUtpZDVLMlZGY01XeXpoSVpTMTN4ZmhUUnlOVktsTnN6WkhUWHFsbThlRW9TQkQ3TkMya0JESXM3SEZ5WmFvSmhWUGVhYVlnT2xvUTBiNWptdmlRQnU5eVU0QW9pZjhGbGdnN1hNMFRpWDAyYlJBNUFRd0F6cGorUVNPQlJ4a093UWtHcXVYcXR6YTB2a3F1RU9zM0tySWwrRGlvODNDMVdPTGd0bXNCY2RmeXFpOE1EVGp1UkU0UzY2NmdmQ0REd3RobXE0bEo5RnVvS0xPOHg1NFBYcFViQkZhZHRSYnlkekF5VE5haWpOWHY4c2lwT1o5TkNvSk0xcWZZVjE3OVVyaElxUDBQRFJwVjdxR3V6YVNGd0tkOGRZUDAwR3E1ZzVIS0ZsR2pxQ1NaRTFaaXZxczVTZm9DbzhvcHB0eStpaVp5aEZyRzlzc2lhcmcyNDluYWluNm1wVFJZd1U5N2gvN1llVFEwazFLTDFHU3lVdzFzY3ZJVnpqZkMxVTlOSkZzdjVWZDg2MW9iUERpNWkvNHF5c2hibDBJSUJyT2tMWXFqUG1PSHBCa0s2Z2NzazNWT0M2TnB0MzNVVDRRSGw1MUZ2djRNOTU0cTFHMUdJSmdLODVZZEw1aFNuYkVKMlFUREtkaHJHSzMwYUZWZEErZUZXdHYxUWExa0lndVpwV0JadjErR1JZMjZrcFRCK0xlRHpha0Ntc3UyOTU4QlVZSTJEMjZBS29jb0hlcVdTV2JZeWwrNFh3RnZSQkVLcXBiQlErWEsxSEUycEdrMGJFVXdNdWdEMVgyMmtCWmIxV0hhSlJFWXdjUjJFVHkvRktpZGxhUy9od3RWOFVxMFM0c1VHMjFIWmR1NFdkOHhNMVhqZ3NVVURTSnYxZ0Mza2tOM0xWVDFYc0hJd3plWlQvbldHR09qNzdXNFVGVVY0TG5YWi8xNnpnMkVTWXFaaERXaEQwUUQyZjRBM0dpbVJFbDMyblJnL0h5OTRFc3MxZldEbGgrVzMrQUpRMHZHeVRJb1JnN2hDV0krbXBJaFdTcmV5OGNjTnhGVFMwS1dzSU9DbDhZTEFjYnhScTJaRWF3ZklFS01LT2tRdDF3d2VyME93cEVNU0pJazNHMlY3VzhRUVRBV3U4d29OZWV0Mk4wTzJTd3N5NVhxamtjOG5rOVY2Q211ZTVTV0UzWGdMWDBHdFZKUDVtbW5XR3NsNkpaTmpMQ2Noa2ZCY1RUR0JOYzl0VDZhRGNuakx1eHN5RkdsOUUxTythV1pJaVpYekhOSVQzdFZaUFl1SXE3RDdNM3d4R0hDVThGbWpNdzU4MEhra2EweEFvUjE4dXk4VFUzQzFhMHk5Qk1FRkQzbWYreHYwK3A5Zkp3UGROM0o5Y0dnZXd5bVhhN2l5OVpEZllUTEM0dXZQTjFpczh0MmplSjhYZFRKOXFwYms2aUcvN21VTUFUczBoTUwrdzMxOXdnUVc5K1JaOTlNYVFydGxwLzNMUWUvaU03a0MrcU93N0JnTG9iY2Q4S0JLT1hvc1lvVUU2L09XRUlLTGs4ZnpBdERGWndZN2N5RWtDN1R6MWNmREZkVThVMllOZElEMXVyM2Iybzc4UzhUeVgvS3NOVHpLWHoxS2ZFeGNVZTJTTXMzK3lpT3BZdVhTLzlzRXc4eVliWGtxVUVyL3UzM2ZUYjliTUJTejgvZVc1cllib2g4Z3JXeTl2LzdrZk1QSmd3WkROVDlzTEwwNzE2ZE1PTWo2K1ovelMwdS9QU3F5aWgrdlVaK3YvajQyWkpwOCs3d1hVNkR6Y2NQYXN2eFQ3NjVlVDNYUFlCaXErUHUxdFVmNzlidVhKVTBHWHRPV0kyRHhrN25TTTh3dzNxcDg2WisxeCtKZ3JYMjhYckwzdEorLy9uM3VlRjhKc3ZJc0srOTNEb3JVK2orWXFLVS9selllU1pxQm9sNXN6Ri8rWVhGMTlYZTcyZHBjT1RXMFVXSGtlRUVQNVBEN0wyWEYrRzd2cEdXOS9ld2ZUUExicTZXMzk5Mkh1OEx1MHRVSGEwbjlwNmRXeG01aC9lbEs1NEtWTWZCTU50N0xEYi9vQmNpeXB1bjl6dDVKY2RHYUt4S3A5ZmZvdkt1UDEyOGZpUXBTTDY0K1hsbjZkL1BLaU5WbWIvZk5VYWZVTCtnNnl4c0lldUdpVy9yNTdHQm51Mm12ZkxPNG90cWYwSmtmTDIrdGx1Rkx3OW9IYkhmbVA5NFVKTmlqMmtLenVOMStjYks1dWJ1N3VkdHU5OVpiYTROTThXajFHME8xa1dUOWM5c3Y4L3FDc1Bwa1kvN1Q5K0hITWl4U282VTlyUk5rdTBLVkF6d01MTDQ0S1U3eC9rQXlVbjVFWE1XSUVTTkdqQmd4WXNTSUVTTkdqQmd4WXNTSUVTTkdqQmd4WXNTSUVjTVYvd2QvYmhQOGZvdDNYZ0FBQUFCSlJVNUVya0pnZ2c9PSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIkRqYW5nbyAtIFB5dGhvblwiLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBcIkN1cnNvIGRlIFB5dGhvbiBlbiBsYSBwbGF0YWZvcm1hIFVkZW15XCIsXHJcbiAgICAgICAgY2VydGlmaWNhZG86ICdweXRob24ucGRmJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVZJQUFBQ1ZDQU1BQUFBOWtZSmxBQUFBejFCTVZFWC8vLy9SMGRIbTV1YjgvUHh3QUFDR096c0FBQUNYWGw3Mjl2YloyZG56OC9QMDlQU2ljWEY1R1JuNStmbVBUMDkxQUFDU1ZGUXBLU21yZ1lIWnljbmR6OCt6ajQ4Z0lDQVpHUm12aDRmQnM3UHQ3ZTJMUjBmZzRPRFJ2THNyS3lzU0VoS3VycTZIaDRjZEhSMU9UazZ3c0xEQ3dzSmFXbG8wTkRTNXVibWFtcHFLUWtMbjNOeG9hR2c3T3pzT0RnNlFrSkI1ZVhtRU1qSjNEdysrbTV1RGc0TmdZR0JCUVVIRnA2aVltSmh1Ym01OUhoNkFLeXZWdnI3dzV1YXBlSGpDbzZPZ2FXbVdaV1dmZUhpNHBxWkd6Um0wQUFBWjFFbEVRVlI0bk8yZDZXS2l5QmFBa1VJRVZFUmNJSTJLQnVOdWpFdWlpVnQ3Wjk3L21XNnQ3S0E5azFFN25mTWpVU2dLK0RoVlo2a3E1TGh2dVMreGVGNjk5VFY4TWZsNEhtVFEvK0ZyNXRhWDhsVmthc3dRUzFrMEI5YXRyK1dMeU5Sb0k2UVowZEQ1VzEvTEZ4R0tGSXltdzF0ZnlsY1JpdlJiUGtGVStXbllCQzVTSlMrNU80WlBReDZRTDRvQy9RR3JCemY0RGh3KzlTd3BuMmRIV01QaEV5di9KMHV2SzVybXJOOThKVWd0VVh4VzBQYk1YSisxMjIyeDM4UEZSSEVFSG1kdHN6MzdvRkNmbmtVbWEvUmRmaFBicGlsMmU3ZTVqL3VSbnFqcmJSR3krdEF4VWtYVXV4anBpMmlLOW1DbVUrVVY5YmUzMlV5Y09iYXp4a281RWczN2NUUTFiSDA5N2NEdlQ2Smh3UDJHUGh2ZDdtN3VRZFNCYm5SN0tqK3lkVHVJMU9xT21xcks5M1hqQTMwVmJkMllaaVIrNU5nbXNsK1dyUTlrK0gva0dPOW9mM09nbTNOWmJiNFl1dk5uNittd3JUOGpNbHl2SFVMS2tiOFpYVGZRZjRqMERXLzRNSXc1TG0rOG9xLzhRTytpN3ZQVk1hWjQvN3VoZDY5NkMvY21yd1lodzNHRFVNT253ai9ySXZvdjJpWlJ2cUdqOStHL0o5UEJEZHpxNmdNVXlFTHlHZmVBUDlteGxmcTYrVVErem8wd1Vpc3pISFpHQTVzaUhUVHgxcDZCa1E2cGxsb0QvUmtpbFExOVFFSENLdjlrenhZaW5jbms0Mk1JYWViTk1XZWlPTk1wVW4xTmtGR2tlWjMycGFhRCtnR0lkRTNybkJ2c0tmMlJncEJTNVFvaEhScUcwNTAvamx3dERTSGxubWI2TTdUNE9vbGZ2NUV5Z1VqYjFENEhrVnByM1hoQmFOMitOSXlVNjlpR0tMYnRLZTRQSU5KbjJsOU05VDhhS1pnYURuVWord0h6bERIc0dkN2NUTkpTOEdiT2U4TWU2V0E1MWRCdDBvTW9YWDMyUjBlMkk0ZnFuQ0lHbktpZXFRL3c5bzZaZ1BSeDF2V25yTjhNNTRYdXQ5dFh1dmo3bE9iTXhnMjhDY09nZ0paU3p4OENURUE2Tit3bkdRbkpybVlNYU9oaFdKVVo2TTc3YmU3bFh1VFJ0STN1eDl2QUREWjh0UXU5b3ZuajFPbXVFL3BTK04vUm9kanJWd3oxeGRSUlJicnU5UC93QVJmd1lUcUcwM1k2UFZGRWhvcFovSXh0R21aN051QkhJa0hhcG41blQ1emg2SWp2RzQ0SkJXcG5Id2Y5NzRicE9IRFR4L2VnUU9ieGJmb3VjMHFuZzVpNWZpay9tcjdOT3hKbmRWQlNoT3QwbnZLNGVMUFRRWjU4WjlidWpwNDZuYzRITkdURXdsdWorZHZiK3g5dG1tSWxISkFtaUd3NmovUWpDMDIvSlVHc3k1QytteVpUeDB6N0cybXFkRXo5N1FMekF1TlFHc2lyTUZyNmJ1eEpBdWFqVjlzMlh5NG9LcHU2UGNyd2ZLYlRkZG9mLy9tVi9iWUM5TFpqbVBaRkZuczRNOXRvakdUV25qMmVMLzNueXJ6YjdiOWM2QVB4TDlNdUxEN3YvTW5KMFF0RVVhVHpoWmdBNVplS2V5Si9qNkordG1TK2tYNjJmQ1A5ZFBsRyt1bnlqZlRUNVJ2cHA4czMwaytYaFBqMVVOMGNTNHVsSUFqYWN0RTRyVnJWdzNXdjYxUGttSTJYY1NOM09xNSt0R3FXWmZFOEwvTXBZdTBTS29uSzRnYytJaE90by9tak10NXAycTZVSzFTZ0hFK2xiRkZiWGw3ekJaSzdEdExDTmhjcjVkSTR1MXRxMi9HcFhsT2diNTdxMFF0Wjk3RDQycGlVdENvK0lLS2w2aVpYTEphT3JjbEJvU2tiSUIwbXJkVXh2YjdMemtwbDEvZ1ArTVZJb1ppd0F5aUhTVzIveXUyS3dxSXlrVk56VThJRFBVWTZFNXRPQklvMDFKZnVHOExpb1JiYXFLcldoYUd1ZkZHcDh0V1Fnak9adk1tbUxBaU5WbG9Sb1lMK3Fubk9hbkpLV25XMVdLVEtTU2h1SW9kSkVzZno2aVh4THJnZ3RRaVVLeUxsOG1lem80ZlZRaHRQa3ZkanBCQUJRcHJLTkJacGRiZDhpQjZEcXVONTlKek95Z1ZJVmVXYVdncXYvbnpHT1ZQZkZWZUpleEZTckU4SWFkb2ppa082TDJhcjBaS0lLRUxLWGFDbjU1SGlCM05OcEJjd2xjR2tyRldTaWtHazVNNHgwaFNtTVVnaDBSaFBDUlBGU0M5Z2VoWXBVZldySWozZjlxSEZCMGVoa0xBWElpWDNUWkFtVnhkRk90bnRZdEt6ZERkR2VyN3RuME1LeUZEYWRaR2VaWXFkcURveFExRVIvcUlNbUlsT0NvNGlGbC9ON29KOU5IS2NUcmxjNFdHenIrVXRRbHM5TjdwNHh1TFRrMTBaS1dwcDBLMGVqOGVOUnFsY2htNSt2VldiZUdRd1VxaW4rOWhLWE5US0QzZ3drb1lyWTFlUXA2K0ZrTlkxdnl0eFdJMkxncmFEWlJkYlRTdnV4a2NTUHFuU1lYemVrNit6YXFxTDJQM2JhL3VsRXRDUXd3NXhsRXFsQnI2blhmbWhScldYdVBwS2RoR3JNRDZreTNFSkNheWxUQ1hvbE5kd09ZYjBJSnk4eHdaV2kyWHBvWHFBN3I1eU9CeXFxMk5wcHkxeVB3K3d5TTlpbWp1UDl5MDlwRnA4NGFSKzY1UEZjL1dCZ0s4SmNFQlY4OGpQYjFWZ1NGZ21la21qcDcwUVkvWWxQMUt0QlE5WFZjQjhxZGd1QUdTb3lWa0pOYSthazFDcUF1VGh1NXY0NnY2NDBKYW5EWmR0cEJrcDNQQUZENm12VnY4RlhHbGVrUzk2WWpHUVR5YXJyWEJDYlk4RnBJMUZ4RHhMSWFUdTlzVHUyYkl5cE5NRmk3Sjd4eUJIenU5M2Eza0VvVm9wQ3N0aWpPZnFDakZQc1VnRDNmQ1ZoaDM5U0N0K2xWS3RQUG9LNnNLaTVpSGRhNXRRQmNqZGlVV2F5RlN4WUl3dklWbzF3YXZ0UWNNTklHQW5pY1hud0w2Z0hVQ3lqWXBEcXNoeVQ1WXpBY1c4QWRJSDRHdGRscUx3RnZxKzMwSE5aRWlsYkRsNFBIWWc0NUVtTWJWVTJKY0NkSDhyd2RYNTJ2WkVEMUVsOXpqZWhYQndYYUVZU2RCU21RUEIzdUlXU0ttSGpRWGVPTlJVOUpUM3hiS1hpVHJ1QWkyZkhKQ0FOSUdwSWlHa3FPYkMwdDE0M0U3SUFieGw4Ulo5SXdnZmdKRG9ueVloQmFFRGJvTFV4OVRDZDVWSGwxRVg5azIyZmEvNW8wZGFQQWxwdkx2TE55RlNCRTFwbE55Tnl4TXBEcmREMm9Bd0RTSk5aSnFFTkd6UmJvUFVZMHFRY2lvS3MzYzU5L0ltL2xDZkZVNUVHc1BVNHBzS244SElEcnNqMjFyVGZtTEx4T08yd2RIYkR5Rk44dm5qa2FxUm1PcEdTRjFNRkNuc1U1RkQzbU5vRHVNVHAxSXpSb29xYVVqRGJWL2lKVDdQL05LRDkzajJNS3lDK0hFUGk1RXFTQ1BEU0JQNjAxaWtxaFNKcVc2RmxERzFYQnVCV251ZGZWTnpXWTVYL0FYbFZLUUJwcWh2VnZDa2RZSVVxU2FSalZCVG1ZTGlQN2l2alNDTlp4cUhWSldpWWVyTmtGSlVMbEpvOWcvYVg2NS9kZHBTcEV5ZHp5RDFNVVZXQnp0UERPbnlKOXZWRXBDWFQvYW1JWTN0VDJPUUlzdDBSMGdKTEJjcHVrUHRmeTdTNDVKRFRkY2pkUTRwSzZud0VtcjQrSE5NdzkremM5R0dqeGNHeGtDSTBkTW8wcXJFM1JkU3pGVGltVVdDVjdMTnVkWVRJclV5MEltV21XVE9JYVhWSVJRcXZTdUsxRE5QRTQwQVNUZFBXS0pNWTVDaWYzZUZGS2Q5QWJzQ2hMVHNSd3ExMUJlSW45VlMxRm90QzRkaTdGVXlCS25uUkVud29lRk5xQVJDYW5rcDZJaEVtQ2E2K2lHNUtWSXk4dU5kU1RIbklvVHVPYS80UW9KTGtGclVvTG52OUtPWktIWnlhT3NmbGlRdUI3eVZ0eFRhUXVLUmNtRVhQb1FVdE80U0tUUVVyT0dEWUY5NlduQlNZSjV1dWhPRnFvSmFUWWFTM09kQ2tkWkpRSW95SlpNdG03amduVGtKYWRnL0RTSlYxZnZVVXVLUFlvR0d3bWZ4bFVZNUdtZW1JVlZ4T2drUElYdktSWkZXY2RwRXdWOVdiaVhBelhVa0lRMjEvUUJTMkdmZEwxS3FLN0IzMjJ0L3U2Nyt0aDRkK0U5R0NrZ255aUcwUGd3VXFZcHlKWG55R1J6WitkWHpTSU5NL1VoUmM3aGJwQ29abWtRM2VDeG1HTWE5MW9wbWxST1JLbDViVjNoZmI4R3krZy9heEZWNXFTQWNEK3lNUkpLUkJwajZrT0lPNW42Umt1RmVxS1JLOGVSbG9yWXhVeVNTa25zK3hZUU9xYyttTWFRVHpUZEFDQ3BDRmgxOUVWSS9VdzhwT2NVZEk4VWRvSXFzU0pWbG9pTDVVbkprSEZMQSsvSy8yQ0gxbUxyRGVibWliMHlEMisrRVhNMDNvSkdHMU1mVVJVcFBjTTlJT2FVSi8xYVhYcjUwRStzaytaR3lNZFI4SUtFZUd2Wmhkd3NPdnFFU0tPcXFLT1NxTHF0VXBCNVRocFJsbk84WEtaQXNDejczMnNMTDZrdUxjVnplSWpCQ1NnZEdTMlNzbFVxakZCRDNhems4TCtoUTJTM0xlMllaMHlFd3BoU3BlL24zaWxUaExhU29vTFhZVlZrNlYvMFpHWG9pUjNwSXgzanNuZzNpUjRFMm9uOURBNFNIK2tJcmJiQmFuMEhLbVA0ZTBST1RTVVhib2V2RFNOWEp0aEU3OU9FaUpSTjRySkFtS3hFZkFkOXQ0bno5eWMrZHNIMDRuRWRLbVdLazB1K0FWS3B0U29KUU9TQ0tDS2xrbGJUNEdaRUJwRmI0bmJCQnd0aUVJUE1VQlUwRldmejlTUkJPTmV2c3lEdG1pcEJLOTRtMFVOdTNXcHZONXVkcVZUL214cnVsa0gyWWtCUWxSQ29wdVZqYnhBV1FTbjczRTRzUzRvS1lRcVNKUktrVE5hbHNsK2tUaGJFZ3BoQXA5Rzd2RXFrZ2FGQ1d5K0oydTF1TXk0VlZqZWdYeXBCTDZpRzNUSnBoNmlHVkk5WXJIOUUwRlkyUVNzbkxkSmhmQ2p2VjVhbVdXSXdLWkFveUtERjJqMGhiMVdvTnl3VEt3Zkxkc3lUSnlxU1JTSlFoQlZhekdkNFZOM3RmVWpOcFU2VTlWNzlXMkM2UDU5YnBBRVhGc2QxTmtmSVpWK1QvYldYM2N5WlJaUGxocWEyU0NzaGFRV2Jsa3VzSUhIRmhzV2J2ZjhLeWZyWTBMcUQ5eGNyOXJmMk4vdldTRC9oUFowY2xyaWdKeUg2c2xWTzBCV2twN2tRalMwQVNyajExUFg0d0V6VXBhYmwwUlZXbHUzV2lra1N0NW9URno3UnBzeEFwaVQ2Vkg2RzVqNEd2bnV2ZkNMbitycHlxYWppNUIrckZiRnFQS3Fsa0l1RHZneFJzY3RxdVhnWGhWTHBmaEw5bzN3aWpwNngvdG00akpBbkJsQ2NMTGJleHdnSHBmcmROWmdvZENHang4NzhUVW5WWHJPT0FOSG5LdkJwTW13QXFVSE9CKzlsWG1rdVpDWDVZYllWRm5UVjA1dXBQdG9sTWtVc0drY0lIL3ZzZzVWcG9saUp5OVJPWVNyd2FuOXp6dS9qUUYwRENQSHprNmlldEZHbVZCYTFDUWdvM2VwcG8wWG10NU9Ub0FlSG9TYmxIcE1Vc1dvMWJLdWRPcDlQeGVLU0JrZ0pPMndrTlNHUDZVNXpDaTBVYWNQR2hvc3BZV1ltSGo1TjdTVXpCdnJBc1l0L0pDMGlyeFZ5Y1JTUDU2enVPOGNlbkhNb2V3VDR3dTRCZU5yNkh2TXJWaWllV05va005NUpwaTNGSUl3NHB2a01hTTVGOGFRSlQ2THpYQ3NYZFN2SEgrSFVoSm1GRFJ3VHVPQk9GSGpOUXBUeGFmSEI0RUJBY1BQT3VJdFJvY2kvVTl2TTBiUitEVkkxY1A3cERGb1d5c2FmWXJnUzcrcld5MXFqNmZMSjhZeGRSVXpiR3dyU1VUWCs3STZTQnRFa2VyUjRoQ0E3YkVsdXY0SWVndW1uN0tGSVEvVDBkMlpjcFlWbjlXS1kwZXRwc2hZcXZWV3dpYXVxT1dya05ueGEvVjZUY1hqc3lTNzBSSHR5MVgyNHEzYWRDVWFReHYxQWtjeDRnYnlsWkRGTTN4ajhKUjIrcmxDMEZpM2xUVjcyK2xKemhicEZ5UjgzMVhIeHI2Q2hUeS85cmtCR2tjVDhWS2ZzeUpkNkN4NWorMUkzeFFVWHpYVkpkQ0JoOTMyUmduM25DN2VCK2tVNjI3cmhRZGVtTlpDTEY4bzk5Y2xHazRSdzBGdjhkK3BibFJwbDYwWk9WVzNyTEFmZEMwaklBSDFLQW1ONHRVb1ZiZWQzWHlUZVNDUlErRkxxSGtNWm1qdk1KU0NOdFgrR2JMQXRteWRteFN6enZlVW1oeWRWK0p3b3h2VmVrNkhFdjNPVWoxVjNXM1dQeDRRNHdpRFNjY3laN2tyUTB4QlRxdjJveHc4ZGJMZDlnMTdZQTJBQmVjQWxBTUFXdDNDdFMzQ25WbG16WlpYUEZKb0dqQ1NUaDZZZ0JwR29NVVhSQUlsSS9VN3phd21KeEFzOHJZODhvTmNvU2lGMmNEcEhDcnNaVll1aytrVkozNThqNk10a3FiNUhHMHBsTklhWUJwTEZFUVJwU0gxUGtLWkFwdTZnRWRQVUxXeGRmYnF5QTJGY29oSkJ5ZHprWmtqbVFoOFdZZkpKQkRiL2dnRFZxa0dpZS9vNmVBeE5OUStveTlTYVdTM1JpK1dycCtocW5CVVFLVktEazhjcGZWNENVUWNzSDdqSWdkWkY2UTIwYnVyUVpSazhWUEpHRXVVZUIyUFRNbEYxU05BMHBxdzZESk1zZjBQMURwQnZQa3p0Q3BKbG1VMjVHcE1kbmxQdWVXTzRidkFRNURWc29sTnhiWkMzZmRITy9ucVlpWlFWVGtWS21ucGFxZEVYSnhsdTFmTUlOUDI0Y01OVHdvWmJtd1YwaERRd0hUelNjUGtFeC9uNkpnaG5GRFo4OHBpNVNQb3JVTFphT2xERDFscEpaOUEwOHZvWmZLa0h6Rkxjc05keVg0cFhPNEk2UWhnYll5YXN5Y05xa3NFUU55bzAxUGFZTXFSVkZDdHpxemlBbFRGR1FnSkNxYkVYSjBUTlBPL2h3clpnREVWSVZoUHRTNVg2UWhxY3NxSXV4UlpFZUZndmdhL3JlTWdTS1ZMR2lEZCtyN2h4U3doVGFHUmc5cWVTNUJad29BSzh2L3EwMjhmblN1MW53R0owRXN0ZU9iSnBaaXhUeEpuYlNUd1JwM29yMHBmNE85eXhTcXFjODMyVFJHWFQxdlFDdUttelUrTkgvaEJUMG5TekxqWnRXZzlvN3paY1c4Tkp4eXcwU2dTOWZpbkxPSWFRQlZ5dUM5TEFLejdBaXZwUTNVb1VDVXJlS2xUQ0pmUkFwaThkRDVXK0NOSGFpMG1FM1praXRMWnE2NkV1R0VtZ0lLZDRZUkJwMFhxTklGNHRDTFpnMENRMGJXTG1sVzUxYXlpWU4vaWNPbElSdTV4WkkxZmlML2lsczJNVHlGbFpJWDhvZVkwTWJNZVlBVWo5Um5peVJES1NnRDluRlRpdXZBaW03QUZQMTZFdnUxYlRFK1VQSlkwOUJwcmQ0WFV4Q0dkRFl1dXZ4ajJUOHhJczZBVmxLUmtJQTM4Unlqa3Q1RFJIVjBzcGh0Uk9FeHNyM0lncmZjNmlXL0Nub2doQS9Sc3FsRHVjRm1ONDZFK1dYaWVZdXkxWEdTM1JyZ1hRbFJFcTdWK1hIOHJnaXN2bTVvZElpUXY0VExnd3AvRnRialFWQktLMnFFeGFVa2xPMnhnSWEwV1BTMGhLdkxuV0UxTS8wMmtpQmxJeVVlL0RTdjdYaUlqQjNITTBoS1JZb1llVkhjYnRFVWx4cUVVR1RMZjN2M0NOSUljUEQ1dGhZYXR0czZWUlo0ZW10bGRONEoyVHJCMjhzaHMvR3ZUK1NYWHJhb0xPUDZaV1J3Z2FYZ2pUdnU2T2Y1TlZ2SmZjTmNPVnlnOTJOSlI4bVJHcVRPR25GSVVXaVRQYjFVeU83MnhiUjg5aU55NVdxZjJLNTVMTlRVVWtmeC9lWVhoY3BDbkpTa0VJTGRReHY4bmVuN2hzbTJQelNoTWsrdFNTa1JPRHpJQk5jUXl0S3BHUGF0WjJiR3VFeXZTNVNiTGRUTHJ0NTBpS3prcGdyQlIxU1psUW8wc1MzWkoxQjZncDlJaFNwVW9nK1VMK2NtMjNDbUY0VEtmVXVVNURLazhVNEVyb1FwdGlqb2hBSjB1UkpmcGNpcGRVUnBMV3lsa3IwL0FRZXl2U0tTRmtNbElaVTNmaEgwNGpnRjJSUnY1L1VnWkdtVEp1OEZDbXREcjhMZXJQYkpyK0ZtaFErT3llSzlFelhROHFTUmFsSUpTNjNqTHdGR3pGbE9Xa01BU0ZOZWQ5Z0dPazQrdXAzdDJxY1E3RzRhazRieDd4OU8xajIvRFF6Zkl2WFE4b1FuRUY2Mk1iNE1YelRtL09oWUtScFJJTkkxZFZXMkZiMlNSRUIxSFYrVlJLMDFkbDNmMTh5Y3c4eHZTZFhuNldnNDFZNSt3UmdTNVZXSXZ3dTZQMXBLV2lOMVg0U2ZRNkg2cXFzYWRsVjJoTmk1dzBoclpHWGJTTHhqb1pNcjRiVW5UNi9QSU9VVzJuQnptOVNDRThjYjBTbWtvZDJSMzZqUkdsVnNKdmZPQjFYRzdKTXFOcjYrWEJxTEpiQ3VQRGpvcDh3cDBnWGJPTDZPT3FkY09qdEZGZEMrdUN1T1M2WDYxYmlqK1hJVGZUM3FOVzlUZFZqY1ZmK1ZTbTF3citrWTFseTllL0txWlJkYkpjb3dFTHIyWXE3YlBsVWI5V2FhYi9mNDc4NjlLZmhMYTF1dE9KS1JSZGwzVlRvbE4yY213NmFISmRhSWVVM050SWw1a1g0Nk8zVFZTcTFtSTRnUlM3NWpaTDdFNW92QlRuaGlMckJTVUhRanY4WTZHZi9LdGx2alpRRFIyMWNxeFdXUXVWZkFQMUdpc1I3WXkzMHZMZmJmNk9oU0w2UkJsNENmQ2o4VzZEZlNKR2svOURiTDh2bkxvdjlSdnJwOG8zMDB3WGNsOE41b2R3MTB0OVQvamxTWmRqcDlLNzBneXRSa1h1OUs0V2h2eXovR09uSWJKdm1iUEJMMGRBbnlxc29kbTUwNm5QeVQ1RU9aN2FoRDhUWHo3MmF5K1hSTUw4YTBqZkQrT0JqM2lKekxmbDZTTUZBTnk3N0tkdi9TTDRnMHBsdDM5UThmRDJrdmJadGQ0WkQ2SW8zaHozQUtaMlBLWGJMNWVIamRQbzRKRVlMN2xLNUROd3dRZ290djM5TUgzdmVpVWVvSUI0ZzdBMkhwQVBKRElla0FNOCs5RjQrUHVZOWFnTnhmZlJVTGxKMHpLZEd3ZjlhL3RIVjlOYU9iZHZtVEp4RHl5OE9yTXpBTk5xUWdkTFZUU2lPdWNaOE82SWhQenFtWTVqR2lCc1o4SVBqek1rSnBUbjhDb3MrbzRJakVWVUV4V20zRGZ5SUgwWHhIZjVyOWgwazVucklrZnBzSHAxcU52U1FEcDJaK1Z2R1dDSHBQSzkxMjE2djF5L3dzMmtQYmNjWm9LNFZkR2ZQL2ZrSDdHZHRSTzdKMU45bWRyOXY2N285Ti9WdWYyM1lWTGY2ampHWXpydUc3c0RETW9hK1JodmxtYTRibU05YTErRi8vdGt3QnYzK3M2RWJXR2ZScVFid1ZJNm5wVU5kZDNvSlYvbGJpYXBZc0MrVjgramQ1L0ErYmZPdDE4UTl5TENET2xoNXJjL1FmVDZadHRPSFRWcUcvQTNFQ0dxeDNrVVZkR1o2RncxanZ6dkdWT1U0VzdkUnkrK1kzYlU1Z2g4VVVlL0N4djdoNkYxSTNIbzE5SGFlODA2RlhzdEFrR2JzTDBJVUNoQnRtL1IvOEQ2TmVXanZpK0VnTWhBcHNXRWp4eVo2bG9INmlsWStyblhhV3J1NkE2djVNQnpZbHNHYitUSjNFUEpoRzFVSm44U01SR2R2T2xaSi82a3dVcWpXZDJ1a2ZsbFVIMUo5SGU2UVJ3NUZTblNTNjhHb0FBK0pXZ05kdDNBTDc1TmozbzAyaERrMEVTckxNSitlVEZGQnZORFdFZXczU0gyb0J3SDRWTTlzWkJVV3lmQ3doM242cisvMGF1Skg2bE5TSUhkZTUyOXZhNTBpTlVoMDFhT2RKVU02Tk8zMUhFc2ZsMndPZEJ2cDVvem4yeENtMnRXUmRzOE41NFZVMjJ6cnoxTHdWRkJMaHpEY2VMblMvVjVCQWtqZCsycE8yKzFaMjRTdG15Rjl4TnNoMGo3KzRDSFYyMWlnK1VaSDkzV1I1MTZkWjlqYk9xOGMzemFtQUNFMWlhWG5lRnNmRUtTUDdGU1BodDQxYk8vNzd5K3hTQlZrb1VlOVh2UFJTRWVLZW9RWEt0aFZmWEhNb1lSb2NuTm5yUTVOZlBnWnBMWnU2cmI1UlJzK1Evb0NTZUV1MHUxTGs3UzByVThEMVdWbXhrdlROSHZvR0pGL05HWW9ObmcxR0VIWTk2NmpXdnFjeVlqWTJmb2FFb3QwYWpqRS9yNmUwVkorcGc4QzRheTFOdDVHam9ubXM4MmMwZFFZb0NjelpOWU5QaUxqZ3dzalJiWWV1bGZkcjVKRFQwWEtlK1lwSGltQVZ1bWQxWVQvem8zMWg0RUJkbzFwMThGV2lIL1cyMWdIb1R2YmZ1SWlTT0VtdFd0RVBMamZWZUlidnFPdmtXZmZOYytZSnk0ajJzWUxpdHliblZlVjFLSS9ZeStmZTNjR0E5cUh2cmYxd1pQQ1pmclFCNk9uQ21rcDh2Vm53Ly84YnE4aXNVaWJocTYzQjdZNGV6bUhsSHVmR1k0NGVEWm5zejc1TVQxWUgra1dlekErb0I0KytJQ3V2Q2kyRFlNa0VtT1F3ampNdm0yVzhkTkVGY1VaUVRvU1JmYytlNE1aR2p6cGNYMFJZZTZ3ZEVoUEZFbXZhRUZDQkZldjMwWVpGdkY1UkthdnIwV1JSQU5BRk1WblZ1SG9HVmJZTmo5SXh3dnJjMGNSM0lFUytPSDVYa2VoZmsxNG5xNDd5Zk8rRjZBcHZVNG5vNkFYSktGdEV0c0ZQMUM5Y3cvalZQNnAwM2x5cDk1YXZMdXduUGU5QUV6SndFTHM5UWVTNzFRS1QzODZRZVg1eUk4b2ZNdTNmQW41UDNac2l0UVN2V2ptQUFBQUFFbEZUa1N1UW1DQydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIlJlYWN0IEpzXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFwiQ3Vyc28gZGUgUmVhY3QgSnMgZW4gbGEgcGxhdGFmb3JtYSBVZGVteVwiLFxyXG4gICAgICAgIGNlcnRpZmljYWRvOiAncmVhY3QucGRmJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVZNQUFBQ1ZDQU1BQUFEU1UrbGJBQUFCT0ZCTVZFWC8vLzlUd2Q0QUFBQk12OTFEdmR4SnZ0MUF2Tng5ZlgzMSsvMkJ6K1hENS9MQ3dzTDUvZjd1K1B1ejRlL2g4L2hreHVHNzVQQ1cxdW1laW5mVDdmV1ZnM2VtM094N3plUjdpNS9ONi9TUTFPaHl5dVBvOXZxYjJPcXMzdTNTN2ZYQTBOWnhpcEd5cVplUW5LcjY5ZWIvL3ZoQ1FrSVJBQUNYbDVmKzkrKzB3TS9Qd3JnWUFBQmtaR1IwY25Pc3NyUGU0dVBIdzcxeWJHY21KUmtLRGhKZFkycUdrWnMwUWtyUTIrRGc3Zm5sM2RRMUtCNG9NamtlRHdCTk5SeW5wcWNjSXlVa0l5RHQ0OWJRME5FNEt4a1RLVGNBQUJCRE9TMkZkbW1acXJkWVJ6YkJzcVFpUFZJNEpBSmNib0JmVWtWK1psUlBUa2FtbElRK1RWdHlWVGRtZUl1dnVzaEpVRk9hbXBrc00wQnNXVVUwVDJZQUZDOFpMa0JZUXkxOWIyVXJEUUJJSndDQWg0bFFZMjRkTjFFcEZRQUFBQjlOTmhXMHIyOVpBQUFPNWtsRVFWUjRuTzFkQzNlY3hoVmVkZ2JFSW1CaFEzYTdzS3hTdDNKV1ZTVFpqdTA0YmhMSFZ1dzgzRFpKa3pweEhrMnJ0T24vL3dkbDVzNFRHSkFzMmNjUzg1MlRHTUVBeThlZCs1bzd3MmhrWVdGaDhXS1lyaWRGVWt6S1lIWHFVN0w1SkVFWUplWE9TL3hkbHhkWjRTRUF4czc4TkxSbXVZc1JjaXBVNXpqTGwvNExMeDFLajdMRGdIRFJ4MUdhWVBVTXg4dGZ5ZSs4UkpoZ3B3YWNkTEdhT3MwVEpxL3MxMTRLeklFaDJ2V2xyQ1pUUS9OTU1vcVE2N0pUOFBxVi91YlhIRk9QZGZoeVBjOFR6RWxDWGg2MnRBNkZVRmVxdDVpbjZYb0JhZ0NmM3JoZGZTU0VFcFF3U3FLMDRNb1Z0WmllSlJLVVQ1YU04eFhzV0x6QzMveWFJOE9VVW1YUEt1ZXM0cnJweVRHWDBUS1NlME93VXlabE1UeE1DSDlZNXlQaXJDSkg3ZEZSNGpKR2MxOXJEKy9GMm42R2tOTFJzTnJUaEJrdUhJaDltY3VkZ29aRUZyVHRTLzZwbHdaTHdoM09tZ2RpanpFNFp6dFNqeW5TRmd0dnZNb2dNYU9kdk8xSXhFU1Z1WjRsVU9vbWJmWTlwSFp1M25Ka2lDQlczNlFKNTB3eWlRRmoxcWxodFJnVzVLQzEvQUFpWUc1c09MZ0RyaWRLL0FYb1VpODF0SndqcTFBNUlxb0lqWW1seUFGU0diZkk2QzRGNURwZVc1QXdQRXh4VHdoVXVDS21SMDVrYk5aN25RRmhoM0xoZDdTUXNXalNJWWFSTmZ3QzRBUjFOaWxaVU5WcGdhaWJpMjBhbFNEbzV6Um5JVlhSMllwR1kwRm5rNkdnbjlOUzlQMU9VcW4vWURrbDZPMzdzVXcvdTExNVo4dXBBSEJxTmo3MHVNT1MxYmdqVUxKOVh5RHJ0dnRUa05JRXNsY2RwRmtiSmRIdFY0Yk1QRldjRjBDcXllbjNyUzhsME8xWEpzcW9DRVJVamtGTndMdXhXV21DME8zbzBqbU5vVHpvMFpIYlpmejdZNGNCZ1JMVlB1YVpVbVdLZVlJbDh6cnNWT3IyK3JuREFjblF0K2Y2WUR6VmxjZldsR092TmVGQ2c2Mms3Y2dBUVhMU3FKVU1oNWw4Q1REK3FLMkhrMFBORVppQnd0aHAyd2hNakNyVnNYbCtpY3hnc0FOdzl0UFZOTXV5bmVWTzlmL3BhZ2Y4Z0tiNkJWZkt1dnlBa0doTlYwdmZyN0lnNXNrb2hEWEFUbHpHUWFibFVrMXZacUJJcEpIeXM3UmNKTmpEb3NESEFGSlM2Ym5Pb2t3ejBBMHhzbVpmQVUzbEplSE9ldUwwY3RuZzFxMUVkN0xPd29uUjBnMFNBZlhsTVVabm8xTVhXanNVclNMTGpWd1NLYXo2dU9kaDVWL1hOVGJQclQ2dHNNd1JybEZLU2tyWlpod3NLMXNmUmI0ZmhxSHZSOUZxT3QwSjBvUWxWdHk2WkZmWG1nMDhpekl0YTRSV2ZkaE5Kdk1nb0hzOUV6MnNYalVPNXBQRXhUcXo2SlN6QWE0bTZoWDVDQlY4enNrQ2VyTHgxRGtSWkdhUnBrRlo2UEtLdk1VZzA2amh1dDduMFV3Y1pONSt4K20wOTJOWnZCTFhsQUIyVElVdFZ4Y3hFb2FtNnU4VEduSEtNalNJbGJwa0RYcS96T3hCR0x2QThqMWh4MVFFZERXeGxITWNNTXFYSVlUOG9zcVpGdnIxcEVOeXJRMFU5YzFHWVRDUkRpNU9oak1UTFZxSXNXV3ZnQUE5SW1MSHZjc1YxbVd3SFpvVlc4cWFxMUJSMDk1a0lDbnFsRCt5Njg1RnhGNG95VTlhOFl6NzlHR2dUZ0pZYUlIcE5NY2lWekNJcEFvdmZuTFJXaGxZaW1tK2ozWitHSHZ1anpLQmVxbzBhVTVLc1hFanYrU3NEbUI2bjgvZDlkb0FpTUlLNkVMTk5ZM1NQRW1TU2F3bG9waVRTalloQTZ1ZDR1ZXNjTjB0cm5qNXBNK0dQcHVLYnNFSm9sVW4ya3luS1BlSVcxK0ZWOTVFOWVaekVlTFgzQWJBcW1CekxKSXJyVlJEcHVWUTAwMEtlRW9aYkUra0hwRytKMUxWck8reXBsUFZ3cW5YQkJjQTZhUFhlNGRiS2paSE55N3VBWnVRZHpzRWViaDU2OTN4K1BhZDdkSCs0ZDJMdUFGVVBiVDNSaG9aRlN4Q1VsVGpXcCtzaTB2bEVHMmJnOERpbG1wZlAya1p2ZjdqdUk3MzdwM3ZzYTRkSEJpdm9OenQvZXJQKzMvbWYzM3c0WGg4QVIwSTZ2TU1jeHlvVTRvemNQY2w2VUY5L3JNcXFVejFvcnEya0lCNUZlcUxhT0YwUEg3clhNLzFVY2NGZEU3djY3ZjkwN2x1U3pCdFBsL2pLQWl5SEczeUcxUEsxVEtnUUo1amlycmdQYXFUSm5jZlBQaVFQTkRIMXlzOFpFOW5MbW52eDZPdWw3SjdmUHdKdWNIajQyTi90UHRPdGZYazZQajR3YWYwcnI4N3gxMEIxUGx4WjZiRGlWU2JjbWRMYWxXVnlOWnpkTUFWOUlIV044Z0QvUjYyUDZOUDkva0xQaFBCRnoyQy9xYWc3eWxYQWFQUlB0bjh5em51U3JHaWxzVHNkNHBlcnZUdXNDbW1tZ0hiNGNkZDg5eDl5cnMrdTFmbGRQUlg4c2ZmWHZDaEtpUDBaWi95a0p4K0pqbWwwbjJ1N2tFd2I1bXBxMEhJbk56VjBLYVVQMFdqRm56NnROa0pwVW9GYVJwSDQvUXJsZFA3VzEvZnZuMzlSTG9DMVk2SHR6KytjNlNjZlgvcit1M2JEOW11djRQdU9OeHNOaWNHaGlTbnY1Q3RiNWhsdW44QkNwV1c4SFFWajgrQkg2emtrMlp0b3lwcWRpVmpQcWhSbzR6QTlkWDdSMU5PUWJPQnpCRXdOMGZ1ZU1JdHU5eEZoZk5ieGVRWTVFVnl5bC9BTnFYMWpjY241M1E0dWtyTkFMeWpLN3NXclp5cS9DemdQWFJsOW1tVXBTVmpWVTdwRTQvcHcrMjlJL241QjkyaEdtbVF3a2Zxcm1kbjVGU2UvTjJEQy9HS2FibDlaMDRUQWlNMWVWSzBVS3JuQXBhTjlSUWFhQmEzVTA3Zk82a2M4WU8zRmJIOGlHNkdJRTV2VlR1dXFUdG9QNldXZS96NGFCdjhUSC8wZEhPTGJHeDlYM1grM3I0UE4yWjRmdFRlL0N5Z0l0WTVXSXlhVXRndnAvMHJvUmprVkFGWWZXcVZxV0w5b2RyNGNRUjk5YWNSazljL2lETi81cnVvZUYvamI4QUVoVlBlK3dHUDMrOWk0elJvcXJVYVVqYnZXZkUweXo1OXlxcjlPeGVZTU9oVElTOTNtWHo5ay94MXNsMkIycExxTmUxOUFyUUpUbmZmRmhKN0RlVDBqSnlPN3YraTN2dThwSzRoVURJMzRDa3I1ZkY3N2Y2QzdldklZSnZzL3EvSElEVGM5bXJLazhuZ0tCemQyTjRjWE9lY1BocHpKaXVxSG41SGRhS0IwLzNySHpDblYrSDB4bmIxWG03ZUV2ZjQwY3pHcWJEcTBYeVo4RStsb0xiNnAwcGtQeFVqQm1hbDB1R2YvaURKYThhc2hPdmR6YnZpYjhJcDlkUi8wNi9menVtK2ZGMkNVL0xXNExjZmJ5NUlVSHNHbUNlOG42dTh0emhUYXRlWE5zdzFYWGJtT28xWHlUa0ZpOE1lYksvNWtDdzhmL0tkeHVsWTk0WGJPZjFXQ3FlVTAzOHB3Y1ZUclpPOEtGaThiNUNvU0luZDVZQkgyS3pqd2ZVd3FuUGUxTHdSNzQ4VVh3cEkrNGwyWmlENG1kcU91cTUzYjBoOUNuMy9MWFlZM0tGMlR2OU5UNldibi9HemFiOFFVZkMxaStCMFZMb2RwSzdCMXdJTzVlNWx2ZmVyNjB3a01wZGxVQ3FRUXFrbkdhUi9DaW9WNG00YVVQME1MZmFKd0ZLcEpJSWw3ZjQ3c25sMUxuMEI3ZHo4d005bGIrYVp1QnNuZGY4aStyNlk3TlE2eWd5TWdZK3FSdTlwTFgrcXZKR0FEUW1VVFkzSkFDTzBEYjVwYjZSZVBVMkFWUGFLYklMUVByL0hqUE05NlZ3OUZVSkhDUngvUTlwOHlhaThKdGpiVm00QlhWdjRXcUJIUVhYY29mSzkrNFY4ZytjQkd6cEJMUXZ2VUF0VldYUkk3cWtlK2xLcFNFVnE0TXJTcHl0UUd5MktPbU8zY3pTbllPOWtDOVRrQ1FuUTk4RHBmNzc1dk9aaS9iUmlKTi9ac0R6eXlXSEk0Z0tPWHlWUnp6ZGJILzVIdmMxSDdPU3Z4MUk0SDdIejNqdlpIQXJPejRzVld3TzJPZElNdVhxZnVhUmEvTzducEx3RWtjTEpYQTFWZUpxZnI5ZFZUNlBNdUlUcjhVMHQ4NzdQdGttSC9rb2VlaDZOYWdTT3FYSGErMFQreWV5TmFLV2w3dmIrcTV6SXZGTndieVUwNWYzQ1dMRkJ2c1pDWmg2MzZHRkxZQlFHczBWUjVLa21iNzRzclJDRFdRcFN4TjNkbXV0YTQ1UkxKeFd5cC93SVZaNkNsMmNRRDREQmY1TTFlY0laMmZ0VTU1aGhWM2ozdndudS9qZitMZVRuajcrNXFJR3dVQ3k0cDQyQkJyS1FCQlJvOTVJU0JCTkY4emJ5emdHdkhzS05NWlhkYlFGZ0c3YVA0ZWpOcllPREV4bUpIOTA2MktKcTh1Ymh3U0hidmZlZ2FuUDNXTG5remMzQndXRXpLN0ozVkRVOC9GNXBlYng5anpqOVc2M056NEdaeDNYalJNcnFRakgzU1pkdkpBRHpKTmtwSmRjY0FMR0tMeHJLT3JOeUFWUE15cVgwUXBLc3QxS1NJRkdYUUtDdUwwdDZyZVpJUkdTdHE5QmRTWVM1Q0NreEtvbXdCdHA4ODBuRFREVVI2eHFDVGdlcS92TFRRcFFEdEZqQ3E0eXArdVJPT1oxb2t1bTN4VDQ2SU9yeWhCak9ZWUc2UWxaS0lqeTc0a1U5RFN3VDZjdERYMVZTUjNGdm9wbW1UWlV6VmpKS1paZk16enQrZGhteFU5VEsrWXY1a3ZOQWxhVnJ6ald4SENEOEVXWnhubWhYd3RxNnlJUENhdWFxZ1NkQzJQT0tXYnl6Q3FlUUdURDFmc2lzdUVHVXBmUEczRDlSS0R4VUJBdXN4L09JVGpOajI4bDBGZm02Vmd6OWFEcWQ4SUpMWEo4aGhYQXk0Sms4SEg2Nk1NL0x3OWpUYUNPTWU3ZytTVTNCM0U3a0E4QjgweGVkYkFwY3czelQvdWhyS0lCay9yd2dNM0hQUEkrWHp0OHRac0hjempWWElSYVVqcGJyUENGcklMaTkzTUpIa1RBaU15bXBBclhMUzZrSWxjQ1NJQ0tMVE9TRkl5Sll0d0lpTTN0ZEZ6UGRXM0ZaeHNGVS9aS0U2L1RWWkF3SXBsVTNvRUlhcllNMGplTjRYZjJYQnNzbFVOcFN3VXVsdlR1Z0hRNk02L1pBMFo0ZVRvSHViZVNmUjVEVnRndE5NQmpYbC9LQlAzWDRLakF2MmhYYmRkQWt6T3VnWmZYUmF3anIzZGJ5OWFWZHIwOEN0R2JySVJpZEY0VXBvZE9pRFRoVzF2QUxkSzRyeWNyMnB0cGY3ZmtSdTZhc1JQZjZwNDZ5dmx5cFMyMGQvUVd1ZzBIM09yMFJYL3FZZituSXZLSjBZdFloUTBQUFdyQkxtS3Bic0VHOWptL3VFZGZMcmpCRjBiZVdQSXc4SVZZeTNlR0EwdHBkdzR5MmdhSDNtd2N6SmNQYXV2SXBBK1hVQmxJRVFhK3ZMcXY2TzEwbHk2bEFQNmVpZExmYlV5cHMzK2M0eFRka1ZxejNkMzhaTHJFMmlxUHYyeHlrR3BESnFkdTV1RWxIUERZMGdIL2FNWGFjU1J2VitlMXlta0FkOXBBcFI5LzN5ZmhIVFZrNXNOSHcweldxN0xjNUtNTHVtSko1VW5nT2hldm1qeHd1KytSOVNPaEswTE1WVFJ3dkhvVnNUcHJwWTV4UVlQM3lmdWFsQXF3RTBYb29ZTU5QSGxXVHJCREFzS0FLZlRYMm13ZUFRRnNBVVVFbzFreGpXcExWV0NLbnBmR0tUYkt3SUdpc0RNY2dLL0tGa3VSZjVmYWFyV0hkSDF2WHcxQzBaWm96WGt5cCtVOFpLemREcUtaVm8vNTUvSU5DMEp3VklRc3BzVTZlWDNDcUV5MVFoZmRpdlZNQkVMMEpqNlg4V0JUODRxVGhITTB4citwejF1SWdTN084c2wvOCtvTjlHdExOZzJ5WmxvbkhDLzNhSy9KWGduSGtKZk1neTRJU05LOW5CNk1VOElKU1Y2c29OUzZ6Rzh2WkFQUUxNK3hzNjBocFVCWTBFekpZbUpPbFlkbXNRYlVHcW9hd3dEVkdKOTBqOWRHczlyVVpiR3RQRzRqNWV2MWs3ZGhrM1IrM2gzR2xlSG50bnp1c3VWQ25SakJ4WEZKUm1xZW45ZHhYS1QwRm8wVTZ0TGxRWjRCL2RtNzh5UEpwWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRXgrai9KUitreFZveElud0FBQUFCSlJVNUVya0pnZ2c9PSdcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0FwcmVuZGl6YWplJyxcclxuICAgICAgICBjb250ZW5pZG86ICdBcHJlbmRlciBzb2JyZSBudWV2YXMgdGVjbm9sb2fDrWFzIGhhY2llbmRvIGN1cnNvcyBlbiBsYXMgcGxhdGFmb3JtYXMgZGUgVWRlbXksIFBsYXR6eSBvIFlvdXR1YmUuJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdodHRwczovL3d3dy51ZGVteS5jb20vc3RhdGljeC91ZGVteS9pbWFnZXMvdjYvZGVmYXVsdC1tZXRhLWltYWdlLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnVGllbXBvIGxpYnJlJyxcclxuICAgICAgICBjb250ZW5pZG86ICdMZWVyLCBlc3R1ZGlhciBtYXRlbcOhdGljYXMsIHJlYWxpemFyIGVqZXJjaWNpbyBmw61zaWNvLCB2aWRlb2p1ZWdvcywgZXNjdWNoYXIgbcO6c2ljYS4nLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JVVkZSZ1ZGUllWR0JnYUdCVVlHQm9ZR0JnWUdCZ1lHQmdaR1JnWUdCZ2NJUzRsSEI0cklSZ1lKamdtS3k4eE5UVTFHaVE3UURzMFB5NDBOVEVCREF3TUVBOFFHaEVTSERRaElTRTBORFEwTVRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUXhORFEwUC8vQUFCRUlBS29CS0FNQklnQUNFUUVERVFIL3hBQWNBQUFCQlFFQkFRQUFBQUFBQUFBQUFBQUVBUUlEQlFZQUJ3ai94QUErRUFBQ0FRSURCUVlEQndJRENRQUFBQUFCQWdBREVRUWhNUVVTUVZGaEJoTWljWUdSTXFHeEJ4UkNZbkxSOEZMQk00TGhGUllqUTVLaTB2SHkvOFFBRndFQkFRRUJBQUFBQUFBQUFBQUFBQUFBQUFFQ0EvL0VBQndSQVFFQkFBSURBUUFBQUFBQUFBQUFBQUFCRVFJU0lVRlJNZi9hQUF3REFRQUNFUU1SQUQ4QTBhcEpMUnhFUzA1dHVBamdzY3FTVlVsd1JCWThMSkFrWGRsd1FsWndXVGhKMjdHSnFEZG5ic24zWWhTVERVTzVGM0k4aU5KakZSbEkzZGptTVp2Umhwd2tna0plTU5XQVNESEdEbzRrNGFCeGpHRVV0STJlUWptakNrVU5GdkNtN3NVTEZNNVZKZ0trY1pJbEtjd2xrWjFGdVFlc1JKYWwrY0dxTHpNZFZEczBqZHh6aVZDc0hkaHlsd2M3eG5lUmpNT1VnYW9PVW1OQ3U4RVVWMWdQZVRpNGpBY2NTbldNT0tYcjdRRm5FWnZDTVpXQXh5am43UkpYc3dpU1llRzczWklpU1ZVanJTcHBvV0xFSmlxSURsRVVMRlZaS0VtaEdGbmJzbTNaRzdpRU4zWXh5QkVkeWRKRjNmTXdwanVKRXpHVGxBSU5YeEtKOFRBZVp0SFUxelNCeVlEaWUwK0VUSnExTy9JTUNmWVNveEhickNqNFhMZnBSai9hTWhsK05DNU1FcVZDSmxxL2I2aitGS2g5QVBxWURVN2NvZjhBbHY3cis4eTNKV3hPMGl1cTM4akpxRzNLUnlKS25xTXZlZWZWTzJhbi9sc1BVU0E5cGFUYWhsOHhlU3ltZlhxNllsV3pWZ2ZJeHJ2UE90bjdXVzRLT1BLLzlwcnRuWS9mc0RySnBaaTVwWnc1S1Y0UGhVdG1ZUHRUdFhnOE1QSFZWbTRKVElkajZEVHpNMUl6VnNtRXZyR1l6R1VLQXZVcUlnL013SDFublZidFp0REhzVXdpZHltbDF6YjFjNUQwa2xEN09HYzcySXJNekhXNUxIM01zeGJ4ejl1THpIL2FCZ1V5VjJjL2tVa2Ura29zVDlwQ0hLblFxSDlXNnY3eTZ3dlliQ1U3WFF2K28yK2t0RTJOUVQ0S1NEMHZOZVdkNHNDL2JiRlBmY3c0SEs1WnZvQkIyMjF0Si9oUUR5UW42bWVtZmRnUHdvUEpSSTZxTHhOdllTWlY3VDFIbURZamFqY0c5RWtKcWJUSEJ2VlZucDdNdW1aMDB1ZFpFeDZXODhvWHM4eGJhT1BUNGx2NXJHTjJycktiUFRYM0lucEZkN2NGdG9Ma1p6T2RwOW1KVXBPNFZRNmk5MTVjb05VK0g3VEFnR29oVld5QkJCVUhyeEV2VVlNQVZzUmI2ekxiSTJHOVNpV0NrcTJwQXVQTURuYmxDTUpWcTRVaFhXNkRRLzBqejVUS2EwRGdaZk9OWUVIaHdqcUdKUnhjYnR1QnZ4aW1vdVlzUGNmdkNvd1BLZEhQYTV5R1g1aHg1NTVUb1I2VVRFQmpZOUVtbVNxc25SSnlKSk1oQTVWaWtnUmpWSkd4akFydVRJeXZPY3p6RWZhSjJsYkQwaFRwTmFvOTh4cXE4V2x3YVRhZTNzTmh4L3hLaUwwdUwrMHh1MVB0SVVuZHcxSm5QOVRlRmZRYW1lWUp2TzQzbUxNeEF1U1NibnpudEhaenMzU29VMU80QzVBSkpBeXVPRjVOYXlTYldQNzNhMk00c2luZ28zUmJ6azFIN1Bhcm5lclZybnF4WXowaGZmcC9NcHpQYmhiNVM0bmI0eE9IK3ozRGo0blkrUXREcWZZM0RMK0Fueklta2VweVBzQ1pBNVBNL0lmV1REdFZQL3U1aDEwb3A2bU1iWXRBRC9DVDV5enFOelAvQUhBUWVvYmpoYklEeGNlVUdxdDlqVUxmNFNmT1YrSjJEUWI4RnZLWFZWeGJlSnNEcFlpeDhvSFZZOWZrZnBNMXFNUjJnN05pa3BxMHlkMGZFRHFzb2FlTXFqSlhjZVRHZWk3WFhldzFjSGdsL2FWblkvWktCUTdxQ3paNThCTHE0eU5Sc1E0OFRWbkhVdXcrY0UzYlpIS2V5MWRwcFN1cFZSbC9TSm11MXV5RXJZZjcxU1VCbFBqM1JxcDQyaVgwbmg2UjJjd1NVc05UVkFBTnhTYmNTUmU4dFdTK3BsSDJJeHExOEhSWVoyVGRib1VPNmIrMHU2Z3QvYStYb0J4bW1MK28yWWFET1FQVVAveUwyODVMVUZ0ZlBQSy9RS05mV1F2WVpzYlhBdHZIZEZ6YXczQm5xUjd5b2hyalE1QzJ0ejdaRHlnN3JlNXp2YmdvRitWaTNLMEpaV0p1TjhaaTlsVkwySi9xOFhEOXRZSDRTQnUyUDZWYXIxRzY1eTRjZWZsSXFHbytkcnJvZmlmZXkvRUJ1aVFGT1dmRDRHUEhtM1c4S3FxVkg0Z0IrWkthNmFaQy9YM2c3dWpaSGRZQW0xaTduSWhnY2g3ZWdrV0lYQlU2RzErU0tQUy9yN1FURlhaR0JPcXRjYjQ1WHl0MXloeEEwM0d5c0JkTERNRE1YL21VaWMydjRDTGJ3L0FMMnVNczlEd2hYbmV4TzBOVERNYWFHM2l6VStKR0hKaHpITVdodUsyaTd2Wms4RFpsYjVnbitrODRIc0hCcStLZTRVZ2NHdmJNOENPTnBmWXpDQVpqVG9HK3BFbUZDcGhEVEFlazI4aDRjanl0d1BTRzBjZUdIQy9YSy95ZzNkc28zME9mNGxPamRHSFBySzVxeFU3NkhLK1lKK0U5WmNaN05DNzZqd25RbTV0MHVjcDBEd20wQTRHYTM4eU0vYWRNdFBXVnBTVUFDRG12eWlCaVpwbE9hdktOSnZJMEhHU0NXUkRTYlJqbU9jeGgrazBvYkg0bGFhTTdHd0FKbmd1MjhhK0x4RDFNeUNiTDBVWkNlZ2ZhUnRncW5jcWZFNXNiY3VKOHBrTUxnV1ZVQ0tkOWlBQno5cGkzMDFJandXQ1dudUZyYnhkZnJQYVZHUXRmUWFEeTRtZVFiZjJUWHd6MG5xa0VNUmF4SGhJc2JIa2YybnJlRnFCMFJoWTNWZEx2dzl1RVNITE1saVVtMWdlVitKK2taVU5qbzF2OG9Bc0FiM0prd0RkZVdaQStTaU5iRDZmQ3VSdWQwSHk4VDZaWEhyNzZZRE80TGNMK2JuWDlJdHlrWlN4STNDZXU1bGZUVmpDSGRNZ1gwSnlEYTM0RUlPRzZTQnc5YlNOa1QraGpwbnVFakxRM2I5V3ZueWtBZFkydmE1NkEweHZYMDNRZVpJSG1SSUhicVNEY0E3Nlc4MVBPR3ZZYUlRZkRhNFJlSXZhLzlPcEg1Y3BCV1VXelRqcDRNckRVM1BRZTBsYWtBMVZ2K0svVHduaC82K1VCcjB5QitIUDh0ciswUHFnQWJ3UThzbFUyRmdiNWNMV0hwSzZ1aUtMZkRjQytSWExQWGtjakpXcEZidFpXKzdzby9HNkpxVGtTTC9LR2JOOEpLOEFBQjZRYmFnS3RTVGtEVWE1ejVDUzdNYlBybmNINXlOUUIyckhodk5KMkhWYXRCcWJDNFpkMGp6bEQybVM5TnVnbGo5bTliSWpwRS9XYitKZXc5VTRQRlY4QlVOZ1dMMCtJTnRRT2R4WStobm9UQWFaNzJ0aFl0Ym5mOEltUSswVFlic3FZM0RnOTlSSUozZFNvdG9CcWVubkRlenZhdkQ0cW1QRWlQbHZvNTNkMGpqemZQUDhBYWRHYjU4eGVMbGNHdzF1VjRITStKMjRtMmd2cmZqQlJtTGdmcTNMYm9PZDcxbjE4d05WRUpyT3JFQXNoeVd4UGlKSlpyMlRRQ3dIaU45VHBiT0NxVnVTV0IzVGJ4TXJ0MEtwa291R2IrWHVaRHNBY3dMdGU5MERPZW8zbnN1ZVJ5NUdSVnJISXRjMklJWnllS2dXVk90dksvV1B4T0tUSU82REkyMzIzdVdlNHVSUFF3ZHNmU0JzYXFnZEhSQmF4eUFHZkg1UTFoanFRTGdHd3VUWkVRZXBjNWEvMzR4Q3hOd1RjQzVKM3pmUFFFS0xXNlFXdHR2REtDRFdwQytvSGpKODk0L3ZBS3ZhM0NyclZKOHQwQTI2QWFHUmNvMTZhc2N0TTlWZGllVjcyQXozdmNjb0xpUXFJemtib0MzdjNTcmJqbmM1Wm1VK0w3YllmTUlqMUNTY3J0YXg0QzNuSzNFMU1kalFWU2ozU0hVbTRKODc2eUR1eHRMZUZXcm9HZTN4RmNnTXNoNXpTT0w1c1JZbTJUdG55QUVic3ZaZ3c5TVUxWnhZWm02MnZ4OWRmZVRWQWViZjlTanp0bEZOVW0wY093RjBLa2NnV0p0NmlaT3BqV1IvRXA1RWNDSjZCVUJIRnVYeGpUMmxQdFhaaVBjMnNUK1lXOUpOU3lLYkRWN1daU2QxdE03ZWwrRTZkaHNQM2JiaCtFNkhrWjByTDIxS0pVWng5c3JjNDZvMjgwU25tU2ZRZW1wL25LSkJJQk9NVzBqYzUyL21jMmFabEJzYmlOeFMzVDV3b042NWRQYmtKaXUzdTFEU3BzQVJjZzI2NkR6NGpTMEwrdlA4QWFXSSs4WXAzMVZUdWkrblgrZEpzK3htemQrb2FoSGhRV0F6YTU0a0FlWE1USTltdGx2VVpWVUd4T2VWejF5bnNleU1DdEZBaWpQUWl3T1J6SUlHUVBuTXp6NVczRkoyNzJaMytGZmRCTHBhb2xySFEzT2dzQVJmaVozWS9hd3E0UkNwVXNnM1dHYk1OU04ybXV1V2VaR2hta2VsdkZsTnJIZzEzeTVCZmhBc01oMW5tYjRUR2JNeER0UXB0VW9WQ1dLTGNrWi9DMjd4RzlsTFNYWmowV3BydXNTQWJnMlpFRmpmSlFQRWRRTDVhWHZJZ09RdUNRY2tacjJ2YTdPYmN2bnpFeDlIdDhnK0xEVmtiaUVUa0xXM2pueW5IdDRndHVZYXVlVzhHSjlMK2NhZGExeFluUmplK1EzMVhlenp6UWREbDBNSEFJTnp1M0hFZDQ1eTZIajd6RzR6dDVWUWJ3d3BRRzlpK1Y1VVYrMytMZjRVVWVoTXpxempYb3RTbU14dVpYWWdkMWZNak0zSnpKeno0M3RCNnFBL0ZvTFhESXZpQUJBSG9KNXRVN1I0NS93QVZoMEJpcFVkeGVyV3hBL1FBUG5KclhXdHBYcW9vdXpJcEExWkFtbVFPUnowdmx6bFN2YUxDMDM4UmFwYTNncGJ6YjF1QjNqYldWV0h3bUR2ZHpVYzVmNGhZZlNXOUR1Rlh3VTBXL3dEUVFmcklZcnErS2V2VmZFVkYzTjhEY1FISlVRZUVid3l1Y3liODRkczVya0EvUElqa2NzajVpUTFpaDBKVW4vS2Yya21FRmo2M3lIMTVlWWs5dFo0RmJkUzlOdW9QcmxCUHM0cldlM245Wlk3Ulc2SHltZjdDMU4ydmJreEh6bDlzMzhlMjAwdW91TDNCQkIwc2RidHkxdnowRXkyMWV3R0RyTVgzR1JqYytEd0FubVYvQXZUWHptb3dyZUgyek9aNlpENUR5TWxiUThQKzdPL0grb3pxNVM1K1BQVyt6ZEFMcmlhNDRFM052SlJxWXgrd0NqWEUxZ3VXdGk1djBub0I0OC9tZjJsUHRPdTZLZDJ3SjQ4ZmN5V1JxYzc5WWZhZlpMQzBSZDhSV0F0bGRodkUvcEVvRzJKVHFlSEQwS3puK3QyM1I3VFZVY0doZmZxa3V4UEUzK3N2S09PcG9MQUFDWTNXN2I5MTU5USt6MnUyYmJxZEwzbGduMmJXK0tvUFNiVnRxcmJYMmtMYlRVLzZtTVk3Y21hVHNJcVpxNUI2RzA2cjJjcXBwV2YvQUtpWm9tMmtPazQ3UUJFWXUxa253bUlwOFMzbUx4biswWFhKMEJIbE5jMktVd1YxcFBjRkpNcDIreFFEYXlINGx6OHBLdUxROEI3UWpFN0VSdmhOcFVZblkxUkxsU1NJMm15aWNWVFJ4a1BsT2xUM2xSTGdnem8wNnZaM05obHF4M1I1bmo2Q1NxdGhZY01wRlQ4VGs4RThBL1VjM1AwSHZDTFRwSE0yTWNkT1BMNW5sNnlZamxhUld1Y3lEYi9YL0tQcmxLcURFdUZVbkxMaWN2TUJqa0xkQndFOGc3WVlwcStJV210em5jNUhuMXpNOUs3UVl2Y1F0Zm1MOGVXYnRwcitIbE1KMlkyZDN0WnFyQVpuSzVPZ3k4ekRVK3RYMlEyU0VRRWdYdG9UZnA4SzYrczA1R1ZqMHNMWmVRUWFlczZuU0NLQmF3QUY3WkQ1Wm1kZkwrS1AzTU1rWWMvTFAvd0g5NDJwd3pHbWQ4aDdDT1Evd0N3a1pGdlQzOWJ3SVhaVnZkVkFISkJiNXpHN2MyKys4VW9Jb09maUl2N0FUWDRxanZnZ3pPWTNaQlUzV1o1Ym5ocmpudFFZWFlEMTJEVm5ZOHI2RHlCeUV2c0oyWXc0MUJQbVpHanVtUkJoU1l3L3ZNWTFiZlFxbnNlZ2xySXZyR3ZzMmpuWkZrUDNvbmlKM2VubUl5SjVCWW5ZdE02TDdHVXVKMk9WTjBKRnVjMHRSOHNvRmlYSWtzV1dzcTI4RFpvVmc2cEJFbXhLQXdhaWxqSTJ2c1N2Z0Z2NWVaTHM2MjVpbkg1d2ZjWG1yTGVDWkREbmR4YmRkMC9VVFZaajNUQVBkUmx5K2V1ZjFNTENrOVA1dy9lVmV4YW04aW44b2gxYXJsYWRYSDJWM1VaQ1UyUFFOZUdQYzY1Q0MxV0E2eVdxekdQd1hGYitrcHF1RWZYT2JPdlVUakEzcXB3V2M2NmNheWhvMUxjWTVLVGpuTktSZmdKRzJIdkpqV3FRQmhxWThPZWNzMndnakRnd0pjVFFTdDV4ZThoTDBiUWZkNlJnVVZwSW1KR2hrVFVwR1VoTWlkcWFOd0VXRFppZEl6ajA1RUNpd0ZoY24xSkxFOVNTU1lzVUNMT3pCamZ6a2ZTUlB5dGUzUWM5YmFDUzcwaHJOWVovNmV3Z1l2dGF4ZndpMnRzenZFZjJFdE95K3p3aUFqMXNQN3dYRzBOOXhtZmk1ZlNhZkMwTjFBSWE5SE1iZjZmdkVGOVpOdWM0dG9FSUJpR25KVEdOQWpLamxCNnlneWFwVXRCbmU4Q3J4ZEVjcFRZaW5hWHVKYVZGY3pueWI0cTVxaEVRWW95U29vZ3pwTU5wL3ZjYStJZ3BFUnBOWEk2dTRNZ1FaeEhNNmtjNDB4YW8zZ0ltUXh2aHhJUE1INUVUWDAxdW5wTWx0dGJWa1BVajVUVEwyRHM1aWY4QWdyNVN6S25obk1sMlRybDFDamhOdlNwNVRwTHNjdVV5Z0t0TThZRFZwRTZTN2VqemcxUkFKTENWUy9jdWNVWVVEaEpzWGowVGlKbjhiMmlVWkxNdFRhdDNRRGxCcWxaQnhtV3hPMjNiU1YxWEh1ZFcrY2F2V3RkVng2RGlJSFYydWdtVGZGODJrRDR0ZWNtcmpVVk5zckJuMndPRXpUWXdTTnNhSTJtTkkrMTVFMjFETThjYkdIR1FMOXRwbWRLRDczT2tIMFZHc0krMFFpZDNGSFlad2JFcDRUQ3l3Z3VOM2l2S0JuOE93NzBDYVpEa0xUSzRaZDJxTHpWSTQzUVREVkx1VGpCTVR0SkVHWkh2TS9qKzFxTDhPZmxKYVNXdE83Z2FtQzFzYWk2a1R6ekhkclhON0cwb2NWdDkyMWFaN0wxK3ZTOFZ0dW1PSWxSaWUwaThEUE42dTBYUE9DTmlLaG1iYTFPTWIvRWJkdnhnRDdXdnhtUUQxRHpraXJVNnlOTk1kcGRZdzQ4YzVud2o5WXU2OGl0QU1VRHhuR3ZLQzdpT1hFc0l3MWRHdEgwNm92S3FuaStjbldvRG9aTVhXbnd6K0dabnRJbG5SdnpTeHdHTHNiR0RkcEFHVUVjeExHYTIvWU5QQmViOUxBVHpic05pYklCTkJ0dnRJdEpDQWM1dVhJNThwYnlXMjA5cUpUQkpJbUgycjJwTEVoSm5kbzdWZXExMkp0eWxYV3hRV1p2SnFjWkZqaU1hNzVzeGdGVEZxSlhWTVF6SEtNRkxpVEkybnE0OG5TRHRXYzg0cFpGa1RZcmxDSGJqSFdkM1hNeUJxN0dSdFVQRXdDaWk4NDBsWUtha2FYbHdGbDFqVFZFRkc4WTVhTEdSRXhyaWRHTGhUT2p3WSttekdicE1sSmdPTTJtbE1YWmhPemlMQ0FRWEhWa1ZjeUJNbnRYdG9vdUVGek1mdEx0SFVxWHU5aHlCbWJ5amM0MWI3WjIraVA0RG1ESU1SMnZkbHNwdE1QaWE1WW1MaDBaaHJKYTNrVzJNMnk3YXNUNnl0ZkV1Mmw1SXVIVWFtUDcxRjBtZFhBeTRWMjF2SjB3STR4ajR6bGFRUGlqemsxUndwb3ZLY2F5Q1ZiVnh4SmpEV1dFV3B4aWNoR0hIamxLM3ZraTk4c0E4NDhjdmxPKy9EbEs0NGhJbjNoSXdXZjN0ZVVkM3lHVlhmckZHSVdNTldaUlRwRzdoWFNBTGloL0RKa3hvNXlLc2FWZjNqOGJYdWxqQWl3T1lpVkh1c2FWZmJHMmwzYVphd2ZGNHd1MTJNcXNPK1VkVXE4bzBTWWpFOEJCZ3ZGcEd6aGN6QkttS3ZwRUtOZXNCcEJxbGJySUFydEpVd1JPc3VZaU0xUkc3NU9naHFZR0VMaGJjSTJMMVZZUmpKRndwNHl6V2owanU3UEtUc3ZVQ21FRWtYRGdjSVdLWjVSZTVQS1RhWUdGTVIyNUNSaHpITGhUR2dRTEZsbFN3Sk02VHlqWTdZN2FzMXhUeUhPWTdIYllkemRtTGVzclhjblV4aHFLSjB2TFdaTVN0VmRvMWFYTXdkOFh5RUhmRU9lRWpRbXN5aU1UR2JzQ2ZlNHlQY0pNdUlNcVkrRFBpeVl6N3VZNFljeStEeWphc1RHN3g1eWNZWXgzM2FOaVlFdE90RFJob293MGRqQVZvdTdEMXcwbFhEU2RsNnF3VXpGN3N5MlhEQ09HSGpzdlZVZDBZNFVETGhjT0k4VUJKMk9xays3TkVORmhMM3VoR21pSTdIVlg0V3FSa1lWdmlTbkRpS0tJbWJWeENyZ1JqMU9VSzdvUlZvaVRURlg5M1p6bkRzTnMvcExIRDRhODBPemRuckwycGtpancyeUdQQ1hPRjdQRTZpYWJDNFZSYVd0Q21KWkV0WmVsMmFIS1RmN3VyeW1zQ2lLVW1zWTcxam0yQU9Vak93aHltd2VuSUhTTU85WlE3RkhLUnRza0RoTlE2U0IwakRzenYrekJGR3poeWw2VWpkd1NZZGxaU3dJaVMyVlJPakdkZVhMZ0hQQXg0MmEzSXowRmFTOGg3Q1Exa0hJZTBtT3JDSEJXL0RHbWpiaE5QaVZIS1Z0ZVJZcGExQVFSVUFNdDhScEt4L2lsbjRsVGltSXZkaVBXZE02MFozWW5kMkpKRWdSN2dqZ2tmSEpLSTFUcEpWcEU4SVhoMUdXVXNLS2psQXB4aHp5bmQxYVh6cUxhUUtySUs2MFM4SWVRUUVpUnhqMGtFVzdGM0RDa2txU2dFVWpKcWVHUEtIckNhTUNIQzRVOHBmWUpMUWVoTEtoTEVxd3d3bGhTZ1dIaDlPYmpuVTZSOW9peHdsWnByTElYU1RtTWVFQVZFZ3ppV0ZTQlZZV0JITWlMeVdwQjNrVThWSjBpRTZSSC8yUT09J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdPdHJvcyBpZGlvbWFzJyxcclxuICAgICAgICBjb250ZW5pZG86ICdQcmFjdGljYXIgaW5nbMOpcywgYXVucXVlIHNlIGxvIGLDoXNpY28gcXVpZXJvIHNlZ3VpciBhcHJlbmRpZW5kby4nLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhJVEVoVVNFaElXRmhVVkZSZ1dHUlVYR0JVWUhSZ1ZGaGNYR2hrWEdCY2FIU2dnR0JvbEd4WVlJVEVoSlNrckxpNHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HeEFRR3kwbUlDWXRMUzB2TFMwdExTOHRMUzB0TFM4dExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBTFFCR0FNQklnQUNFUUVERVFIL3hBQWNBQUFDQWdNQkFRQUFBQUFBQUFBQUFBQUFCZ1FGQWdNSEFRai94QUJMRUFBQ0FRSUVBd1FGQ0FZR0NRVUJBQUFCQWdNQUVRUUZFaUVHTVVFVFVXRnhJaktCa2FFSEZDTkNVckhCMFVOaWNvS3k4QlV6VTJPUzRSWWxOSE9pbzhMUzRpUTFWR1IwRi8vRUFCc0JBQUVGQVFFQUFBQUFBQUFBQUFBQUFBQUNBd1FGQmdFSC84UUFOUkVBQVFRQUF3VUhCQUVEQlFFQUFBQUFBUUFDQXhFRUlURUZFa0ZSWVJOeGdaR2h3ZkFpc2RIaE1oUlM4UVlWWXBLaVF2L2FBQXdEQVFBQ0VRTVJBRDhBN0hSUlJRaEZGRkZDRVVVVVVJUlJSVWZINDZPRkM4amFWSHZKN2dPcG9TbXRMaUd0RmtxUlJha0ROT001WEpFSTdOZS9teDlwMkhzOTlMOCtZVE9idEs3ZWJ0K2RLM0NycUhZTXp4Y2pnM3BxZlllcTYvYWl1UVE1aE1tNlN5TDVPMzNYcS95dmpTVkNCTU8wWHYyRGo4Ry9uZXVsaFJOc0daZ3VOd2QwMFA0OVYwQ2lvMlg0K09kQkpFMnBUN3dlNGpvZkNrNzVSK0twY01VZ2dPbDNYV3oyQktyY2dCYjdYTmp2MHQ0MDJUV3FxNGNOSkxMMlFHZkc4cXJXMDlVVnczTGVNOGJFNFl6dElMN283TTZzT28zM1h6RmRyd0dLV2FLT1ZQVmtSWEhrd3ZTV3YzazlqZG55WVd0NGdnOFI5dm1xMzBVVVV0UVVVVVVVSVJSUlJRaEZGYThUaUZqWFU3QUQrZGgzMHZZM2lWdVVTZ0Q3VGJuM2NoVE11SWppL2tmRGl1RWdKbG9wR2t6bkVIOUt3OHJEN2hYa2VkNGdmcFNmQTJQMzFGLzNHUGtmVDhwSGFoUFZGTFdCNHA2VEwrOHY0citWTU1NeXVvWkdEQThpS2x4VHNrSDBsS0RnZEZzb29vcDFLUlJSUlFoRkZGRkNFVVVVVUlSUlJSUWhGRkZGQ0VVVlhaem5jR0ZVTk05dFhxcUFTelc1MlVmZnlyUmt2RTJGeFRGSW5Pc0MraGdWSkE1a2RDUEtoT0NHUXQzdzAxenJKV2s4eW9yT3hzcWdrbndGY3Z6M05ueEVoWTdLTmtYN0svbjNtbTNqN0dsWWtpSDZScm45bFA4QXlJOTFJQXB4ZzRyVDdCd1lFZmJrWm5JZEJ4OHpmbDFYdFltcmc4UFA4NU9IMXJxQ2E5VmphMm5WYXNjdXlaWGpXV1dVUnE3OW1sd1dMTjE1Y2g0MHF3cmM0cUxkM3I1SFFuK1Yxa0J4bytTcHpXSnEzT1F1RGlWWmdHdzZsaUxYMUFjckhwdFkxb3lMS2ppWmhFRzBYRE1XSXZZTDRYSGVLVllRY1JIdWw5NUFXVDBJc2VpOXlIT0h3MG9aZDFOZ3kvYVgvdUhRMWEvS05rTW1KN1BHWWRUS096QVpWM0pUZGxkUnpQckVFRGZsUzltR0ZNY2p4bm1qTXQrK3h0ZjI4NmV2azh4eGFGNHoramE0L1liZjRFTlRjckE1dHFyMmlERnU0eUxVYTlXbi9JSGowWExjdDRmeFV6aEVoYTVOaXhWbFVlTE1SWUFlK3U1WmZobGdnamkxRFRFaXBxTmhmU0xYM3Frenppd0lTa0ZuYnE1M1VlUStzZmg1MG9ZM0d5U204anN4OFRzUEljaFZWSmpJNGpUZnFQb21KTVBpTm9CcGxBWTBjTlNldlR4cnhYUXNSeERoVjV6S2YyYnQ5d3JXdkZHRlA2US80SC9LdWNXcnkxUnY5eWw0QUoxdXdzTnhjN3pINFhWTU5tc0VteVNvVDNYc2ZjZDZtVngrclhLdUlwNGJBTnJUN0QzSTloNXJUMGUwaGRQSGlQd29zK3dDQmNMNzZIOGozQzZYV3ZGWWhZMEx0eUg4Z2VkUWNtenFMRUw2QnN3OVpEekhqNGp4cXE0cXhWMkVRNUx1Zk04dmNQdnFaTmlBeUx0RzU4dTlaK1ZqNGlXdkZFY0Nxdk1NYzByYW01ZEY2QWZ6MXFLYTlyRmpXZkpMaloxVVVsWUdzVFhwcncxMEpDd05Uc256Vm9IdU4wUHJMMytJN2pVQW1zVFRqSEZwdHB6U1FTRFlYVDRaUXlobE4xWVhCOERXVktIRG1lUnd4c2t6aFZCMUxlNU8vTlFCdWQ5L2JURGx1YndZaS9aU0JpT1lzUVI0Mk85dkd0RENUSkVKQU11ZkJTR3pNSkRTNFh5dlB5VTZpc1pIQ2k1SUE3eWJWSE9Zdy8yZytQNVZ4OHJHZnljQjNrQlNHeHZkL0VFK0JVcWl0VU9JUnZWWUh5UDRWdHBRSWNMQnRKSUlORkZGRkZkWEVVVVVVSVJSUlJRaGNqK1V0bkdOYlZlM1pwcC9adHZiOTdWVkh3MDcvUE1QMmQ5ZmJKYTNkcTlMMmFOVi9DdXpaM2t1SHhLQmNRZ0lYazF5cFcvT3pEY2VYS3E3SnNueS9DTVdoQTFrVzFzek9RRHpBSjVEeW9kS3hnK29nZDVBVjNEangvVDdnWVNRS3lHU3FQbERiNldNZE96TnY4VGZsVk5DRythT2JKWVRKZHJlbmNvU0xOOW5ibFYveDZGY1J5b3dOcm9iSHZ1Ujl4cW53eS82dm0vMzhmOEFEYjhhV3h3YzBFWjVxNXdENndjSS93Q1RRZjhBdlNhRERIL1NBZnRSck1QOVhvYTl1eTU2K1hqUzFpZjlod3ZoTzlTVG5rUHo1SjduUUlncE9rMzFkbVY1ZVpGUk1EaThPK0hFRTdzblp5bVJXVmRXcFc5WmJkRDQxMEFwckR4U1Joam5BbXV6NFppZzhFQUFaMVk1bm1WZTVpUHA4eDhjTUQvd3BWSHdtcjZNVzhhc1hFSlVCUVNkVWpEa0Irelc5YzloZWZGUEpyRWM4UmlXd0JJR3dCSXYzQzlSRG1jVVVNc2VIa2wxU09qYWlOQkNwekYwYS9PdWhwcXU1S1pIS0krejNUWjdQZ2F5RFE2eU9WRUZZY2JRNmNVV3NSMmlKSlk3VzFMWS9GVFZUbEdZc0dralEyVmxBZTNXeDVlVzlidUpzNEVrVUhyR1dPUHMyWnQ5Vzl3YjN1ZHI4NnJPSFl2WGJ2c1BkdWZ2RlYrME1RV3g5bVBINTFVL0RSRVlZQ1Faakx5T1I5TEN1YXh0V2RxOHRWQUU1YXhyeXNyVjVhaEN4dFJhc3JWNWF1THRyTER6UEd3ZEdLc3B1Q09uK1ZXa2VhL09HZHpzMnF6TDNFYkFqd05xcWFyTU5pVERPVzZYczM3Si9MblNyTmJxcU5zWVFUeEFqK1EwL0g0NnA3d2VBRHBxMTJKWW9vdGNFaE5lNXZ0c0RRMlhMb3ZyT3ZURzVGdHRNaEFGamZjaTRxWGtzNmlPeGRRTzFKWUVnRXhtTWc2ZXQ3MjVWaTBxNk5ldGQ0b1ZBdUw2a1piM1htTEJiM3FZMk5tNER4cjV4V0tvVW9lWjViMlFlNXZwa0NEYm1DaFlOVzhaS21zb3p0Y3k5a2hBSFBRR3UzaHVCdFcvTmNSSE1qSjJpaHUzWUFrN0ZBSEttL2Q2V20vbFd3NHVNeTZ1MFVDT2NTRzU1cDJhcWRQMmpkZVhqVG9paUQrRlplOXJsQzFVbkxocHZxUCt6OXQwNWhyYWZLak44c1NNRW96SFRKMmJCcmN5b2NFVzZXTlNHeEtHSXZyVy93QTNhSFJ2cTFGN2pidXR2ZXNlSU1ja3EraXc5R1M5Z0xhZ1VYMHp0dVFRVnJoYkdHRTVKQkFwSnVZMzdVZDFqYjNHOVMrSDhXMGVLaTdQZHR5ZTRMWTNMZUhMMjJxNXlUREpKTW9rWFVpaG1JSTZCVC9sVTJMQ3hvV01hQmRSdWJmQVg1bTFTZjhBZURoY0NZbWo2bkVnSGtLQUo3NzAvU1p3T3hUaWNWMjVkOUxTQ2VaT3RjdjFrdDgwck9ic1NUNC9oM1VVQVZmWVhJMGVOVzFFRmxCNld2YXMzQmhwY1M0N21aMU5sYlNXWmtJRzlvcUphdU10ek0zQ3lHL2MzNS9uVlV5V0pIY1NQZFh0cVJCaVpNTy9lWjRqZ2UvNWt1VFJ0bGJUazJVVkV5dWZVZ3Z6R3gvRDRVVnM0cFd5c0QyNkVXcys5aGE0dFBCUzZLS0tjU1VWRHpISENJZDdIa1B4UGhVc21sUEZ6bDNMSHJ5OEIwRlYyMGNZY1BHTjMrUjA2Y3lwbUR3NGxkOVdnV004N09idWIvY1BJVmlCUUJWNWdzbFNTTlgxc0NSMHR6ck9Rd1M0cDUzY3pybWZ5cmVXVmtMUmVRNkpieCtFRXNiSWVvMlBjUnlOS0h6eVdNUGgzSkNsZ1dHM3JEa2Z1cDlsaTBzVjdpUmZ5TlZPYzVNa3d2ZlM0R3plSGMzZUtjd2VNZGhuNi9PdkJXR0V4VEcvVEptMDU5eDUvd0NNMHIxNGE4eEVVa1d6S2R0Z2VoOGpVUnAyclZOMmhBV2dnM2ZMTlhBWVNMQ2xtc0RVTTRodStwZVh3U3lteUpxNzI1QWVaNVVzYlFoMU5qdlNYczNSWlVESEF1Nm91NS9FL3dDVlgrRXc0alFJT254UFUxNk1Da1VqalZxZllGclc2RFlEdXJmYXFERjRnU3lFdDB2elRicFE0QURSU3BzdUt3SlBxRm5ZcnA2alRmZS9zcVMrUk1Kb1l0WSttVldEVzlYVUNiRWRlVldrV0NNMkFpVlhSYlNzYnUya1dzM0k5KzlTc1d0c1hnUmNHMGNZdURjRzJvYkhxS2NHSEZBMWw5SHFSZjNWU2NXNjNOQnpIYWYrZEV1NWxsOFVTdHB4QWtkVFlvRVljalk3bmJhdGVkWloyRHFtclZxUld2YTNyWDIrRlN1SU10S004bmFSTmVSdlJWcnNMa25jVzJxVHhsL1d4ZU1DZjlWTlNNcHI4cXF2ZnFuNFpTNTBZRHJCRHJ5QTAzZVFITSthcmMweXpzVmhiVnE3V01QYTFyWHR0NDg2bDRUSjRSSEhKaUpXUXpHeUJSZmE5dFRFOUxrZSt0M0Uvd0RWNE0vM0EvNmE4enorb3dSL3UveEZMYzFyQzgxb0JsMzErVWxza2oyUmplcmVjNEVpcnkzcTRIa0ZUNXBnV2hsZUpqY3FlZmVDTGcrNDFRWnZEdUdIWFkrWS93QXFkZU5SL3dDcWI5aFA0YVhab2d3S25rYVpsYUdTT2FPQktlakptdzdTZFNBZkdsTHlpYlZDaFBNRFNmM2R2dXRVbzFCeVdCa2pZSGxyTmowT3kxTk5KV0R4c2ZaenZiWEUvbFlrMWlhOU5MbWNjUmFTVWhzU09iOHdQQlIxODZjYTI5RkFlOE1GbFh6c0FMa2dEeDJyUWNiRi9hTC9BSWwvT2tHZWQzTjNZc2ZFM3IzRDRjdWZEcWFlYkZab0tLN0ZWblM3THcxaFBvSlovdERRcC9WdU5SOTloN0s5QXJtMkR4a3NJSWhrWk5yV1U3SHpYa2ZiVEp3NXhXSmlJcGdFazVBallPZTc5VnZnZmhURzBzTzZtbHVZQTk3VjVzVGFzSmFZbmZTYjQ2Ryt2QTkvbW1pMU5PVmwreEZ4WWdHdzd4MHFqeXRrV1RWSnlBMjJ2dlY5L1RNUDJqL2hQNVViS01VZHl2a0F2S3JBOFQ3ZWF0TWFYdnBnYVRXZHBaZEdCc3dJUFVIYWdDcmpOTVpGSXUxOVFOeHNmYlZTQlZYaW9tUlNickhidzU1ZXRjVkppa2M1dHVGRldtU2ZYOW40MFZ1eWlPeVgrMGZnSzhyVmJNYnU0VmdkeXZ6SktxTVVRNlVsVFhZQUVrMkFGeWZBVW80dml5UXNleVZRdlFzQ1NmSG1MVTBZK0V2RTZEWXNqRDNpdVhTWmpFaElMWEkySUF2djU4cTdqSkpXMEdYNEtCUEtJNnMwbnpMczY3YUtRRWFYVkNiRGtSYm1QeXFyQXF1NFl6ZkQ5b2RjbWdGV1gwZ1FDVzI1OGg3YXM3ZTN4RzkvSTFUYlRFcFpHK1FIaU8rajg4bGI3SHhESkdPRFhBbnZSYW1mSWkzWldJdFluVDRqbjk5VWVYYUJJREo2bzM3OStsTUl6ZUg3Ujl4cnV5ZXpZNHl2a0E0Vlk4ejdKL0hPYzhialczeHRMR0t1cEpjRUVra2p4OEtyNVpDMzVVdzUxbU1Fc1pVRWxnYnFkSjUrZmxTNVZOajJNamszWTNodzFzVjYxeFZoaFM1ekxjMml0MkNVRWtFWEJISTFoTmsyR2Jjd3I3TGo3cTM0SmRpZSt0NXBFVGkxdVJTblBjMTUzVFNyNDhtdzY3aUZMK0l2OTlTd0FCWUN3N2hXVFZnVFR1OFRxVUZ6bmZ5TnBWenhiVE1lK3grSCtWYXNOaUw3SG4wTldYRWtIcXYrNmZ3L0dxSTFJWWFDdThQVWtJOHZKT1dJL3dEYms4SnovQzFUNXlQbkdYbS82S0trN0RTNmh2ekZicW5qRTVETGczL3liOWZSUW5ZWE1nbmk4LzhBY1Z6NGV2UlczRUdVeWg1WnRJMEYyTjlTblptMjJCdjFxdzRpeStTWHNuVFNWV0JMa3VvTndDVHNUZWxpMWVFVWRxMm5EZDE2OS9UcXU5akpiVHZDMjMvODhDQVA3dW12Vk0yWllBendZWXhzbm9RZ05xZFZ0Y0RvZktzRGhUaWNOQUkyVFZDV1J3V0FzTGl6Yjh4WVV0Mm9wUm5CSnR1b281OHE2WmFMZ3d6bWdicjlDU010THU3enoxNmFLMDRxeEN5WWx5aHVvQ3JjY2pwRzl2YlZSV1ZxRlVuWWJrN0FlSnBxUjVlNHU1cVJGR0ltQmcwQUE4azdjS1lKWHdwRHJjUEl4MzhMQzQ3anNhMFk3aFp1Y1QzSDJXMlB2NUg0VXdaWmhleWlTUDdLZ0h6NW40M3FUVjgzQ3NkRTFyeG1BTzlZYkdPYlBNOS9Nbjc1ZWk1QnhsMjBDaUxTUThndmNFR3ljdHJIcWR2WWFSMXdybjZ0T3ZIT0tNbU5tdWRrSWpIa29GL2plcVNDSXU2b09iTXFqellnZmpUUDlNeHBvRXJKWW5FRXl1QTRHZ3E2TEFmYVBzRlRVVURZQ216TWNsd3RzVkhDSkJMaEZERjJZRVNBVzFlamIwYkU3V3FwenZMbGlURE10L3BZQTdYTi9TT3h0M0RhbmhFR2FKcVdPUVh2SFQ4MTkxREdCazdJemFmbzlRVFViQzdHK3c3N1czdHlxcXhlSDMxTDdmenAxeFdUcC9Sa2VJTE1aVklPa3NTRmplVjFHbGVRdllHbFdpU01FVVVselRFUjFBUG1ucmcvTmppSWJPYnlSMlZqM2o2cDl1NDh3YXZ3S1NmaytDL1BBaHVCS2pEMnFOUVAvQ2ZmWFN6bFA2L3cvd0E2b0o5bFRseE1Rc0hxUHNWdDlsN1RaTGh3WkQ5UXlQaCtxVllCVW5CNFF1ZjFlcC9BZU5XRVdXSU9kMitBcmRqcmlKdE94QzdXNmQ5dlpUa0d4M051VEVhRFBkR3ByUFhoN3FXL0ZoeDNXY2VKNEwxY1JHRG9ETGNiV3VQZFJTd2tkZVVzYmRJMWpIbitrbzdPYi9lZkpVbkdIRWJUTzBNYkVRcVNEYjlJUnpKL1Y3aDdmSmZ3ZUFlWnRFYUYydGV3dGV3dCtkYUFLWXVCY1YyZUxTL0p3VTlyY3ZpSzlHTWJZb1NHZ0doZWZGZWE5b2NUaUFaRC9JMTNBOEFxZkc1ZkxDMm1XTmtOcmdFY3g0SGtha1pWbVRRc09aalByRHU4VjdqNGRhWlBsTXhBTTBVWUc2SVNmM2p0L0RTYUtZa3c4ZVB3dlp6RElqaHc1RWZPaVUrUjJCeFJNRHMyblg3ZzlPQjVyb0trSGNjanZmd3J5WTJVMUk0VWhXWENJVzlaU3kzSGNwMnY3Q0I3SzM1bGx1bFJadWZoNGVkZWE3UTJSUGhkL1FodDUvby92dlhwR0R4OGVJWXgrbGdHdjJxS3M0b2l4L0dwUXdnSFBlck5NUENGdjJoSDZvQXY3dnhxcGd3cnBUd0ZjeUI5MVlTWWtOR1YrVnFBQUFMQ3NUVXVHQzZPeEJKdUZVQy9QcWR2Q3NNQkNIZXpjZ3JFK3dWSmJBNGxnL3UwODZ6K2FGTmRvS0o1ZmhSRFdCcVhISEhwdXpzRDNCZHIvdFZMaHdNVFJnZ3V4TDgxVGV3RzQ1MnQ0MDlEaFhTZnhJMHZVWDkvbkZLZE0xdW9PdGFGVVdLaERxVlBJL3plbERFd2xHS25tSzZITGhGQ09iRUh0RlFGdGlvSXVTUUtnNS9rMFRRb3l5TDJsbXNRRzlNaHVWK2dGT053NzJnazFrTDE2MXh6OU9tcW00VEhOamR1dXVpYTA0MWZ6ejBTWmczczNudFZuVlcwYkt3REN4QkZXbERTcldiVUZZMFdyS2lscHBZMnJYSTZxQ3pFQURtU2JBZTJ0R1o1Z2tFWmtjK0FBNXNlNFZ6M044Mmx4RFhjMlVja0hUOHo0bXBXSHd6cGM5QnovSHpKVlcwZHF4WU1idXJ6dzl5ZmhLYXNieGJBbXlBeUh2R3c5NS9BVmx3L3hkSjJnbDdCYklkZ3hZM2ZweXR5cFB5L0xXbE4rU2RUMytBcGpXTUtBcWl3RmFEQmJMaXNQYzNJYytLeFcwUDlTWXQxc2ErcjFBQXlIZm1mVlBrSHlsdmY2VERxUitvNUh3WUdtWEorTThKT1F1c3h1ZVN2WmJudURYMG4zMXgwMWd3cTJkaG1IVEpVMFcwcDJuTTMzcSs0dWpLNDNFQS8yaFBzYjBoOERWZmxwK21pUDk3SC9HdFZlSnhyS3dMa3NwQUZ6dVZ0c1BaYnA0Vk1WdVJCN2lDUGVEVlBLd3h2SUtoU1h2YjlhbS9WTzdML0FPcXpVZjNVaC80Z2Z4cW80cGI2REFuL0FPcjl6bXZNYnhPWkZsdEJHa3M2aFpaVkxYZFJhOWxPeTNzTDJyUkpudXFGSVh3OFQ5bWhqVjJENmdDU2Jpeld2YzF3a0hLMUtrbGpjSE5CMXZoL3kzdnNuSEVZRWFIZzdTTy96QlU3UFY5SjJrZjB0OUZ1VnlkNjVxRFZ4L3BCTDg2K2VXVHREOVd4MDJNZWkxcjN0Ynhxbm9jNEhSTTRtWnNwQkEwdnk0ZStTdCtGTWFzT0tqbGUrbE5aTmhjbTZNQUI3VFRQaStQSjJQMGNhb1BHN0gybllmQ2t2Q0wxcSs0WnlsY1ZQMkxPVkJWbXVBRHVMYmIxZFlMRFJ0ZzdXVVhxZkRoa21vc1RpQVJEQ2FzK3ZmNEswdy9IV0pCOU5VY2QxaXA5aEIvQTA0WkhuME9LSG8raTRHOGJXdmJ2SDJoNDBpOFY4UERDTWdXUXVIQk80QUlLMjd1Zk9xZkNZaG8zV1JEWmxOd2Z3UGVEeXRVaDJFaG5adlI1Y2pwNmQ2a3MyamljTEx1VEc2MUJ6OGp6WFhmNlBqdmZUN0xtM3VyMmpMY1lKb2tsWGs2ZzI3ajFIc054N0tLenY5SENDUjJiZklMVkNkemdDQ1NPOWNidFhRT0M0TUhER3N6eVJkczF6dXd1ZzVBQUU3RzNQcnZVUGl6aGhnN1R3THFVa2wwSE5TZWJBZFFlN3A5eWJhdE9kM0ZSZlM2dWY0S3hmMVlDZjYyZzhyMDd4OHlYVmMzbXkvRUxwbGxoSnRZTmRicjVIOEs1WXkySkZ3YkVpNDVHM1d2S1plR09HWG1ZU1NxVmhHOWpzWDhBUHMrUHVyakkyWVZoTG5HdXZzdXl6U2JRbGExckFIZFBmb1BmaW0zaEhDbVBDUmc4MnUxdjJqY2ZDMVNNMmNhUUxpNGJsY1g1SHBWZHh0bVR3WWUwWjB0STJqVVBxcllrMjdqMHJtVEtUZnY1MzYzNzc4NzFuc1hFY1RGSU9Mci9BQ3ZTTmo3SDM0bXUzcUF5R1YzWEg1MVhTRFUyZVNCenFKZFNiYkFBMnNPaHBiNFp4elN3K21ic2gwazk0c0NMK05qOEt0R3JEQnhoTG1FQTVqWHBweEhOVEpZQzJRdEp6R1dTbnBqd25acW1yU0dMTjBKMzVlNnZVeDBTTU5JTEFseXhJRjl4Nm84S3JUV0JxU3pIU3RxcXlxc3RLckllV2FhL3BtSG4rZTlTMnhpTW9WNHo2SmEybHJEMGpmbFdHSG5YUm9lUndvdVFxQWIzOGFpR3NEU0JpWDNabzVWcFZqSUM2cTZvVmVYUlBpRnVuai9pN1ZuSm13SVlhTm1LV3Z2NksyQnVlOGdWcXpETVVkQWdUbGNoaUFwVzU1QUx0YTIxVjVyV2FlZGpKWEFna1o5QnpKOTExdUZqQkJIRHFzRndheXVpTUwzWUMvVVhQUTFZNDNoTnh2RTRZZlpiWSsva2ZoVVhMc3d3OFV1cWFaRUNDOW1ZWEpPd3NPWjYxYS82Y1pmZTN6ai9BSmN0dmZwcXoyZGdtU3dsMGcxT1h6dlRXSnhPSmprQWhCSUF6eXNaL09hVjhaZ1pJaUJJaFcvTHVQa1J0VWFuN0Q1cGc4VU5DeXhTWCtwY0EreFRZM3BMK1VES1d3Mkdra2lKWldzb0gxbHZzM21MWDNvbjJhOXBHNW1ENWhPUmJYWTFoN2NicmdDZWhydjkxeTNpTE5EUEtTRDZDM0NEdy9NOC9kVzNLc3BCR3VRYytTK0hlYXh5WExkWDBqRDBSeUgyaitWWDl1Zy9ud3JSNEhDQU5CSXk0RDNYbSswTm9Qa2tjYnpKelB0NGVpMTJ0c0sxdFYvbVBEY2tTTzVrUm1pMGRyR3JFc212bGZheDhiVkZteU9SY1JIaGlWTHlhTEVFMnM0QkZ6YnBmZXJBU05QRlFUQkkwMFFmbVgzQkNweldKcTV4SEQ4eTR2NW42SmsxQlFRVHBPb0JyM0l2WUQ3alhtYTVHSTR1MmpuU2FNU2RtNVVNdW1TMTdXUE5UYlpoUnZqelN4Qy9NMXByNGErU29ab3d3SVBJMW95NHNoN051WE5UK0ZTV3JMRFRCSFZ5b1lLd1lxUmNFQTdnanFDTGltWjRCS0s0cm9QMGxwMFcraXVvNHpnSEN5K25DenhhZ0NBUFNXeDNHemJqMzFYZi93QTBQWEZtMys3L0FQT3FjeGxQdTJiaUFjbTMzRWU1QlhQNnNzdXlTYVdONWd0b28xSkxuWUczMVY3ejkxZEV5M2dMQ3hrTkpxbFA2K3kvNFJ6OXBOTWsyRlJvMmlzQWpLVnNCWUJTTGJBVXRqQnZBdThsSWgyUzhnbVExeUE1OEZ4WlY2VXljRDRXWnNTa2tTK2loczdIa0ZJM0YrcDdnS3BNYmhHaWthTnhaa05qK0JIZ1J2N2Fac2s0eUdHaFdGY1BmVGU3YTdhaVNTVGJUNDFwOFJ2R0tveGQrVlYrTkZUNFRzMlRBek9MZDNvYnNjTWdmRlQvQUpROHV4RHVzaW9XaVJlbGlWTnlXSkhPMXJiK0ZJZ0ZQSitVTnY4QTQzL00vd0RHazNUcWF5TDZ6ZWlvMzVuWlIzOTFJd1lsWXpja2JWYWFlMXB6YUw0SkplMGhjVGVvbzVhVlZqL0M2THdLVDgwVHdacmVWL3pKb3F6eVhBZGhCSEYxVWIrWjNiNGswVlJ6UERwSE9IRWxhekNSbGtER08xQUgyVTJvV0t5bkR5bThrS01lKzFqN3h2VTJpa0FrR3duWE1hNFU0WDNxQmg4bHcwWnVrQ2dqcmE1SGxlOXFuMFVVRnhkbVRhR01hd1UwQWR3cFZuRU9VakV3bU85bUIxS3g1QmhjYitCQklwR0hDT0sxYWV6RnZ0YWwwK2Q3MytGZE1vcm9jUXJQQ2JUbXdyQ3hsRWRlSGtRbGVISmZtc1lVSFZmZG0vWFA0ZDFSc1hqSTR4ZDJBKzgrUTVtcjdpTE1WZ2hMRUJtYjBWVTlTZXA4QnpybG1MMU14ZGlXSjZtc3J0TENOYk9YTk91WkhJL3ZYNEZiYk5qa3hnTWtwclBYbjNjcTA1Y3RFeU54REQzT2ZHeS9uVy9EWmxGSnNyYjl4MlB4NTBzd1pQTzZkb3NMc20vcEFHMWh6ODZoaW9Ub0FOUVZiLzBNRHJERG1Pb1BtUFkwbncxck5WZVNaaVhHaC9XQTJQZVB6cTBwa2lqU3JueG1OMjZWcW1rQ2dzeEFVQzVKMkFBNm1rTFBPSzVKQ1VnSlJPV3JremY5bytOYitPTTJMUDhBTmtPeTJMMjZ0ekMrUUZqNWtkMUxrRU50enpxNjJmZ044QjdoK3YybjQyZ0RlSzNRcmJuek81UGVmT3R3ckFWbUswb0FBb0xwTnJJR3BPYWNXVHBESEZLeGtpMTM5TGRsc3A1TnpJMzVHb3dxdTRoaXZEZjdMQSsvYjhhWEhrOEZWKzFJV3pZU1JyaGVSVjdES3JxR1FncVJzUlVqQWYxc2YrOFQrSVVsOE5aZ1VmczJQb09mYy9UMzh2ZFRlamxTR0hNRUVlWU42c2htRjVQaUlEQkp1OE5SM0t6NHdZakdZZ0FrQm4zQUpzUnNRQ091OU1iUlh6U0o3WDBZVlpMYy9WaE52amFxck9jYmc1TzNuVXM4czZnTEd5VzdGamJVMnU5ankydDMxdGw0amhEeVNJV0RuQnBBaEF0WnhzeHZmYTF0alVjN3hhS0hDdlFLYTB4aVJ6aTRadUR2SXVQcXArRVJqanN0bWNFTkxDVmJVQ0RyalIxYTRQbUtYc0NQOVhZMGQwOFAzc0trWWJpY0JjTThoZVNiRHpPMTJOOVVUamNhaWIzdlVYTXN3d3k0ZVNEREdSdTNsV1JpNmhkQ3BjcWdzVHFOenpvRFNNcTVmZS9kZEwySDZyNEh2emFCOXdscHFqWXpGTEdMdDdCMzFJbmtDZ3NlUUY2Vk1WT1pHMUhyeUhjTzZueWs0YUR0RG5vbjdGY2U0MlNLT05KT3hSWTFXMGV6R3lnWForZDl1bHFvSnNWSXh1enV4NzJaajk1clFxMkFIY0t5cVV5TnJCOUlUejVITzFLbTRMT01UQ2J4VHlwNU8xdmF2SSs2bjNoZjVUbXVJOGFBUWR1MlFXSS9iUWN4NHI3cTVwUWE1SkF5UWZVUHlseHp2ak50SytnYzd5U0xHSXJxd0RhYnBLdGlHVTdpL3dCcGFTOFh3cGkwUDlWckgybElQdzUvQ29ueVZjVEdPUVlLVnZvNUNleXY5U1RucC9aYmYyK2RkT3pmTUZnakxrWE43S084bjdoVlljUkxnN2FTTjBjK1NrUzRIRDRzZHFiQjQxOHI1eFhPc0x3eGkzTnV4SytMRUtCNzk2Y2VIZUdFdzU3UnlIbHRzZnFyMzZiOWZHb1dFNHJmVjlJaTZDZnEzdUI3VHZUWUQxRlJ6dFE0bHBEVFE0Z0x1RTJaaDRqdml5Uno0ZUM5b29vcGxXcUtLS0tFSW9vb29RaWlpaWhDUitQSmlaVVRvSTcrMWlmKzBVdEFVMThkNFloNDVlaFhRZk1Fa2ZBbjNWU1pKaEVsbVZaR0NwdVdKSUd3NlhQZnlyUDRscmppSE40a3JaNENWak1FeC9BQTM0RTM2cDU0Znh5L01RM1NLTmczN2luOExWekJzS2I3R3V1UVQ0VkU3TlpJUWxyYWRTVzhiNzcwbzhWNFREZ3E4REp1U0dWQ3BBN21zT1ZTTWRDWFJ0TzhEdWo4S0JzdkZCazBnM1NOODJMOFRSODlkRXU1TGcyN2FQY0M3QmV2MXRxZkJraUtDMGpraFFTUUJiWUM1M3BaNGF3eGZFUjl5bldmSmY4QU8xTytiS1RCTUJ6TVVnSG5vTkl3R0RpbGFYeU52UEwzOVVuYkdLZUpXdGFheXo4MTg5eXphMmFRODNZc2YzamUzeHE1ank1UDZPZkUyUGFyaUZqQnViYURGcnRwNWMrdFVVZjVVNVpKaWxqeXVkbWhqbUF4Y2ZvUGZUdkh6MkkzclFFQUFBS2RPUzNkM2Y3aDQ5RmxOa0VQOUk0YkRxcDdPU09GbkdwamZVck0rOTdpNFhwVzU4a3c0eldLQUxmRHk2SFZidHVqeEVqMHIzOVpUMXE2MHFjeEU1MHhySGxpeTMzMHBkV1VlTmhxUGp0V21HQWZPTXBrU1FTQUF3RjFEQUV3NmdObTM1TWVmZFNMK3lyeEs0Z1puK0I4NmNiNVhrUFdrdThNWmZHK0lsN1ZkU1F4VFM2TGthdXlPeWs4N2IvQ2pQOEFDUXk0U0hFSkNzUmxhV0dSVUowM1hreWc4dHFsOEtrSEZZdFJ1Zm0rTEZoMzNHM3dyUml0OHF3Ly93Q3FXM2lOUDUxM2lwRHJNdWZObzZVV3UrOWQvVmNtbWlhTnlwMlpUOFJ5UDQwL1lTYldpdDlwQWZlS3A4Nnl6dEJyVDF3UDhRN3ZPckRKMUlnakIyT2diSHA0RVZZd3ZEZ3NEL3FIQkhET2FEcFpvOHgrcXpVbzFyZXRwclU5UHJPaFlHc1RXUnJGcTRVNEZVOFFTMlFMOW8vQVZVNEdIVTErZzMvS3JQUFlpeFFEeDluS3ZJSVFvc1A1TktqWlp0V2tUdzJFQWFtMHdaTnd2TmlZaEtwQ2hwMGdRRUc3czNyRmJkRVVFbnlQZFVyR2NCWTlDOW9neUpxUGFCNHdHVmViZ0ZyMnBuNFR6bVdUQ1lkYk1CQmlOSk1hQkZHSFdHekY1Q05BOUovU043MkpJcmJ4SG1DeEpKQXNCZEk4TkxISzBLQlZoT0lkWGlDdDlpMXdiYkd3SnBrenpiKzZLK0huODVLV0lJaXkraVNmOUY1dm04T0lOd0pwQ3RpamdSb1Awc2pmVlRmbmJsdlVxWGdzaUNYRUxqY0xJa0k5SW83TnVlUzMwK3NlZzhSVDFsK0oxWmIyanp2TkNtRDdHVklUcWtFc2pEV2JFV0JSQ0FMOGhlcUxOWnN1R1hZVVd4ZllzODVRQXdnbVJXc1RMME5yN1c2VWR2SVRYV3NoZjM0MWt1OWpHQjRjVDh5WFBJcFdSZzZtektRd1BjeW00UHZGZlFPWlFIRjRhTjA1c3FTZ2QrcGR4OGErZTYraWVGRUl3V0dCNTloRi9BS2IycEdIc0FQR3g2SXdHZThPNUxXRnlPWm0wbEN2ZVdGZ0IrUHNwNGpTd0FIUUFlNnZhS3BjUGhtdzNSdTFaTmFHNklvb29xUWxJb29vb1FpaWlpaENLS0tLRUtObUdDV2FNeHZ5UFhxQ09SSGlLNS9tZVVTUUd6QzY5SEhxbjhqNEd1azBFZER5cUxpY0kyY2NqelUvQTdRZmhUUUZ0UEQzQzVXQWF5QXJwRFpiQ1Rjd3gzL1lXbzJMeUREdjlUU2U5UFIrSEtxMTJ5NUFNaUZiamJrUk5Gcmg2clR3cGdsU0VPUFdrM0o4QVNBQjRWY0VkLzhBSXJWZ2NNSW8xakJ1RkZybXQxVzhMTnlNTjVEMTRyUDRpVXlTdWZlcFA2OUY4K1ozbDV3K0lsZ1AxSElIaXZOVDdWSW9qekNRUVBoaGJzMmRYYmJmVW9zTEcrd3RYU3ZsSzRaTXlqRXdyZVNOYk9vNXZHTjdnZFdYZnpCUGNLNVVwcVZkaGFYQ3p0eEVRZHhGWDBJK1dGYnk4UTRoZzRMTDZjQzRkckwraVM1QUcreDNOelJnODdualdKVVlBUXltVmZSQjB1UVFUNGl4TzFWZ3JJVVVudXlaVlVGZFM4UzRocEVsMXFIakxGU3FJdnJldGNBZWtENDFxekxPSnNScDdWaFpBUXFLcW9xMzUyVWRUVmFLeUZjWEJFd0VFQVdORkl3dUhhUjFqUVhabUNnZUxHMWRiemJoSER6SW85UjBRSUpGNmhRQUxqNjNMejhhb1BrNTRkSVB6dVVXMklpQjdqc1pQZHNQYWU2bit1QnhhYkN6KzEzeDRnOWtjd1B2K3RMWEtNeTRMeGNWOUtDVmZ0SWJuMnFmd3ZWRkxsMHcyTUxnK0tPUHdydWxaYXFrTnhiaHFGbUg3SGpKdHJpUFg4TGhjR1M0bHpaSUpEKzYxdmVSYW1MS1BrOG5jZzRoaEV2Y0xNNTkzb3I3ejVWMUFtaXVPeFR6cGtuSTlsUk5OdUpQb2tQampoT0pjdkl3OGRqQ3dsSjVzd0FJY2s4ejZKdis3WElEWDAwUmZZOWE0angvd29jSExyai9BS2lWam83MGJtWXo0ZHg3dktwT0JuMVk3dzkxekc0ZWdIc0dTaTVkeGppSVZqalZZakZIRzhmWkZQUmNTRWFpOWo2VEczUHo3eldjbkdrNDByQkhEQWlxNjluRW5vc0pQVzFCaWRYSzRwYnJ5cDNZUmszU2lkdkpWV3JoK0pjVDJNY0NQMlVjYU1sb2hvMTZ3UXpQYjFtSVBQMjg2d3pyUHBNUkhGRVk0bzQ0ZFdsSWswQzdXMU1kK1p0MHFwTmVvcEpBQUpKTmdBTGtrOGdBT1pydlpzQnVsenRIa1ZhbDVObHJZbWVPQmVjamhmSmViTjdGQlBzcjZPalFLQW9GZ0FBQjRBV0ZKbnljOElIQ0laNXg5UElMYWY3TkQ5WDlvOWZJRHZwMXFveGt3a2ZRMEgzVnJoSVRHMnpxVVVVVVZFVXRGRkZGQ0VVVVVVSVJSUlJRaEZGRkZDRVVVVVVJUlJSUlFoRkZGRkNFVWxjVmNBeHpreTRZaUtVN3NwOVJ6MzdlbzNpTnZEclRyUlFDbllabnhPM21HbHdmTWVIc1hBYlN3dUI5b0RVditKYmozMVhlRnQrNnZva0dzZXpIY1BjS1Z2SzBidGcxOVRQSTE5N1h6MnROdnlkNU5IaUozYVZkU1JLRzBua1hZN1hIVWJFMnB1NGo0SGd4RjVJclF5bmU0SG9NZjFsSEkrSStOWjhBNUhKaFlwUk1vRHRKMElJS0tvQUlQY1NXbzNrN1B0Qmo4TzRzTk8wcmltaWlpaWtxaFJSUlJRaEZGRkZDRVVtL0t4aHRXQUwvQU5uS2pldzNRL3hVNVZoSkdHRm1BSTdpQVJzYmpZK0lwY2I5eDRkeVNKRzc3QzNtdUVaRHdaak1WWmtqMFJuOUpKNksyOEI2emV3VmJUZkpmamdmUmFGaDM2Mkh3SzEyU2lwUng4cE9WQlJSZ1k2bzJWeVBBL0pWaVdQMHMwVVkvVjFTSDdnUGpUM3czd2JoY0g2U0tYbC90WHNUKzZPU2V6ZnhwaG9wbVRFeXlDaVU5SGg0NHpZQ0tLS0tZVDZLS0tLRUlvb29vUWlpaWloQ0tLS0tFSW9vb29RaWlpaWhDS0tLS0VJb29vb1FpaWlpaENLS0tLRUlvb29vUWlpaWloQ0tLS0tFSW9vb29RaWlpaWhDS0tLS0VJb29vb1FpaWlpaENLS0tLRUlvb29vUXYvL1onXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0xhIG5hdHVyZXphJyxcclxuICAgICAgICBjb250ZW5pZG86ICdNZSBndXN0YSBzYWxpciBhIGNvbm9jZXIgbGFzIGRpc3RpbnRhbiBmb3JtYXMgZGUgdmlkYSBxdWUgZXhpc3RlbiBmdWVyYSBkZSBsYSBjaXVkYWQgeSBlc3RhciBlbiBjb250YWN0byBjb24gbGEgbmF0dXJhbGV6YS4nLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2h0dHBzOi8vY29uY2VwdG8uZGUvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvbmF0dXJhbGV6YS1tZWRpby1hbWJpZW50ZS1lMTUwNTQwNzA5MzUzMS5qcGVnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdWaWFqZXMnLFxyXG4gICAgICAgIGNvbnRlbmlkbzogJ0F1bnF1ZSBtYXMgaGUgdmlhamFkbyBkZW50cm8gZGVsIEVjdWFkb3IgbWUgZ3VzdGFyaWEgY29ub2NlciBvdHJvcyBwYWlzZXMuJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdodHRwczovL3d3dy5lbnRvcm5vdHVyaXN0aWNvLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOS9hZ2VuY2lhLWRlLXZpYWplcy0xMjgweDcyMC5qcGcnXHJcbiAgICB9LFxyXG5dIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9