<<<<<<< HEAD
const express = require('express');
const { createAccidentCase } = require('../controllers/accident.controller');


const router = express.Router();

router.post('/create', createAccidentCase);


module.exports = router;
=======
const express = require("express");
const {
  createAccidentCase,
  getAllAccidents,
  findOneAccident,
  deleteAccident,
} = require("../controllers/accident.controller");

const router = express.Router();

router.post("/create", createAccidentCase);
router.get("/accidents", getAllAccidents);
router.get("/accident/:id", findOneAccident);
router.delete("/delete-accident/:id", deleteAccident)

module.exports = router;
>>>>>>> reportAccident
