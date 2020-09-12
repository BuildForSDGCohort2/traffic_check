const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema;
// Create a schema;
const ItemSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//accidentSchema.plugin(uniqueValidator);
const itemModel = mongoose.model("item", ItemSchema);

module.exports = itemModel;
