import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import VueSplide from '@splidejs/vue-splide';


library.add(
  faUserSecret,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope)
  // <i class="fas fa-map-marker-alt"></i>

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(VueSplide)
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
