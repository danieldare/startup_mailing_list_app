"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  user: "root",
  password: "rootpassword",
  database: "mailing_list"
};

var connection = _mysql["default"].createConnection(options);

var _default = connection;
exports["default"] = _default;