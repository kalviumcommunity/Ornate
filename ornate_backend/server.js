const { response } = require("express");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const firstRoute = require("./routes/firstroute");

// middlewares
const app = express();
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, resp) => {
  resp.json({ mssg: "Hello" });
});

app.get("/login", (req, resp) => {
  resp.json({ mssg: "Hellologin" });
});

app.get("/", (req, resp) => {
  resp.json({ mssg: "Hello" });
});
// app.post("/", (req, resp) => {
//   resp.json({ mssg: "post req" });
// });

// app.patch("/:id", (req, resp) => {
//   resp.json({ mssg: "patch req" });
// });

// app.delete("/:id", (req, resp) => {
//   resp.json({ mssg: "delete req" });
// });

// using Routes
app.use("/api/workouts", firstRoute);

app.listen(process.env.PORT, () => {
  console.log("hello");
});
