webpackHotUpdate("static/development/pages/index.js",{

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
})(["margin-top:50px;font-family:'Arimo',sans-serif;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "pages__SubTitle",
  componentId: "sc-1b4b84b-1"
})(["font-family:'Arimo',sans-serif;text-align:center;font-weight:400;margin-top:0;margin-bottom:20px;font-size:large;"]);
var ProfileImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ProfileImageStyled",
  componentId: "sc-1b4b84b-2"
})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);height:150px;width:150px;border-radius:100%;background-position:center;background-size:cover;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Flex",
  componentId: "sc-1b4b84b-3"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:50px;"]);
var Blurb = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "pages__Blurb",
  componentId: "sc-1b4b84b-4"
})(["padding:1em 2em;text-align:left;font-family:'Arimo',sans-serif;line-height:1.85em;"]);
var CTA = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "pages__CTA",
  componentId: "sc-1b4b84b-5"
})(["color:white;margin-top:25px;border:solid 1px #eee;border-radius:4px;font-size:larger;padding:0.5em 1em;background:#1A5FDE;"]);

var ProfileImage = function ProfileImage(_ref) {
  var src = _ref.src;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProfileImageStyled, {
    style: {
      backgroundImage: "url(".concat(src, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  });
};

var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Footer",
  componentId: "sc-1b4b84b-6"
})(["position:fixed;bottom:0;left:0;width:calc(100vw - 2em);font-family:'Arimo',sans-serif;height:50px;background:#F2F2F2;padding:0.25em 1em;display:flex;justify-content:space-between;align-items:center;"]);
var CTA_COPY = {
  subject: '',
  body: ''
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProfileImage, {
    src: "/static/profile.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Angelica Silva"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Account Manager, Enterprise Brightcove "), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Blurb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "It was great to connect with you! I hope you enjoyed Oracle MCX. As a Brightcove Account Manager, my goal is to constantly ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    style: {
      fontFamily: 'sans-serif'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "learn"), " more from our customers, ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    style: {
      fontFamily: 'sans-serif'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "grow"), " with the industry, and learn how your team defines ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    style: {
      fontFamily: 'sans-serif'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "success"), " with video.", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), "I\u2019d love to continue our conversation."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "mailto:asilva@brightcove.com?subject=".concat(CTA_COPY.subject, "&body=").concat(CTA_COPY.body),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CTA, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\uD83D\uDC4A\uD83C\uDFFC Reach out!"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "mailto:asilva@brightcove.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "asilva@brightcove.com"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "tel:1-617-245-6055",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "617-245-6055")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.854e416854d196935144.hot-update.js.map