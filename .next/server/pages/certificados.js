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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/certificados.jsx");
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

/***/ "./pages/certificados.jsx":
/*!********************************!*\
  !*** ./pages/certificados.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.jsx");

var _jsxFileName = "E:\\ReactJs\\PortFolio\\portfolio3\\pages\\certificados.jsx";



const PostCard = ({
  certificado
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "col-md-4 p-2",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card h-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "overflow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: certificado.imagenURL,
        className: "card-img-top",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-body",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: certificado.titulo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "texto-justificado",
        children: certificado.descripcion
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "btn btn-outline-primary",
        href: certificado.certificado,
        target: "_blank",
        children: "Ver certificado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

const Certificados = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  footer: false,
  title: "Certificados",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: _profile__WEBPACK_IMPORTED_MODULE_2__["certificados"].map((certificado, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostCard, {
      certificado: certificado
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Certificados);

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
  imagenURL: 'data:image/jpeg;base64,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'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jZXJ0aWZpY2Fkb3MuanN4Iiwid2VicGFjazovLy8uL3Byb2ZpbGUuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTlByb2dyZXNzIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJOYXZiYXIiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsInBhZ2UiLCJwYXJzZWRIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQb3N0Q2FyZCIsImNlcnRpZmljYWRvIiwiaW1hZ2VuVVJMIiwidGl0dWxvIiwiZGVzY3JpcGNpb24iLCJDZXJ0aWZpY2Fkb3MiLCJjZXJ0aWZpY2Fkb3MiLCJpbmRleCIsInNraWxscyIsInNraWxsIiwicG9yY2VudGFnZSIsImV4cGVyaWVuY2VzIiwicHJveWVjdG9zIiwibm9tYnJlIiwiaW1hZ2VuIiwicnV0YSIsInBvc3RzIiwiY29udGVuaWRvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtR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O0FBR0lILGFBQVcsRUFBRSxZQUhqQjtBQUlJQyxXQUFTLEVBQUU7QUFKZixDQW5Cd0IsRUF5QnhCO0FBQ0lDLFFBQU0sRUFBRSxVQURaO0FBRUlDLGFBQVcsRUFBRSwwQ0FGakI7QUFHSUgsYUFBVyxFQUFFLFdBSGpCO0FBSUlDLFdBQVMsRUFBRTtBQUpmLENBekJ3QixDQUFyQjtBQWlDQSxNQUFNYyxLQUFLLEdBQUcsQ0FDakI7QUFDSWIsUUFBTSxFQUFFLGFBRFo7QUFFSWMsV0FBUyxFQUFFLGtHQUZmO0FBR0lmLFdBQVMsRUFBRTtBQUhmLENBRGlCLEVBTWpCO0FBQ0lDLFFBQU0sRUFBRSxjQURaO0FBRUljLFdBQVMsRUFBRSxzRkFGZjtBQUdJZixXQUFTLEVBQUU7QUFIZixDQU5pQixFQVdqQjtBQUNJQyxRQUFNLEVBQUUsZUFEWjtBQUVJYyxXQUFTLEVBQUUsa0VBRmY7QUFHSWYsV0FBUyxFQUFFO0FBSGYsQ0FYaUIsRUFnQmpCO0FBQ0lDLFFBQU0sRUFBRSxhQURaO0FBRUljLFdBQVMsRUFBRSw2SEFGZjtBQUdJZixXQUFTLEVBQUU7QUFIZixDQWhCaUIsRUFxQmpCO0FBQ0lDLFFBQU0sRUFBRSxRQURaO0FBRUljLFdBQVMsRUFBRSw0RUFGZjtBQUdJZixXQUFTLEVBQUU7QUFIZixDQXJCaUIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ2hLUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jZXJ0aWZpY2Fkb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NlcnRpZmljYWRvcy5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmsgPyBcImJnLXByaW1hcnkgdHJhbnNpdGlvbiBjb250ZW5lZG9yXCIgOiBcInRyYW5zaXRpb24gY29udGVuZWRvclwifT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICBcclxuICAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtkYXJrID8gJ3RleHQtY2VudGVyIHRleHQtbGlnaHQnIDogXCJ0ZXh0LWNlbnRlclwifSA+XHJcbiAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgKX1cclxuICAgICAgICAgXHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMT4mY29weTsgRnJhbmtsaW4gQ2HDsWFkYXM8L2gxPlxyXG4gICAgICAgICAgICA8cD5Fc3RhIHDDoWdpbmEgZXN0w6EgZGVzYXJyb2xsYWRhIGNvbiBOZXh0IGpzLCBIdG1sNSwgQm9vdHN0cmFwNSB5IGNzczM8L3A+XHJcbiAgICAgICAgICAgIDxwPjIwMjEgVG9kb3MgbG9zIGRlcmVjaG9zIHJlc2VydmFkb3MuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXHJcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1wcmltYXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlBvcnRhZm9saW88L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC1vZmZzZXQtNCc+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvaW50ZXJlc2VzXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICBJbnRlcmVzZXNcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jZXJ0aWZpY2Fkb3NcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5DZXJ0aWZpY2Fkb3M8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9naXRodWJcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5HaXRIdWI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUoXG4gIHBhcnNlZEhyZWY6IFVybE9iamVjdCxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBhcHBseUJhc2VQYXRoID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gIClcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gIHJldHVybiBwYXJzZWRIcmVmXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlbXVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXNQYXRoKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgY2VydGlmaWNhZG9zIH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgY2VydGlmaWNhZG8gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcC0yXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjZXJ0aWZpY2Fkby5pbWFnZW5VUkx9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMz57Y2VydGlmaWNhZG8udGl0dWxvfTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG8tanVzdGlmaWNhZG9cIj57Y2VydGlmaWNhZG8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiXHJcbiAgICAgICAgICBocmVmPXtjZXJ0aWZpY2Fkby5jZXJ0aWZpY2Fkb31cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlZlciBjZXJ0aWZpY2FkbzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENlcnRpZmljYWRvcyA9ICgpID0+IChcclxuICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPVwiQ2VydGlmaWNhZG9zXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICB7Y2VydGlmaWNhZG9zLm1hcCgoY2VydGlmaWNhZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGNlcnRpZmljYWRvPXtjZXJ0aWZpY2Fkb30ga2V5PXtpbmRleH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYWRvcztcclxuIiwiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogNjUsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvIC0gSW50ZXJtZWRpb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiBcIlR5cGVzY3JpcHRcIixcclxuICAgICAgICBwb3JjZW50YWdlOiAxNSxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY29cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJIdG1sIDVcIixcclxuICAgICAgICBwb3JjZW50YWdlOiA3MCxcclxuICAgICAgICB0ZXh0OiBcIkludGVybWVkaW9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJDc3NcIixcclxuICAgICAgICBwb3JjZW50YWdlOiAyNSxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY29cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJSZWFjdCBKc1wiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDY1LFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljbyAtIEludGVybWVkaW9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJOZXh0IEpzXCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogMzUsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJHb2xhbmcgKyBHaW4gKyBSZXN0IEFwaVwiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDY1LFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljbyAtIEludGVybWVkaW9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogXCJTcWwgU2VydmVyXCIsXHJcbiAgICAgICAgcG9yY2VudGFnZTogNjAsXHJcbiAgICAgICAgdGV4dDogXCJCw6FzaWNvIC0gSW50ZXJtZWRpb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiBcIlBocCAtIExhcmF2ZWwgKyBSZXN0IEFwaSArIFBvc3RncmVTcWxcIixcclxuICAgICAgICBwb3JjZW50YWdlOiA2MCxcclxuICAgICAgICB0ZXh0OiBcIkLDoXNpY28gLSBJbnRlcm1lZGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6IFwiRGphbmdvIFJlc3QgRnJhbWV3b3JrICsgUG9zdGdyZVNxbFwiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDE1LFxyXG4gICAgICAgIHRleHQ6IFwiQsOhc2ljb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiBcIkJvb3RzdHJhcCA0IC0gNVwiLFxyXG4gICAgICAgIHBvcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIHRleHQ6IFwiSW50ZXJtZWRpb1wiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgIGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgdGl0dWxvOiBcIkFwcmVuZGl6YWplXCIsXHJcbiAgICAgICBkZXNjcmlwY2lvbjogJ01lIGd1c3RhIHJlYWxpemFyIGN1cnNvcyBlbiB1ZGVteSwgbGlicm9zIG8geW91dHViZSBjYWRhIGHDsW8gcGFyYSBlc3RhciBhbCBkw61hIGNvbiBtaXMgY29ub2NpbWllbnRvcyB5IHJlZm9yemFyIHTDqWNuaWNhcyBkZSBlc2NyaXR1cmEgY8OzZGlnby4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86IFwiVW5pdmVyc2lkYWRcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0VzdHVkaWFudGUgdGl0dWxhZG8gZGUgSW5nLiBTaXN0ZW1hcyBDb21wdXRhY2lvbmFsZXMuJyxcclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0aXR1bG86IFwiRGVzYXJyb2xsbyB3ZWJcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0NvbiBMYXJhdmVsLCBHb2xhbmcgLSBHaW4gbyBEamFuZ28gUmVzdCBGcmFtZXdvcmsgcHVlZG8gZGVzYXJyb2xsYXIgcHJveWVjdG9zIFNQQSBsb3MgY3XDoWxlcyBwdWVkZW4gc2VyIGNvbnN1bWlkb3MgY29uIFJlYWN0IEpzIHVzYW5kbyBjc3MsIGh0bWwsIGJvb3RzdHJhcCcsXHJcbiAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0aXR1bG86IFwiVGVjbm9sb2fDrWFcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ01lIGVuY2FudGEgbGEgdGVjbm9sb2fDrWEsIG1lIGd1c3RhIGVzdGFyIGFsIGTDrWEgY29uIGxhcyB0ZWNub2xvZ8OtYXMgcXVlIHNhbGVuIGNhZGEgYcOxbyB5IGFwbGljYXJsYXMgZGUgYWxndW5hIGZvcm1hLicsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIlByb3llY3Rvc1wiLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiAnSGUgcmVhbGl6YWRvIHByb3llY3RvcyBwZXJzb25hbGVzIGxvcyBjdWFsZXMgZXN0w6FuIGVuIG1pIGN1ZW50YSBkZSBnaXRodWIuJyxcclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICAgdGl0dWxvOiBcIlRyYWJham9cIixcclxuICAgICAgICAgZGVzY3JpcGNpb246ICcyMDIwIC0gMjAyMCBjb21vIHByb2dyYW1hZG9yIGVuIGxhIFVuaXZlcnNpZGFkIEVzdGF0YWwgZGUgTWlsYWdybyBlbiBEamFuZ28gUHl0aG9uLicsXHJcbiAgICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3llY3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICBub21icmU6ICdQcm95ZWN0byBlbiBHbyArIFJlc3QgQXBpJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0VzICB1biBwcm95ZWN0byBwZXJzb25hbCBlc2NyaXRvIGVuIEdvbGFuZyBjb24gZWwgZnJhbWV3b3JrIEdpbiwgY29tbyBiYXNlIGRlIGRhdG9zIHVzYSBQb3N0Z3JlU3FsLCBzZSBwdWVkZSBjb25zdW1pciBjb24gUmVhY3QganMuJyxcclxuICAgICAgICBpbWFnZW46ICdnby5wbmcnLFxyXG4gICAgICAgIHJ1dGE6ICcvZ28nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5vbWJyZTogJ1Byb3llY3RvIGVuIExhcmF2ZWwgKyBSZXN0IEFwaScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFcyB1biBwcm95ZWN0byBwZXJzb25hbCBxdWUgdXNhIGxvcyBtaXNtb3MgbW9kZWxvcyBxdWUgZWwgcHJveWVjdG8gZW4gR28sIGNvbW8gYmFzZSBkZSBkYXRvcyB1c2EgUG9zdGdyZVNxbCwgYWwgaWd1YWwgcXVlIGVuIEdvLCBlc3RlIHNlIHB1ZWRlIGNvbnN1bWlyIGNvbiBSZWFjdCBKcy4nLFxyXG4gICAgICAgIGltYWdlbjogJ2xhcmF2ZWwucG5nJyxcclxuICAgICAgICBydXRhOiAnL2xhcmF2ZWwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5vbWJyZTogJ0Zyb250IEVuZCBTaXN0ZW1hIExhcmF2ZWwnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiAnRXMgdW5hIHBsYW50aWxsYSBxdWUgZGVzY2FyZ2UgcGFyYSBjb25zdW1pciBsYSBhcGkgaGVjaGEgZW4gbGFyYXZlbCwgZXN0YSBoZWNobyBlbiBSZWFjdCBKcyB5IHJlYWN0c3RyYXAuJyxcclxuICAgICAgICBpbWFnZW46ICdibGFjay1kYXNoYm9hcmQtcmVhY3QuZ2lmJyxcclxuICAgICAgICBydXRhOiAnL3JlYWN0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBub21icmU6ICdDViAxJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjogJ0VzIGxhIHByaW1lcmEgdmVyc2nDs24gZGUgbWkgQ1YsIGVzdMOhIGhlY2hvIGNvbiBSZWFjdCBKcywgaHRtbDUsIGNzczMsIGJvb3RzdHJhcCA1LicsXHJcbiAgICAgICAgaW1hZ2VuOiAncG9ydGExLnBuZycsXHJcbiAgICAgICAgcnV0YTogJy9jdidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiAnTWFwYSBjb24gSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFcyB1bmEgbWluaSBwcsOhY3RpY2EgY29uIGphdmFzY3JpcHQgZW4gZWwgY3XDoWwgc2UgZGlidWphIHVuIG1hcGEgeSBzZSBtdWVzdHJhbiBkaXN0aW50b3MgcHVudG9zLicsXHJcbiAgICAgICAgaW1hZ2VuOiAnbWFwYS5wbmcnLFxyXG4gICAgICAgIHJ1dGE6ICcvbWFwYSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiAnQ1YgMicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICdFcyB1bmEgYWN0dWFsaXphY2nDs24gZGUgbWkgQ1YuJyxcclxuICAgICAgICBpbWFnZW46ICdwb3J0YTIucG5nJyxcclxuICAgICAgICBydXRhOiAnL2N2MidcclxuICAgIH0sXHJcbiAgIFxyXG4gIFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgY2VydGlmaWNhZG9zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ1R5cGVzY3JpcHQnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBcIkN1cnNvIGRlIFR5cGVzY3JpcHQgZW4gbGEgcGxhdGFmb3JtYSBVZGVteVwiLFxyXG4gICAgICAgIGNlcnRpZmljYWRvOiAndHlwZXNjcmlwdC5wZGYnLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RlYUhWc2J6dmo5eVlodE9JV3B0eDZYaEtSdUFSMUR4R2NfdyZ1c3FwPUNBVSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIkphdmFjcmlwdFwiLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBcIkN1cnNvIGRlIEphdmFzY3JpcHQgZW4gbGEgcGxhdGFmb3JtYSBVZGVteVwiLFxyXG4gICAgICAgIGNlcnRpZmljYWRvOiAnamF2YXNjcmlwdC5wZGYnLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NORTBITFExSThWZzFHTi1rSGNaRFY3YmJKcFZXM1RsWmE4QSZ1c3FwPUNBVSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiBcIkdvXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFwiQ3Vyc28gZGUgR28gZW4gbGEgcGxhdGFmb3JtYSBVZGVteVwiLFxyXG4gICAgICAgIGNlcnRpZmljYWRvOiAnZ28ucGRmJyxcclxuICAgICAgICBpbWFnZW5VUkw6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVNzQUFBQ3BDQU1BQUFCRWRldmhBQUFCVTFCTVZFWC8vLzlxMStULy92OEFBQUJwMk9ScTErYi8vLzFxMk9KcjF1YWk0K3RqMGR0ajF1SGU5L243Ly85aDA5N2srUGoyMHFObTF1aGcxT0wyLy8vcTUrZHIzT2x1Mytudy9mMlczT0w2K1BqMTA2R1ZrWkVrVlZ4djN1NXV6OWxwdzlKMDErT3pyNjVSbWFQejhmRkFRRURlM3Q3RzdPN1M4L1dtb3FLMDV1eDQxTnpjdnBaTFQwK0YxOXk5N082WjMrTTBjWGpTejgvQXZiMmJscFZ0YVdsM2MzTk9WRllrUzFCQmc0bGZxN1Ztek53NlIwcWFtWlhNenNlSWhvVXNWMW92TlRzemJIRlFTVXNjTEN0S2tKNWp1TVExUlVwT2FtOUpXMlZOb3FkY1htSmFwN00vTlRRcFgyVjVlbmRDVmxnWE16azBPVGt6V0ZjT0ZSVWVNVGdVSVNnV1VsUTVlbjRWUTBzcEtDb0FNRG9iQndCa3ZjSXpTRTV2d05HZGlXeFNTRCs1cFlwN1kwbk9yNDJ6bG5WaVgxR1JmV1hDcFg4ek1pbmN3NkZIam84bEdRWlRRQ3BmVUVDc21IVC8zN1pxWDAzbXMrR3hBQUFWTGtsRVFWUjRuTzFkLzBQaXhyWlBjQ1lKQ1FFSkpzRXZDUUZYa0NnZ0tBcmFZdDJWN3F2V3JYdTd2ZDIrdXM5dHUzZTc5blhYL3Y4L3Zaa0VFREw1Qmh0MW4rWnpiOUdWZkpuNTVKd3o1NXc1TTZHb0dERml4SWdSSTBhTUdERml4SWdSSTBhTUdERml4SWdSSTBhTUdERml4SGlBWUJhYXJlM2xIWXgyYjNtNzFWcFl2TzhtZllsWWJXNjNkL2ZPT3FWdVlYOWYzMGZvZDB1ZHJaV0RuYSsramdtN0FkUHM3UjUyK3JvaFc2QnBGZ0NhaHVoWFRUUDBmbWZ2cExoNjMyMzhNdEJzdituMEZVMkRNTXR4a0FZMGhJZ3FTQ08yRUdnQVpGa3Y3ZTAwRWFmMzNkUjd4dm8zV3dWTGxoQUF5N0kyUXhEUzQwQjBGWTZlcnQxM1crOFBXRXFLejBxR2pGUU9rNFEvV0REa0Nnc1hSTktGbFJMUUxBczFmYVdkd09jdHRJcXROZXBSU1JuRFVHdFBqaldacFRsRUVZQloyaUxLa3FPQjhyRkFNeTY2cDkyK2Joa3hwZnZOR2xVOE9DcDFTMXZmcnQ5MysrOEN6UmU3ei8vclpIbUJvcFpYZEFWQXFNbDZvVkJBZGgxenhZMjRnbEEydmpzOFdTNjJpc3NuaDZjYUlsVG05cjVIY3FnZ3E2K1Zuang0Yzcrd3VkVm5aYzNvbnIzWUtja2MrclY3OXNQT2krV2RrNVZqUTBHV0NReTRBa0E3L1haOTZDMHNicjh1eUFBQzVlaFlzNlNQMVM1K1dYellXdGc4UjZLRTFJblZqR2Q5SkZUYTZjdjFvWHkwVGpxYVpkd3hWd0RLWnozOFY4WUM4citlZGhWa3Y1U2pqaWJMa0VPMFhXemVZMGR1SDJ2bmx2WEdwdWhWQVVDV08vd0svVFV4L0xwMWJ0Z0RJUHFVOTFyVzM0WmNVZFRUQzZ5WHlzcHAvMEpCQjdCS3AzVS92Ymdidk5RUlA4amFzTnlidmt4RDg4M2FEVkVZcTk4YVExdDFSQkN4ZUE1WjlJM3hiRzd1VU9NQTRMaUhMRmpGa2d5aDBpOTEyYTBTVWpkbGovQ1kxbFkweTFwcDNaN0w2Y2N5bGlkOWJtNnVwTkVzcmEwOFlQUCt4RUJtcUlTNk92ZGM0V2p0cnlKNXlIS1h4V3FvbmJ2WjdRTVo4NGl2OEM5a3U0RGNhZDU2ays4TGk0Y0tDd3hNMVk4RzlqSmZVZ3pCeU9vS3N2ZzAzVjlHcnVaYTB5RTN2UXNjQU5IYXE3a09pb2lBWEhxNEJtdHRDeWtlMXFDNVUwU0lmSXJkeWRhNlF3L2IrNGdPRFV2TUNUcHdVdkphSlV1d1lQZVZ3V0t1SHJCY3JSMGhkMVArYVc3dVcvUVR5bHNMMU9JVHhNZnl4RUhyZld6VC9wMmdsakdwY3hOTUx2eHN4WTJzOWdZcE0yTDA5Y05OMWxnNkNBby96WFd4anlXdklDR3krSmlRanRZeFVpL2xpS0orc2I2Yk1QR3IyUElqeUoxVFJDanM3OXh0Kys4UUNXcFhSejRWYS93a1l4OUwrMjlxMGFKajdzWDRVV3NXVjg4cENuL1RhcmZIdjFzOXM4Nms2Y0toRElGeHZuQzNIYmhUclAxYmd5em9kckJRakxocTlrNG1qckc0V2xta050RjNDMTlOaE1qTmpwMjdvYlU5UTlGZmYzMjNyYjlUaU5UMmxnYms1d1hzVXRMeTJTS0Z6ZFZhYjRLUDRpbm02cmhGTlMyWm03Qkk2OTFCUGt2dWRMOTdpZnpZdXdnSUdjWnlsMVZWVFZVcWxSVDZpZE5CREpWSUJKMDVpVUZqR2V0YzdJS0xBU2Q4dFZkUXpqV2MwS1BsNDZiTnh5OFROMjN2c3h3SGRDUnJ6U2R6TzJOYUpvclVnVEhnQ3ZaL3hRUlAyZHBab1diS2VaUGorRFRQOHpySGNiVnFCZkUxSlZjVzEyVUVUSGN1eEFuSVo5clorMW1HbUN1Z0kxdlVQSG5abXhDZHhVTVVBSEdjZG9ZSHdJbHZST3kzRDduaUxMMjlYYTZ3ODhkUWFybkdDeEwyajlHNFpHVkJJQzFJZXI0aUJrdEd3cjZJbUNsWDgzcWFreXdJRXNlYitYb21LRm1KeFhtOUN5MnVhR1hQSlVSQmZqdk9KY1A5bDhSWEM2L2xVV1paMmJzVGQwR3MxSGdPM1hTWWhJVDJiM2c2UU9McllwalVyRnBwOEdsQlFINGhua3dZNXNSWklXM1cxU0MycUIxOWNGY1dLVnJDNGJsL2pid0NUYjY0TUxUK2llUE1oVmY2VGY1ZHdXNm9HUFJjUHhOcVZlZm9ZZTUvN0FObnQyR1dGY3l5M1NOdmlKVThMd2s0MFFReFYyTXpDSkFEd240akU2QWJyN1RCNFVMMkdFVXlqSWd4K0c3dDNKQUxSOWlJdmVyMk55ZGNndUtlbmRvYXpGVjBiejJIckZaNWlmYUhWTXRRREJtbldVQi9WcXNtVWw0Tytsd2c3OHZXNm9vOE9sVHU5T3puTXJoaGNRL0owOXdBSlgybE4vVGFGNHNIeC9MWVBZQmNlT0Y1aDJoUU1RVWFCSEJGQzN6WlU2N0VhbHJDNGFzUFZmZ0NkUi9sV1B2NXB0TW9Kank0Q1g5YnU4Y0tMWjhQdWZwSmx2dEhQN1NYdjFydTdSNldETWN0dFFNMEVOMlNiVWVYemVYVDlKZ2Nld0d3VW9Qc3E2VW1GVk1DV1BYOCtRYTBVRk05OVJqSHZ5T3VnR3djdjJrWFc4M1dldnZOc1M2ek4ySTFOL2MvTXBRVnZkL3Q2NndDV1h0dTlZYXI4OXZoQ1lOaHlqd3lLSnlmOW95NklOVlVvcWNKU3EzWitvdk5zai9sTE9RclhseHRkOGVWaVFhYXBuZExwYi82KzRwQ1p3dmZYcjRkVXZYYjcxdUc5V1RRbzdFbldjZTVrczlXYjhlMll5ZXhLZ0dZelhKWnp0a3hOd2lteWt3NnhReVY0Z2Z5eEtHbSswa1dudGNENmJwSFczcjY1TEZBb2ZGOEtZY0NSYkQvY21QKyt2TERqM08vdkwyOFdscjY0NDNCWWR1STJDSzVRZ1BoclhDRkJwdUdGR0JseG9BYlo0Z1RCcDVCbG9yMVpjaDVEYW5xYnVCMzlqMnZJbTl0TENGY3o2TWY4eGdiYnp6bEYrZjVib2NydFFhNDhGeGh2MG5JanlzUnd5UWxQR1VlR3NpYlJHUzVvZTA5dW5DYmlKOGx6Sk5OMWZ6U3U1THNjYXpjZFVsQVI4QlVRalVGbk1XZWdpdEFqM1ZWVEZCNWFVSUR3bkRGU21nOEpaLzhpYWQwQXZvLzF4WkRTNGlyQVdOYlhseUJDNWZKaTgrbmlzbVpXY2hPMDFmTFY5MVBqYTVBMVN4Wm00WXNCRTZxdU5qM1RXOU5OdjQxYnhHMDhjZTdqV3RMd3J6bEN1aTM0MkJoQlFSRW5VNFFWNkFtRHFuS0N4eVlpR2RDVWNXeE9qbWNJcTY4Yjl2OWZmNTY0L0pqZTdPMy9QUTlNbG9iYjd4SEluTW44dEFabTNWaG1pN2VRS3JqMXFEL1YyZThBQzAwU0EvZVI2NnljdmZ3bDE1cmtjS3BtT2F6LzN3OGMzcWdZekMrajVncG5EYW9DMkFxVTNNREhRc1dRNVVGTU52NU5NMm5pTHpGcmpkWHlFeHFtL2lPVHhZUXhUOFlLSXIyNFlwTVJIZ3hFQm9wM3IxdHFNbEFRRUJCczljQVo1djNEQTljaHdVOFlZN2NDRXdqc093aENRNllSRk4zZkxnQ3JIS0NnODdOVmNUVnB1RWJaU2pQUSt1Z21ncEF4bTVremdRZVprYVM5SHkxWGsvbWRjRkR4d1FXNTdOTVQxUEhTWHF0a1V3MmFyemtFWkhEZE5uWjhMYkhzN01BbEFQc3FteXVvZ0YweDhoQ24raFYrU0dzdEZUNElPUnQydk9BSlRxS3MzdHB2Wm9aWkRKem1hVGhZTXNxYlFVUVJkRVVjcXhjdUVLeEIyL1dNK3J3d1RWdy9vSWtGTkttcytVN3VpOVhoNnVVSlZmb1FNTjNPQW9kRUdaTUdtZU9jSHlIb3dCdWxFYXl5MUxSL3d4N0NLcWtTVGtHTENmeDVRbmR5RlY1Y05NRmlJVmZFdmhhWFVVUHhVMW5nTUFuTXhOWFVKTnAxaVdtWm9XTVExWGF1bDhzcVp4dVU5VENIRTQrSEJpK1lZSjd4UU1KMFV5bitmUVlKdjZCSUtFeFRNU1pYdDB0ekFWU1VxVVNpYkcrSnFpVU9mWTlrSGd6V1ZHeEJ0WUVRRFlaU28zTWNINWpoSXJocGpGQzNzSFZ0cDljMGF5eXNyNStYdGdyTmsrd2ErVW5WNjlEVVVXSlFjWXFsYkt6NGxXQjVBb0tmSVc0SW9QQ0lFdWVnSVRzV0tPU29leUppcnBFeE1rc0xlZ1Z5c1VsVjJ1Q2l4WWFvb09yVXkvM2tzWlBDUnFucDRqMFVxZWcwTDVjeVh2aHVBb0hobEpabWh4TG9Ka2hwUmRuUEkwc0xhWDFmRDExODJmVmhDUlhrcWt5cmhtWG5FbVQ0Rk9UQnhVOVhYRzdkWWdGR3RkdU94TldKRmZUVEE0R2hka01oYnhRUXE2a21tcXBKM0V3a3pGcjFaUTYrSmVOT25MWUo3bEMvNmpsM0pQTUNTYkRrMzBTSENGMDg5aWZLd3hjd3oyb3NmWG02bkMyaVZRUDFsUzM1MnlxbEV2WjB6aEJOOGp4a01oVlFWUDFiZ2hTV2VLRytjbERtai83Y2hVYXMzTGwxWEtYcDhLbnBzaFNsOVBFRlFDZllid3ZJTmJJTzlZbUgrUkNaRno1OVR3Wkd1cWc0Vm5pRGtMZDZlMWExTm44SmNaaDk1eHdjY2dMaklNcGsyNnRucHNRZ05VOUpTUWJMZ1B3QkZlZUV5aE1YWUpDT0VpODdXU21KRkt1YXVJVXdUa0tqNGhNakNraXNmS2FFNk1TTHVaZGNnd2xoMkhsQ3ZpU0paOTVQckFVVG5Ka0VTRE1EbkR6bXdPV1M4TzRwQWRBZXR4YndHTmZ4Z2RxMGpHempEdWV3czZZSjFjaWxTU2NMTW5ob1p4cmREZ0VjZVgxMUpsR2pVRGVCUTBVbnlXdFVkcEswRTBDZ3RxRUVGQU41TFJpeDlYcncza0JWakNEeWtQS2t0TkhFUndoNGN1d091Z1BYSklVQURGRVF0NSs2aXBQQkdpd1B0SFZpa1FQZkFxV0hmem0rSEFBb0g0SGNKVkpPMCtUSm1aMEVpak9pNGFybyttclA5elV3UnFweW9MVE93RjA3bWF1Tm9FaUpUekNBM3ZOaDhlSGcydGREUnBGUlo3Z3l1Rmc3ZWpFZFdmaktzS0ZBRlV5UTJlT1ZWZ2xxSXBBQjg5Q1R5THZlMGNMaERoS2pwbkNYdUV6R0xyQjFGeDUyVmlNQnVIMVNnMFU3dzY1RWtVVGNLRW1Wc2N1UUdTalNKQnk1ZUJxdVIrSmd5VWZUVmRaaS9ydE1ud05ESnBCWkROUnE4ZTRyUVJWekpDUU1vRk5Fb2t3WjRKZ0VWZWpSY1BWMmJSYzFYRlZIVGZJWU9GUGJuL1FvWnhPY0RYaE1ZaTFLV2FSaHhkUUE3MnpERThNS0E2dWlxZlQzOWdGOHRtVVM4VnplcGF6ODMyanNnNG8yRjY3eWhOYzRaQi9xSU5NS2oxOWs4MWNZQXhXbHB4NkxUa1NEYzFUbnhtSDhKQ1BwdVNxTWVhdFMxQ3lmbVp0dVVxbGlhVHVmbVlVemVCVHB6WHNORzI0SkNnY1NBck93SW9mbnlSY0s2NjMvWk15WVNILzlmYnRUbkdLS01RcUFyWlF0MUd0VmdlRlltNWNwWWIxWGNoajk1c2k4SUlSSkZkNDJ0VjVYZk9HNFBXM3Y3Lzc0L0pZamtJSmxlT3IrZmxQSHlLcGFuRGhTaHFiZFo5cGZwVDNTY2ZZVU1rODhxaUlaT0hKYjNnTy9zK09QTDFFazVDUFArSENoL2RSVE5XN2NDV01iRHNqemlKV2REcmo1NlJnVklrRWxwQWNjTVY4dUpvZmNCV0ZYTW1sZDFaOXlQc0kxaEJtWExoS2pueUczTDcxbmQxb093VUpndXVyc3FrQXFuS0dZeTRIM2d5K3k3L1pWVlYvbGlMaEN2UXZyY3RkNzM0K1Z5Z2NKT0xCMFdRZEl4clNFSU55L2pCK3FkUUl1R2xkY25BRndHZzgyTG02M0poZldycStQSTJJcS9lNHB1WkRGRW9vR2dSWGdCdjZrZ3lWSTZkK3pNQWFaVmIzTjFpcVFUdTRZa0Z0T0V1LzhPTWxycXA2LzJzM0doMHMvUHIrR29uVmt5aFN5VFV5SGdSSm42aW9LZ1VWWXlPRDVSL2tOTWdzRGw4ZVZUUzByNjdSd05WY2pvWXJvUGRhMzEvK2NkbUxZQThlcGtyNG9zaGZWVDI1U3ZGMElGY0E3T2Q4Nms2cVpOVEVtamRMbWhhZWZIeFN4UEZnY0kxOUtLNmVVbUt6VjR4a3U2SnFsdWc1UkFiSHJhdlc3R0NZRGdCdmk4VmdZMFZZU01GNVBFUDFDdjZKOU5Dd2pYb2tDd0pTRXNtVlY2YUFVV3ZRNlcrN2lSaWdlVTh0TFBNdTgzbllJeHQxeGs0KzcwVEVsWHhpMTFaRndCV1Qwd2xaaDVEbEt1VGxHVnptNyt3QUVBeURkWmx6dHliNHlRV2hZalVOWExocVVJenp3ZThZMFhDbEhUQlJjWVZETXpmL1dDbzdGN0xnd2c5SWRCTnk1U1FScjJEb1pXcHluUUEyZ1ptOGE0Ykh6ZEgvUm92RVhtR3VvaXNZcmJ0bUVrQTZtWnZrS2xlVk9KYXM3VFBFbEh0NExTV2RTMUJ6ZFNMRFp4OVpkVEc4cjVWSXVHTGw1NUV4aFN1UDNPOGk0QldSMUZCNDFib3B1Y3d1c1ZJRjF3UzZuSTRPTnFxMkdScS9BdUgxY3l3MFhkYjFKZzdsYUxnQ00weE9lTU1yUG1ZRnZsRXVWektaU3JuZTRDVzdrNU5kWldFU3FXcmRQWFVLQU9TVDlZb3FpcUthS2lkNUsyVkZjTVd5emhJWlMxM3hmaFRSeU5WS2xOc3paSFRYcWxtOGVFb1NCRDdOQzJrQkRJczdIRnlaYW9KaFZQZWFhWWdPbG9RMGI1am12aVFCdTl5VTRBb2lmOEZsZ2c3WE0wVGlYMDJiUkE1QVF3QXpwaitRU09CUnhrT3dRa0dxdVhxdHphMHZrcXVFT3MzS3JJbCtEaW84M0MxV09MZ3Rtc0JjZGZ5cWk4TURUanVSRTRTNjY2Z2ZDRER3dGhtcTRsSjlGdW9LTE84eDU0UFhwVWJCRmFkdFJieWR6QXlUTmFpak5YdjhzaXBPWjlOQ29KTTFxZllWMTc5VXJoSXFQMFBEUnBWN3FHdXphU0Z3S2Q4ZFlQMDBHcTVnNUhLRmxHanFDU1pFMVppdnFzNVNmb0NvOG9wcHR5K2lpWnloRnJHOXNzaWFyZzI0OW5haW42bXBUUll3VTk3aC83WWVUUTBrMUtMMUdTeVV3MXNjdklWempmQzFVOU5KRnN2NVZkODYxb2JQRGk1aS80cXlzaGJsMElJQnJPa0xZcWpQbU9IcEJrSzZnY3NrM1ZPQzZOcHQzM1VUNFFIbDUxRnZ2NE05NTRxMUcxR0lKZ0s4NVlkTDVoU25iRUoyUVRES2RockdLMzBhRlZkQStlRld0djFRYTFrSWd1WnBXQlp2MStHUlkyNmtwVEIrTGVEemFrQ21zdTI5NThCVVlJMkQyNkFLb2NvSGVxV1NXYll5bCs0WHdGdlJCRUtxcGJCUStYSzFIRTJwR2swYkVVd011Z0QxWDIya0JaYjFXSGFKUkVZd2NSMkVUeS9GS2lkbGFTL2h3dFY4VXEwUzRzVUcyMUhaZHU0V2Q4eE0xWGpnc1VVRFNKdjFnQzNra04zTFZUMVhzSEl3emVaVC9uV0dHT2o3N1c0VUZVVjRMblhaLzE2emcyRVNZcVpoRFdoRDBRRDJmNEEzR2ltUkVsMzJuUmcvSHk5NEVzczFmV0RsaCtXMytBSlEwdkd5VElvUmc3aENXSSttcEloV1NyZXk4Y2NOeEZUUzBLV3NJT0NsOFlMQWNieFJxMlpFYXdmSUVLTUtPa1F0MXd3ZXIwT3dwRU1TSklrM0cyVjdXOFFRVEFXdTh3b05lZXQyTjBPMlN3c3k1WHFqa2M4bms5VjZDbXVlNVNXRTNYZ0xYMEd0VkpQNW1tbldHc2w2SlpOakxDY2hrZkJjVFRHQk5jOXRUNmFEY25qTHV4c3lGR2w5RTFPK2FXWklpWlh6SE5JVDN0VlpQWXVJcTdEN00zd3hHSENVOEZtak13NTgwSGtrYTB4QW9SMTh1eThUVTNDMWEweTlCTUVGRDNtZit4djArcDlmSndQZE4zSjljR2dld3ltWGE3aXk5WkRmWVRMQzR1dlBOMWlzOHQyamVKOFhkVEo5cXBiazZpRy83bVVNQVRzMGhNTCt3MzE5d2dRVzkrUlo5OU1hUXJ0bHAvM0xRZS9pTTdrQytxT3c3QmdMb2JjZDhLQktPWG9zWW9VRTYvT1dFSUtMazhmekF0REZad1k3Y3lFa0M3VHoxY2ZERmRVOFUyWU5kSUQxdXIzYjJvNzhTOFR5WC9Lc05UektYejFLZkV4Y1VlMlNNczMreWlPcFl1WFMvOXNFdzh5WWJYa3FVRXIvdTMzZlRiOWJNQlN6OC9lVzVyWWJvaDhncld5OXYvN2tmTVBKZ3daRE5UOXNMTDA3MTZkTU9NajYrWi96UzB1L1BTcXlpaCt2VVordi9qNDJaSnA4Kzd3WFU2RHpjY1Bhc3Z4VDc2NWVUM1hQWUJpcStQdTF0VWY3OWJ1WEpVMEdYdE9XSTJEeGs3blNNOHd3M3FwODZaKzF4K0pnclgyOFhyTDN0SisvL24zdWVGOEpzdklzSys5M0RvclUraitZcUtVL2x6WWVTWnFCb2w1c3pGLytZWEYxOVhlNzJkcGNPVFcwVVdIa2VFRVA1UEQ3TDJYRitHN3ZwR1c5L2V3ZlRQTGJxNlczOTkySHU4THUwdFVIYTBuOXA2ZFd4bTVoL2VsSzU0S1ZNZkJNTnQ3TERiL29CY2l5cHVuOXp0NUpjZEdhS3hLcDlmZm92S3VQMTI4ZmlRcFNMNjQrWGxuNmQvUEtpTlZtYi9mTlVhZlVMK2c2eXhzSWV1R2lXL3I1N0dCbnUybXZmTE80b3RxZjBKa2ZMMit0bHVGTHc5b0hiSGZtUDk0VUpOaWoya0t6dU4xK2NiSzV1YnU3dWR0dTk5WmJhNE5NOFdqMUcwTzFrV1Q5YzlzdjgvcUNzUHBrWS83VDkrSEhNaXhTbzZVOXJSTmt1MEtWQXp3TUxMNDRLVTd4L2tBeVVuNUVYTVdJRVNOR2pCZ3hZc1NJRVNOR2pCZ3hZc1NJRVNOR2pCZ3hZc1NJRWNNVi93ZC9iaFA4Zm90M1hnQUFBQUJKUlU1RXJrSmdnZz09J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86IFwiRGphbmdvIC0gUHl0aG9uXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFwiQ3Vyc28gZGUgUHl0aG9uIGVuIGxhIHBsYXRhZm9ybWEgVWRlbXlcIixcclxuICAgICAgICBjZXJ0aWZpY2FkbzogJ3B5dGhvbi5wZGYnLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVklBQUFDVkNBTUFBQUE5a1lKbEFBQUF6MUJNVkVYLy8vL1IwZEhtNXViOC9QeHdBQUNHT3pzQUFBQ1hYbDcyOXZiWjJkbno4L1AwOVBTaWNYRjVHUm41K2ZtUFQwOTFBQUNTVkZRcEtTbXJnWUhaeWNuZHo4K3pqNDhnSUNBWkdSbXZoNGZCczdQdDdlMkxSMGZnNE9EUnZMc3JLeXNTRWhLdXJxNkhoNGNkSFIxT1RrNndzTERDd3NKYVdsbzBORFM1dWJtYW1wcUtRa0xuM054b2FHZzdPenNPRGc2UWtKQjVlWG1FTWpKM0R3KyttNXVEZzROZ1lHQkJRVUhGcDZpWW1KaHVibTU5SGg2QUt5dlZ2cjd3NXVhcGVIakNvNk9nYVdtV1pXV2ZlSGk0cHFaR3pSbTBBQUFaMUVsRVFWUjRuTzJkNldLaXlCYUFrVUlFVkVSY0lJMktCdU51akV1aWlWdDdaOTcvbVc2dDdLQTlrMUU3bmZNalVTZ0srRGhWWjZrcTVMaHZ1Uyt4ZUY2OTlUVjhNZmw0SG1UUS8rRnI1dGFYOGxWa2Fzd1FTMWswQjlhdHIrV0x5TlJvSTZRWjBkRDVXMS9MRnhHS0ZJeW13MXRmeWxjUml2UmJQa0ZVK1duWUJDNVNKUys1TzRaUFF4NlFMNG9DL1FHckJ6ZjREaHcrOVN3cG4yZEhXTVBoRXl2L0owdXZLNXJtck45OEpVZ3RVWHhXMFBiTVhKKzEyMjJ4MzhQRlJIRUVIbWR0c3ozN29GQ2Zua1VtYS9SZGZoUGJwaWwyZTdlNWovdVJucWpyYlJHeSt0QXhVa1hVdXhqcGkyaUs5bUNtVStVVjliZTMyVXljT2JhenhrbzVFZzM3Y1RRMWJIMDk3Y0R2VDZKaHdQMkdQaHZkN203dVFkU0JiblI3S2oreWRUdUkxT3FPbXFySzkzWGpBMzBWYmQyWVppUis1Tmdtc2wrV3JROWsrSC9rR085b2YzT2dtM05aYmI0WXV2Tm42K213clQ4ak1seXZIVUxLa2I4WlhUZlFmNGowRFcvNE1JdzVMbSs4b3EvOFFPK2k3dlBWTWFaNC83dWhkNjk2Qy9jbXJ3WWh3M0dEVU1PbndqL3JJdm92MmlaUnZxR2o5K0cvSjlQQkRkenE2Z01VeUVMeUdmZUFQOW14bGZxNitVUSt6bzB3VWlzekhIWkdBNXNpSFRUeDFwNkJrUTZwbGxvRC9Sa2lsUTE5UUVIQ0t2OWt6eFlpbmNuazQyTUlhZWJOTVdlaU9OTXBVbjFOa0ZHa2VaMzJwYWFEK2dHSWRFM3JuQnZzS2YyUmdwQlM1UW9oSFJxRzA1MC9qbHd0RFNIbG5tYjZNN1Q0T29sZnY1RXlnVWpiMUQ0SGtWcHIzWGhCYU4yK05JeVU2OWlHS0xidEtlNFBJTkpuMmw5TTlUOGFLWmdhRG5Vait3SHpsREhzR2Q3Y1ROSlM4R2JPZThNZTZXQTUxZEJ0MG9Nb1hYMzJSMGUySTRmcW5DSUduS2llcVEvdzlvNlpnUFJ4MXZXbnJOOE01NFh1dDl0WHV2ajdsT2JNeGcyOENjT2dnSlpTeng4Q1RFQTZOK3duR1FuSnJtWU1hT2hoV0pVWjZNNzdiZTdsWHVUUnRJM3V4OXZBRERaOHRRdTlvdm5qMU9tdUUvcFMrTi9Sb2RqclZ3ejF4ZFJSUmJydTlQL3dBUmZ3WVRxRzAzWTZQVkZFaG9wWi9JeHRHbVo3TnVCSElrSGFwbjVuVDV6aDZJanZHNDRKQldwbkh3Zjk3NGJwT0hEVHgvZWdRT2J4YmZvdWMwcW5nNWk1ZmlrL21yN05PeEpuZFZCU2hPdDBudks0ZUxQVFFaNThaOWJ1anA0Nm5jNEhOR1RFd2x1aitkdmIreDl0bW1JbEhKQW1pR3c2ai9RakMwMi9KVUdzeTVDK215WlR4MHo3RzJtcWRFejk3UUx6QXVOUUdzaXJNRnI2YnV4SkF1YWpWOXMyWHk0b0twdTZQY3J3ZktiVGRkb2YvL21WL2JZQzlMWmptUFpGRm5zNE05dG9qR1RXbmoyZUwvM255cnpiN2I5YzZBUHhMOU11TEQ3di9NbkowUXRFVWFUemhaZ0E1WmVLZXlKL2o2Sit0bVMra1g2MmZDUDlkUGxHK3VueWpmVFQ1UnZwcDhzMzBrK1hoUGoxVU4wY1M0dWxJQWphY3RFNHJWclZ3M1d2NjFQa21JMlhjU04zT3E1K3RHcVdaZkU4TC9NcFl1MFNLb25LNGdjK0loT3RvL21qTXQ1cDJxNlVLMVNnSEUrbGJGRmJYbDd6QlpLN0R0TENOaGNyNWRJNHUxdHEyL0dwWGxPZ2I1N3EwUXRaOTdENDJwaVV0Q28rSUtLbDZpWlhMSmFPcmNsQm9Ta2JJQjBtcmRVeHZiN0x6a3BsMS9nUCtNVklvWml3QXlpSFNXMi95dTJLd3FJeWtWTnpVOElEUFVZNkU1dE9CSW8wMUpmdUc4TGlvUmJhcUtyV2hhR3VmRkdwOHRXUWdqT1p2TW1tTEFpTlZsb1JvWUwrcW5uT2FuSktXblcxV0tUS1NTaHVJb2RKRXNmejZpWHhMcmdndFFpVUt5TGw4bWV6bzRmVlFodFBrdmRqcEJBQlFwcktOQlpwZGJkOGlCNkRxdU41OUp6T3lnVklWZVdhV2dxdi9uekdPVlBmRlZlSmV4RlNyRThJYWRvamlrTzZMMmFyMFpLSUtFTEtYYUNuNTVIaUIzTk5wQmN3bGNHa3JGV1Npa0drNU00eDBoU21NVWdoMFJoUENSUEZTQzlnZWhZcFVmV3JJajNmOXFIRkIwZWhrTEFYSWlYM1RaQW1WeGRGT3RudFl0S3pkRGRHZXI3dG4wTUt5RkRhZFpHZVpZcWRxRG94UTFFUi9xSU1tSWxPQ280aUZsL043b0o5TkhLY1RybGM0V0d6citVdFFsczlON3A0eHVMVGsxMFpLV3BwMEswZWo4ZU5ScWxjaG01K3ZWV2JlR1F3VXFpbis5aEtYTlRLRDNnd2tvWXJZMWVRcDYrRmtOWTF2eXR4V0kyTGdyYURaUmRiVFN2dXhrY1NQcW5TWVh6ZWs2K3phcXFMMlAzYmEvdWxFdENRd3c1eGxFcWxCcjZuWGZtaFJyV1h1UHBLZGhHck1ENmt5M0VKQ2F5bFRDWG9sTmR3T1liMElKeTh4d1pXaTJYcG9YcUE3cjV5T0J5cXEyTnBweTF5UHcrd3lNOWltanVQOXkwOXBGcDg0YVIrNjVQRmMvV0JnSzhKY0VCVjg4alBiMVZnU0ZnbWVrbWpwNzBRWS9ZbFAxS3RCUTlYVmNCOHFkZ3VBR1NveVZrSk5hK2FrMUNxQXVUaHU1djQ2djY0MEphbkRaZHRwQmtwM1BBRkQ2bXZWdjhGWEdsZWtTOTZZakdRVHlhcnJYQkNiWThGcEkxRnhEeExJYVR1OXNUdTJiSXlwTk1GaTdKN3h5Qkh6dTkzYTNrRW9Wb3BDc3Rpak9mcUNqRlBzVWdEM2ZDVmhoMzlTQ3QrbFZLdFBQb0s2c0tpNWlIZGE1dFFCY2pkaVVXYXlGU3hZSXd2SVZvMXdhdnRRY01OSUdBbmljWG53TDZnSFVDeWpZcERxc2h5VDVZekFjVzhBZElINEd0ZGxxTHdGdnErMzBITlpFaWxiRGw0UEhZZzQ1RW1NYlZVMkpjQ2RIOHJ3ZFg1MnZaRUQxRWw5emplaFhCd1hhRVlTZEJTbVFQQjN1SVdTS21IalFYZU9OUlU5SlQzeGJLWGlUcnVBaTJmSEpDQU5JR3BJaUdrcU9iQzB0MTQzRTdJQWJ4bDhSWjlJd2dmZ0pEb255WWhCYUVEYm9MVXg5VENkNVZIbDFFWDlrMjJmYS81bzBkYVBBbHB2THZMTnlGU0JFMXBsTnlOeXhNcERyZEQyb0F3RFNKTlpKcUVOR3pSYm9QVVkwcVFjaW9LczNjNTkvSW0vbENmRlU1RUdzUFU0cHNLbjhISURyc2oyMXJUZm1MTHhPTzJ3ZEhiRHlGTjh2bmprYXFSbU9wR1NGMU1GQ25zVTVGRDNtTm9EdU1UcDFJelJvb3FhVWpEYlYvaUpUN1AvTktEOTNqMk1LeUMrSEVQaTVFcVNDUERTQlA2MDFpa3FoU0pxVzZGbERHMVhCdUJXbnVkZlZOeldZNVgvQVhsVktRQnBxaHZWdkNrZFlJVXFTYVJqVkJUbVlMaVA3aXZqU0NOWnhxSFZKV2lZZXJOa0ZKVUxsSm85Zy9hWDY1L2RkcFNwRXlkenlEMU1VVldCenRQRE9ueUo5dlZFcENYVC9hbUlZM3RUMk9RSXN0MFIwZ0pMQmNwdWtQdGZ5N1M0NUpEVGRjamRRNHBLNm53RW1yNCtITk13OSt6YzlHR2p4Y0d4a0NJMGRNbzBxckUzUmRTekZUaW1VV0NWN0xOdWRZVElyVXkwSW1XbVdUT0lhWFZJUlFxdlN1SzFETlBFNDBBU1RkUFdLSk1ZNUNpZjNlRkZLZDlBYnNDaExUc1J3cTExQmVJbjlWUzFGb3RDNGRpN0ZVeUJLbm5SRW53b2VGTnFBUkNhbmtwNkloRW1DYTYraUc1S1ZJeTh1TmRTVEhuSW9UdU9hLzRRb0pMa0ZyVW9MbnY5S09aS0haeWFPc2ZsaVF1Qjd5VnR4VGFRdUtSY21FWFBvUVV0TzRTS1RRVXJPR0RZRjk2V25CU1lKNXV1aE9GcW9KYVRZYVMzT2RDa2RaSlFJb3lKWk10bTdqZ25Ua0phZGcvRFNKVjFmdlVVdUtQWW9HR3dtZnhsVVk1R21lbUlWVnhPZ2tQSVh2S1JaRldjZHBFd1Y5V2JpWEF6WFVrSVEyMS9RQlMyR2ZkTDFLcUs3QjMyMnQvdTY3K3RoNGQrRTlHQ2tnbnlpRzBQZ3dVcVlweUpYbnlHUnpaK2RYelNJTk0vVWhSYzdoYnBDb1pta1EzZUN4bUdNYTkxb3BtbFJPUktsNWJWM2hmYjhHeStnL2F4RlY1cVNBY0QreU1SSktSQnBqNmtPSU81bjZSa3VGZXFLUks4ZVJsb3JZeFV5U1NrbnMreFlRT3FjK21NYVFUelRkQUNDcENGaDE5RVZJL1V3OHBPY1VkSThVZG9JcXNTSlZsb2lMNVVuSmtIRkxBKy9LLzJDSDFtTHJEZWJtaWIweUQyKytFWE0wM29KR0cxTWZVUlVwUGNNOUlPYVVKLzFhWFhyNTBFK3NrK1pHeU1kUjhJS0VlR3ZaaGR3c092cUVTS09xcUtPU3FMcXRVcEI1VGhwUmxuTzhYS1pBc0N6NzMyc0xMNmt1TGNWemVJakJDU2dkR1MyU3NsVXFqRkJEM2F6azhMK2hRMlMzTGUyWVoweUV3cGhTcGUvbjNpbFRoTGFTb29MWFlWVms2Vi8wWkdYb2lSM3BJeDNqc25nM2lSNEUyb245REE0U0gra0lyYmJCYW4wSEttUDRlMFJPVFNVWGJvZXZEU05YSnRoRTc5T0VpSlJONHJKQW1LeEVmQWQ5dDRuejl5Yytkc0gwNG5FZEttV0trMHUrQVZLcHRTb0pRT1NDS0NLbGtsYlQ0R1pFQnBGYjRuYkJCd3RpRUlQTVVCVTBGV2Z6OVNSQk9OZXZzeUR0bWlwQks5NG0wVU51M1dwdk41dWRxVlQvbXhydWxrSDJZa0JRbFJDb3B1VmpieEFXUVNuNzNFNHNTNG9LWVFxU0pSS2tUTmFsc2wra1RoYkVncGhBcDlHN3ZFcWtnYUZDV3krSjJ1MXVNeTRWVmplZ1h5cEJMNmlHM1RKcGg2aUdWSTlZckg5RTBGWTJRU3NuTGRKaGZDanZWNWFtV1dJd0taQW95S0RGMmowaGIxV29OeXdUS3dmTGRzeVRKeXFTUlNKUWhCVmF6R2Q0Vk4zdGZVak5wVTZVOVY3OVcyQzZQNTlicEFFWEZzZDFOa2ZJWlYrVC9iV1gzY3laUlpQbGhxYTJTQ3NoYVFXYmxrdXNJSEhGaHNXYnZmOEt5ZnJZMExxRDl4Y3I5cmYyTi92V1NEL2hQWjBjbHJpZ0p5SDZzbFZPMEJXa3A3a1FqUzBBU3JqMTFQWDR3RXpVcGFibDBSVldsdTNXaWtrU3Q1b1RGejdScHN4QXBpVDZWSDZHNWo0R3ZudXZmQ0xuK3JweXFhamk1QityRmJGcVBLcWxrSXVEdmd4UnNjdHF1WGdYaFZMcGZoTDlvM3dpanA2eC90bTRqSkFuQmxDY0xMYmV4d2dIcGZyZE5aZ29kQ0dqeDg3OFRVblZYck9PQU5Ibkt2QnBNbXdBcVVIT0IrOWxYbWt1WkNYNVliWVZGblRWMDV1cFB0b2xNa1VzR2tjSUgvdnNnNVZwb2xpSnk5Uk9ZU3J3YW45enp1L2pRRjBEQ1BIems2aWV0RkdtVkJhMUNRZ28zZXBwbzBYbXQ1T1RvQWVIb1NibEhwTVVzV28xYkt1ZE9wOVB4ZUtTQmtnSk8yd2tOU0dQNlU1ekNpMFVhY1BHaG9zcFlXWW1IajVON1NVekJ2ckFzWXQvSkMwaXJ4VnljUlNQNTZ6dU84Y2VuSE1vZXdUNHd1NEJlTnI2SHZNclZpaWVXTm9rTTk1SnBpM0ZJSXc0cHZrTWFNNUY4YVFKVDZMelhDc1hkU3ZISCtIVWhKbUZEUndUdU9CT0ZIak5RcFR4YWZIQjRFQkFjUFBPdUl0Um9jaS9VOXZNMGJSK0RWSTFjUDdwREZvV3lzYWZZcmdTNytyV3kxcWo2ZkxKOFl4ZFJVemJHd3JTVVRYKzdJNlNCdEVrZXJSNGhDQTdiRWx1djRJZWd1bW43S0ZJUS9UMGQyWmNwWVZuOVdLWTBldHBzaFlxdlZXd2lhdXFPV3JrTm54YS9WNlRjWGpzeVM3MFJIdHkxWDI0cTNhZENVYVF4djFBa2N4NGdieWxaREZNM3hqOEpSMitybEMwRmkzbFRWNzIrbEp6aGJwRnlSODMxWEh4cjZDaFR5Lzlya0JHa2NUOFZLZnN5SmQ2Q3g1aisxSTN4UVVYelhWSmRDQmg5MzJSZ24zbkM3ZUIra1U2MjdyaFFkZW1OWkNMRjhvOTljbEdrNFJ3MEZ2OGQrcGJsUnBsNjBaT1ZXM3JMQWZkQzBqSUFIMUtBbU40dFVvVmJlZDNYeVRlU0NSUStGTHFIa01abWp2TUpTQ050WCtHYkxBdG15ZG14U3p6dmVVbWh5ZFYrSndveHZWZWs2SEV2M09VajFWM1czV1B4NFE0d2lEU2NjeVo3a3JRMHhCVHF2Mm94dzhkYkxkOWcxN1lBMkFCZWNBbEFNQVd0M0N0UzNDblZsbXpaWlhQRkpvR2pDU1RoNllnQnBHb01VWFJBSWxJL1U3emF3bUp4QXM4clk4OG9OY29TaUYyY0RwSENyc1pWWXVrK2tWSjM1OGo2TXRrcWI1SEcwcGxOSWFZQnBMRkVRUnBTSDFQa0taQXB1NmdFZFBVTFd4ZGZicXlBMkZjb2hKQnlkemtaa2ptUWg4V1lmSkpCRGIvZ2dEVnFrR2llL282ZUF4Tk5RK295OVNhV1MzUmkrV3JwK2hxbkJVUUtWS0RrOGNwZlY0Q1VRY3NIN2pJZ2RaRjZRMjBidXJRWlJrOFZQSkdFdVVlQjJQVE1sRjFTTkEwcHF3NkRKTXNmMFAxRHBCdlBrenRDcEpsbVUyNUdwTWRubFB1ZVdPNGJ2QVE1RFZzb2xOeGJaQzNmZEhPL25xWWlaUVZUa1ZLbW5wYXFkRVhKeGx1MWZNSU5QMjRjTU5Ud29aYm13VjBoRFF3SFR6U2NQa0V4L242SmdobkZEWjg4cGk1U1BvclVMWmFPbEREMWxwSlo5QTA4dm9aZktrSHpGTGNzTmR5WDRwWE80STZRaGdiWXlhc3ljTnFrc0VRTnlvMDFQYVlNcVJWRkN0enF6aUFsVEZHUWdKQ3FiRVhKMFROUE8vaHdyWmdERVZJVmhQdFM1WDZRaHFjc3FJdXhSWkVlRmd2Z2EvcmVNZ1NLVkxHaURkK3I3aHhTd2hUYUdSZzlxZVM1Qlp3b0FLOHYvcTAyOGZuU3UxbndHSjBFc3RlT2JKcFppeFR4Sm5iU1R3UnAzb3IwcGY0Tzl5eFNxcWM4MzJUUkdYVDF2UUN1S216VStOSC9oQlQwblN6TGpadFdnOW83elpjVzhOSnh5dzBTZ1M5ZmluTE9JYVFCVnl1QzlMQUt6N0FpdnBRM1VvVUNVcmVLbFRDSmZSQXBpOGRENVcrQ05IYWkwbUUzWmtpdExacTY2RXVHRW1nSUtkNFlSQnAwWHFOSUY0dENMWmcwQ1EwYldMbWxXNTFheWlZTi9pY09sSVJ1NXhaSTFmaUwvaWxzMk1UeUZsWklYOG9lWTBNYk1lWUFVajlSbml5UkRLU2dEOW5GVGl1dkFpbTdBRlAxNkV2dTFiVEUrVVBKWTA5QnByZDRYVXhDR2REWXV1dnhqMlQ4eElzNkFWbEtSa0lBMzhSeWprdDVEUkhWMHNwaHRST0V4c3IzSWdyZmM2aVcvQ25vZ2hBL1JzcWxEdWNGbU40NkUrV1hpZVl1eTFYR1MzUnJnWFFsUkVxN1YrWEg4cmdpc3ZtNW9kSWlRdjRUTGd3cC9GdGJqUVZCS0sycUV4YVVrbE8yeGdJYTBXUFMwaEt2TG5XRTFNLzAya2lCbEl5VWUvRFN2N1hpSWpCM0hNMGhLUllvWWVWSGNidEVVbHhxRVVHVExmM3YzQ05JSWNQRDV0aFlhdHRzNlZSWjRlbXRsZE40SjJUckIyOHNocy9HdlQrU1hYcmFvTE9QNlpXUndnYVhnalR2dTZPZjVOVnZKZmNOY09WeWc5Mk5KUjhtUkdxVE9HbkZJVVdpVFBiMVV5TzcyeGJSODlpTnk1V3FmMks1NUxOVFVVa2Z4L2VZWGhjcENuSlNrRUlMZFF4djhuZW43aHNtMlB6U2hNayt0U1NrUk9EeklCTmNReXRLcEdQYXRaMmJHdUV5dlM1U2JMZFRMcnQ1MGlLemtwZ3JCUjFTWmxRbzBzUzNaSjFCNmdwOUloU3BVb2crVUwrY20yM0NtRjRUS2ZVdVU1REtrOFU0RXJvUXB0aWpvaEFKMHVSSmZwY2lwZFVScExXeWxrcjAvQVFleXZTS1NGa01sSVpVM2ZoSDA0amdGMlJSdjUvVWdaR21USnU4RkNtdERyOExlclBiSnIrRm1oUStPeWVLOUV6WFE4cVNSYWxJSlM2M2pMd0ZHekZsT1drTUFTRk5lZDlnR09rNCt1cDN0MnFjUTdHNGFrNGJ4N3g5TzFqMi9EUXpmSXZYUThvUW5FRjYyTWI0TVh6VG0vT2hZS1JwUklOSTFkVlcyRmIyU1JFQjFIVitWUkswMWRsM2YxOHljdzh4dlNkWG42V2c0MVk1K3dSZ1M1VldJdnd1NlAxcEtXaU4xWDRTZlE2SDZxcXNhZGxWMmhOaTV3MGhyWkdYYlNMeGpvWk1yNGJVblQ2L1BJT1VXMm5Cem05U0NFOGNiMFNta29kMlIzNmpSR2xWc0p2Zk9CMVhHN0pNcU5yNitYQnFMSmJDdVBEam9wOHdwMGdYYk9MNk9PcWRjT2p0RkZkQyt1Q3VPUzZYNjFiaWorWElUZlQzcU5XOVRkVmpjVmYrVlNtMXdyK2tZMWx5OWUvS3FaUmRiSmNvd0VMcjJZcTdiUGxVYjlXYWFiL2Y0Nzg2OUtmaExhMXV0T0pLUlJkbDNWVG9sTjJjbXc2YUhKZGFJZVUzTnRJbDVrWDQ2TzNUVlNxMW1JNGdSUzc1alpMN0U1b3ZCVG5oaUxyQlNVSFFqdjhZNkdmL0t0bHZqWlFEUjIxY3F4V1dRdVZmQVAxR2lzUjdZeTMwdkxmYmY2T2hTTDZSQmw0Q2ZDajhXNkRmU0pHay85RGJMOHZuTG92OVJ2cnA4bzMwMHdYY2w4TjVvZHcxMHQ5VC9qbFNaZGpwOUs3MGd5dFJrWHU5SzRXaHZ5ei9HT25JYkp2bWJQQkwwZEFueXFzb2RtNTA2blB5VDVFT1o3YWhEOFRYejcyYXkrWFJNTDhhMGpmRCtPQmozaUp6TGZsNlNNRkFOeTc3S2R2L1NMNGcwcGx0MzlROGZEMmt2Ylp0ZDRaRDZJbzNoejNBS1oyUEtYYkw1ZUhqZFBvNEpFWUw3bEs1RE53d1Fnb3R2MzlNSDN2ZWlVZW9JQjRnN0EySHBBUEpESWVrQU04KzlGNCtQdVk5YWdOeGZmUlVMbEowektkR3dmOWEvdEhWOU5hT2Jkdm1USnhEeXk4T3JNekFOTnFRZ2RMVlRTaU91Y1o4TzZJaFB6cW1ZNWpHaUJzWjhJUGp6TWtKcFRuOENvcytvNElqRVZVRXhXbTNEZnlJSDBYeEhmNXI5aDBrNW5ySWtmcHNIcDFxTnZTUURwMlorVnZHV0NIcFBLOTEyMTZ2MXkvd3Mya1BiY2Nab0s0VmRHZlAvZmtIN0dkdFJPN0oxTjltZHI5djY3bzlOL1Z1ZjIzWVZMZjZqakdZenJ1RzdzRERNb2ErUmh2bG1hNGJtTTlhMStGLy90a3dCdjMrczZFYldHZlJxUWJ3Vkk2bnBVTmRkM29KVi9sYmlhcFlzQytWOCtqZDUvQStiZk90MThROXlMQ0RPbGg1cmMvUWZUNlp0dE9IVFZxRy9BM0VDR3F4M2tVVmRHWjZGdzFqdnp2R1ZPVTRXN2RSeSsrWTNiVTVnaDhVVWUvQ3h2N2g2RjFJM0hvMTlIYWU4MDZGWHN0QWtHYnNMMElVQ2hCdG0vUi84RDZOZVdqdmkrRWdNaEFwc1dFanh5WjZsb0g2aWxZK3JuWGFXcnU2QTZ2NU1Cellsc0diK1RKM0VQSmhHMVVKbjhTTVJHZHZPbFpKLzZrd1VxaldkMnVrZmxsVUgxSjlIZTZRUnc1RlNuU1M2OEdvQUErSldnTmR0M0FMNzVOajNvMDJoRGswRVNyTE1KK2VURkZCdk5EV0VldzNTSDJvQndINFZNOXNaQlVXeWZDd2gzbjZyKy8wYXVKSDZsTlNJSGRlNTI5dmE1MGlOVWgwMWFPZEpVTTZOTzMxSEVzZmwyd09kQnZwNW96bjJ4Q20ydFdSZHM4TjU0VlUyMnpyejFMd1ZGQkxoekRjZUxuUy9WNUJBa2pkKzJwTzIrMVoyNFN0bXlGOXhOc2gwajcrNENIVjIxaWcrVVpIOTNXUjUxNmRaOWpiT3E4YzN6YW1BQ0UxaWFYbmVGc2ZFS1NQN0ZTUGh0NDFiTy83N3kreFNCVmtvVWU5WHZQUlNFZUtlb1FYS3RoVmZYSE1vWVJvY25ObnJRNU5mUGdacExadTZyYjVSUnMrUS9vQ1NlRXUwdTFMazdTMHJVOEQxV1ZteGt2VE5Idm9HSkYvTkdZb05uZzFHRUhZOTY2ald2cWN5WWpZMmZvYUVvdDBhampFL3I2ZTBWSitwZzhDNGF5MU50NUdqb25tczgyYzBkUVlvQ2N6Wk5ZTlBpTGpnd3NqUmJZZXVsZmRyNUpEVDBYS2UrWXBIaW1BVnVtZDFZVC96bzMxaDRFQmRvMXAxOEZXaUgvVzIxZ0hvVHZiZnVJaVNPRW10V3RFUExqZlZlSWJ2cU92a1dmZk5jK1lKeTRqMnNZTGl0eWJuVmVWMUtJL1l5K2ZlM2NHQTlxSHZyZjF3WlBDWmZyUUI2T25DbWtwOHZWbncvLzhicThpc1VpYmhxNjNCN1k0ZXptSGxIdWZHWTQ0ZURabnN6NzVNVDFZSCtrV2V6QStvQjQrK0lDdXZDaTJEWU1rRW1PUXdqak12bTJXOGRORUZjVVpRVG9TUmZjK2U0TVpHanpwY1gwUlllNndkRWhQRkVtdmFFRkNCRmV2MzBZWkZ2RjVSS2F2cjBXUlJBTkFGTVZuVnVIb0dWYllOajlJeHd2cmMwY1IzSUVTK09INVhrZWhmazE0bnE0N3lmTytGNkFwdlU0bm82QVhKS0Z0RXRzRlAxQzljdy9qVlA2cDAzbHlwOTVhdkx1d25QZTlBRXpKd0VMczlRZVM3MVFLVDM4NlFlWDV5SThvZk11M2ZBbjVQM1pzaXRRU3ZXam1BQUFBQUVsRlRrU3VRbUNDJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86IFwiUmVhY3QgSnNcIixcclxuICAgICAgICBkZXNjcmlwY2lvbjogXCJDdXJzbyBkZSBSZWFjdCBKcyBlbiBsYSBwbGF0YWZvcm1hIFVkZW15XCIsXHJcbiAgICAgICAgY2VydGlmaWNhZG86ICdyZWFjdC5wZGYnLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVk1BQUFDVkNBTUFBQURTVStsYkFBQUJPRkJNVkVYLy8vOVR3ZDRBQUFCTXY5MUR2ZHhKdnQxQXZOeDlmWDMxKy8yQnorWEQ1L0xDd3NMNS9mN3UrUHV6NGUvaDgvaGt4dUc3NVBDVzF1bWVpbmZUN2ZXVmczZW0zT3g3emVSN2k1L042L1NRMU9oeXl1UG85dnFiMk9xczN1M1M3ZlhBME5aeGlwR3lxWmVRbktyNjllYi8vdmhDUWtJUkFBQ1hsNWYrOSsrMHdNL1B3cmdZQUFCa1pHUjBjbk9zc3JQZTR1UEh3NzF5YkdjbUpSa0tEaEpkWTJxR2taczBRa3JRMitEZzdmbmwzZFExS0I0b01qa2VEd0JOTlJ5bnBxY2NJeVVrSXlEdDQ5YlEwTkU0S3hrVEtUY0FBQkJET1MyRmRtbVpxcmRZUnpiQnNxUWlQVkk0SkFKY2JvQmZVa1YrWmxSUFRrYW1sSVErVFZ0eVZUZG1lSXV2dXNoSlVGT2FtcGtzTTBCc1dVVTBUMllBRkM4WkxrQllReTE5YjJVckRRQklKd0NBaDRsUVkyNGROMUVwRlFBQUFCOU5OaFcwcjI5WkFBQU81a2xFUVZSNG5PMWRDM2VjeGhWZWRnYkVJbUJoUTNhN3NLeFN0M0pXVlNUWmp1MDRiaExIVnV3ODNEWkprenB4SGsycnRPbi8vd2RsNXM0VEdKQXMyY2NTODUyVEdNRUF5OGVkKzVvN3cyaGtZV0ZoOFdLWXJpZEZVa3pLWUhYcVU3TDVKRUVZSmVYT1MveGRseGRaNFNFQXhzNzhOTFJtdVlzUmNpcFU1empMbC80TEx4MUtqN0xEZ0hEUngxR2FZUFVNeDh0ZnllKzhSSmhncHdhY2RMR2FPczBUSnEvczExNEt6SUVoMnZXbHJDWlRRL05NTW9xUTY3SlQ4UHFWL3ViWEhGT1BkZmh5UGM4VHpFbENYaDYydEE2RlVGZXF0NWluNlhvQmFnQ2YzcmhkZlNTRUVwUXdTcUswNE1vVnRaaWVKUktVVDVhTTh4WHNXTHpDMy95YUk4T1VVbVhQS3VlczRycnB5VEdYMFRLU2UwT3dVeVpsTVR4TUNIOVk1eVBpckNKSDdkRlI0akpHYzE5ckQrL0YybjZHa05MUnNOclRoQmt1SEloOW1jdWRnb1pFRnJUdFMvNnBsd1pMd2gzT21nZGlqekU0Wnp0U2p5blNGZ3R2dk1vZ01hT2R2TzFJeEVTVnVaNGxVT29tYmZZOXBIWnUzbkpraUNCVzM2UUo1MHd5aVFGajFxbGh0UmdXNUtDMS9BQWlZRzVzT0xnRHJpZEsvQVhvVWk4MXRKd2pxMUE1SXFvSWpZbWx5QUZTR2JmSTZDNEY1RHBlVzVBd1BFeHhUd2hVdUNLbVIwNWtiTlo3blFGaGgzTGhkN1NRc1dqU0lZYVJOZndDNEFSMU5pbFpVTlZwZ2FpYmkyMGFsU0RvNXpSbklWWFIyWXBHWTBGbms2R2duOU5TOVAxT1Vxbi9ZRGtsNk8zN3NVdy91MTE1Wjh1cEFIQnFOajcwdU1PUzFiZ2pVTEo5WHlEcnR2dFRrTklFc2xjZHBGa2JKZEh0VjRiTVBGV2NGMENxeWVuM3JTOGwwTzFYSnNxb0NFUlVqa0ZOd0x1eFdXbUMwTzNvMGptTm9Uem8wWkhiWmZ6N1k0Y0JnUkxWUHVhWlVtV0tlWUlsOHpyc1ZPcjIrcm5EQWNuUXQrZjZZRHpWbGNmV2xHT3ZOZUZDZzYyazdjZ0FRWExTcUpVTWg1bDhDVEQrcUsySGswUE5FWmlCd3RocDJ3aE1qQ3JWc1hsK2ljeGdzQU53OXRQVk5NdXluZVZPOWYvcGFnZjhnS2I2QlZmS3V2eUFrR2hOVjB2ZnI3SWc1c2tvaERYQVRsekdRYWJsVWsxdlpxQklwSkh5czdSY0pOakRvc0RIQUZKUzZibk9va3d6MEEweHNtWmZBVTNsSmVIT2V1TDBjdG5nMXExRWQ3TE93b25SMGcwU0FmWGxNVVpubzFNWFdqc1VyU0xMalZ3U0thejZ1T2RoNVYvWE5UYlByVDZ0c013UnJsRktTa3JaWmh3c0sxc2ZSYjRmaHFIdlI5RnFPdDBKMG9RbFZ0eTZaRmZYbWcwOGl6SXRhNFJXZmRoTkp2TWdvSHM5RXoyc1hqVU81cFBFeFRxejZKU3pBYTRtNmhYNUNCVjh6c2tDZXJMeDFEa1JaR2FScGtGWjZQS0t2TVVnMDZqaHV0N24wVXdjWk41K3grbTA5Mk5adkJMWGxBQjJUSVV0VnhjeEVvYW02dThUR25IS01qU0lsYnBrRFhxL3pPeEJHTHZBOGoxaHgxUUVkRFd4bEhNY01NcVhJWVQ4b3NxWkZ2cjFwRU55clEwVTljMUdZVENSRGk1T2hqTVRMVnFJc1dXdmdBQTlJbUxIdmNzVjFtV3dIWm9WVzhxYXExQlIwOTVrSUNucWxEK3k2ODVGeEY0b3lVOWE4WXo3OUdHZ1RnSllhSUhwTk1jaVZ6Q0lwQW92Zm5MUldobFlpbW0rajNaK0dIdnVqektCZXFvMGFVNUtzWEVqditTc0RtQjZuOC9kOWRvQWlNSUs2RUxOTlkzU1BFbVNTYXdsb3BpVFNqWWhBNnVkNHVlc2NOMHRybmo1cE0rR1BwdUtic0VKb2xVbjJreW5LUGVJVzErRlY5NUU5ZVp6RWVMWDNBYkFxbUJ6TEpJcnJWUkRwdVZRMDAwS2VFb1piRStrSHBHK0oxTFZyTyt5cGxQVndxblhCQmNBNmFQWGU0ZGJLalpITnk3dUFadVFkenNFZWJoNTY5M3grUGFkN2RIKzRkMkx1QUZVUGJUM1Job1pGU3hDVWxUaldwK3NpMHZsRUcyYmc4RGlsbXBmUDJrWnZmN2p1STczN3AzdnNhNGRIQml2b056dC9lclArMy9tZjMzdzRYaDhBUjBJNnZNTWN4eW9VNG96Y1BjbDZVRjkvck1xcVV6MW9ycTJrSUI1RmVxTGFPRjBQSDdyWE0vMVVjY0ZkRTd2NjdmOTA3bHVTekJ0UGwvaktBaXlIRzN5RzFQSzFUS2dRSjVqaXJyZ1BhcVRKbmNmUFBpUVBOREgxeXM4WkU5bkxtbnZ4Nk91bDdKN2ZQd0p1Y0hqNDJOL3RQdE90ZlhrNlBqNHdhZjBycjg3eDEwQjFQbHhaNmJEaVZTYmNtZExhbFdWeU5aemRNQVY5SUhXTjhnRC9SNjJQNk5QOS9rTFBoUEJGejJDL3FhZzd5bFhBYVBSUHRuOHl6bnVTckdpbHNUc2Q0cGVydlR1c0NtbW1nSGI0Y2RkODl4OXlycyt1MWZsZFBSWDhzZmZYdkNoS2lQMFpaL3lrSngrSmptbDBuMnU3a0V3YjVtcHEwSEluTnpWMEthVVAwV2pGbno2dE5rSnBVb0ZhUnBINC9RcmxkUDdXMS9mdm4zOVJMb0MxWTZIdHorK2M2U2NmWC9yK3UzYkQ5bXV2NFB1T054c05pY0doaVNudjVDdGI1aGx1bjhCQ3BXVzhIUVZqOCtCSDZ6a2syWnRveXBxZGlWalBxaFJvNHpBOWRYN1IxTk9RYk9CekJFd04wZnVlTUl0dTl4RmhmTmJ4ZVFZNUVWeXlsL0FOcVgxamNjbjUzUTR1a3JOQUx5aks3c1dyWnlxL0N6Z1BYUmw5bW1VcFNWalZVN3BFNC9wdysyOUkvbjVCOTJoR21tUXdrZnFybWRuNUZTZS9OMkRDL0dLYWJsOVowNFRBaU0xZVZLMFVLcm5BcGFOOVJRYWFCYTNVMDdmTzZrYzhZTzNGYkg4aUc2R0lFNXZWVHV1cVR0b1A2V1dlL3o0YUJ2OFRILzBkSE9MYkd4OVgzWCszcjRQTjJaNGZ0VGUvQ3lnSXRZNVdJeWFVdGd2cC8wcm9SamtWQUZZZldxVnFXTDlvZHI0Y1FSOTlhY1JrOWMvaUROLzVydW9lRi9qYjhBRWhWUGUrd0dQMys5aTR6Um9xclVhVWpidldmRTB5ejU5eXFyOU94ZVlNT2hUSVM5M21YejlrL3gxc2wyQjJwTHFOZTE5QXJRSlRuZmZGaEo3RGVUMGpKeU83ditpM3Z1OHBLNGhVREkzNENrcjVmRjc3ZjZDN2V2SVlKdnMvcS9ISURUYzltcktrOG5nS0J6ZDJONGNYT2VjUGhwekppdXFIbjVIZGFLQjAvM3JIekNuVitIMHhuYjFYbTdlRXZmNDBjekdxYkRxMFh5WjhFK2xvTGI2cDBwa1B4VWpCbWFsMHVHZi9pREphOGFzaE92ZHpidmliOElwOWRSLzA2L2Z6dW0rZkYyQ1UvTFc0TGNmYnk1SVVIc0dtQ2U4bjZ1OHR6aFRhdGVYTnN3MVhYYm1PbzFYeVRrRmk4TWViSy81a0N3OGYvS2R4dWxZOTRYYk9mMVdDcWVVMDM4cHdjVlRyWk84S0ZpOGI1Q29TSW5kNVlCSDJLemp3ZlV3cW5QZTFMd1I3NDhVWHdwSSs0bDJaaUQ0bWRxT3VxNTNiMGg5Q24zL0xYWVkzS0YyVHY5TlQ2V2JuL0d6YWI4UVVmQzFpK0IwVkxvZHBLN0Ixd0lPNWU1bHZmZXI2MHdrTXBkbFVDcVFRcWtuR2FSL0Npb1Y0bTRhVVAwTUxmYUp3RktwSklJbDdmNDdzbmwxTG4wQjdkejh3TTlsYithWnVCc25kZjhpK3I2WTdOUTZ5Z3lNZ1krcVJ1OXBMWCtxdkpHQURRbVVUWTNKQUNPMERiNXBiNlJlUFUyQVZQYUtiSUxRUHIvSGpQTTk2Vnc5RlVKSENSeC9ROXA4eWFpOEp0amJWbTRCWFZ2NFdxQkhRWFhjb2ZLOSs0VjhnK2NCR3pwQkxRdnZVQXRWV1hSSTdxa2UrbEtwU0VWcTRNclNweXRRR3kyS09tTzNjelNuWU85a0M5VGtDUW5ROThEcGY3NzV2T1ppL2JSaUpOL1pzRHp5eVdISTRnS09YeVZSenpkYkgvNUh2YzFIN09TdngxSTRIN0h6M2p2WkhBck96NHNWV3dPMk9kSU11WHFmdWFSYS9PN25wTHdFa2NMSlhBMVZlSnFmcjlkVlQ2UE11SVRyOFUwdDg3N1B0a21IL2tvZWVoNk5hZ1NPcVhIYSswVCt5ZXlOYUtXbDd2YitxNXpJdkZOd2J5VTA1ZjNDV0xGQnZzWkNaaDYzNkdGTFlCUUdzMFZSNUtrbWI3NHNyUkNEV1FwU3hOM2RtdXRhNDVSTEp4V3lwL3dJVlo2Q2wyY1FENERCZjVNMWVjSVoyZnRVNTVoaFYzajN2d251L2pmK0xlVG5qNys1cUlHd1VDeTRwNDJCQnJLUUJCUm85NUlTQkJORjh6Ynl6Z0d2SHNLTk1aWGRiUUZnRzdhUDRlak5yWU9ERXhtSkg5MDYyS0pxOHViaHdTSGJ2ZmVnYW5QM1dMbmt6YzNCd1dFeks3SjNWRFU4L0Y1cGVieDlqemo5VzYzTno0R1p4M1hqUk1ycVFqSDNTWmR2SkFEekpOa3BKZGNjQUxHS0x4cktPck55QVZQTXlxWDBRcEtzdDFLU0lGR1hRS0N1TDB0NnJlWklSR1N0cTlCZFNZUzVDQ2t4S29td0J0cDg4MG5EVERVUjZ4cUNUZ2VxL3ZMVFFwUUR0RmpDcTR5cCt1Uk9PWjFva3VtM3hUNDZJT3J5aEJqT1lZRzZRbFpLSWp5NzRrVTlEU3dUNmN0RFgxVlNSM0Z2b3BtbVRaVXpWakpLWlpmTXp6dCtkaG14VTlUSytZdjVrdk5BbGFWcnpqV3hIQ0Q4RVdaeG5taFh3dHE2eUlQQ2F1YXFnU2RDMlBPS1dieXpDcWVRR1REMWZzaXN1RUdVcGZQRzNEOVJLRHhVQkF1c3gvT0lUak5qMjhsMEZmbTZWZ3o5YURxZDhJSkxYSjhoaFhBeTRKazhISDY2TU0vTHc5alRhQ09NZTdnK1NVM0IzRTdrQThCODB4ZWRiQXBjdzN6VC91aHJLSUJrL3J3Z00zSFBQSStYenQ4dFpzSGN6alZYSVJhVWpwYnJQQ0ZySUxpOTNNSkhrVEFpTXltcEFyWExTNmtJbGNDU0lDS0xUT1NGSXlKWXR3SWlNM3RkRnpQZFczRlp4c0ZVL1pLRTYvVFZaQXdJcGxVM29FSWFyWU0wamVONFhmMlhCc3NsVU5wU3dVdWx2VHVnSFE2TTYvWkEwWjRlVG9IdWJlU2ZSNURWdGd0Tk1CalhsL0tCUDNYNEtqQXYyaFhiZGRBa3pPdWdaZlhSYXdqcjNkYnk5YVZkcjA4Q3RHYnJJUmlkRjRVcG9kT2lEVGhXMXZBTGRLNHJ5Y3IycHRwZjdma1J1NmFzUlBmNnA0Nnl2bHlwUzIwZC9RV3VnMEgzT3IwUlgvcVlmK25JdktKMFl0WWhRMFBQV3JCTG1LcGJzRUc5am0vdUVkZkxyakJGMGJlV1BJdzhJVll5M2VHQTB0cGR3NHkyZ2FIM213Y3pKY1BhdXZJcEErWFVCbElFUWErdkxxdjZPMTBseTZsQVA2ZWlkTGZiVXlwczMrYzR4VGRrVnF6M2QzOFpMckUyaXFQdjJ4eWtHcERKcWR1NXVFbEhQRFkwZ0gvYU1YYWNTUnZWK2UxeW1rQWQ5cEFwUjkvM3lmaEhUVms1c05IdzB6V3E3TGM1S01MdW1KSjVVbmdPaGV2bWp4d3UrK1I5U09oSzBMTVZUUnd2SG9Wc1RwcnBZNXhRWVAzeWZ1YWxBcXdFMFhvb1lNTlBIbFdUckJEQXNLQUtmVFgybXdlQVFGc0FVVUVvMWt4aldwTFZXQ0tucGZHS1RiS3dJR2lzRE1jZ0svS0ZrdVJmNWZhYXJXSGRIMXZYdzFDMFpab3pYa3lwK1U4Wkt6ZERxS1pWby81NS9JTkMwSndWSVFzcHNVNmVYM0NxRXkxUWhmZGl2Vk1CRUwwSmo2WDhXQlQ4NHFUaEhNMHhyK3B6MXVJZ1M3TzhzbC84K29OOUd0TE5nMnlabG9uSEMvM2FLL0pYZ25Ia0pmTWd5NElTTks5bkI2TVU4SUpTVjZzb05TNnpHOHZaQVBRTE0reHM2MGhwVUJZMEV6SlltSk9sWWRtc1FiVUdxb2F3d0RWR0o5MGo5ZEdzOXJVWmJHdFBHNGo1ZXYxazdkaGszUiszaDNHbGVIbnRuenVzdVZDblJqQnhYRkpSbXFlbjlkeFhLVDBGbzBVNnRMbFFaNEIvZG03OHlQSnBZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdFeCtqL0pSK2t4Vm94SW53QUFBQUJKUlU1RXJrSmdnZz09J1xyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnQXByZW5kaXphamUnLFxyXG4gICAgICAgIGNvbnRlbmlkbzogJ0FwcmVuZGVyIHNvYnJlIG51ZXZhcyB0ZWNub2xvZ8OtYXMgaGFjaWVuZG8gY3Vyc29zIGVuIGxhcyBwbGF0YWZvcm1hcyBkZSBVZGVteSwgUGxhdHp5IG8gWW91dHViZS4nLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2h0dHBzOi8vd3d3LnVkZW15LmNvbS9zdGF0aWN4L3VkZW15L2ltYWdlcy92Ni9kZWZhdWx0LW1ldGEtaW1hZ2UucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdUaWVtcG8gbGlicmUnLFxyXG4gICAgICAgIGNvbnRlbmlkbzogJ0xlZXIsIGVzdHVkaWFyIG1hdGVtw6F0aWNhcywgcmVhbGl6YXIgZWplcmNpY2lvIGbDrXNpY28sIHZpZGVvanVlZ29zLCBlc2N1Y2hhciBtw7pzaWNhLicsXHJcbiAgICAgICAgaW1hZ2VuVVJMOiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQlVWRlJnVkZSWVZHQmdhR0JVWUdCb1lHQmdZR0JnWUdCZ1pHUmdZR0JnY0lTNGxIQjRySVJnWUpqZ21LeTh4TlRVMUdpUTdRRHMwUHk0ME5URUJEQXdNRUE4UUdoRVNIRFFoSVNFME5EUTBNVFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRReE5EUTBQLy9BQUJFSUFLb0JLQU1CSWdBQ0VRRURFUUgveEFBY0FBQUJCUUVCQVFBQUFBQUFBQUFBQUFBRUFRSURCUVlBQndqL3hBQStFQUFDQVFJREJRWURCd0lEQ1FBQUFBQUJBZ0FERVFRaE1RVVNRVkZoQmhNaWNZR1JNcUd4QnhSQ1luTFI4RkxCTTRMaEZSWWpRNUtpMHZIeS84UUFGd0VCQVFFQkFBQUFBQUFBQUFBQUFBQUFBQUVDQS8vRUFCd1JBUUVCQUFJREFRQUFBQUFBQUFBQUFBQUJFUUlTSVVGUk1mL2FBQXdEQVFBQ0VRTVJBRDhBMGFwSkxSeEVTMDV0dUFqZ3NjcVNWVWx3UkJZOExKQWtYZGx3UWxad1dUaEoyN0dKcURkbmJzbjNZaFNURFVPNUYzSThpTkpqRlJsSTNkam1NWnZSaHB3a2drSmVNTldBU0RIR0RvNGs0YUJ4akdFVXRJMmVRam1qQ2tVTkZ2Q203c1VMRk01VkpnS2tjWklsS2N3bGtaMUZ1UWVzUkphbCtjR3FMek1kVkRzMGpkeHppVkNzSGRoeWx3Yzd4bmVSak1PVWdhb09VbU5DdThFVVYxZ1BlVGk0akFjY1NuV01PS1hyN1FGbkVadkNNWldBeHlqbjdSSlhzd2lTWWVHNzNaSWlTVlVqclNwcG9XTEVKaXFJRGxFVUxGVlpLRW1oR0ZuYnNtM1pHN2lFTjNZeHlCRWR5ZEpGM2ZNd3BqdUpFekdUbEFJTlh4S0o4VEFlWnRIVTF6U0J5WURpZTArRVRKcTFPL0lNQ2ZZU294SGJyQ2o0WExmcFJqL2FNaGwrTkM1TUVxVkNKbHEvYjZqK0ZLaDlBUHFZRFU3Y29mOEFsdjdyKzh5M0pXeE8waXVxMzhqSnFHM0tSeUpLbnFNdmVlZlZPMmFuL2xzUFVTQTlwYVRhaGw4eGVTeW1mWHE2WWxXelZnZkl4cnZQT3RuN1dXNEtPUEsvOXBydG5ZL2ZzRHJKcFppNXBadzVLVjRQaFV0bVlQdFR0WGc4TVBIVlZtNEpUSWRqNkRUek0xSXpWc21FdnJHWXpHVUtBdlVxSWcvTXdIMW5uVmJ0WnRESHNVd2lkeW1sMXpiMWM1RDBrbEQ3T0djNzJJck16SFc1TEgzTXN4Ynh6OXVMekgvYUJnVXlWMmMva1VrZStrb3NUOXBDSEtuUXFIOVc2djd5Nnd2WWJDVTdYUXYrbzIra3RFMk5RVDRLU0Qwdk5lV2Q0c0MvYmJGUGZjdzRISzVadm9CQjIyMXRKL2hRRHlRbjZtZW1mZGdQd29QSlJJNnFMeE52WVNaVjdUMUhtRFlqYWpjRzlFa0pxYlRIQnZWVm5wN011bVowMHVkWkV4Nlc4OG9Yczh4YmFPUFQ0bHY1ckdOMnJyS2JQVFgzSW5wRmQ3Y0Z0b0xrWnpPZHA5bUpVcE80VlE2aTkxNWNvTlUrSDdUQWdHb2hWV3lCQkJVSHJ4RXZVWU1BVnNSYjZ6TGJJMkc5U2lXQ2txMnBBdVBNRG5ibENNSlZxNFVoWFc2RFEvMGp6NVRLYTBEZ1pmT05ZRUhod2pxR0pSeGNidHVCdnhpbW91WXNQY2Z2Q293UEtkSFBhNXlHWDVoeDU1NVRvUjZVVEVCalk5RW1tU3FzblJKeUpKTWhBNVZpa2dSalZKR3hqQXJ1VEl5dk9jenpFZmFKMmxiRDBoVHBOYW85OHhxcThXbHdhVGFlM3NOaHgveEtpTDB1TCsweHUxUHRJVW5kdzFKblA5VGVGZlFhbWVZSnZPNDNtTE14QXVTU2Juem50SFp6czNTb1UxTzRDNUFKSkF5dU9GNU5heVNiV1A3M2EyTTRzaW5nbzNSYnprMUg3UGFybmVyVnJucXhZejBoZmZwL01welBiaGI1UzRuYjR4T0grejNEajRuWStRdERxZlkzREwrQW56SW1rZXB5UHNDWkE1UE0vSWZXVER0VlAvdTVoMTBvcDZtTWJZdEFEL0NUNXl6cU56UC9BSEFRZW9iamhiSUR4Y2VVR3F0OWpVTGY0U2ZPVitKMkRRYjhGdktYVlZ4YmVKc0RwWWl4OG9IVlk5ZmtmcE0xcU1SMmc3TmlrcHEweWQwZkVEcXNvYWVNcWpKWGNlVEdlaTdYWGV3MWNIZ2wvYVZuWS9aS0JRN3FDelo1OEJMcTR5TlJzUTQ4VFZuSFV1dytjRTNiWkhLZXkxZHBwU3VwVlJsL1NKbXUxdXlFcllmNzFTVUJsUGozUnFwNDJpWDBuaDZSMmN3U1VzTlRWQUFOeFNiY1NSZTh0V1MrcGxIMkl4cTE4SFJZWjJUZGJvVU82YiswdTZndC9hK1hvQnhtbUwrbzJZYURPUVBVUC95TDI4NUxVRnRmUFBLL1FLTmZXUXZZWnNiWEF0dkhkRnphdzNCbnFSN3lvaHJqUTVDMnR6N1pEeWc3cmU1enZiZ29GK1ZpM0swSlpXSnVOOFppOWxWTDJKL3E4WEQ5dFlINFNCdTJQNlZhcjFHNjV5NGNlZmxJcUdvK2Rycm9maWZleS9FQnVpUUZPV2ZENEdQSG0zVzhLcXFWSDRnQitaS2E2YVpDL1gzZzd1alpIZFlBbTFpN25JaGdjaDdlZ2tXSVhCVTZHMStTS1BTL3I3UVRGWFpHQk9xdGNiNDVYeXQxeWh4QTAzR3lzQmRMRE1ETVgvbVVpYzJ2NENMYncvQUwydU1zOUR3aFhuZXhPME5URE1hYUczaXpVK0pHSEpoekhNV2h1SzJpN3ZaazhEWmxiNWduK2s4NEhzSEJxK0tlNFVnY0d2Yk04Q09OcGZZekNBWmpUb0crcEVtRkNwaERUQWVrMjhoNGNqeXR3UFNHMGNlR0hDL1hLL3lnM2RzbzMwT2Y0bE9qZEdIUHJLNXF4VTc2SEsrWUorRTlaY1o3TkM3Nmp3blFtNXQwdWNwMER3bTBBNEdhMzh5TS9hZE10UFdWcFNVQUNEbXZ5aUJpWnBsT2F2S05KdkkwSEdTQ1dSRFNiUmptT2N4aCtrMG9iSDRsYWFNN0d3QUpuZ3UyOGErTHhEMU15Q2JMMFVaQ2VnZmFSdGdxbmNxZkU1c2JjdUo4cGtNTGdXVlVDS2Q5aUFCejlwaTMwMUlqd1dDV251RnJieGRmclBhVkdRdGZRYUR5NG1lUWJmMlRYd3owbnFrRU1SYXhIaElzYkhrZjJucmVGcUIwUmhZM1ZkTHZ3OXVFU0hMTWxpVW0xZ2VWK0ora1pVTmpvMXY4b0FzQWIzSmt3RGRlV1pBK1NpTmJENmZDdVJ1ZDBIeThUNlpYSHI3NllETzRMY0wrYm5YOUl0eWtaU3hJM0NldTVsZlRWakNIZE1nWDBKeURhMzRFSU9HNlNCdzliU05rVCtoanBudUVqTFEzYjlXdm55a0FkWTJ2YTU2QTB4dlgwM1FlWklIbVJJSGJxU0RjQTc2VzgxUE9HdllhSVFmRGE0UmVJdmEvOU9wSDVjcEJXVVd6VGpwNE1yRFUzUFFlMGxha0ExVnYrSy9Ud25oLzYrVUJyMHlCK0hQOHRyKzBQcWdBYndROHNsVTJGZ2I1Y0xXSHBLNnVpS0xmRGNDK1JYTFBYa2NqSldwRmJ0WlcrN3NvL0c2SnFUa1NML0tHYk44Sks4QUFCNlFiYWdLdFNUa0RVYTV6NUNTN01iUHJuY0g1eU5RQjJySGh2TkoySFZhdEJxYkM0WmQwanpsRDJtUzlOdWdsajltOWJJanBFL1diK0pldzlVNFBGVjhCVU5nV0wwK0lOdFFPZHhZK2hub1RBYVo3MnRoWXRibmY4SW1RKzBUWWJzcVkzRGc5OVJJSjNkU290b0JxZW5uRGV6dmF2RDRxbVBFaVBsdm81M2Qwamp6ZlBQOEFhZEdiNTh4ZUxsY0d3MXVWNEhNK0oyNG0yZ3ZyZmpCUm1MZ2ZxM0xib09kNzFuMTh3TlZFSnJPckVBc2h5V3hQaUpKWnIyVFFDd0hpTjlUcGJPQ3FWdVNXQjNUYnhNcnQwS3Brb3VHYitYdVpEc0Fjd0x0ZTkwRE9lbzNuc3VlUnk1R1JWckhJdGMySUlaeWVLZ1dWT3R2Sy9XUHhPS1RJTzZESTIzMjN1V2U0dVJQUXdkc2ZTQnNhcWdkSFJCYXh5QUdmSDVRMWhqcVFMZ0d3dVRaRVFlcGM1YS8zNHhDeE53VGNDNUozemZQUUVLTFc2UVd0dHZES0NEV3BDK29Iako4OTQvdkFLdmEzQ3JyVko4dDBBMjZBYUdSY28xNmFzY3RNOVZkaWVWNzJBejN2Y2NvTGlRcUl6a2JvQzN2M1NyYmpuYzVabVUrTDdiWWZNSWoxQ1NjcnRheDRDM25LM0UxTWRqUVZTajNTSFVtNEo4NzZ5RHV4dExlRldyb0dlM3hGY2dNc2g1elNPTDVzUlltMlR0bnlBRWJzdlpndzlNVTFaeFlabTYydng5ZGZlVFZBZWJmOVNqenRsRk5VbTBjT3dGMEtrY2dXSnQ2aVpPcGpXUi9FcDVFY0NKNkJVQkhGdVh4alQybFB0WFppUGMyc1QrWVc5Sk5TeUtiRFY3V1pTZDF0TTdlbCtFNmRoc1AzYmJoK0U2SGtaMHJMMjFLSlVaeDlzcmM0Nm8yODBTbm1TZlFlbXAvbktKQklCT01XMGpjNTIvbWMyYVpsQnNiaU54UzNUNXdvTjY1ZFBia0ppdTN1MURTcHNBUmNnMjY2RHo0alMwTCt2UDhBYVdJKzhZcDMxVlR1aStuWCtkSnMreG16ZCtvYWhIaFFXQXphNTRrQWVYTVRJOW10bHZVWlZVR3hPZVZ6MXluc2V5TUN0RkFpalBRaXdPUnpJSUdRUG5Neno1VzNGSjI3MlozK0ZmZEJMcGFvbHJIUTNPZ3NBUmZpWjNZL2F3cTRSQ3BVc2czV0diTU5TTjJtdXVXZVpHaG1rZWx2RmxOckhnMTN5NUJmaEFzTWgxbm1iNFRHYk14RHRRcHRVb1ZDV0tMY2taL0MyN3hHOWxMU1haajBXcHJ1c1NBYmcyWkVGamZKUVBFZFFMNWFYdklnT1F1Q1Fja1pyMnZhN09iY3ZuekV4OUh0OGcrTERWa2JpRVRrTFczam55bkh0NGd0dVlhdWVXOEdKOUwrY2FkYTF4WW5SamUrUTMxWGV6enpRZERsME1IQUlOenUzSEVkNDV5NkhqN3pHNHp0NVZRYnd3cFFHOWkrVjVVViszK0xmNFVVZWhNenF6alhvdFNtTXh1WlhZZ2QxZk1qTTNKekp6ejQzdEI2cUEvRm9MWERJdmlBQkFIb0o1dFU3UjQ1L3dBVmgwQmlwVWR4ZXJXeEEvUUFQbkpyWFd0cFhxb291eklwQTFaQW1tUU9SejB2bHpsU3ZhTEMwMzhSYXBhM2dwYnpiMXVCM2piV1ZXSHdtRHZkelVjNWY0aFlmU1c5RHVGWHdVMFcvd0RRUWZySVlycStLZXZWZkVWRjNOOERjUUhKVVFlRWJ3eXVjeWI4NGRzNXJrQS9QSWprY3NqNWlRMWloMEpVbi9LZjJrbUVGajYzeUgxNWVZazl0WjRGYmRTOU51b1BybEJQczRyV2UzbjlaWTdSVzZIeW1mN0MxTjJ2Ymt4SHpsOXMzOGUyMDB1b3VMM0JCQjBzZGJ0eTF2ejBFeTIxZXdHRHJNWDNHUmpjK0R3QW5tVi9BdlRYem1vd3JlSDJ6T1o2WkQ1RHlNbGJROFArN08vSCtvenE1UzUrUFBXK3pkQUxyaWE0NEUzTnZKUnFZeCt3Q2pYRTFndVd0aTV2MG5vQjQ4L21mMmxQdE91NktkMndKNDhmY3lXUnFjNzlZZmFmWkxDMFJkOFJXQXRsZGh2RS9wRW9HMkpUcWVIRDBLem4rdDIzUjdUVlVjR2hmZnFrdXhQRTMrc3ZLT09wb0xBQUNZM1c3YjkxNTlRK3oydTJiYnFkTDNsZ24yYlcrS29QU2JWdHFyYlgya0xiVFUvNm1NWTdjbWFUc0lxWnE1QjZHMDZyMmNxcHBXZi9BS2lab20ya09rNDdRQkVZdTFrbndtSXA4UzNtTHhuKzBYWEowQkhsTmMyS1V3VjFwUGNGSk1wMit4UURheUg0bHo4cEt1TFE4QjdRakU3RVJ2aE5wVVluWTFSTGxTU0kybXlpY1ZUUnhrUGxPbFQzbFJMZ2d6bzA2dlozTmhscXgzUjVuajZDU3F0aFljTXBGVDhUazhFOEEvVWMzUDBIdkNMVHBITTJNY2RPUEw1bmw2eVlqbGFSV3VjeURiL1gvS1BybEtxREV1RlVuTExpY3ZNQmprTGRCd0U4ZzdZWXBxK0lXbXR6bmM1SG4xek05SzdRWXZjUXRmbUw4ZVdidHByK0hsTUoyWTJkM3RacXJBWm5LNU9neTh6RFUrdFgyUTJTRVFFZ1h0b1RmcDhLNitzMDVHVmowc0xaZVFRYWVzNm5TQ0tCYXdBRjdaRDVabWRmTCtLUDNNTWtZYy9MUC93SDk0MnB3ekdtZDhoN0NPUS93Q3drWkZ2VDM5YndJWFpWdmRWQUhKQmI1ekc3YzIrKzhVb0lvT2ZpSXY3QVRYNHFqdmdnek9ZM1pCVTNXWjVibmhyam50UVlYWUQxMkRWblk4cjZEeUJ5RXZzSjJZdzQxQlBtWkdqdW1SQmhTWXcvdk1ZMWJmUXFuc2VnbHJJdnJHdnMyam5aRmtQM29uaUozZW5tSXlKNUJZbll0TTZMN0dVdUoyT1ZOMEpGdWMwdFI4c29GaVhJa3NXV3NxMjhEWm9WZzZwQkVteEtBd2FpbGpJMnZzU3ZnRnY1ZVpMczYyNWluSDV3ZmNYbXJMZUNaRERuZHhiZGQwL1VUVlpqM1RBUGRSbHkrZXVmMU1MQ2s5UDV3L2VWZXhhbThpbjhvaDFhcmxhZFhIMlYzVVpDVTJQUU5lR1BjNjVDQzFXQTZ5V3F6R1B3WEZiK2twcXVFZlhPYk92VVRqQTNxcHdXYzY2Y2F5aG8xTGNZNUtUam5OS1JmZ0pHMkh2SmpXcVFCaHFZOE9lY3Myd2dqRGd3SmNUUVN0NXhlOGhMMGJRZmQ2UmdVVnBJbUpHaGtUVXBHVWhNaWRxYU53RVdEWmlkSXpqMDVFQ2l3RmhjbjFKTEU5U1NTWXNVQ0xPekJqZnprZlNSUHl0ZTNRYzliYUNTNzBock5ZWi82ZXdnWXZ0YXhmd2kydHN6dkVmMkV0T3krendpQWoxc1A3d1hHME45eG1maTVmU2FmQzBOMUFJYTlITWJmNmZ2RUY5Wk51YzR0b0VJQmlHbkpUR05BaktqbEI2eWd5YXBVdEJuZThDcnhkRWNwVFlpbmFYdUphVkZjem55YjRxNXFoRVFZb3lTb29nenBNTnAvdmNhK0lncEVScE5YSTZ1NE1nUVp4SE02a2M0MHhhbzNnSW1ReHZoeElQTUg1RVRYMDF1bnBNbHR0YlZrUFVqNVRUTDJEczVpZjhBZ3I1U3pLbmhuTWwyVHJsMUNqaE52U3A1VHBMc2N1VXlnS3RNOFlEVnBFNlM3ZWp6ZzFSQUpMQ1ZTL2N1Y1VZVURoSnNYajBUaUpuOGIyaVVaTE10VGF0M1FEbEJxbFpCeG1XeE8yM2JTVjFYSHVkVytjYXZXdGRWeDZEaUlIVjJ1Z21UZkY4MmtENHRlY21yalVWTnNyQm4yd09FelRZd1NOc2FJMm1OSSsxNUUyMURNOGNiR0hHUUw5dHBtZEtENzNPa0gwVkdzSSswUWlkM0ZIWVp3YkVwNFRDeXdndU4zaXZLQm44T3c3MENhWkRrTFRLNFpkMnFMelZJNDNRVERWTHVUakJNVHRKRUdaSHZNL2orMXFMOE9mbEphU1d0TzdnYW1DMXNhaTZrVHp6SGRyWE43RzBvY1Z0OTIxYVo3TDErdlM4VnR1bU9JbFJpZTBpOERQTjZ1MFhQT0NOaUtobWJhMU9NYi9FYmR2eGdEN1d2eG1RRDFEemtpclU2eU5OTWRwZFl3NDhjNW53ajlZdTY4aXRBTVVEeG5HdktDN2lPWEVzSXcxZEd0SDA2b3ZLcW5pK2NuV29Eb1pNWFdud3orR1pudElsblJ2elN4d0dMc2JHRGRwQUdVRWN4TEdhMi9ZTlBCZWI5TEFUemJzTmliSUJOQnR2dEl0SkNBYzV1WEk1OHBieVcyMDlxSlRCSkltSDJyMnBMRWhKbmRvN1ZlcTEySnR5bFhXeFFXWnZKcWNaRmppTWE3NXN4Z0ZURnFKWFZNUXpIS01GTGlUSTJucTQ4blNEdFdjODRwWkZrVFlybENIYmpIV2QzWE15QnE3R1J0VVBFd0NpaTg0MGxZS2FrYVhsd0ZsMWpUVkVGRzhZNWFMR1JFeHJpZEdMaFRPandZK216R2JwTWxKZ09NMm1sTVhaaE96aUxDQVFYSFZrVmN5Qk1udFh0b291RUZ6TWZ0THRIVXFYdTloeUJtYnlqYzQxYjdaMitpUDREbURJTVIydmRsc3B0TVBpYTVZbUxoMFpockphM2tXMk0yeTdhc1Q2eXRmRXUybDVJdUhVYW1QNzFGMG1kWEF5NFYyMXZKMHdJNHhqNHpsYVFQaWp6azFSd3BvdktjYXlDVmJWeHhKakRXV0VXcHhpY2hHSEhqbEszdmtpOThzQTg0OGN2bE8rL0RsSzQ0aEluM2hJd1dmM3RlVWQzeUdWWGZyRkdJV01OV1pSVHBHN2hYU0FMaWgvREpreG81eUtzYVZmM2o4Ylh1bGpBaXdPWWlWSHVzYVZmYkcybDNhWmF3ZkY0d3UxMk1xc08rVWRVcThvMFNZakU4QkJndkZwR3poY3pCS21LdnBFS05lc0JwQnFsYnJJQXJ0SlV3Uk9zdVlpTTFSRzc1T2docVlHRUxoYmNJMkwxVllSakpGd3A0eXpXajBqdTdQS1RzdlVDbUVFa1hEZ2NJV0taNVJlNVBLVGFZR0ZNUjI1Q1JoekhMaFRHZ1FMRmxsU3dKTTZUeWpZN1k3YXMxeFR5SE9ZN0hiWWR6ZG1MZXNyWGNuVXhocUtKMHZMV1pNU3RWZG8xYVhNd2Q4WHlFSGZFT2VFalFtc3lpTVRHYnNDZmU0eVBjSk11SU1xWStEUGl5WXo3dVk0WWN5K0R5amFzVEc3eDV5Y1lZeDMzYU5pWUV0T3REUmhvb3cwZGpBVm91N0QxdzBsWERTZGw2cXdVekY3c3kyWERDT0dIanN2VlVkMFk0VURMaGNPSThVQkoyT3FrKzdORU5GaEwzdWhHbWlJN0hWWDRXcVJrWVZ2aVNuRGlLS0ltYlZ4Q3JnUmoxT1VLN29SVm9pVFRGWDkzWnpuRHNOcy9wTEhENGE4ME96ZG5yTDJwa2lqdzJ5R1BDWE9GN1BFNmlhYkM0VlJhV3RDbUpaRXRaZWwyYUhLVGY3dXJ5bXNDaUtVbXNZNzFqbTJBT1VqT3doeW13ZW5JSFNNTzlaUTdGSEtSdHNrRGhOUTZTQjBqRHN6dit6QkZHemh5bDZVamR3U1lkbFpTd0lpUzJWUk9qR2RlWExnSFBBeDQyYTNJejBGYVM4aDdDUTFrSEllMG1PckNIQlcvREdtamJoTlBpVkhLVnRlUllwYTFBUVJVQU10OFJwS3gvaWxuNGxUaW1JdmRpUFdkTTYwWjNZbmQySkpFZ1I3Z2pna2ZISktJMVRwSlZwRThJWGgxR1dVc0tLamxBcHhoenluZDFhWHpxTGFRS3JJSzYwUzhJZVFRRWlSeGowa0VXN0YzRENra3FTZ0VVakpxZUdQS0hyQ2FNQ0hDNFU4cGZZSkxRZWhMS2hMRXF3d3dsaFNnV0hoOU9iam5VNlI5b2l4d2xacHJMSVhTVG1NZUVBVkVnemlXRlNCVllXQkhNaUx5V3BCM2tVOFZKMGlFNlJILzJRPT0nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ090cm9zIGlkaW9tYXMnLFxyXG4gICAgICAgIGNvbnRlbmlkbzogJ1ByYWN0aWNhciBpbmdsw6lzLCBhdW5xdWUgc2UgbG8gYsOhc2ljbyBxdWllcm8gc2VndWlyIGFwcmVuZGllbmRvLicsXHJcbiAgICAgICAgaW1hZ2VuVVJMOiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeElURWhVU0VoSVdGaFVWRlJnV0dSVVhHQlVZSFJnVkZoY1hHaGtYR0JjYUhTZ2dHQm9sR3hZWUlURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0d4QVFHeTBtSUNZdExTMHZMUzB0TFM4dExTMHRMUzh0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFMUUJHQU1CSWdBQ0VRRURFUUgveEFBY0FBQUNBZ01CQVFBQUFBQUFBQUFBQUFBQUJnUUZBZ01IQVFqL3hBQkxFQUFDQVFJRUF3UUZDQVlHQ1FVQkFBQUJBZ01BRVFRRkVpRUdNVUVUVVdGeElqS0JrYUVIRkNOQ1VySEIwVU5pY29LeThCVXpVMk9TNFJZbE5IT2lvOExTNGlRMVZHUjBGLy9FQUJzQkFBRUZBUUVBQUFBQUFBQUFBQUFBQUFBQ0F3UUZCZ0VILzhRQU5SRUFBUVFBQXdVSEJBRURCUUVBQUFBQUFRQUNBeEVFSVRFRkVrRlJZUk54Z1pHaHdmQWlzZEhoTWhSUzhRWVZZcEtpUXYvYUFBd0RBUUFDRVFNUkFEOEE3SFJSUlFoRkZGRkNFVVVVVUlSUlJVZkg0Nk9GQzhqYVZIdko3Z09wb1NtdExpR3RGa3FSUmFrRE5PTTVYSkVJN05lL214OXAySHM5OUw4K1lUT2J0SzdlYnQrZEszQ3JxSFlNenhjamczcHFmWWVxNi9haXVRUTVoTW02U3lMNU8zM1hxL3l2alNWQ0JNTzBYdjJEajhHL25ldWxoUk5zR1pndU53ZDAwUDQ5VjBDaW8yWDQrT2RCSkUycFQ3d2U0am9mQ2s3NVIrS3BjTVVnZ09sM1hXejJCS3JjZ0JiN1hOanYwdDQwMlRXcXE0Y05KTEwyUUdmRzhxclcwOVVWdzNMZU04YkU0WXp0SUw3bzdNNnNPbzMzWHpGZHJ3R0tXYUtPVlBWa1JYSGt3dlNXdjNrOWpkbnlZV3Q0Z2c4Ujl2bXEzMFVVVXRRVVVVVVVJUlJSUlFoRkZhOFRpRmpYVTdBRCtkaDMwdlkzaVZ1VVNnRDdUYm4zY2hUTXVJamkva2ZEaXVFZ0psb3BHa3puRUg5S3c4ckQ3aFhrZWQ0Z2ZwU2ZBMlAzMUYvM0dQa2ZUOHBIYWhQVkZMV0I0cDZUTCs4djRyK1ZNTU15dW9aR0RBOGlLbHhUc2tIMGxLRGdkRnNvb29wMUtSUlJSUWhGRkZGQ0VVVVVVSVJSUlJRaEZGRkZDRVVWWFp6bmNHRlVOTTl0WHFxQVN6VzUyVWZmeXJSa3ZFMkZ4VEZJbk9zQytoZ1ZKQTVrZENQS2hPQ0dRdDN3MDF6ckpXazh5b3JPeHNxZ2tud0ZjdnozTm54RWhZN0tOa1g3Sy9uM21tM2o3R2xZa2lINlJybjlsUDhBeUk5MUlBcHhnNHJUN0J3WUVmYmtabklkQng4emZsMVh0WW1yZzhQUDg1T0gxcnFDYTlWamEyblZhc2N1eVpYaldXV1VScTc5bWx3V0xOMTVjaDQwcXdyYzRxTGQzcjVIUW4rVjFrQnhvK1NweldKcTNPUXVEaVZaZ0d3NmxpTFgxQWNySHB0WTFveUxLamlaaEVHMFhETVdJdllMNFhIZUtWWVFjUkh1bDk1QVdUMElzZWk5eUhPSHcwb1pkMU5neS9hWC91SFExYS9LTmtNbUo3UEdZZFRLT3pBWlYzSlRkbGRSelByRUVEZmxTOW1HRk1janhubWpNdCsreHRmMjg2ZXZrOHh4YUY0eitqYTQvWWJmNEVOVGNyQTV0cXIyaURGdTR5TFVhOVduL0lIajBYTGN0NGZ4VXpoRWhhNU5peFZsVWVMTVJZQWUrdTVaZmhsZ2dqaTFEVEVpcHFOaGZTTFgzcWt6eml3SVNrRm5icTUzVWVRK3NmaDUwb1kzR3lTbThqc3g4VHNQSWNoVlZKakk0alRmcVBvbUpNUGlOb0JwbEFZMGNOU2V2VHhyeFhRc1J4RGhWNXpLZjJidDl3cld2RkdGUDZRLzRIL0t1Y1dyeTFSdjl5bDRBSjF1d3NOeGM3ekg0WFZNTm1zRW15U29UM1hzZmNkNm1WeCtyWEt1SXA0YkFOclQ3RDNJOWg1clQwZTBoZFBIaVB3b3Mrd0NCY0w3Nkg4ajNDNlhXdkZZaFkwTHR5SDhnZWRRY216cUxFTDZCc3c5WkR6SGo0anhxcTRxeFYyRVE1THVmTTh2Y1B2cVpOaUF5THRHNTh1OVorVmo0aVd2RkVjQ3F2TU1jMHJhbTVkRjZBZnoxcUthOXJGaldmSkxqWjFVVWxZR3NUWHBydzEwSkN3TlRzbnpWb0h1TjBQckwzK0k3alVBbXNUVGpIRnB0cHpTUVNEWVhUNFpReWhsTjFZWEI4RFdWS0hEbWVSd3hza3poVkIxTGU1Ty9OUUJ1ZDkvYlREbHVid1lpL1pTQmlPWXNRUjQyTzl2R3REQ1RKRUpBTXVmQlNHek1KRFM0WHl2UHlVNmlzWkhDaTVJQTd5YlZIT1l3LzJnK1A1Vng4ckdmeWNCM2tCU0d4dmQvRUUrQlVxaXRVT0lSdlZZSHlQNFZ0cFFJY0xCdEpJSU5GRkZGRmRYRVVVVVVJUlJSUlFoY2orVXRuR05iVmUzWnBwL1p0dmI5N1ZWSHcwNy9QTVAyZDlmYkphM2RxOUwyYU5WL0N1eloza3VIeEtCY1FnSVhrMXlwVy9PekRjZVhLcTdKc255L0NNV2hBMWtXMXN6T1FEekFKNUR5b2RLeGcrb2dkNUFWM0RqeC9UN2dZU1FLeUdTcVBsRGI2V01kT3pOdjhUZmxWTkNHK2FPYkpZVEpkcmVuY29TTE45bmJsVi94NkZjUnlvd05yb2JIdnVSOXhxbnd5LzZ2bS8zOGY4QURiOGFXeHdjMEVaNXE1d0Q2d2NJL3dDVFFmOEF2U2FEREgvU0FmdFJyTVA5WG9hOXV5NTYrWGpTMWlmOWh3dmhPOVNUbmtQejVKN25RSWdwT2szMWRtVjVlWkZSTURpOE8rSEVFN3NuWnltUldWZFdwVzlaYmRENDEwQXByRHhTUmhqbkFtdXo0WmlnOEVBQVoxWTVubVZlNWlQcDh4OGNNRC93cFZId21yNk1XOGFzWEVKVUJRU2RVakRrQit6VzljOWhlZkZQSnJFYzhSaVd3QklHd0JJdjNDOVJEbWNVVU1zZUhrbDFTT2phaU5CQ3B6RjBhL091aHBxdTVLWkhLSSt6M1RaN1BnYXlEUTZ5T1ZFRlljYlE2Y1VXc1IyaUpKWTdXMUxZL0ZUVlRsR1lzR2tqUTJWbEFlM1d4NWVXOWJ1SnM0RWtVSHJHV09QczJadDlXOXdiM3Vkcjg2ck9IWXZYYnZzUGR1ZnZGViswTVFXeDltUEg1MVUvRFJFWVlDUVpqTHlPUjlMQ3VheHRXZHE4dFZBRTVheHJ5c3JWNWFoQ3h0UmFzclY1YXVMdHJMRHpQR3dkR0tzcHVDT24rVldrZWEvT0dkenMycXpMM0ViQWp3TnFxYXJNTmlURE9XNlhzMzdKL0xuU3JOYnFxTnNZUVR4QWorUTAvSDQ2cDd3ZUFEcHExMkpZb290Y0VoTmU1dnRzRFEyWExvdnJPdlRHNUZ0dE1oQUZqZmNpNHFYa3M2aU94ZFFPMUpZRWdFeG1NZzZldDcyNVZpMHE2TmV0ZDRvVkF1TDZrWmIzWG1MQmIzcVkyTm00RHhyNXhXS29Vb2VaNWIyUWU1dnBrQ0RibUNoWU5XOFpLbXNvenRjeTlraEFIUFFHdTNodUJ0Vy9OY1JITWpKMmlodTNZQWs3RkFIS20vZDZXbS9sV3c0dU15NnUwVUNPY1NHNTVwMmFxZFAyamRlWGpUb2lpRCtGWmU5cmxDMVVuTGhwdnFQK3o5dDA1aHJhZktqTjhzU01Fb3pIVEoyYkJyY3lvY0VXNldOU0d4S0dJdnJXL3dBM2FIUnZxMUY3amJ1dHZlc2VJTWNrcStpdzlHUzlnTGFnVVgwenR1UVFWcmhiR0dFNUpCQXBKdVkzN1VkMWpiM0c5UytIOFcwZUtpN1BkdHllNExZM0xlSEwyMnE1eVRESkpNb2tYVWlobUlJNkJUL2xVMkxDeG9XTWFCZFJ1YmZBWDVtMVNmOEFlRGhjQ1ltajZuRWdIa0tBSjc3MC9TWndPeFRpY1YyNWQ5TFNDZVpPdGN2MWt0ODByT2JzU1Q0L2gzVVVBVmZZWEkwZU5XMUVGbEI2V3ZhczNCaHBjUzQ3bVoxTmxiU1daa0lHOW9xSmF1TXR6TTNDeUcvYzM1L25WVXlXSkhjU1BkWHRxUkJpWk1PL2VaNGpnZS81a3VUUnRsYlRrMlVWRXl1ZlVndnpHeC9ENFVWczRwV3lzRDI2RVdzKzloYTR0UEJTNktLS2NTVVZEekhIQ0lkN0hrUHhQaFVzbWxQRnpsM0xIcnk4QjBGVjIwY1ljUEdOMytSMDZjeXBtRHc0bGQ5V2dXTTg3T2J1Yi9jUElWaUJRQlY1Z3NsU1NOWDFzQ1IwdHpyT1F3UzRwNTNjenJtZnlyZVdWa0xSZVE2SmJ4K0VFc2JJZW8yUGNSeU5LSHp5V01QaDNKQ2xnV0czckRrZnVwOWxpMHNWN2lSZnlOVk9jNU1rd3ZmUzRHemVIYzNlS2N3ZU1kaG42L092QldHRXhURy9USm0wNTl4NS93Q00wcjE0YTh4RVVrV3pLZHRnZWg4alVScDJyVk4yaEFXZ2czZkxOWEFZU0xDbG1zRFVNNGh1K3BlWHdTeW15SnE3MjVBZVo1VXNiUWgxTmp2U1hzM1JaVURIQXU2b3U1L0Uvd0NWWCtFdzRqUUlPbnhQVTE2TUNrVWpqVnFmWUZyVzZEWUR1cmZhcURGNGdTeUV0MHZ6VGJwUTRBRFJTcHN1S3dKUHFGbllycDZqVGZlL3NxUytSTUpvWXRZK21WV0RXOVhVQ2JFZGVWV2tXQ00yQWlWWFJiU3NidTJrV3MzSTkrOVNzV3RzWGdSY0cwY1l1RGNHMm9iSHFLY0dIRkExbDlIcVJmM1ZTY1c2M05CekhhZitkRXU1bGw4VVN0cHhBa2RUWW9FWWNqWTduYmF0ZWRaWjJEcW1yVnFSV3ZhM3JYMitGU3VJTXRLTThuYVJOZVJ2UlZyc0xrbmNXMnFUeGwvV3hlTUNmOVZOU01wcjhxcXZmcW40WlM1MFlEckJEcnlBMDNlUUhNK2FyYzB5enNWaGJWcTdXTVBhMXJYdHQ0ODZsNFRKNFJISEppSldRekd5QlJmYTl0VEU5TGtlK3QzRS93RFY0TS8zQS82YTh6eitvd1IvdS94RkxjMXJDODFvQmwzMStVbHNrajJSamVyZWM0RWlyeTNxNEhrRlQ1cGdXaGxlSmpjcWVmZUNMZys0MVFadkR1R0hYWStZL3dBcWRlTlIvd0NxYjloUDRhWFpvZ3dLbmthWmxhR1NPYU9CS2VqSm13N1NkU0FmR2xMeWliVkNoUE1EU2YzZHZ1dFVvMUJ5V0JrallIbHJOajBPeTFOTkpXRHhzZlp6dmJYRS9sWWsxaWE5TkxtY2NSYVNVaHNTT2I4d1BCUjE4NmNhMjlGQWU4TUZsWHpzQUxrZ0R4MnJRY2JGL2FML0FJbC9Pa0dlZDNOM1lzZkUzcjNENGN1ZkRxYWViRlpvS0s3RlZuUzdMdzFoUG9KWi90RFFwL1Z1TlI5OWg3SzlBcm0yRHhrc0lJaGtaTnJXVTdIelhrZmJUSnc1eFdKaUlwZ0VrNUFqWU9lNzlWdmdmaFRHMHNPNm1sdVlBOTdWNXNUYXNKYVluZlNiNDZHK3ZBOS9tbWkxTk9WbCt4RnhZZ0d3N3gwcWp5dGtXVFZKeUEyMnZ2VjkvVE1QMmovaFA1VWJLTVVkeXZrQXZLckE4VDdlYXRNYVh2cGdhVFdkcFpkR0Jzd0lQVUhhZ0Nyak5NWkZJdTE5UU54c2ZiVlNCVlhpb21SU2JySGJ3NTVldGNWSmlrYzV0dUZGV21TZlg5bjQwVnV5aU95WCswZmdLOHJWYk1idTRWZ2R5dnpKS3FNVVE2VWxUWFlBRWsyQUZ5ZkFVbzR2aXlRc2V5VlF2UXNDU2ZIbUxVMFkrRXZFNkRZc2pEM2l1WFNaakVoSUxYSTJJQXZ2NThxN2pKSlcwR1g0S0JQS0k2czBuekxzNjdhS1FFYVhWQ2JEa1JibVB5cXJBcXU0WXpmRDlvZGNtZ0ZXWDBnUUNXMjU4aDdhczdlM3hHOS9JMVRiVEVwWkcrUUhpTytqODhsYjdIeERKR09EWEFudlJhbWZJaTNaV0l0WW5UNGpuOTlVZVhhQklESjZvMzc5K2xNSXplSDdSOXhydXllelk0eXZrQTRWWTh6N0ovSE9jOGJqVzN4dExHS3VwSmNFRWtrang4S3I1WkMzNVV3NTFtTUVzWlVFbGdicWRKNStmbFM1Vk5qMk1qazNZM2h3MXNWNjF4VmhoUzV6TGMyaXQyQ1VFa0VYQkhJMWhOazJHYmN3cjdMajdxMzRKZGllK3Q1cEVUaTF1UlNuUGMxNTNUU3I0OG13NjdpRkwrSXY5OVN3QUJZQ3c3aFdUVmdUVHU4VHFVRnpuZnlOcFZ6eGJUTWUreCtIK1Zhc05pTDdIbjBOV1hFa0hxdis2ZncvR3FJMUlZYUN1OFBVa0k4dkpPV0kvd0RiazhKei9DMVQ1eVBuR1htLzZLS2s3RFM2aHZ6RmJxbmpFNURMZzMveWI5ZlJRbllYTWduaTgvOEFjVno0ZXZSVzNFR1V5aDVadEkwRjJOOVNuWm0yMkJ2MXF3NGl5K1NYc25UU1ZXQkxrdW9Od0NUc1RlbGkxZUVVZHEybkRkMTY5L1RxdTlqSmJUdkMyMy84OENBUDd1bXZWTTJaWUF6d1lZeHNub1FnTnFkVnRjRG9mS3NEaFRpY05BSTJUVkNXUndXQXNMaXpiOHhZVXQyb3BSbkJKdHVvbzU4cTZaYUxnd3ptZ2JyOUNTTXRMdTd6ejE2YUswNHF4Q3lZbHlodW9DcmNjanBHOXZiVlJXVnFGVW5ZYms3QWVKcHFSNWU0dTVxUkZHSW1CZzBBQThrN2NLWUpYd3BEcmNQSXgzOExDNDdqc2EwWTdoWnVjVDNIMlcyUHY1SDRVd1paaGV5aVNQN0tnSHo1bjQzcVRWODNDc2RFMXJ4bUFPOVliR09iUE05L01uNzVlaTVCeGwyMENpTFNROGd2Y0VHeWN0ckhxZHZZYVIxd3JuNnRPdkhPS01tTm11ZGtJakhrb0YvamVxU0NJdTZvT2JNcWp6WWdmalRQOU14cG9FckpZbkVFeXVBNEdncTZMQWZhUHNGVFVVRFlDbXpNY2x3dHNWSENKQkxoRkRGMllFU0FXMWVqYjBiRTdXcXB6dkxsaVRETXQvcFlBN1hOL1NPeHQzRGFuaEVHYUpxV09RWHZIVDgxOTFER0JrN0l6YWZvOVFUVWJDN0crdzc3VzN0eXFxeGVIMzFMN2Z6cDF4V1RwL1JrZUlMTVpWSU9rc1NGamVWMUdsZVF2WUdsV2lTTUVVVWx6VEVSMUFQbW5yZy9OamlJYk9ieVIyVmozajZwOXU0OHdhdndLU2ZrK0MvUEFodUJLakQycU5RUC9DZmZYU3psUDYvdy93QTZvSjlsVGx4TVFzSHFQc1Z0OWw3VFpMaHdaRDlReVBoK3FWWUJVbkI0UXVmMWVwL0FlTldFV1dJT2QyK0FyZGpyaUp0T3hDN1c2ZDl2WlRrR3gzTnVURWFEUGRHcHJQWGg3cVcvRmh4M1djZUo0TDFjUkdEb0RMY2JXdVBkUlN3a2RlVXNiZEkxakhuK2tvN09iL2VmSlVuR0hFYlRPME1iRVFxU0RiOUlSekovVjdoN2ZKZndlQWVadEVhRjJ0ZXd0ZXd0K2RhQUtZdUJjVjJlTFMvSndVOXJjdmlLOUdNYllvU0dnR2hlZkZlYTlvY1RpQVpEL0kxM0E4QXFmRzVmTEMybVdOa05yZ0VjeDRIa2FrWlZtVFFzT1pqUHJEdThWN2o0ZGFaUGxNeEFNMFVZRzZJU2YzanQvRFNhS1lrdzhlUHd2WnpESWpodzVFZk9pVStSMkJ4Uk1EczJuWDdnOU9CNXJvS2tIY2NqdmZ3cnlZMlUxSTRVaFdYQ0lXOVpTeTNIY3AydjdDQjdLMzVsbHVsUlp1Zmg0ZWRlYTdRMlJQaGQvUWh0NS9vL3Z2WHBHRHg4ZUlZeCtsZ0d2MnFLczRvaXgvR3BRd2dIUGVyTk1QQ0Z2MmhINm9Bdjd2eHFwZ3dycFR3RmN5QjkxWVNZa05HVitWcUFBQUxDc1RVdUdDNk94Qkp1RlVDL1BxZHZDc01CQ0hlemNnckUrd1ZKYkE0bGcvdTA4NnorYUZOZG9LSjVmaFJEV0JxWEhISHB1enNEM0Jkci90Vkxod01UUmdndXhMODFUZXdHNDUydDQwOURoWFNmeEkwdlVYOS9uRktkTTF1b090YUZVV0toRHFWUEkvemVsREV3bEdLbm1LNkhMaEZDT2JFSHRGUUZ0aW9JdVNRS2c1L2swVFFveXlMMmxtc1FHOU1odVYrZ0ZPTnc3MmdrMWtMMTYxeHo5T21xbTRUSE5qZHV1dWlhMDQxZnp6MFNaZzNzM250Vm5WVzBiS3dEQ3hCRldsRFNyV2JVRlkwV3JLaWxwcFkyclhJNnFDekVBRG1TYkFlMnRHWjVna0Vaa2MrQUE1c2U0VnozTjgybHhEWGMyVWNrSFQ4ejRtcFdId3pwYzlCei9IekpWVzBkcXhZTWJ1cnp3OXlmaEthc2J4YkFteUF5SHZHdzk1L0FWbHcveGRKMmdsN0JiSWRneFkzZnB5dHlwUHkvTFdsTitTZFQzK0FwaldNS0FxaXdGYURCYkxpc1BjM0ljK0t4VzBQOVNZdDFzYStyMUFBeUhmbWZWUGtIeWx2ZjZURHFSK281SHdZR21YSitNOEpPUXVzeHVlU3ZaYm51RFgwbjMxeDAxZ3dxMmRobUhUSlUwVzBwMm5NMzNxKzR1aks0M0VBLzJoUHNiMGg4RFZmbHArbWlQOTdIL0d0VmVKeHJLd0xrc3BBRnp1VnRzUFpicDRWTVZ1UkI3aUNQZURWUEt3eHZJS2hTWHZiOWFtL1ZPN0wvQU9xelVmM1VoLzRnZnhxbzRwYjZEQW4vQU9yOXptdk1ieE9aRmx0QkdrczZoWlpWTFhkUmE5bE95M3NMMnJSSm51cUZJWHc4VDltaGpWMkQ2Z0NTYml6V3ZjMXdrSEsxS2tsamNITkIxdmgveTN2c25IRVlFYUhnN1NPL3pCVTdQVjlKMmtmMHQ5RnVWeWQ2NXFEVngvcEJMODYrZVdUdEQ5V3gwMk1laTFyM3RieHFub2M0SFJNNG1ac3BCQTB2eTRlK1N0K0ZNYXNPS2psZStsTlpOaGNtNk1BQjdUVFBpK1BKMlAwY2FvUEc3SDJuWWZDa3ZDTDFxKzRaeWxjVlAyTE9WQlZtdUFEdUxiYjFkWUxEUnRnN1dVWHFmRGhrbW9zVGlBUkRDYXMrdmY0SzB3L0hXSkI5TlVjZDFpcDloQi9BMDRaSG4wT0tIbytpNEc4Yld2YnZIMmg0MGk4VjhQRENNZ1dRdUhCTzRBSUsyN3VmT3FmQ1lobzNXUkRabE53ZndQZUR5dFVoMkVoblp2UjVjanA2ZDZrczJqaWNMTHVURzYxQno4anpYWGY2UGp2ZlQ3TG0zdXIyakxjWUpva2xYazZnMjdqMUhzTng3S0t6djlIQ0NSMmJmSUxWQ2R6Z0NDU085Y2J0WFFPQzRNSERHc3p5UmRzMXp1d3VnNUFBRTdHM1BydlVQaXpoaGc3VHdMcVVrbDBITlNlYkFkUWU3cDl5YmF0T2QzRlJmUzZ1ZjRLeGYxWUNmNjJnOHIwN3g4eVhWYzNteS9FTHBsbGhKdFlOZGJyNUg4SzVZeTJKRndiRWk0NUczV3ZLWmVHT0dYbVlTU3FWaEc5anNYOEFQcytQdXJqSTJZVmhMbkd1dnN1eXpTYlFsYTFyQUhkUGZvUGZpbTNoSENtUENSZzgydTF2MmpjZkMxU00yY2FRTGk0YmxjWDVIcFZkeHRtVHdZZTBaMHRJMmpVUHFyWWsyN2owcm1US1RmdjUzNjM3Nzg3MW5zWEVjVEZJT0xyL0FDdlNOajdIMzRtdTNxQXlHVjNYSDUxWFNEVTJlU0J6cUpkU2JiQUEyc09ocGI0Wnh6U3crbWJzaDBrOTRzQ0wrTmo4S3RHckRCeGhMbUVBNWpYcHB4SE5USllDMlF0SnpHV1NucGp3blpxbXJTR0xOMEozNWU2dlV4MFNNTklMQWx5eElGOXg2bzhLclRXQnFTekhTdHFxeXFzdEtySWVXYWEvcG1IbitlOVMyeGlNb1Y0ejZKYTJsckQwamZsV0dIblhSb2VSd291UXFBYjM4YWlHc0RTQmlYM1pvNVZwVmpJQzZxNm9WZVhSUGlGdW5qL2k3Vm5KbXdJWWFObUtXdnY2SzJCdWU4Z1ZxekRNVWRBZ1RsY2hpQXBXNTVBTHRhMjFWNXJXYWVkakpYQWdrWjlCeko5MTF1RmpCQkhEcXNGd2F5dWlNTDNZQy9VWFBRMVk0M2hOeHZFNFlmWmJZKy9rZmhVWExzd3c4VXVxYVpFQ0M5bVlYSk93c09aNjFhLzZjWmZlM3pqL0FKY3R2ZnBxejJkZ21Td2wwZzFPWHp2VFdKeE9KamtBaEJJQXp5c1ovT2FWOFpnWklpQkloVy9MdVBrUnRVYW43RDVwZzhVTkN5eFNYK3BjQSt4VFkzcEwrVURLV3cyR2traUpaV3NvSDFsdnMzbUxYM29uMmE5cEc1bUQ1aE9SYlhZMWg3Y2JyZ0NlaHJ2OTF5M2lMTkRQS1NENkMzQ0R3L004L2RXM0tzcEJHdVFjK1MrSGVheHlYTGRYMGpEMFJ5SDJqK1ZYOXVnL253clI0SENBTkJJeTREM1htKzBOb1Bra2Niekp6UHQ0ZWkxMnRzSzF0Vi9tUERja1NPNWtSbWkwZHJHckVzbXZsZmF4OGJWRm15T1JjUkhoaVZMeWFMRUUyczRCRnpicGZlckFTTlBGUVRCSTAwUWZtWDNCQ3B6V0pxNXhIRDh5NHY1bjZKazFCUVFUcE9vQnIzSXZZRDdqWG1hNUdJNHUyam5TYU1TZG01VU11bVMxN1dQTlRiWmhSdmp6U3hDL00xcHI0YStTb1pvd3dJUEkxb3k0c2g3TnVYTlQrRlNXckxEVEJIVnlvWUt3WXFSY0VBN2dqcUNMaW1aNEJLSzRyb1AwbHAwVytpdW80emdIQ3krbkN6eGFnQ0FQU1d4M0d6YmozMVhmL3dBMFBYRm0zKzcvQVBPcWN4bFB1MmJpQWNtMzNFZTVCWFA2c3N1eVNhV041Z3RvbzFKTG5ZRzMxVjd6OTFkRXkzZ0xDeGtOSnFsUDYreS80Uno5cE5NazJGUm8yaXNBaktWc0JZQlNMYkFVdGpCdkF1OGxJaDJTOGdtUTF5QTU4RnhaVjZVeWNENFdac1Nra1MraWhzN0hrRkkzRitwN2dLcE1iaEdpa2FOeFprTmorQkhnUnY3YVpzazR5R0doV0ZjUGZUZTdhN2FpU1NUYlQ0MXA4UnZHS294ZCtWVitORlQ0VHMyVEF6T0xkM29ic2NNZ2ZGVC9BSlE4dXhEdXNpb1dpUmVsaVZOeVdKSE8xcmIrRklnRlBKK1VOdjhBNDMvTS93REdrM1RxYXlMNnplaW8zNW5aUjM5MUl3WWxZemNrYlZhYWUxcHphTDRKSmUwaGNUZW9vNWFWVmovQzZMd0tUODBUd1pyZVYvekpvcXp5WEFkaEJIRjFVYitaM2I0azBWUnpQRHBIT0hFbGF6Q1Jsa0RHTzFBSDJVMm9XS3luRHltOGtLTWUrMWo3eHZVMmlrQWtHd25YTWE0VTRYM3FCaDhsdzBadWtDZ2pyYTVIbGU5cW4wVVVGeGRtVGFHTWF3VTBBZHdwVm5FT1VqRXdtTzltQjFLeDVCaGNiK0JCSXBHSENPSzFhZXpGdnRhbDArZDczK0ZkTW9yb2NRclBDYlRtd3JDeGxFZGVIa1FsZUhKZm1zWVVIVmZkbS9YUDRkMVJzWGpJNHhkMkErOCtRNW1yN2lMTVZnaExFQm1iMFZVOVNlcDhCenJsbUwxTXhkaVdKNm1zcnRMQ05iT1hOT3VaSEkvdlg0RmJiTmpreGdNa3ByUFhuM2NxMDVjdEV5TnhERDNPZkd5L25XL0RabEZKc3JiOXgyUHg1MHN3WlBPNmRvc0xzbS9wQUcxaHo4Nmhpb1RvQU5RVmIvME1EckREbU9vUG1QWTBudzFyTlZlU1ppWEdoL1dBMlBlUHpxMHBraWpTcm54bU4yNlZxbWtDZ3N4QVVDNUoyQUE2bWtMUE9LNUpDVWdKUk9Xcmt6ZjlvK05iK09NMkxQOEFOa095MkwyNnR6QytRRmo1a2QxTGtFTnR6enE2MmZnTjhCN2grdjJuNDJnRGVLM1FyYm56TzVQZWZPdHdyQVZtSzBvQUFvTHBOcklHcE9hY1dUcERIRkt4a2kxMzlMZGxzcDVOekkzNUdvd3F1NGhpdkRmN0xBKy9iOGFYSGs4RlYrMUlXellTUnJoZVJWN0RLcnFHUWdxUnNSVWpBZjFzZis4VCtJVWw4TlpnVWZzMlBvT2ZjL1QzOHZkVGVqbFNHSE1FRWVZTjZzaG1GNVBpSURCSnU4TlIzS3o0d1lqR1lnQWtCbjNBSnNSc1FDT3U5TWJSWHpTSjdYMFlWWkxjL1ZoTnZqYXFyT2NiZzVPM25VczhzNmdMR3lXN0ZqYlUydTlqeTJ0MzF0bDRqaER5U0lXRG5CcEFoQXRaeHN4dmZhMXRqVWM3eGFLSEN2UUthMHhpUnppNFp1RHZJdVBxcCtFUmpqc3RtY0VOTENWYlVDRHJqUjFhNFBtS1hzQ1A5WFkwZDA4UDNzS2tZYmljQmNNOGhlU2JEek8xMk45VVRqY2FpYjN2VVhNc3d3eTRlU0RER1J1M2xXUmk2aGRDcGNxZ3NUcU56em9EU01xNWZlL2RkTDJINnI0SHZ6YUI5d2xwcWpZekZMR0x0N0IzMUlua0Nnc2VRRjZWTVZPWkcxSHJ5SGNPNm55azRhRHREbm9uN0ZjZTQyU0tPTkpPeFJZMVcwZXpHeWdYWitkOXVscW9Kc1ZJeHV6dXg3MlpqOTVyUXEyQUhjS3lxVXlOckI5SVR6NUhPMUttNExPTVRDYnhUeXA1TzF2YXZJKzZuM2hmNVRtdUk4YUFRZHUyUVdJL2JRY3g0cjdxNXBRYTVKQXlRZlVQeWx4enZqTnRLK2djN3lTTEdJcnF3RGFicEt0aUdVN2kvd0JwYVM4WHdwaTBQOVZySDJsSVB3NS9Db255VmNUR09RWUtWdm81Q2V5djlTVG5wL1piZjIrZGRPemZNRmdqTGtYTjdLTzhuN2hWWWNSTGc3YVNOMGMrU2tTNEhENHNkcWJCNDE4cjV4WE9zTHd4aTNOdXhLK0xFS0I3OTZjZUhlR0V3NTdSeUhsdHNmcXIzNmI5ZkdvV0U0cmZWOUlpNkNmcTN1QjdUdlRZRDFGUnp0UTRscERUUTRnTHVFMlpoNGp2aXlSejRlQzlvb29wbFdxS0tLS0VJb29vb1FpaWlpaENSK1BKaVpVVG9JNysxaWYrMFV0QVUxOGQ0WWg0NWVoWFFmTUVrZkFuM1ZTWkpoRWxtVlpHQ3B1V0pJR3c2WFBmeXJQNGxyamlITjRrclo0Q1ZqTUV4L0FBMzRFMzZwNTRmeHkvTVEzU0tOZzM3aW44TFZ6QnNLYjdHdXVRVDRWRTdOWklRbHJhZFNXOGI3NzBvOFY0VERncThESnVTR1ZDcEE3bXNPVlNNZENYUnRPOER1ajhLQnN2RkJrMGczU044Mkw4VFI4OWRFdTVMZzI3YVBjQzdCZXYxdHFmQmtpS0MwamtoUVNRQmJZQzUzcFo0YXd4ZkVSOXluV2ZKZjhBTzFPK2JLVEJNQnpNVWdIbm9OSXdHRGlsYVh5TnZQTDM5VW5iR0tlSld0YWF5ejgxODl5emEyYVE4M1lzZjNqZTN4cTVqeTVQNk9mRTJQYXJpRmpCdWJhREZydHA1Yyt0VVVmNVU1WkppbGp5dWRtaGptQXhjZm9QZlR2SHoySTNyUUVBQUFLZE9TM2QzZjdoNDlGbE5rRVA5STRiRHFwN09TT0ZuR3BqZlVyTSs5N2k0WHBXNThrdzR6V0tBTGZEeTZIVmJ0dWp4RWowcjM5WlQxcTYwcWN4RTUweHJIbGl5MzMwcGRXVWVOaHFQanRXbUdBZk9NcGtTUVNBQXdGMURBRXc2Z05tMzVNZWZkU0wreXJ4SzRnWm4rQjg2Y2I1WGtQV2t1OE1aZkcrSWw3VmRTUXhUUzZMa2F1eU95azg3Yi9DalA4QUNReTRTSEVKQ3NSbGFXR1JVSjAzWGt5Zzh0cWw4S2tIRll0UnVmbStMRmgzM0czd3JSaXQ4cXcvL3dDcVczaU5QNTEzaXBEck11Zk5vNlVXdSs5ZC9WY21taWFOeXAyWlQ4UnlQNDAvWVNiV2l0OXBBZmVLcDg2eXp0QnJUMXdQOFE3dk9yREoxSWdqQjJPZ2JIcDRFVll3dkRnc0QvcUhCSERPYURwWm84eCtxelVvMXJldHByVTlQck9oWUdzVFdSckZxNFU0RlU4UVMyUUw5by9BVlU0R0hVMStnMy9LclBQWWl4UUR4OW5LdklJUW9zUDVOS2paWnRXa1R3MkVBYW0wd1pOd3ZOaVloS3BDaHAwZ1FFRzdzM3JGYmRFVUVueVBkVXJHY0JZOUM5b2d5SnFQYUI0d0dWZWJnRnIycG40VHptV1RDWWRiTUJCaU5KTWFCRkdIV0d6RjVDTkE5Si9TTjcySklyYnhIbUN4SkpBc0JkSThOTEhLMEtCVmhPSWRYaUN0OWkxd2JiR3dKcGt6emIrNksrSG44NUtXSUlpeStpU2Y5RjV2bThPSU53SnBDdGlqZ1JvUDBzamZWVGZuYmx2VXFYZ3NpQ1hFTGpjTElrSTlJbzdOdWVTMzArc2VnOFJUMWwrSjFaYjJqenZOQ21EN0dWSVRxa0VzakRXYkVXQlJDQUw4aGVxTE5ac3VHWFlVV3hmWXM4NVFBd2dtUldzVEwwTnI3VzZVZHZJVFhXc2hmMzQxa3U5akdCNGNUOHlYUElwV1JnNm16S1F3UGN5bTRQdkZmUU9aUUhGNGFOMDVzcVNnZCtwZHg4YStlNitpZUZFSXdXR0I1OWhGL0FLYjJwR0hzQVBHeDZJd0dlOE81TFdGeU9abTBsQ3ZlV0ZnQitQc3A0alN3QUhRQWU2dmFLcGNQaG13M1J1MVpOYUc2SW9vb3FRbElvb29vUWlpaWloQ0tLS0tFS05tR0NXYU14dnlQWHFDT1JIaUs1L21lVVNRR3pDNjlISHFuOGo0R3VrMEVkRHlxTGljSTJjY2p6VS9BN1FmaFRRRnRQRDNDNVdBYXlBcnBEWmJDVGN3eDMvWVdvMkx5RER2OVRTZTlQUitIS3ExMnk1QU1pRmJqYmtSTkZyaDZyVHdwZ2xTRU9QV2szSjhBU0FCNFZjRWQvOEFJclZnY01JbzFqQnVGRnJtdDFXOExOeU1ONUQxNHJQNGlVeVN1ZmVwUDY5RjgrWjNsNXcrSWxnUDFISUhpdk5UN1ZJb2p6Q1FRUGhoYnMyZFhiYmZVb3NMRyt3dFhTdmxLNFpNeWpFd3JlU05iT281dkdON2dkV1hmekJQY0s1VXBxVmRoYVhDenR4RVFkeEZYMEkrV0ZieThRNGhnNExMNmNDNGRyTCtpUzVBRyt4M056Umc4N25qV0pVWUFReW1WZlJCMHVRUVQ0aXhPMVZncklVVW51eVpWVUZkUzhTNGhwRWwxcUhqTEZTcUl2cmV0Y0Fla0Q0MXF6TE9Kc1JwN1ZoWkFRcUtxb3EzNTJVZFRWYUt5RmNYQkV3RUVBV05GSXd1SGFSMWpRWFptQ2dlTEcxZGJ6YmhIRHpJbzlSMFFJSkY2aFFBTGo2M0x6OGFvUGs1NGRJUHp1VVcySWlCN2pzWlBkc1BhZTZuK3VCeGFiQ3orMTN4NGc5a2N3UHYrdExYS015NEx4Y1Y5S0NWZnRJYm4ycWZ3dlZGTGwwdzJNTGcrS09Qd3J1bFphcWtOeGJocUZtSDdIakp0cmlQWDhMaGNHUzRselpJSkQrNjF2ZVJhbUxLUGs4bmNnNGhoRXZjTE01OTNvcjd6NVYxQW1pdU94VHpwa25JOWxSTk51SlBva1BqamhPSmN2SXc4ZGpDd2xKNXN3QUljazh6Nkp2KzdYSURYMDBSZlk5YTRqeC93b2NITHJqL0FLaVZqbzcwYm1ZejRkeDd2S3BPQm4xWTd3OTF6RzRlZ0hzR1NpNWR4amlJVmpqVllqRkhHOGZaRlBSY1NFYWk5ajZURzNQejd6V2NuR2s0MHJCSERBaXE2OW5Fbm9zSlBXMUJpZFhLNHBicnlwM1lSazNTaWR2SlZXcmgrSmNUMk1jQ1AyVWNhTWxvaG8xNndRelBiMW1JUFAyODZ3enJQcE1SSEZFWTRvNDRkV2xJazBDN1cxTWQrWnQwcXBOZW9wSkFBSkpOZ0FMa2s4Z0FPWnJ2WnNCdWx6dEhrVmFsNU5sclltZU9CZWNqaGZKZWJON0ZCUHNyNk9qUUtBb0ZnQUFCNEFXRkpueWM4SUhDSVo1eDlQSUxhZjdORDlYOW85ZklEdnAxcW94a3drZlEwSDNWcmhJVEcyenFVVVVVVkVVdEZGRkZDRVVVVVVJUlJSUlFoRkZGRkNFVVVVVUlSUlJSUWhGRkZGQ0VVbGNWY0F4emt5NFlpS1U3c3A5UnozN2VvM2lOdkRyVHJSUUNuWVpueE8zbUdsd2ZNZUhzWEFiU3d1QjlvRFV2K0piajMxWGVGdCs2dm9rR3NlekhjUGNLVnZLMGJ0ZzE5VFBJMTk3WHoydE52eWQ1TkhpSjNhVmRTUktHMG5rWFk3WEhVYkUycHU0ajRIZ3hGNUlyUXluZTRIb01mMWxISStJK05aOEE1SEpoWXBSTW9EdEowSUlLS29BSVBjU1dvM2s3UHRCajhPNHNOTzByaW1paWlpa3FoUlJSUlFoRkZGRkNFVW0vS3hodFdBTC9BTm5LamV3M1EveFU1VmhKR0dGbUFJN2lBUnNialkrSXBjYjl4NGR5U0pHNzdDM211RVpEd1pqTVZaa2owUm45Sko2SzI4QjZ6ZXdWYlRmSmZqZ2ZSYUZoMzYySHdLMTJTaXBSeDhwT1ZCUlJnWTZvMlZ5UEEvSlZpV1AwczBVWS9WMVNIN2dQalQzdzN3YmhjSDZTS1hsL3RYc1QrNk9TZXpmeHBob3BtVEV5eUNpVTlIaDQ0ellDS0tLS1lUNktLS0tFSW9vb29RaWlpaWhDS0tLS0VJb29vb1FpaWlpaENLS0tLRUlvb29vUWlpaWloQ0tLS0tFSW9vb29RaWlpaWhDS0tLS0VJb29vb1FpaWlpaENLS0tLRUlvb29vUWlpaWloQ0tLS0tFSW9vb29Rdi8vWidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnTGEgbmF0dXJlemEnLFxyXG4gICAgICAgIGNvbnRlbmlkbzogJ01lIGd1c3RhIHNhbGlyIGEgY29ub2NlciBsYXMgZGlzdGludGFuIGZvcm1hcyBkZSB2aWRhIHF1ZSBleGlzdGVuIGZ1ZXJhIGRlIGxhIGNpdWRhZCB5IGVzdGFyIGVuIGNvbnRhY3RvIGNvbiBsYSBuYXR1cmFsZXphLicsXHJcbiAgICAgICAgaW1hZ2VuVVJMOiAnaHR0cHM6Ly9jb25jZXB0by5kZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9uYXR1cmFsZXphLW1lZGlvLWFtYmllbnRlLWUxNTA1NDA3MDkzNTMxLmpwZWcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ1ZpYWplcycsXHJcbiAgICAgICAgY29udGVuaWRvOiAnQXVucXVlIG1hcyBoZSB2aWFqYWRvIGRlbnRybyBkZWwgRWN1YWRvciBtZSBndXN0YXJpYSBjb25vY2VyIG90cm9zIHBhaXNlcy4nLFxyXG4gICAgICAgIGltYWdlblVSTDogJ2h0dHBzOi8vd3d3LmVudG9ybm90dXJpc3RpY28uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA5L2FnZW5jaWEtZGUtdmlhamVzLTEyODB4NzIwLmpwZydcclxuICAgIH0sXHJcbl0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=