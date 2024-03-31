const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.dbUrl;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected");
});
db.on("error", () => {
  console.error("error");
});
db.on("disconnected", () => {
  console.log("disconnected");
});

module.exports = db;
