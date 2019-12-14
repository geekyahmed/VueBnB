/* eslint-disable*/ /* eslint-disable*/
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <div class="card">
          <div class="card-body">
            <h1 class="h3 mb-3 font-weight-normal text-center">Register</h1>
            <form v-on:submit.prevent="register">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      v-model="fullname"
                      autocomplete="on"
                      class="form-control"
                      placeholder="Enter FullName"
                      name="fullname"
                      value
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      v-model="username"
                      autocomplete="on"
                      name="username"
                      class="form-control"
                      placeholder="Enter Username"
                      value
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      v-model="email"
                      autocomplete="on"
                      class="form-control"
                      name="email"
                      placeholder="Enter Email"
                      value
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pl-3">
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      v-model="city"
                      autocomplete="on"
                      class="form-control"
                      name="city"
                      placeholder="Enter City"
                      value
                    />
                  </div>
                </div>
                <div class="col-md-6 pl-1">
                  <div class="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      v-model="country"
                      autocomplete="on"
                      name="country"
                      class="form-control"
                      placeholder="Enter Country"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      autocomplete="on"
                      v-model="password"
                      name="password"
                      class="form-control"
                      placeholder
                      value
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">
                    Register
                  </button>
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
import axios from "axios";
import Swal from "vue-sweetalert2";
import router from "../router";

export default {
  data() {
    return {
      fullname: "",
      username: "",
      city: "",
      country: "",
      email: "",
      password: ""
    };
  },

  methods: {
    register() {
      axios
        .post("users/register", {
          fullname: this.fullname,
          username: this.username,
          city: this.city,
          country: this.country,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
