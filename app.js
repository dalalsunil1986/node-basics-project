// native modules
const path = require("path");
// third party
const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
// own modules
const userRoutes = require("./routes/userRoutes");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${3000}`);
});
