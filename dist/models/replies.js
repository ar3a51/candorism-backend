"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplyModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replySchema = _mongoose.default.Schema({
  post_id: _mongoose.default.Schema.Types.ObjectId,
  message: _mongoose.default.Schema.Types.String,
  reply_to_id: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: false
  },
  date: _mongoose.default.Schema.Types.Date,
  user: {
    username: _mongoose.default.Schema.Types.String,
    photoprofile: _mongoose.default.Schema.Types.Buffer
  }
});

var ReplyModel = _mongoose.default.model("replies", replySchema);

exports.ReplyModel = ReplyModel;