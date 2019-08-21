"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropUserTable = exports.insertUserTableQuery = exports.initialDatabaseQuery = void 0;

var _ = _interopRequireDefault(require("."));

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialDatabaseQuery = function initialDatabaseQuery() {
  var query = "CREATE table IF NOT EXISTS users(\n            email VARCHAR(255) PRIMARY KEY,\n            created_at TIMESTAMP DEFAULT NOW()\n        )";

  _["default"].query(query, function (error, results, fields) {
    if (error) {
      console.log("An error occured!.. ".concat(error));
      throw error;
    }

    console.log(results);
  });

  _["default"].end();
};

exports.initialDatabaseQuery = initialDatabaseQuery;

var insertUserTableQuery = function insertUserTableQuery() {
  var query = "INSERT into users SET ? ";
  var data = [];

  for (var i = 1; i <= 500; i++) {
    data.push([_faker["default"].internet.email(), _faker["default"].date.past()]);
  }

  _["default"].query(query, [data], function (error, results, fields) {
    if (error) {
      console.log(error);
      throw error;
    }

    console.log(results);
  });
};

exports.insertUserTableQuery = insertUserTableQuery;

var dropUserTable = function dropUserTable() {
  var query = "DROP table IF EXIST users";

  _["default"].connect(query, function (error, results) {
    if (error) {
      console.log(error);
      throw error;
    }

    console.log(results);
  });
};

exports.dropUserTable = dropUserTable;