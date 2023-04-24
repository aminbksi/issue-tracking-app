const mongoose = require("mongoose");

const User = mongoose.model("User");
const Issue = mongoose.model("Issue");

const getUser = async (username) => {
  // Find the user by ID
  console.log(username);
  const user = await User.findOne({ name: username });

  //   If the user doesn't exist, create a new user document
  if (!user) {
    const newUser = new User({
      name: username,
      issues: [],
    });
    await newUser.save();
    console.log("user created");
    return newUser;
  }

  return user;
};

module.exports = { getUser };
