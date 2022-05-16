const express = require("express");
const app = express();

const { getTopics } = require("./controllers/topic-controller");
const { getArticlesByID } = require("./controllers/article-controller");

app.get("/api/topics", getTopics);

app.get("/api/articles/:article_id", getArticlesByID);

app.get("/api/*", (req, res) => {
  res.status(404).send("Endpoint Not Found");
});

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send("Bad Request");
  }
  res.status(500);
});

module.exports = app;
