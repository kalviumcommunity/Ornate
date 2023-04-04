const User = require("../model/userSchema");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// REGISTER USER
const registerUser = async (req, res) => {
  const {username, email, password, confirmpassword } = req.body;
  try {
    const user = await User.register(username,email, password, confirmpassword);
    //   creating a token
    const token = createToken(user._id);

    res.status(200).json({username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //   creating a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
