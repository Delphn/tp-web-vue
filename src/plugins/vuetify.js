import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  }
})
