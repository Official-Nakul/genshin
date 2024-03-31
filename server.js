const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const characterRoute = require("./Routes/characterRoute");

app.use("/character", characterRoute);

app.listen(3000, () => {
  console.log("server listening on 3000");
});
