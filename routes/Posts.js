const express = require("express");
const posts = express.Router();
const cors = require("cors");
const Post = require("../models/PostModel");

posts.use(cors());

posts.route("/").get(function(req, res) {
  Post.find(function(err, posts) {
    if (err) {
      res.json(err);
    } else {
      res.json(posts);
    }
  });
});

posts.route("/post/:id").get(function(req, res) {
  const id = req.params.id;

  Post.findById(id)
    .populate({
      path: "comments",
      populate: { path: "user", model: "user" },
      populate: { path: "location", model: "location" }
    })
    .then(post => {
      if (!post) {
        res.status(404).json({ message: "No Post Found" });
      } else {
        res.json(post);
      }
    });
});

posts.post("/post/create", (req, res) => {
  const today = new Date();
  const userData = {
    title: req.body.title,
    article: req.body.article,
    location: req.body.location,
    country: req.body.country,
    created: today
  };

  Post.findOne({
    title: req.body.title
  })
    .then(post => {
      if (!post) {
        Post.create(userData)
          .then(post => {
            res.json({ status: post.title + " has been created" });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({ error: "Post already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = posts;
