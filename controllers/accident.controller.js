const uuid = require("uuid-mongodb");
const mUUID4 = uuid.v4();
const Accident = require("../models/accident.model");
//const { findOne } = require("../models/accident.model");

async function createAccidentCase(req, res) {
  const {
    case_id,
    no_of_victims,
    device_type,
    location,
    latitude,
    longitude,
    description,
  } = req.body;

  const newAccident = new Accident({
    description,
    case_id: mUUID4,
    no_of_victims,
    device_type,
    reportedTime: Date.now(),
    location: {
      submitted_location: location,
      latitude,
      longitude,
    },
  });

  try {
    let saveAccident = await newAccident.save();

    res.status(201).send({ status: "Success!", message: "Case recorded" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "Error!", message: "Oops Something went wrong !" });
  }
}

async function getAllAccidents(req, res) {
  await Accident.find();
  try {
    res.status(201).json({
      status: "success",
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
  let data = findAnAccident;
  try {
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Accident found!",
    });
  }
}

async function deleteAccident(req, res) {
  let deleteAccidents = await Accident.deleteOne({ _id: req.params.id });
  try {
    res.status(201).json({
      status: "success",
      data: {
        message: "Accident deleted successfully!",
      },
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
