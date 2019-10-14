<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <div class="card">
          <div class="card-body">
          <h1 class="h3 mb-3 font-weight-normal text-center">Register</h1>
           <form v-on:submit.prevent="register">
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="username" autocomplete="on" class="form-control" placeholder="Username" value="">
                  </div>
                </div>
                <div class="col-md-6 pl-1">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="text" v-model="email" autocomplete="on" class="form-control" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" v-model="first_name" autocomplete="on" class="form-control" placeholder="First Name">
                  </div>
                </div>
                <div class="col-md-6 pl-1">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" v-model="last_name" autocomplete="on" class="form-control" placeholder="Last Name">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Skills</label>
                    <input type="text" v-model="tags"  autocomplete="on" class="form-control" placeholder="Javascript,C#" value="">
                  </div>
                </div>
              </div>
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Tagline</label>
                    <input type="text" v-model="tagline"  autocomplete="on" class="form-control" placeholder="Fullstack javascript developer" value="">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pl-3">
                  <div class="form-group">
                    <label>City</label>
                    <input type="text" v-model="city"  autocomplete="on" class="form-control" placeholder="City" value="">
                  </div>
                </div>
                <div class="col-md-6 pl-1">
                  <div class="form-group">
                    <label>Country </label>
                    <input type="text" v-model="country" autocomplete="on" class="form-control" placeholder="Country">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>About Me</label>
                    <textarea v-model="bio" class="form-control textarea"></textarea>
                  </div>
                </div>
              </div>
                <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password"  autocomplete="on" v-model="password" class="form-control" placeholder="" value="">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">Register</button>
                </div>
              </div>
            </form>
        
        </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      username: '',
      bio: "",
      city: "",
      tags: "",
      country: '',
      email: '',
      tagline: '',
      password: ''
    }
  },

  methods: {
    register () {
      axios.post('users/register',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
           bio: this.bio,
          tags: this.tags,
          city: this.city,
           country: this.country,
          email: this.email,
          tagline: this.tagline,
          password: this.password
        }
      ).then((res) => {
        console.log(res)
        router.push({ name: 'Login' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }

}
</script>
