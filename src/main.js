// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';

import { URL_API } from './util/path';
// todo
// cssVars()
Vue.use(VueResource);
Vue.http.options.root = URL_API; 

Vue.use(BootstrapVue)

Vue.http.options.headers = {
  'Content-Type': 'application/json; charset=UTF-8'
}

Vue.http.interceptors.push((request, next) => {
  
  let token = localStorage.getItem('user-token');

  if(token){
    Vue.http.headers.common['Authorization'] = localStorage.getItem('user-token');
  }
 
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

