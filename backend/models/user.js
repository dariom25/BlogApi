const mongoose = require("mongoose");

const Schema = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  author: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
