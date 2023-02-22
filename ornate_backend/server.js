const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, resp) => {
  resp.json({ mssg: "Hello" });
});

app.post("/", (req, resp) => {
  resp.json({ mssg: "post req" });
});


app.patch("/:id", (req, resp) => {
  resp.json({ mssg: "patch req" });
});


app.delete("/:id", (req, resp) => {
  resp.json({ mssg: "delete req" });
});


app.listen(3000, () => {
  console.log("hiiiiiiiiii");
});
