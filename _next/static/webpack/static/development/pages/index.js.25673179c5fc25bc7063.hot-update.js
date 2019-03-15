webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common */ "./components/common.tsx");
/* harmony import */ var _lib_slackBot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/slackBot */ "./lib/slackBot.ts");







var _jsxFileName = "/Users/idp/Development/angelica-silva.github.io/src/pages/index.tsx";




var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1b4b84b-0"
})(["margin-top:50px;font-family:'Arimo',sans-serif;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "pages__SubTitle",
  componentId: "sc-1b4b84b-1"
})(["font-family:'Arimo',sans-serif;text-align:center;font-weight:400;margin-top:0;margin-bottom:20px;font-size:large;"]);
var ProfileImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__ProfileImageStyled",
  componentId: "sc-1b4b84b-2"
})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);height:150px;width:150px;border-radius:100%;background-position:center;background-size:cover;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Flex",
  componentId: "sc-1b4b84b-3"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:50px;"]);
var Blurb = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "pages__Blurb",
  componentId: "sc-1b4b84b-4"
})(["padding:1em 2em;text-align:left;font-family:'Arimo',sans-serif;line-height:1.85em;"]);
var CTA = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "pages__CTA",
  componentId: "sc-1b4b84b-5"
})(["color:white;margin-top:25px;border:solid 1px #eee;border-radius:4px;font-size:larger;padding:0.5em 1em;background:#1A5FDE;display:flex;align-items:center;"]);

var ProfileImage = function ProfileImage(_ref) {
  var src = _ref.src;
  return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](ProfileImageStyled, {
    style: {
      backgroundImage: "url(".concat(src, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  });
};

var Footer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Footer",
  componentId: "sc-1b4b84b-6"
})(["bottom:0;left:0;margin-top:100px;width:calc(100vw - 2em);font-family:'Arimo',sans-serif;height:50px;background:#F2F2F2;padding:0.25em 1em;display:flex;justify-content:space-between;align-items:center;"]);
var CTA_COPY = {
  subject: "Let's talk about video",
  body: 'Hi Angelica! %0D%0A%0D%0AIf I could describe my organization\'s video strategy in one word it would be ...'
};

var Fist = function Fist() {
  return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("img", {
    height: "25px",
    style: {
      marginRight: '15px'
    },
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/fisted-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44a-1f3fc_1f3fc.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  });
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "triggerCtaNotification", function () {
      console.log('yo wtf');
      var href = "mailto:asilva@brightcove.com?subject=".concat(CTA_COPY.subject, "&body=").concat(CTA_COPY.body);
      window.open(href);
      var ipData = _lib_slackBot__WEBPACK_IMPORTED_MODULE_10__["IPService"].getIpData();
      var gMapsLink = "https://www.google.com/maps/?q=".concat(ipData.postal, " ").concat(ipData.city, " ").concat(ipData.country_name);
      _lib_slackBot__WEBPACK_IMPORTED_MODULE_10__["SlackBot"].sendTextMessage("\uD83D\uDCE3 User just triggered CTA <".concat(gMapsLink, "|").concat(ipData.city, ", ").concat(ipData.country_name, ">"));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ipData = _lib_slackBot__WEBPACK_IMPORTED_MODULE_10__["IPService"].getIpData();
      var gMapsLink = "https://www.google.com/maps/?q=".concat(ipData.postal, " ").concat(ipData.city, " ").concat(ipData.country_name);
      _lib_slackBot__WEBPACK_IMPORTED_MODULE_10__["SlackBot"].sendTextMessage("\u26A1\uFE0F Site visit from <".concat(gMapsLink, "|").concat(ipData.city, ", ").concat(ipData.country_name, ">"));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_components_common__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Flex, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](ProfileImage, {
        src: "/static/profile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Angelica Silva"), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](SubTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Account Manager, Enterprise Brightcove "), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Blurb, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "It was great to connect with you! I hope you enjoyed Oracle MCX. As a Brightcove Account Manager, my goal is to constantly ", react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "learn"), " more from our customers, ", react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "grow"), " with the industry, and learn how your team defines ", react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "success"), " with video.", react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), "I\u2019d love to continue our conversation."), react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("a", {
        onClick: this.triggerCtaNotification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](CTA, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Fist, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), " Reach out!"))), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("a", {
        href: "mailto:asilva@brightcove.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "asilva@brightcove.com"), react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("a", {
        href: "tel:1-617-245-6055",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "617-245-6055")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.25673179c5fc25bc7063.hot-update.js.map