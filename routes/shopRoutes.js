const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.get("/", shopController.getIndex);
router.get("/about", shopController.getAbout);
router.get("/about", shopController.getContact);
router.get("/add-product", shopController.getAddProduct);
router.post("/add-product", shopController.postAddProduct);

module.exports = router;
