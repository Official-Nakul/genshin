const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
// const DB_URL =
//   "mongodb+srv://visavadianakulyt:BZfsJ7AYVl7Npjdk@cluster0.pbv4hec.mongodb.net/GenshinImpact?retryWrites=true&w=majority";
// const DB_URL = "mongodb://127.0.0.1:27017/GenshinImpact";

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
