<template>
  <div class="container">
    <div class="content ">
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
    </div>
   </div>
</template>

<style scoped lang="css">
.ml{
  margin-left: 350px;
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
.welcome-text{
  font-weight: 500;
  font-size: 34px;
  text-transform: uppercase;
  font-family: Montserrat;
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
