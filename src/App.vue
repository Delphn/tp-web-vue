<template>
  <v-app>

    <!-- Header -->
    <Header />

    <!-- Main view -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!--Footer  -->
    <Footer />

  </v-app>
</template>

<script>
// import Beers from './views/Beers'

export default {
  name: 'App',

  components: {
    Header: () => import('@/components/Header'),
    Footer: () => import('@/components/Footer')
  },

  data: () => ({
    //
  })
}
</script>

<style>
* {
  text-transform: none;
}
</style>
