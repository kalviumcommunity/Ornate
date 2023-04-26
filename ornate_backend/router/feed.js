const express = require("express");
const { updateFeed } = require("../controller/feedControllers");

const router = express.Router();

// Uploading the Feed
router.post("/", updateFeed);

module.exports = router;
