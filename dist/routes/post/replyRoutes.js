"use strict";

var _express = _interopRequireDefault(require("express"));

var _replies = require("../../models/replies");

var _users = require("../../models/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var replyRoutes = _express.default.Router();

replyRoutes.get("/:postid",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var replies;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _replies.ReplyModel.find({
              post_id: req.params.post_id,
              reply_to_id: {
                "$exists": false
              }
            });

          case 2:
            replies = _context.sent;
            if (replies) res.send(replies);else res.sendStatus(404);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
replyRoutes.get("/:postid/:replyid",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var replies;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _replies.ReplyModel.find({
              post_id: req.params.post_id,
              reply_to_id: req.params.replyid
            });

          case 2:
            replies = _context2.sent;
            if (replies) res.send(replies);else res.sendStatus(404);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
replyRoutes.post("/",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var user, replyModel;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user = _users.UserModel.findById(req.body.userid);

            if (!user) {
              _context3.next = 10;
              break;
            }

            replyModel = new _replies.ReplyModel({
              user: {
                username: user.username,
                photoprofile: user.photoprofile
              },
              post_id: req.body.postid,
              reply_to_id: req.body.replytoid,
              message: req.body.message
            });
            _context3.t0 = res;
            _context3.next = 6;
            return replyModel.save();

          case 6:
            _context3.t1 = _context3.sent;

            _context3.t0.send.call(_context3.t0, _context3.t1);

            _context3.next = 11;
            break;

          case 10:
            res.sendStatus(404).send("user not found");

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
module.exports = replyRoutes;