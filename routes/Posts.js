const express = require('express')
const posts = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Post = require('../models/Post')
posts.use(cors())

process.env.SECRET_KEY = 'secret'

post.route('/').get(function (req, res) {
  Post.find(function(err, posts){
  if(err){
    res.json(err);
  }
  else {
    res.json(posts);
  }
});
});

posts.post('/addpost', (req, res) => {
  const today = new Date()
  const postData = {
    post_title: req.body.post_title,
    post_desc: req.body.post_desc,
    post_article: req.body.post_article,
    tags: req.body.tags,
    post_author: req.body.post_author,
    created: today
  }

  Post.findOne({
    post_title: req.body.post_title
})
    .then(post => {
      if (!post) {
        bcrypt.hash(req.body.post_desc, 10, (err, hash) => {
            postData.post_desc = hash
          Post.create(postData)
            .then(post => {
              res.json({ status: post.post_title + ' has been posted' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'Post already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})



module.exports = posts
