const User = require("../models/users");
const {
  hashPassword,
  comparePassword,
  isValidEmail,
  generateToken,
} = require("../helpers");

async function signUp(req, res) {
  const { firstname, lastname, username, password, email, jobrole } = req.body;
  const checkFields =
    firstname && lastname && username && email && password && jobrole;
  await hashPassword(password);
  // const userExists = await hashPassword.userExists(email);
  await isValidEmail(email.trim());
  // const userAlreadyExists = await userExists(email.trim());

  if (email !== email.trim()) {
    res.status(400).json({
      status: "error",
      Error: "Please provide a valid email",
    });
  } else if (!checkFields) {
    res.status(400).json({
      status: "error",
      Error: "All fields are required",
    });
  } else {
    const newUser = new User({
      firstname,
      lastname,
      username,
      password,
      email,
      jobrole,
    });

    let newuser = await newUser.save();
    try {
      res.status(201).json({
        status: "success",
        data: {
          message: "User created successfully",
          //firstName: `${firstname}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// User can log in to the system

async function logIn(req, res) {
  const { email, password } = req.body;
  const checkField = email && password;
  if (!checkField) {
    res.status(400).json({
      status: "error",
      Error: "Email or password cannot be blank!",
    });
  } else {
    try {
      // const cleanEmail = [email.trim()];
      let findUser = await User.findOne({ email: req.body.email });
      if (!findUser) {
        res.status(400).json({
          status: "error",
          Error:
            "User not found make sure to enter correct email and password!",
        });
      } else {
        // const comparePass = comparePassword(password, user.fields.values())
        // console.log(findUser.password);
        // const comparePass = await comparePassword(
        //   password,
        //   String(findUser.password)
        // );
        if (!findUser) {
          res.status(400).json({
            status: "error",
            Error: "Incorrect Password!",
          });
        } else {
          // const role = isAdmin ? 'Admin' : 'Employee';
         const tokenValue = generateToken(findUser.email);
          res.status(201).json({
            status: "success",
            data: {
              token: tokenValue,
              user: findUser.username,
              role: findUser.jobrole,
            },
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

async function getAllUsers(req, res) {
  const users = await User.find();
  try {
    res.status(201).json({
      status: "success",
      users,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Accidents found!",
    });
  }
}

module.exports = {
  signUp,
  logIn,
  getAllUsers,
};
