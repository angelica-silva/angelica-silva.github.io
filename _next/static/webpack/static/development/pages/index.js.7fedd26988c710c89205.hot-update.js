webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "../node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/core-js/library/fn/json/stringify.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/fn/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./lib/slackBot.ts":
/*!*************************!*\
  !*** ./lib/slackBot.ts ***!
  \*************************/
/*! exports provided: IPService, SlackBot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPService", function() { return IPService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackBot", function() { return SlackBot; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);




function getIPData() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://ipapi.co/json", false);
  request.send(null);
  if (request.status === 200) return JSON.parse(request.responseText);else return null;
}

var IPService = {
  getIpData: function getIpData() {
    return getIPData();
  }
};

function sendPayloadToSlack(payload) {
  if (window.location.hostname === 'localhost') {
    console.log('Slack notification send');
    console.log(payload);
    return;
  }

  var url = "https://hooks.slack.com/services/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";
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.error("Slack Hook failed");
    }
  };

  xhr.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(payload));
}

function sendTextMessage(text) {
  sendPayloadToSlack({
    text: text
  });
}

var SlackBot = function SlackBot() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlackBot);
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SlackBot, "sendPayloadToSlack", sendPayloadToSlack);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SlackBot, "sendTextMessage", sendTextMessage);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common */ "./components/common.tsx");
/* harmony import */ var _lib_slackBot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/slackBot */ "./lib/slackBot.ts");





var _jsxFileName = "/Users/idp/Development/angelica-silva.github.io/src/pages/index.tsx";




var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1b4b84b-0"
})(["margin-top:50px;font-family:'Arimo',sans-serif;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2.withConfig({
  displayName: "pages__SubTitle",
  componentId: "sc-1b4b84b-1"
})(["font-family:'Arimo',sans-serif;text-align:center;font-weight:400;margin-top:0;margin-bottom:20px;font-size:large;"]);
var ProfileImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__ProfileImageStyled",
  componentId: "sc-1b4b84b-2"
})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);height:150px;width:150px;border-radius:100%;background-position:center;background-size:cover;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__Flex",
  componentId: "sc-1b4b84b-3"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:50px;"]);
var Blurb = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "pages__Blurb",
  componentId: "sc-1b4b84b-4"
})(["padding:1em 2em;text-align:left;font-family:'Arimo',sans-serif;line-height:1.85em;"]);
var CTA = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "pages__CTA",
  componentId: "sc-1b4b84b-5"
})(["color:white;margin-top:25px;border:solid 1px #eee;border-radius:4px;font-size:larger;padding:0.5em 1em;background:#1A5FDE;"]);

var ProfileImage = function ProfileImage(_ref) {
  var src = _ref.src;
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](ProfileImageStyled, {
    style: {
      backgroundImage: "url(".concat(src, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  });
};

var Footer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__Footer",
  componentId: "sc-1b4b84b-6"
})(["position:fixed;bottom:0;left:0;width:calc(100vw - 2em);font-family:'Arimo',sans-serif;height:50px;background:#F2F2F2;padding:0.25em 1em;display:flex;justify-content:space-between;align-items:center;"]);
var CTA_COPY = {
  subject: "Let's talk about video",
  body: 'Hi Angelica! %0D%0A%0D%0AIf I could describe my video strategy in one word it would be ...'
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ipData = _lib_slackBot__WEBPACK_IMPORTED_MODULE_8__["IPService"].getIpData();
      var gMapsLink = "https://www.google.com/maps/?q=".concat(ipData.postal, " ").concat(ipData.city, " ").concat(ipData.country_name);
      _lib_slackBot__WEBPACK_IMPORTED_MODULE_8__["SlackBot"].sendTextMessage("\uD83D\uDEF0 Site visit from <".concat(gMapsLink, "|").concat(ipData.city, ", ").concat(ipData.country_name, ">"));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_common__WEBPACK_IMPORTED_MODULE_7__["Page"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Flex, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](ProfileImage, {
        src: "/static/profile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Angelica Silva"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](SubTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Account Manager, Enterprise Brightcove "), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Blurb, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "It was great to connect with you! I hope you enjoyed Oracle MCX. As a Brightcove Account Manager, my goal is to constantly ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "learn"), " more from our customers, ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "grow"), " with the industry, and learn how your team defines ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("strong", {
        style: {
          fontFamily: 'sans-serif'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "success"), " with video.", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), "I\u2019d love to continue our conversation."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: "mailto:asilva@brightcove.com?subject=".concat(CTA_COPY.subject, "&body=").concat(CTA_COPY.body),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](CTA, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\uD83D\uDC4A\uD83C\uDFFC Reach out!"))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: "mailto:asilva@brightcove.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "asilva@brightcove.com"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: "tel:1-617-245-6055",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "617-245-6055")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7fedd26988c710c89205.hot-update.js.map