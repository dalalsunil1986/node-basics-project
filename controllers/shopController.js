const Product = require("../models/product");

module.exports.getIndex = (req, res, next) => {
  res.render("index", {
    products: []
  });
};
module.exports.getAbout = (req, res, next) => {
  res.render("about");
};
module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};
module.exports.postAddProduct = (req, res, next) => {
  res.redirect("/");
};
