import Vue from 'vue'
import router from './router'
import App2 from './App2.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App2)
}).$mount('#app')
