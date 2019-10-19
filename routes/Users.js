const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.route('/').get(function (req, res) {
  User.find(function(err, users){
  if(err){
    res.json(err);
  }
  else {
    res.json(users);
  }
});
});

users.route('/delete/:id').delete(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });s
});

users.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
  if (!user)
    res.status(404).send("data is not found");
  else {
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.username = req.body.username;
      user.tagline = req.body.tagline;
      user.email = req.body.email;
      user.save().then(() => {
        res.json('Update complete');
    })
    .catch(() => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    bio: req.body.bio,
    city: req.body.city,
    country: req.body.username,
    tags:  req.body.tags,
    email: req.body.email,
    tagline: req.body.tagline,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' has been registered' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            tagline: user.tagline
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
