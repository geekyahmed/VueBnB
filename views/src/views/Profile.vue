<template>
  <div class="container">
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
                                                        <h1 class="mb-1">{{username}}</h1>
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
</template>

<style scoped lang="css">
.mbl-5{
    margin-left: 120px;
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
*{
  font-family: Poppins;
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

import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      fullname: decoded.fullname,
      username: decoded.username,
      email: decoded.email,
      city: decoded.city,
      country: decoded.country
    }
  }
}
</script>
