"use strict";

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("./database"));

var _index = _interopRequireDefault(require("./routes/index"));

var _queries = require("./database/queries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _index["default"])(app);
var port = process.env.PORT || 4400;
app.listen(port, function () {
  _database["default"].connect(function (err) {
    if (err) {
      console.error("An error occured ... ".concat(err));
      throw err;
    } else {
      (0, _queries.initialDatabaseQuery)();
      (0, _queries.insertUserTableQuery)(); // dropUserTable();

      console.log("Connected to the database");
    }
  });

  console.log("Server running on port ".concat(port));
});