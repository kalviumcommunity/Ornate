const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 300;
const app = express();

const userRoutes = require("./router/auth");

// require("./DB/conn");
app.use(express.json());
app.use(cors())
// const User = require("./model/userSchema");

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(require("./router/auth"));

app.use("/api/auth", userRoutes);

// using Routes

app.listen(port, () => {
  console.log("listening to post", port);
});
