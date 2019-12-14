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
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="text-center">Location</label>
                      <input type="text" v-model="location" autocomplete="on" class="form-control" placeholder="location" value="">
                    </div>
                  </div>
                </div>              
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="text-center">Country</label>
                        <input type="text" v-model="country" autocomplete="on" class="form-control" placeholder="Country" value="">
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
      location:'',
      country: '',
      article: ''
    }
  },

  methods: {
    post () {
      axios.post('posts/create',
        {
          title: this.title,
          location: this.location,
          country: this.country,
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
