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
};
