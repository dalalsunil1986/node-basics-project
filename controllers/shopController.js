const Product = require("../models/product");

module.exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render("index", {
        products
      });
    })
    .catch(err => console.log(err));
};
module.exports.getAbout = (req, res, next) => {
  res.render("about");
};
module.exports.getContact = (req, res, next) => {
  res.render("contact");
};
module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};
module.exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const image = req.body.image;
  const price = req.body.price;
  // console.log(name, image, price);

  const product = new Product({ name, image, price });

  product
    .save()
    .then(result => {
      // console.log(result);

      res.redirect("/");
    })
    .catch(err => console.log(err));
};
