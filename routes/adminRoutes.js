const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/add-item", adminController.getAddItem);
router.post("/add-item", adminController.postAddItem);
router.get("/items", adminController.getItems);
router.get("/delete-item/:itemId", adminController.getDeleteItem);
router.get("/edit-item/:itemId", adminController.getEditItem);
router.post("/edit-item", adminController.postEditItem);
module.exports = router;
