"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ConfirmationModal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConfirmationModal = function ConfirmationModal(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("p", null, message), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-button"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Close"))));
};
var _default = exports["default"] = ConfirmationModal;