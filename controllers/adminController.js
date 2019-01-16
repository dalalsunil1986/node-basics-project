const Item = require("../models/item");
module.exports.getAddItem = (req, res, next) => {
  res.render("add-item");
};
module.exports.postAddItem = (req, res, next) => {
  const name = req.body.name;
  const image = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  const item = new Item({
    name,
    image,
    price,
    description
  });
  item
    .save()
    .then(result => {
      // console.log(result);
      res.redirect("/items");
    })
    .catch(err => console.log(err));
};
module.exports.getItems = (req, res, next) => {
  Item.find()
    .then(items => {
      res.render("items", {
        items: items
      });
    })
    .catch(err => console.log(err));
};

module.exports.getDeleteItem = (req, res, next) => {
  // console.log(req.params.itemId);
  Item.findByIdAndDelete(req.params.itemId)
    .then(() => {
      res.redirect("/items");
    })
    .catch(err => console.log(err));
};

module.exports.getEditItem = (req, res, next) => {
  Item.findById(req.params.itemId)
    .then(item => {
      res.render("edit-item", { item });
    })
    .catch(err => console.log(err));
};
module.exports.postEditItem = (req, res, next) => {
  const name = req.body.name;
  const image = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  const id = req.body.id;
  Item.findById({ _id: id })
    .then(item => {
      item.name = name;
      item.image = image;
      item.price = price;
      item.description = description;
      item
        .save()
        .then(result => {
          res.redirect("/items");
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
