<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample10"
      aria-controls="navbarsExample10"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="btn btn-xs btn-outline-secondary mt-1 nav-item ml-3" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-xs btn-outline-secondary mt-1 nav-item ml-3" to="/users">Users</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link class="nav-item btn btn-xs btn-outline-secondary mt-1 ml-3" to="/login">Login</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link
            class="nav-item btn btn-xs btn-outline-secondary mt-1 ml-3"
            to="/register"
          >Register</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link
            class="btn btn-xs btn-outline-secondary mt-1 nav-item ml-3"
            to="/profile"
          >Profile</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link
            class="nav-item btn btn-xs btn-outline-secondary mt-1 ml-3"
            to="/create"
          >Create Post</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <a
            class="nav-item btn btn-xs btn-outline-secondary mt-1 ml-3s"
            href
            v-on:click="logout"
          >Log out</a>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <a class="nav-item" href v-on:click="logout">{{user.last_name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
* {
}
.nav-item {
  font-size: 20px;
}
</style>

<script>
import EventBus from './EventBus'

EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data () {
    return {
      auth: '',
      user: ''
    }
  },

  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>
