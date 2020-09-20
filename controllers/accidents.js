const Accident = require("../models/accident.model");
//const { findOne } = require("../models/accident.model");
async function createAccidentCase(req, res) {
  const {
    no_of_victims,
    device_type,
    location,
    latitude,
    longitude,
    description,
  } = req.body;

  const newAccident = new Accident({
    no_of_victims,
    device_type,
    reportedTime: Date.now(),
    location: {
      submitted_location: location,
      latitude,
      longitude,
    },
    description,
  });
  await newAccident.save();
  try {
    res.status(201).send({ status: "Success!", message: "Case recorded" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error!", message: "Oops Something went wrong !" });
  }
}

async function getAllAccidents(req, res) {
  const accidents = await Accident.find();
  try {
    res.status(201).json({
      status: "success",
      accidents,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Accidents found!",
    });
  }
}

async function findOneAccident(req, res) {
  let findAnAccident = await Accident.findOne({ _id: req.params.id });
  try {
    res.status(201).json({
      status: "success",
      findAnAccident,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Accident found!",
    });
  }
}

async function deleteAccident(req, res) {
  await Accident.deleteOne({ _id: req.params.id });
  try {
    res.status(201).json({
      status: "success",
      message: "Accident deleted successfully!",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No accident found!",
    });
  }
}
module.exports = {
  createAccidentCase,
  getAllAccidents,
  findOneAccident,
  deleteAccident,
};
