const Product = require("../models/product");

module.exports.getIndex = (req, res, next) => {
  res.render("index");
};
