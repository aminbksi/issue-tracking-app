const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  issueId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  state: {
    type: String,
  },
  issue_number: {
    type: String,
  },
  labels: [
    {
      name: String,
      color: String,
    },
  ],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = { issueSchema: issueSchema, Issue: Issue };
