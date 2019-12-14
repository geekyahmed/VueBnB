<template>
<div class="container-fluid">
   <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                            <div class="card">
                              <p class="text-center display-5">Find Users Around You</p>
                              <h3 class="text-center ">Total Users: {{users.length}}</h3>
                              <hr>
                                <div class="card-body">
                                    <form>
                                        <input class="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search">
                                        <button class="btn btn-primary search-btn" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
    <div class="row mt-5 ml-2">
    <div  v-for="user in users" :key="user._id"  class=" col-xl-3 col-lg-6 col-md-3 col-sm-12 col-12">
    <div  class="card  card-fluid">
    <!-- .card-body -->
    <div  class="card-body text-center">
    <!-- .user-avatar -->
    <a href="" class="user-avatar my-3">
    <img src="../assets/avatar.png" alt="" class="rounded-circle user-avatar-xl">
    </a>
    <!-- /.user-avatar -->
    <h3 class="card-title mb-2 text-truncate">
    <a href="user-profile.html">{{user.fullname}}</a>
    </h3>
        <p class="text-muted">( {{user.username}} )</p>
    <h6 class="card-subtitle text-muted mb-3"> {{user.email}} </h6>
    <!-- .skills -->
    <p  class="skills">
    <a href="#" class="btn btn-xs btn-outline-secondary mt-1">{{user.city}}{{user.country}}</a>
    </p>
    <!-- /.skills -->
    <p class="text-muted"> {{user.bio}}</p>
    <p>
    <a href="#" class="btn btn-primary">View Profile</a>
    </p>
    </div>
    </div>
    </div>
    </div>
    
    </div>
    </div>
</template>
  <style lang="css">
.fonts{
  margin-left: 640px;
}
.description{
  font-weight: 600;
  font-size: 34px;
  font-family: Poppins;
}
</style>
<script>
import axios from 'axios'

  export default {
      data() {
        return {
          users: []
        }
      },
      mounted() {
        axios
  .get('http://localhost:5000/users')
  .then(response => (this.users = response.data))
    }
  }
</script>