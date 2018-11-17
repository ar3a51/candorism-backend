"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _userRoutes = _interopRequireDefault(require("./routes/user/userRoutes"));

var _postRoutes = _interopRequireDefault(require("./routes/post/postRoutes"));

var _replyRoutes = _interopRequireDefault(require("./routes/post/replyRoutes"));

var _posts = require("./models/posts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var portNumber = 3030;

_mongoose.default.connect("mongodb://localhost:27017/DevProject", {
  useNewUrlParser: true
}).then(function () {
  console.log("DB Connected");
}).catch(function (er) {
  console.log(er);
});

app.use(_express.default.json());
app.get("/", function (req, res) {
  res.send("hello world");
});
app.use("/user", _userRoutes.default);
app.use("/post", _postRoutes.default);
app.use("/reply", _replyRoutes.default);
app.listen(portNumber, function () {
  console.log("Listening on port: ".concat(portNumber));
});
/*async function test()
{
    let post = new PostModel({
        user_id : "1234",
        message: "hello",
        dateTime: new Date()
    });

    const result = await post.save();
    console.log(result);
}

test();
*/