import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/views/Users'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/views/Profile'
import Create from '@/views/Create'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
