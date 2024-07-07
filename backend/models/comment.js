const mongoose = require("mongoose");

const Schema = mongoose;

const CommentSchema = new Schema({
  author: String,
  text: String,
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

module.exports = mongoose.model("Comment", CommentSchema);