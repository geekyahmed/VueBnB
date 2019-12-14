const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = { Location: mongoose.model("location", LocationSchema) };
