webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common.tsx":
/*!*******************************!*\
  !*** ./components/common.tsx ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");

var BackgroundAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}"]);
var Page = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "common__Page",
  componentId: "sc-1smu0zd-0"
})(["animation:", " 15s ease infinite;position:absolute;background-size:300% 300%;top:0;left:0;width:100vw;height:100vh;"], BackgroundAnimation);

/***/ }),

/***/ "./components/commonn.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common */ "./components/common.tsx");
var _jsxFileName = "/Users/idp/Development/angelica-silva.github.io/src/pages/index.tsx";



var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1b4b84b-0"
})(["font-family:'Arimo',sans-serif;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__SubTitle",
  componentId: "sc-1b4b84b-1"
})(["font-family:'Arimo',sans-serif;"]);
var ProfileImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ProfileImageStyled",
  componentId: "sc-1b4b84b-2"
})(["height:150px;width:150px;border-radius:100%;background-position:center;background-size:cover;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Flex",
  componentId: "sc-1b4b84b-3"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:100px;"]);

var ProfileImage = function ProfileImage(_ref) {
  var src = _ref.src;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProfileImageStyled, {
    style: {
      backgroundImage: "url(".concat(src, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProfileImage, {
    src: "/static/profile.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Angelica Silva"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Account Manager, Enterprise Brightcove ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b9bc868722813343b8fa.hot-update.js.map