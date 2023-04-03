const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

// static register method

userSchema.statics.register = async function (
  name,
  email,
  password,
  confirmpassword
) {
  // Validation
  if (!name || !email || !password || !confirmpassword) {
    throw Error("All the feilds must be filled.");
  }

  // Valditing if the entered string is an email or not
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  // Validating if the password enetered is a strong password or not
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  // Checking if the enetered email already exist or not 
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already registered");
  }

  //  Hashing
  const salt = await bcrypt.genSalt(10);
  // password
  const hash = await bcrypt.hash(password, salt);
  // Confirm Password
  const chash = await bcrypt.hash(confirmpassword, salt);

  // Creating a new user with the stated schema
  const user = await this.create({
    name,
    email,
    password: hash,
    confirmpassword: chash,
  });

  return user;
};

// static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All the feilds must be filled.");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
