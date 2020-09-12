const {
  createItem,
  findOneItem,
  deleteItem,
  getAllItems,
} = require("../controllers/item");
const express = require('express')
const router = express.Router();

router.post("/create-item", createItem);
router.get("/items", getAllItems);
router.get("/item/:id", findOneItem);
router.delete("/delete-item/:id", deleteItem);

module.exports = router;
