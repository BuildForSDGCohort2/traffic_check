const jwt = require("jsonwebtoken");
const envs = require("../config");
const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjczMTM5Yjk1YzM4MjlhMDYxY2U0OCIsImlhdCI6MTYwMDYwNjA1OX0.6l3euPPO-Dy4YFiwRVLa_Hl94SVC8-olHdTGjyBfvT0";

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({
        message: "No authentication token, authorisation denied!",
      });
    const verified = jwt.verify(token, secret);
    if (!verified)
      return res.status(401).json({
        message: "Token verification failed, authorisation denied!",
      });
    // console.log(verified);
    req.user = verified.id;
    next();
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

function admin(req, res, next) {
  if (req.user.jobrole !== "Admin") {
    res.status(403).json({
      status: "error",
      Error: "You are not Authorised!",
    });
  }
  next();
}

module.exports = { auth, admin };
