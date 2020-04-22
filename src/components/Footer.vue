<template>
  <div>
    <v-layout class="blue darken-2 py-2 white--text subtitle-1" justify-center>
      {{nom}}
    </v-layout>
    <v-layout grey darken-4 py-2>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    nom() {
      return this.$store.getters.nom
    }
  }
}
</script>
