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

//If no API routes are hit

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
module.exports = router;
