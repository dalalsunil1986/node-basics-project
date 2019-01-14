// native modules
const path = require("path");
// third party
const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// own modules
const shopRoutes = require("./routes/shopRoutes");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(shopRoutes);

const port = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://john:tempPassword1@cluster0-mtnoz.mongodb.net/example?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(result => {
    console.log("connected to mongo db");

    app.listen(port, () => {
      console.log(`server is listening on port ${3000}`);
    });
  })
  .catch(err => console.log(err));
