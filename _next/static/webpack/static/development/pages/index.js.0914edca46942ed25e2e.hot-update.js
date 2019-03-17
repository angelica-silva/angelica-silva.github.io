webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/SlackBot.ts":
/*!*************************!*\
  !*** ./lib/SlackBot.ts ***!
  \*************************/
/*! exports provided: SlackBot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackBot", function() { return SlackBot; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);








var SlackBotClass =
/*#__PURE__*/
function () {
  function SlackBotClass(hookUrl) {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SlackBotClass);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "link", function (url, label) {
      return " <".concat(url, "|").concat(label, ">");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "mapsLink", function (postal, city, country) {
      return "https://www.google.com/maps/?q=".concat(postal, " ").concat(city, " ").concat(country);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "mapsUrl", function (city, country, postal) {
      return "<".concat(_this.mapsLink(city, country, postal), "|").concat(city, ", ").concat(country, ">");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "generateVisitorID", function () {
      return "_".concat(Math.random().toString(36).substr(2, 9));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "sendTextMessage", function (text) {
      return _this.sendPayloadToSlack({
        text: text
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "sendSiteVisitNotification", function (ipData) {
      var siteVisitorId = localStorage.getItem('SITE_VISITOR_ID');
      var visitType = siteVisitorId ? 'New' : 'Returning';

      if (!siteVisitorId) {
        siteVisitorId = _this.generateVisitorID();
        localStorage.setItem('SITE_VISITOR_ID', siteVisitorId);
      }

      var message = "".concat(visitType, " Site visit");
      var visitor = "User ID: ".concat(siteVisitorId);
      var location = _this.mapsUrl;

      _this.sendPayloadToSlack({
        icon_emoji: ':zap:',
        attachments: [{
          color: '#FFAD2C',
          title: 'Site Notification',
          fallback: message,
          text: message,
          fields: [{
            title: 'Location',
            value: location,
            short: false
          }, {
            title: 'Visitor',
            value: '',
            short: false
          }]
        }]
      });
    });

    this.hook = hookUrl;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SlackBotClass, [{
    key: "sendPayloadToSlack",
    value: function () {
      var _sendPayloadToSlack = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(this.hook, {
                  method: 'POST',
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(payload)
                });

              case 3:
                return _context.abrupt("return", true);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.warn(_context.t0);
                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function sendPayloadToSlack(_x) {
        return _sendPayloadToSlack.apply(this, arguments);
      }

      return sendPayloadToSlack;
    }()
  }]);

  return SlackBotClass;
}();

var angelica_hook = "https://hooks.slack.com/services/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";
var test_hook = 'https://hooks.slack.com/services/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';
var SlackBot = new SlackBotClass(test_hook);

/***/ })

})
//# sourceMappingURL=index.js.0914edca46942ed25e2e.hot-update.js.map