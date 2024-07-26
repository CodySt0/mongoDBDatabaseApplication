const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require(body - parser);

const app = express();
const port = 5004;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  userNewUrlParser: true,
  useInified: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log("Server running at localhost:${port}");
});