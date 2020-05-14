<template>
  <div>
    <v-app-bar color="blue darken-3" dark app>
      <v-layout justify-center>
        <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.link" large tile text>{{item.title}}</v-btn>
      </v-layout>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Consulter les bières', link: '/' },
        { title: 'Ajouter une bière', link: '/add-beer' }
      ]
    }
  }
}
</script>
