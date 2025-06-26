const { model } = require("mongoose");
const bcrypt = require("bcrypt");
const { UserSchema } = require("../schemas/UserSchema");

// Use a regular function for 'this' to work
UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

const UserModel = model("user", UserSchema);
module.exports = { UserModel };
