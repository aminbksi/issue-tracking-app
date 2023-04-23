const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const CLIENT_ID = "5913e8c49015cd684ea2";
const CLIENT_SECRET = "2281c5745189d9ed6f20d798ac5011c989769c75";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/getAccessToken", async (req, res) => {
  const requestToken = req.query.code;
  await axios
    .post("https://github.com/login/oauth/access_token", null, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: requestToken,
      },
    })
    .then((response) => {
      console.log(response);
      const searchParams = new URLSearchParams(response.data);
      const accessToken = searchParams.get("access_token");
      res.send(JSON.stringify({ accessToken }));
    });
});

app.get("/api/getUser", async (req, res) => {
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

app.listen(3001, () => console.log("API listening on 3001"));
