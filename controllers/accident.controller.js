const uuid = require("uuid-mongodb");
const mUUID4 = uuid.v4();
const Accident = require("../models/accident.model");

function getSequenceNextValue(seqName) {
  var seqDoc = db.student.findAndModify({
    query: { _id: seqName },
    update: { $inc: { seqValue: 1 } },
    new: true
  });

  return seqDoc.seqValue;
}
module.exports = {
  async createAccidentCase(req, res) {
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
  },
};
