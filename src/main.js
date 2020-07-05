import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'

Vue.config.productionTip = false

Object.values(components).forEach(comp => {
  Vue.component(comp.name, comp)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
