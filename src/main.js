import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AddBeerDialog from './components/AddBeerDialog.vue'

Vue.config.productionTip = false

Vue.component('app-add-beer-dialog', AddBeerDialog)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
