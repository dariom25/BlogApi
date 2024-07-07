const mongoose = require("mongoose");

const Schema = mongoose;

const PostSchema = new Schema({
  title: String,
  text: String,
  timestamp: Date,
  published: Boolean,
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
});

module.exports = mongoose.model("Post", PostSchema);
