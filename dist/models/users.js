"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose.default.Schema({
  username: "string",
  firstname: "string",
  password: "string",
  middlename: {
    type: "string",
    required: false
  },
  lastname: "string",
  photoprofile: "Buffer",
  address1: "string",
  address2: "string",
  suburb: "string",
  postcode: "string"
});

var UserModel = _mongoose.default.model("users", userSchema);

exports.UserModel = UserModel;