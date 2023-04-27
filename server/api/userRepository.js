const axios = require("axios");

module.exports = (app) => {
  app.get("/api/user/repos", async (req, res) => {
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    await axios
      .get("https://api.github.com/user/repos", requestHeaders)
      .then(async (response) => {
        res.send(response.data);
      });
  });

  app.get("/api/repo/issues", async (req, res) => {
    const { owner, repo } = req.query;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    await axios
      .get(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });

  app.post("/api/repo/issues/label", async (req, res) => {
    const { owner, repo, label, issue_number } = req.body;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    const requestBody = {
      labels: [label],
    };

    await axios
      .post(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}/labels`,
        requestBody,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });

  app.post("/api/repo/issues/label/delete", async (req, res) => {
    const { owner, repo, label, issue_number } = req.body;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    await axios
      .delete(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}/labels/${label}`,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });

  //
  app.post("/api/repo/issues/create", async (req, res) => {
    const { owner, repo, title, body } = req.body;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    const requestBody = {
      title,
      body,
    };

    await axios
      .post(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
        requestBody,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });

  app.post("/api/repo/issues/create/github", async (req, res) => {
    const { owner, repo, issue } = req.body;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    const requestBody = {
      title: issue.title,
      body: issue.description,
      labels: issue.labels,
    };

    await axios
      .post(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
        requestBody,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });

  app.post("/api/repo/issues/update", async (req, res) => {
    const { owner, repo, issue } = req.body;
    const { title, description, labels, issue_number } = issue;
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };

    const requestBody = {
      title,
      body: description,
      labels,
    };

    await axios
      .patch(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`,
        requestBody,
        requestHeaders
      )
      .then(async (response) => {
        res.send(response.data);
      });
  });
};
