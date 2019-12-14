"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "location"
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "country"
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("posts", PostSchema);
