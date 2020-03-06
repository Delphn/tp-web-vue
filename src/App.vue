<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <p class="headline font-weight-bold">TP1</p>
      </div>
    </v-app-bar> -->
    <Header />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Beers from './views/Beers'

export default {
  name: 'App',

  components: {
    Header: () => import('@/components/Header')
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
