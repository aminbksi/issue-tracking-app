const mongoose = require("mongoose");
const Project = require("../models/Project");

const User = mongoose.model("User");
const Issue = mongoose.model("Issue");

const getUser = async (username) => {
  // Find the user by ID
  console.log(username);
  const user = await User.findOne({ name: username });

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

const createIssue = async (username, repo, issue) => {
  const issueSystemId = Math.floor(Math.random() * 90000) + 10000;
  const { issueId } = issue;

  const issueFound = await Issue.findOne({ issueId });
  if (issueFound) {
    return "Issue aleady exists";
  }

  let project = await Project.findOne({ name: repo });

  if (!project) {
    project = new Project({
      name: repo,
    });
    await project.save();
  }

  const newIssue = new Issue({
    title: issue.title,
    description: issue.description,
    issueId: issue.issueId,
    labels: issue.labels,
    state: issue.state,
    issue_number: issue.issue_number,
    repository: repo,
    project: project._id,
    issueSystemId: issueSystemId,
  });
  await newIssue.save();
  const user = await User.findOne({ name: username });
  user.issues.push(newIssue);
  await user.save();
  return newIssue;
};

module.exports = { getUser, createIssue };
