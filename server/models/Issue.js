const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  issueId: {
    type: String,
  },
  issueSystemId: {
    type: String,
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
    default: "open",
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
  repository: {
    type: String,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = { issueSchema: issueSchema, Issue: Issue };
