const mongoose = require("mongoose");

// `username`
// * String
// * Unique
// * Required
// * Trimmed

// * `email`
// * String
// * Required
// * Unique
// * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
// * Array of `_id` values referencing the `Thought` model

// * `friends`
// * Array of `_id` values referencing the `User` model (self-reference)
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema); // mongoose turns "User" into "users"

module.exports = User;
