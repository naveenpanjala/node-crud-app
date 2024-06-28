const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to Hotel");
});

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);



app.listen(PORT, () => {
  console.log("listening on port 3000");
});
