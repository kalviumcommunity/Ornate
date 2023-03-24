const express = require("express");

const router = express.Router();

require("../DB/conn");
const User = require("../model/userSchema");

const { registerUser, loginUser } = require("../controller/userController");

router.get("/", (req, res) => {
  res.status(200).send(`hello server`);
});

router.post("/register", registerUser);

router.post("/login", loginUser);



module.exports = router;
