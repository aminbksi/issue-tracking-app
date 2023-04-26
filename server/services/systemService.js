const mongoose = require("mongoose");
const Project = require("../models/Project");

const User = mongoose.model("User");
const Issue = mongoose.model("Issue");

const createIssueInSystem = async (title, description, username) => {
  const issueSystemId = Math.floor(Math.random() * 90000) + 10000;
  const newIssue = new Issue({
    issueSystemId,
    title,
    description,
  });
  await newIssue.save();
  const user = await User.findOne({ name: username });
  user.issues.push(newIssue);
  await user.save();
  return newIssue;
};

const fetchAllIssues = async () => {
  const issues = await Issue.find();
  return issues;
};

const createLabel = async (issueSystemId, label) => {
  const issue = await Issue.findOne({ issueSystemId });
  issue.labels.push(label);
  await issue.save();
  return issue;
};
module.exports = { createIssueInSystem, fetchAllIssues, createLabel };
