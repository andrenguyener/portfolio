import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/main.scss'
import './registerServiceWorker'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollTo from 'vue-scrollto'

export const dataContext = new Vue()

Vue.use(VueScrollTo)
Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
