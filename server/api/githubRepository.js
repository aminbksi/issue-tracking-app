const axios = require("axios");
const keys = require("../config/dev");

module.exports = (app) => {
  app.get("/api/getAccessToken", async (req, res) => {
    const requestToken = req.query.code;
    await axios
      .post("https://github.com/login/oauth/access_token", null, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          client_id: keys.clientID,
          client_secret: keys.clientSecret,
          code: requestToken,
        },
      })
      .then((response) => {
        const searchParams = new URLSearchParams(response.data);
        const accessToken = searchParams.get("access_token");
        res.send(JSON.stringify({ accessToken }));
      });
  });

  app.get("/api/user", async (req, res) => {
    const requestHeaders = {
      headers: {
        Authorization: req.get("Authorization"),
      },
    };
    await axios
      .get("https://api.github.com/user", requestHeaders)
      .then((response) => {
        console.log(response.data);
      });
  });
};
