import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import AgeFilter from './filters/AgeFilter'

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.filter('age', AgeFilter);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
