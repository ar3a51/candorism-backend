"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postsSchema = _mongoose.default.Schema({
  user: {
    username: "string",
    photoprofile: _mongoose.default.Schema.Types.Buffer
  },
  message: "string",
  dateTime: "Date"
});

var PostModel = _mongoose.default.model("Posts", postsSchema);

exports.PostModel = PostModel;