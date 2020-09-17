const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema;
// Create a schema;
const UserSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobrole: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

//accidentSchema.plugin(uniqueValidator);
const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
