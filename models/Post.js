const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  post_title: {
    type: String
  },
  post_desc: {
    type: String
  },
  post_article: {
    type: String,
  },
  tags: {
    type: Array
  },
  post_author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Post = mongoose.model('posts', UserSchema)
