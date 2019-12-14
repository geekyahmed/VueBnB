/* eslint-disable*/

<template>
    <div>
        <div class="container-fluid my-5">
                <div class="jumbotron">
                            <h3 class="card-title text-center">NewsFeed  </h3>
                    </div>
            <div class="row">
           
                    <div  v-for="post in posts" :key="post._id" class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div  class="card">
                                <div class="card-body text-center">
                                    <h3 class="card-title"> <a href=""> {{ post.title }}</a></h3>
                                    <hr>
                                    <p class="card-text">{{post.article}}</p>
                                    <p class="card-title">By {{post.author}}</p>
                                    <p  class="skills">
                                            <a href="#" class="btn btn-xs btn-outline-secondary mt-1">{{post.tags}}</a>
                                            </p>
                                    <router-link to="/posts/:post_slug"><a href="#" class="btn btn-primary">Read</a></router-link></a>
                                    <hr class="mt-3">
                                    <div class="reactionbutton">
                                    <button class="btn btn-secondary btn-xs mt-1" v-on:click="like">Like</button>
                                    <button  class="btn btn-primary btn-xs mt-1">Dislike</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>
<style  scoped>
    .card{
    height: 470px;
    }
.card-title{
    text-transform: uppercase;
    font-weight: bolder;
}
hr{
    color: purple;
    width: 200px;
}
</style>
<script>
  /* eslint-disable*/

    import axios from 'axios'
    
      export default {
          data() {
            return {
              posts: [],
            }
          },
          methods: {
            like() {
              title: 'You Just Liked This Post'
              show: true
            }
          },
          mounted() {
            axios
      .get('http://localhost:5000/posts')
      .then(response => (this.posts = response.data))
        }
      }
    </script>