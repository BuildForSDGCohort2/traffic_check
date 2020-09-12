// const uuid = require("uuid-mongodb");
// const mUUID4 = uuid.v4();
const Item = require("../models/item");

async function createItem(req, res) {
  const { name } = req.body;

  const newItem = new Item({
    name,
  });

  try {
    let saveItem = await newItem.save();

    res.status(201).send(saveItem);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "Error!", message: "Oops Something went wrong !" });
  }
}
/*
async function getAllItems(req, res) {
  let getItems = await Item.find().sort({ date: -1 });

  try {
    res.status(201).json({
      getItems,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Items found!",
    });
  }
}
*/
function getAllItems(req, res) {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
}

async function findOneItem(req, res) {
  let findAnItem = await Item.findOne({ _id: req.params.id });
  try {
    res.status(201).json({ findAnItem });
  } catch (error) {
    res.status(404).json({
      status: "error",
      Error: "No Accident found!",
    });
  }
}

async function deleteItem(req, res) {
  let deleteIt = await Item.deleteOne({ _id: req.params.id });
  try {
    res.status(201).json({
      status: "success",
      deleteIt,
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
  createItem,
  getAllItems,
  findOneItem,
  deleteItem,
};
