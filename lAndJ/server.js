const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const app = express();
const moongoose = require("mongoose");
const { findById } = require("./models/Quoter");
const Quoter = require("./models/Quoter");
app.use(express.static("public"));
app.use(express.json());
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
  const quoters = await Quoter.create({
    name: req.body.name,
    testimonal: req.body.testimonal,
  });
  const quoteId = await Quoter.findOne({ name: req.body.name });
  console.log(quoteId._id, quoteId.name);
  res.send({ quoterId: quoteId._id });
  res.redirect("/");
});

app.delete("/deleteTestimonal", async (req, res) => {
  console.log(req.body.name);
  const deleted = await Quoter.findOneAndDelete({ name: req.body.name });
});
const PORT = 3000;
app.listen(process.env.PORT || PORT, {}, () => {
  console.log(`connected to 3000`);
});
