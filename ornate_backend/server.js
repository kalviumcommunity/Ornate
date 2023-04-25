const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 300;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ornate-app.netlify.app/"]
  })
);

const userRoutes = require("./router/auth");
const postRoutes = require("./router/upload");
const postFeed = require("./router/feed");

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// using Routes
app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/feed", postFeed);

app.listen(port, () => {
  console.log("listening to post", port);
});
