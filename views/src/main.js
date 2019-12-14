// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueProgress from "vue-progress";
// import wysiwyg from 'vue-wysiwyg'
// import 'vue-wysiwyg/dist/vueWysiwyg.css'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)
// Vue.use(wysiwyg, {})
// Vue.use(VueProgress);

// require('../node_modules/bootstrap/dist/css/bootstrap.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
