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

// router.post("/register", async (req, res) => {
//   console.log(req.body.name);
//   console.log(req.body.email);

//   const { name, email, password, confirmpassword } = req.body;

//   if (!name || !email || !password || !confirmpassword) {
//     return res.status(422).json({ error: "fill fields" });
//   }

//   try {
//     const user = await User.signup(name, email, password, confirmpassword);

//     res.status(200).json({ mssg: "Done" });
//   } catch (error) {
//     res.status(400).json({ error: "error" });
//   }
// });

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res
//           .status(422)
//           .json({ error: "Already registered email address" });
//       }

//       const user = new User({ name, email, password, confirmpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(200).json({ message: "User added successfully" });
//         })
//         .catch((err) => {
//           res.status(400).json({ error: "error" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   res.json({ message: req.body });

module.exports = router;
