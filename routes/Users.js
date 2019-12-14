const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/UserModel");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.route("/").get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
});

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    fullname: req.body.fullname,
    username: req.body.username,
    city: req.body.city,
    country: req.body.country,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + " has been registered" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 7000
          });
          res.send(token);
        } else {
          res.json({ error: "User does not exist" });
        }
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = users;
