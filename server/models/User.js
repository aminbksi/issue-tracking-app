const mongoose = require("mongoose");
const { issueSchema } = require("./Issue");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  issues: [issueSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
