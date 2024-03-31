const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const characterRoute = require("./Routes/characterRoute");

app.use("/character", characterRoute);

app.listen(PORT, () => {
  console.log("server listening on 3000");
});
