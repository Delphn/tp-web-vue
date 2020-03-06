<template>
  <div>
    <v-app-bar color="blue darken-3" dark app>
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up mr-1"></v-app-bar-nav-icon>
      <v-layout align-center>
        <v-spacer></v-spacer>
        <v-text-field class="blue lighten-1 pr-2" placeholder="Search" hide-details solo-inverted append-outer-icon="search" flat />

        <v-spacer></v-spacer>

        <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.link" class="hidden-xs-only" large tile text>{{item.title}}</v-btn>
      </v-layout>
    </v-app-bar>

    <v-navigation-drawer v-model="sideNav" fixed clipped temporary :width="200" app>
      <v-app-bar color="farmer_green darken-1" dark>
        <v-layout align-center>
          <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
        </v-layout>
      </v-app-bar>

      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.link" color="farmer_green">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{item.title}}
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'work', title: 'Consulter les bières', link: '/' },
        { icon: 'add_circle', title: 'Ajouter une bière', link: '/add-beer' }
      ]
    }
  },
  computed: {},
  methods: {
    goToHome() {
      const path = '/'
      const currentPath = this.$router.currentRoute.path
      if (currentPath !== path) this.$router.push(path)
    }
  }
}
</script>
