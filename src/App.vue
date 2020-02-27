<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <p class="headline font-weight-bold">TP1</p>
      </div>
    </v-app-bar>

    <v-content>
      <Beers />
    </v-content>
  </v-app>
</template>

<script>
import Beers from './components/Beers'

export default {
  name: 'App',

  components: {
    Beers
  },

  data: () => ({
    //
  })
}
</script>
