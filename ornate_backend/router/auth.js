const express = require("express");

// const requireAuth = require("../middleware/requireAuth");

require("../DB/conn");
// const User = require("../model/userSchema");
const router = express.Router(); 

const { registerUser, loginUser } = require("../controller/userController");
// router.use(requireAuth);

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
