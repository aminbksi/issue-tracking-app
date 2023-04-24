const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  comments: [
    {
      text: String,
      author: String,
    },
  ],
  labels: [String],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
