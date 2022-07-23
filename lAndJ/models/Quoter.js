const mongoose = require("mongoose");

const { Schema } = mongoose;

QuoterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  testimonal: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("quoter", QuoterSchema);
