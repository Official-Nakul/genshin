const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
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
