const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require(body - parser);
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
const port = process.env.PORT || 5004;

app.use(bodyParser.json());

app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);

mongoose
  .connect(dbURI, { userNewUrl: true, useJoin: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server running at localhost:${port}");
    });
  })

  .catch((error) => {
    console.error9("Connection Error", error);
  });
