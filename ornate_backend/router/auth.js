const express = require("express");


require("../DB/conn");
const router = express.Router(); 

const { registerUser, loginUser } = require("../controller/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
