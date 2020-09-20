const express = require("express");
const jwtLogin = require("jwt-login");
const middleware = require("../middleware");
const controllers = require("../controllers/index");
const { getUrlsAndPush } = require("../controllers/scrap");
const { getNTSAdataReport } = require("../controllers/ntsaData");
const router = express.Router();
const { signUp, logIn, getAllUsers } = controllers.users;
const {
  createAccidentCase,
  findOneAccident,
  getAllAccidents,
  deleteAccident,
} = controllers.accidents;
const { verifyJWTToken, admin } = middleware;

// users routes
router.get("/login", logIn);
router.post("/sign-up", signUp);
router.get("/users", verifyJWTToken, getAllUsers);

// Accident routes
router.post("/report_incident", verifyJWTToken, createAccidentCase);
router.get("/incident/:id", verifyJWTToken, findOneAccident);
router.get("/incidents", getAllAccidents);
router.delete("/delete_incident:id", verifyJWTToken, admin, deleteAccident);

// SCRAP NTSA
router.get("/scrap", getUrlsAndPush);
router.get("/ntsa-data", getNTSAdataReport);

module.exports = router;
