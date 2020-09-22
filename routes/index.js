const express = require("express");
const jwtLogin = require("jwt-login");
const middleware = require("../middleware");
const controllers = require("../controllers/index");
const { getUrlsAndPush } = require("../controllers/scrap");
const { getNTSAdataReport } = require("../controllers/ntsaData");
const router = express.Router();
const {
  signUp,
  logIn,
  getAllUsers,
  deleteUser,
  tokenIsValid,
  loggedInUser,
} = controllers.users;
const {
  createAccidentCase,
  findOneAccident,
  getAllAccidents,
  deleteAccident,
} = controllers.accidents;
const { auth, admin } = middleware;

// users routes
router.get("/login", logIn);
router.post("/register", signUp);
router.get("/users", auth, getAllUsers);
router.delete("/delete_user", deleteUser);
router.post("/tokenIsValid", tokenIsValid);
router.get("/loggedIn_user", auth, loggedInUser);

// Accident routes
router.post("/report_incident", auth, createAccidentCase);
router.get("/incident/:id", auth, findOneAccident);
router.get("/incidents", auth, getAllAccidents);
router.delete("/delete_incident:id", auth, admin, deleteAccident);

// SCRAP NTSA
router.get("/scrap", getUrlsAndPush);
router.get("/ntsa-data", getNTSAdataReport);

module.exports = router;
