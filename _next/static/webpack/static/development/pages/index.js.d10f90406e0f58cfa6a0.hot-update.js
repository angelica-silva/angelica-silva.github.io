webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.d10f90406e0f58cfa6a0.hot-update.js.map