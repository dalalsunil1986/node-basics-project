const item = require("../models/item");

module.exports.getIndex = (req, res, next) => {
  res.render("index");
};
