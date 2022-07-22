const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const app = express();
const moongoose = require("mongoose");
const Quoter = require("./models/Quoter");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_STRING, {}, () => {
  console.log("conntectd to db");
});

app.get("/", async (req, res) => {
  const quoters = await Quoter.find({});
  res.render("index", { quoters });
});
app.post("/testimonals", async (req, res) => {
  const quoter = await Quoter.create({
    name: req.body.name,
    testimonal: req.body.testimonal,
  });
  res.redirect("/");
});
const PORT = 3000;
app.listen(process.env.PORT || PORT, {}, () => {
  console.log(`connected to 3000`);
});
