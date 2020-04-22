<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <div>
          <span class="headline font-weight-bold mr-5">Liste des bières</span>
        </div>
        <br />
        <v-data-table :headers="headers" :items="loadedBeers" :items-per-page="5" class="elevation-2">
          <!-- Custom column in table for PrixTTC Calculation -->
          <template v-slot:item.ttc="{item}">
            <div>
              <!-- PrixTTC Component -->
              <PrixTTC :editale="false" :prixHT="item.pht" />
            </div>
          </template>
        </v-data-table>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: { PrixTTC: () => import('@/components/PrixTTC') },
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
        { text: 'Prix HT', value: 'pht' },
        { text: 'Prix TTC', value: 'ttc' },
        { text: "Degré d'alcool", value: 'degree' },
        { text: 'Type', value: 'type' },
        { text: 'Propriétaire', value: 'owner' }
      ]
    }
  },
  computed: {
    ...mapGetters(['loadedBeers'])
  }
}
</script>
