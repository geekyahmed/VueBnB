<template>
  <div>
    <!-- <ul >
      <li>{{ user.email }}</li>
                  <li>{{ user.last_name }}</li>
        <li><router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-primary">Edit</router-link></li>
    </ul> -->
       <div class=" container-fluid my-4">
         <div class="jumbotron alert-success" >
           <h1 class="text-center title">Mooza</h1>
           <h3 class="title text-center">Find Developers To Connect With</h3>
           <h4 class="text-center">Project By Bankole Ahmed</h4>
         </div>
    <div v-for="user in users" :key="user._id" class="card-group" style= ''>
      <div class="col-md-12 ml-2 row card-columns">
        <div class="card card-user">
          <div class="image">
            <img src="../assets/cover.jpg" alt="...">
          </div>
          <div  class="card-body">
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" src="../assets/avatar.png" alt="...">
                <h5 class="title" aria-disabled="">{{ user.first_name }} {{ user.last_name }}</h5>
              </a>
              <p class="description username text-center">
                @{{user.username}}
              </p>
            <p class="description r">
                {{user.tagline}}
            </p>
            <p class="description">
               Email : {{user.email}}
            </p>
            <p class="description text-center">
               Bio : {{user.bio}}
            </p>
            <p class="description text-center">
               Skills :   {{user.tags}}
            </p>
            <p class="description text-center">
               Location : {{user.city}} 
            </p>
          </div>
          </div>
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