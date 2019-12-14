<template>
  <div class="container">
    <!-- <div class="content ">
    <div class="row">
      <div class="col-md-4 ml">
        <div class="card card-user">
          <div class="image">
            <img src="../assets/cover.jpg" alt="...">
          </div>
          <div class="card-body">
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" src="../assets/avatar.png" alt="...">
                <h5 class="title">{{ first_name }} {{ last_name }}</h5>
              </a>
              <p class="description">
                @{{username}}
              </p>
            </div>
            <p class="description text-center">
                {{tagline}}
            </p>
            <p class="description text-center">
               Email : {{email}}
            </p>
            <p class="description text-center">
               Skills : {{tags}}
            </p>
            <p class="description text-center">
               Bio : {{bio}}
            </p>
            <p class="description text-center">
               City : {{city}}
            </p>
            <p class="description text-center">
               Country : {{country}}
            </p>
          </div>
          <div class="card-footer">
            <hr>
            <div class="button-container">
              <div class="row text-center fonts">
                    <btn class="btn btn-md btn-outline-success btn-round btn-icon"><i class="fa fa-facebook"></i></btn>
                    <btn class="btn btn-md btn-outline-success btn-round btn-icon"><i class="fa fa-twitter"></i></btn>
                    <btn class="btn btn-md btn-outline-success btn-round btn-icon"><i class="fa fa-github"></i></btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div> -->
    <div class="sidenav mbt-5">
 <div class="account2">
                    <div class="image img-cir img-120">
                        <img src="../assets/avatar.png" alt="John Doe" />
                    </div>
                    <h4 class="name">
        {{first_name}} {{last_name}}</h4>
<router-link class="name" to="/profile">Dashboard</router-link>  
<hr>
<router-link class="name" to="/completeprofile">Profile</router-link>
<hr>
  <router-link class="name" to="/posts">Posts</router-link>
  <hr>
<router-link class="name" to="/messages">Messages</router-link>
<hr>
<router-link class="name" to="/messages">Notifications</router-link>
</div>
    </div>
<div class="main">
    <h2 class="text-center mt-4 display-6">Your Dashboard</h2>
          <div class="row mt-5 mbl-5 text-center ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h1 class="mb-1 ">9</h1>
                                                        <p class="bold">Total Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h1 class="mb-1">35</h1>
                                                        <p class="bold">Total Posts</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h1 class="mb-1">8</h1>
                                                        <p class="bold">Followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h1 class="mb-1">1</h1>
                                                        <p class="bold">Following</p>
                                                    </div>
                                                </div>
                                            </div>
    </div>
    </div>
</div>
   </div>
</template>

<style scoped lang="css">
.mbl-5{
    margin-left: 120px;
}
.sidenav {
  text-align: center;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 360px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #FFFF; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 30px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: grey;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: ash;
}
.line{
    width: 50px;
    color: purple;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
hr{
    color: black;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.mbt-5{
  margin-top: 64px;
}
.btn-round {
  border-width: 1px;
  border-radius: 30px;
  padding-right: 23px;
  padding-left: 23px;
}
.fonts{
  margin-left: 90px;
}
.bold{
    font-weight: bold;
}
.account2 {
    padding: 38px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-bottom: 1px  solid #f2f2f2;
}

.account2 .name {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
}

.account2 > a {
    font-size: 14px;
    color: #999;
}

.account2 > a:hover {
    color: #666;
}
.welcome-text{
  font-weight: bold;
  font-size: 5px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: Poppins;
}
.welcome-text:hover{
    color: sandybrown;
}

</style>

<script>
import axios from 'axios'

import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      username: decoded.username,
      email: decoded.email,
      tagline: decoded.tagline,
      tags: decoded.tags,
      bio: decoded.bio,
      city: decoded.city,
      country: decoded.country
  }
  }
}
</script>
