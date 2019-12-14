<template>
  <div class="container-fluid">
    <div class="row text-center my-5">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center display-5">Mooza</h2>
            <hr>
 <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" required="true" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" required="true" class="form-control" name="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
        </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.splash-container {
    width: 100%;
    max-width: 375px;
    padding: 15px;
    margin: auto;
}

.splash-container .card-header {
    padding: 20px;
}

.splash-description {
    text-align: center;
    display: block;
    line-height: 20px;
    font-size: 1rem;
    margin-top: 5px;
    padding-bottom: 10px;
}

.splash-title {
    text-align: center;
    display: block;
    font-size: 14px;
    font-weight: 300;
}

.splash-container .card-footer-item {
    padding: 12px 28px;
}
 html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .form-control {
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 1.42857143;
    color: #71748d;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d2d2e4;
    border-radius: 2px;
}

.form-control:focus {
    color: #71748d;
    background-color: #fff;
    border-color: #a7a7f0;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(214, 214, 255, .75);
}

input[type=file] {
    color: #71748d;
    background-color: #fff;
    border-color: #a7a7f0;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(214, 214, 255, .75);
}

.col-form-label {
    font-size: 15px;
}

input {}

button {}

button:focus {
    outline: 0;
}

select.form-control {
    color: #71748d;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: 99% 52%;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(/images/down-arrow.png);
    padding-right: 15px;
    border: 1px solid #d2d2e4;
    border-radius: 2px;
}

textarea.form-control {
    height: auto;
    color: #71748d;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d2d2e4;
    border-radius: 2px;
    padding: 12px 16px;
}
.form-group {
    margin-bottom: 12px;
}
.card-footer {
    border-top: 1px solid #e6e6f2;
    background: #f6f6ff;
}
</style>
<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('user/login',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({ name: 'Profile' })
      }).catch((err) => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>
