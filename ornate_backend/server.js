const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();


const port = process.env.PORT || 300;

const userRoutes = require("./router/auth");
const postRoutes = require("./router/upload");

// require("./DB/conn");
app.use(express.json());
app.use(cors())
// const User = require("./model/userSchema");

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// using Routes
app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("listening to post", port);
});
