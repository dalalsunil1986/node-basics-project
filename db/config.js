const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(result => console.log("connected to db"))
  .catch(err => console.log(err));
