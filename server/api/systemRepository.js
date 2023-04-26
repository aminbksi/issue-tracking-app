const axios = require("axios");
const systemService = require("../services/systemService");

module.exports = (app) => {
  app.post("/api/repo/issues/create/system", async (req, res) => {
    const { title, body, owner } = req.body;
    const issueCreated = await systemService.createIssueInSystem(
      title,
      body,
      owner
    );
    res.send(issueCreated);
  });

  app.get("/api/repo/issues/system", async (req, res) => {
    const allIssues = await systemService.fetchAllIssues();
    res.send(allIssues);
  });

  app.post("/api/repo/issues/system/label", async (req, res) => {
    const { label, issueSystemId } = req.body;
    const user = await systemService.createLabel(issueSystemId, label);
    res.send(user);
  });
};
