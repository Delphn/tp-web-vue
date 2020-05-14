<template>
  <v-container>
    <v-layout row>
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
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: { priceTTC: () => import('@/components/PriceTTC') },
  data() {
    return {
      beer: {},
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
        { text: 'Propriétaire', value: 'owner' }
      ]
    }
  },
  computed: {
    ...mapGetters(['beers'])
  },
  methods: {},
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
