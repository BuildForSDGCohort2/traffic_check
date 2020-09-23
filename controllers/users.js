const bcrypt = require("bcrypt");
const envs = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { hashPassword, comparePassword, isValidEmail } = require("../helpers");

const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjczMTM5Yjk1YzM4MjlhMDYxY2U0OCIsImlhdCI6MTYwMDYwNjA1OX0.6l3euPPO-Dy4YFiwRVLa_Hl94SVC8-olHdTGjyBfvT0";

async function signUp(req, res) {
  const { firstname, lastname, username, password, email, jobrole } = req.body;
  const checkFields =
    firstname && lastname && username && email && password;

  // const userAlreadyExists = await userExists(email.trim());
  const existingUser = await User.findOne({ email: email });
  if (isValidEmail(email.trim()) === false) {
    res.status(400).json({
      status: "error",
      Error: "Please provide a valid email",
    });
  } else if (!checkFields) {
    res.status(400).json({
      status: "error",
      Error: "All fields are required",
    });
  } else if (existingUser) {
    res.status(400).json({
      status: "error",
      Error: "User already exists",
    });
  } else {
    const newUser = new User({
      firstname,
      lastname,
      username,
      password: await hashPassword(password),
      email,
      jobrole,
    });

    await newUser.save();
    try {
      res.status(201).json({
        status: "success",
        data: {
          message: "User created successfully",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// User can log in to the system

async function logIn(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        status: "error",
        Error: "Email or password cannot be blank!",
      });
    const user = await User.findOne({ email: email });
    // console.log(findUser)
    if (!user)
      return res.status(400).json({
        status: "error",
        Error: "User not found!",
      });
    const validUser = await comparePassword(password, user.password);
    if (!validUser)
      return res.status(400).json({
        status: "error",
        Error: "Invalid user please sign up!",
      });
    const token = jwt.sign({ id: user._id }, secret);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        firstname: user.firstname,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "Something went Wrong!",
    });
  }
}

async function getAllUsers(req, res) {
  const users = await User.find();
  try {
    res.status(201).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error",
      message: "Users not found!",
    });
  }
}

async function deleteUser(req, res) {
  await User.findByIdAndDelete(req.user);
  try {
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Error", message: "Failed to delete user" });
  }
}

async function tokenIsValid(req, res) {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, secret);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error", message: "Failed authenticate user" });
  }
}

async function loggedInUser(req, res) {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
}
module.exports = {
  signUp,
  logIn,
  getAllUsers,
  deleteUser,
  tokenIsValid,
  loggedInUser,
};
