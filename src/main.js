import Vue from 'vue'
import router from './router'
import App2 from './App2.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App2)
}).$mount('#app')
