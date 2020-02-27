<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <template>
          <span class="headline font-weight-bold">Liste des bières</span>
          <v-spacer></v-spacer>
          <app-add-beer-dialog></app-add-beer-dialog>
        </template>
        <divider></divider>
        <br>
        <v-data-table :headers="headers" :items="beers" :items-per-page="5" class="elevation-1">
        </v-data-table>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      beer: {},
      headers: [
        {
          text: 'Identifiant',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Nom', value: 'name' },
        { text: 'Commentaire', value: 'comment' },
        { text: 'Prix HT', value: 'pht' },
        { text: 'Prix TTC', value: 'ttc' },
        { text: 'Degré d\'alcool', value: 'degree' },
        { text: 'Type', value: 'type' },
        { text: 'Propriétaire', value: 'owner' }
      ],
      beers: [
        {
          name: 'Lager',
          comment: 'Pas mal comme bière',
          pht: 6.00,
          ptt: 7.20,
          degree: 4,
          type: 'Lager',
          owner: 'Carlsberg Beer'
        },
        {
          name: 'Miller lite',
          comment: 'Commentaire bière',
          pht: 8.00,
          ptt: 9.60,
          degree: 10,
          type: 'Miller',
          owner: 'My Beer'
        }
      ]
    }
  }
}
</script>
