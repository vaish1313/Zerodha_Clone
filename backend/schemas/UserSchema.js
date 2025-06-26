const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email is required."],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "Username is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { UserSchema };
