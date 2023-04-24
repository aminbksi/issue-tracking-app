const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const keys = require("./config/dev");
require("./models/User");
require("./models/Project");
require("./models/Issue");
require("./services/userService");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());
app.use(bodyParser.json());

require("./api/githubRepository")(app);
require("./api/userRepository")(app);

app.listen(3001, () => console.log("API listening on 3001"));
