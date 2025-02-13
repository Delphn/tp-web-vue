<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <Alert v-if="error" @dismissed="onDismissed" :text="errorMessage"></Alert>
      </v-flex>
      <v-flex xs10 offset-xs1>
        <div class="mb-4">
          <span class="headline font-weight-bold">Liste des bières</span>
        </div>
        <v-data-table :headers="headers" :items="beers" :items-per-page="5" class="elevation-2">
          <!-- Name display with a capitalization filter-->
          <template v-slot:item.name="{ item }">
            <span> {{item.name | capitalize}} </span>
          </template>

          <!-- Custom column in table for priceHT Formatting -->
          <template v-slot:item.priceHT="{ item }">
            <span> {{Number(item.priceHT).toFixed(2)}} €</span>
          </template>

          <!-- Custom column in table for priceTTC Calculation -->
          <template v-slot:item.priceTTC="{ item }">
            <!-- priceTTC Component -->
            <priceTTC :editale="false" :priceHt="Number(item.priceHT)" />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="updateBeer(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteBeer(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  components: {
    priceTTC: () => import('@/components/PriceTTC'),
    Alert: () => import('@/components/Alert')
  },
  data() {
    return {
      beer: {},
      beers: [],
      errorMessage: '',
      headers: [
        {
          text: 'Identifiant',
          value: 'id'
        },
        { text: 'Nom', value: 'name' },
        { text: 'Commentaire', value: 'comment' },
        { text: 'Prix HT', value: 'priceHT' },
        { text: 'Prix TTC', value: 'priceTTC' },
        { text: "Degré d'alcool", value: 'alcoholDegree' },
        { text: 'Type', value: 'type' },
        { text: 'Propriétaire', value: 'owner' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  mounted() {
    this.getBeers()
  },
  computed: {
    ...mapGetters(['error'])
  },
  methods: {
    getBeers() {
      store
        .dispatch('getBeers')
        .then(data => {
          this.beers = data.body.content
        })
        .catch(error => {
          store.commit('setError', error)
          this.errorMessage = 'Impossible de récupérer les bières'
        })
    },
    // updateBeer(beer) {
    //   store.commit('setCurrentBeer', beer)
    //   this.$router.push('/add-beer')
    // },
    updateBeer(beer) {
      store
        .dispatch('getBeer', beer.id)
        .then(() => {
          this.$router.push('/add-beer')
        })
        .catch(error => {
          store.commit('setError', error)
          this.errorMessage = `Impossible de visualiser la bière ${beer.name}`
        })
    },
    deleteBeer(beer) {
      confirm('Êtes-vous sûr de vouloir supprimer cette bière?') &&
        store
          .dispatch('deleteBeer', beer.id)
          .then(() => this.getBeers())
          .catch(error => {
            store.commit('setError', error)
            this.errorMessage = `Impossible de supprimer la bière ${beer.name}`
          })
    },
    onDismissed() {
      store.commit('clearError')
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
