const { email, password } = req.body;
const { email, password } = req.body;
  const findUser = await User.findOne({ email: email, password: password });
  const validUser = await comparePassword(password, findUser.password);
  const tokenValue = await generateToken(findUser.email);

  if (!checkField) {
    res.status(400).json({
      status: "error",
      Error: "Email or password cannot be blank!",
    });
  } else if (isValidEmail(email.trim()) === false) {
    res.status(400).json({
      status: "error",
      Error: "Please provide a valid email",
    });
  } else if (findUser === false) {
    res.status(400).json({
      status: "error",
      Error: "User not found make sure to enter correct email and password!",
    });
  } else if (validUser === false) {
    res.status(400).json({
      status: "error",
      Error: "Invalid User detected!",
    });
  } else {
    try {
      res.status(201).json({
        status: "success",
        data: {
          token: tokenValue,
          user: findUser.username,
          role: findUser.jobrole,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        Error: "Something went Wrong!",
      });
    }
  }