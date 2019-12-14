/* eslint-disable*/
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 mt-5 mx-auto">
        <div class="card text-center">
          <div class="card-body">
          <h1 class="h3 mb-3 font-weight-normal text-center">Create Article</h1>
           <form v-on:submit.prevent="post">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-center">Title</label>
                    <input type="text" v-model="title" autocomplete="on" class="form-control" placeholder="Title" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-center">Slug</label>
                    <input type="text" v-model="slug" autocomplete="on" class="form-control" placeholder="Slug" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-center">Short Description</label>
                 <textarea class="form-control" name="desc" id="" cols="10" rows="3" v-model="desc"></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-center">Tags</label>
                    <input type="text" v-model="tags" autocomplete="on" class="form-control" placeholder="Tags" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-center">Author</label>
                    <input type="text" v-model="author" autocomplete="on" class="form-control" placeholder="Author" value="">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Content</label>
                        <wysiwyg v-model="article" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable*/


import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      title: '',
      status:'',
      slug: '',
      desc: '',
      tags: '',
      author: '',
      article: ''
    }
  },

  methods: {
    post () {
      axios.post('posts/create',
        {
          title: this.title,
          slug: this.slug,
          status: this.status,
          desc: this.desc,
           tags: this.tags,
          author: this.author,
          article: this.article
        }
      ).then((res) => {
        console.log(res)
        router.push({ name: 'Home' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }

}
</script>
