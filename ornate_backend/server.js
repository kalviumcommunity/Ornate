const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 300;

const firstRoute = require("./routes/firstroute");
const userRoutes = require("./router/auth");

// require("./DB/conn");
app.use(express.json());
// const User = require("./model/userSchema");

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(require("./router/auth"));

app.use("/api/auth", userRoutes);



// using Routes
app.use("/api/workouts", firstRoute);

app.listen(port, () => {
  console.log("listening to post", port);
});
