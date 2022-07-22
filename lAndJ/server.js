const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const moongoose = require("mongoose");
const Quoter = require("./models/Quoter");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://diego:hi@cluster0.ygcsk.mongodb.net/?retryWrites=true&w=majority",
  {},
  () => {
    console.log("conntectd to db");
  }
);

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
  fw;
});
app.listen(3000, {}, () => {
  console.log(`connected to 3000`);
});
