<template>
  <v-app>

    <!-- Header -->
    <Header />

    <!-- Main view -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- show success notification -->
    <v-snackbar v-model="snackbar.isActive" color="success" :timeout="timeout" dense top right>
      {{ snackbar.text }}
      <v-spacer></v-spacer>
      <v-icon color="white" @click="snackbar.isActive = false">close</v-icon>
    </v-snackbar>

    <!--Footer  -->
    <Footer />

  </v-app>
</template>

<script>
// import Beers from './views/Beers'
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    Header: () => import('@/components/Header'),
    Footer: () => import('@/components/Footer')
  },

  data: () => ({
    timeout: 3000
    //
  }),
  computed: {
    ...mapGetters(['snackbar'])
  }
}
</script>

<style>
* {
  text-transform: none;
}
</style>
