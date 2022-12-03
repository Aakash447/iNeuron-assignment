const  mongoose = require("mongoose");

const  UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    hash: {
      type: String,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User',UserSchema)
module.exports = User
