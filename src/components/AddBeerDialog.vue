<template>
  <v-dialog v-model="addBeerDialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn dark rounded color="teal" v-on="on">Ajouter une bière</v-btn>
    </template>

    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-form>
              <v-layout row>
                <v-flex xs10 offset-xs1>
                  <p class="headline">Ajouter une bière</p>
                  <v-divider></v-divider>
                  <br />
                  <!-- Nom de la bière -->
                  <v-text-field v-model="name" :rules="fieldRules" name="name" label="Nom" id="name" outlined autofocus></v-text-field>
                  <!-- Commentaire -->
                  <v-textarea v-model="comment" name="commnet" label="Commentaire" id="comment" outlined required></v-textarea>
                  <!-- Prix Hors Taxe -->
                  <v-text-field v-model="pht" :rules="fieldRules" name="pht" label="Prix HT" id="pht" outlined></v-text-field>
                  <!-- Prix TTC -->
                  <p>Prix TTC: {{ ttc }}</p>
                  <!-- Degré d'alcool -->
                  <v-text-field v-model="degree" :rules="fieldRules" name="degree" label="Degré d'alcool" id="degree" outlined></v-text-field>
                  <!-- Type -->
                  <v-select v-model="type" :items="beerTypes" :rules="[v => !!v || 'Item is required']" label="Item" outlined required></v-select>
                  <!-- Propriétaire -->
                  <v-text-field v-model="owner" :rules="fieldRules" name="owner" label="Propriétaire" id="owner" outlined></v-text-field>
                  <v-divider></v-divider>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- onSaveChanges -->
                        <v-btn color="grey white--text darken-1" outline>Annuler</v-btn>
                        <v-btn color="blue white--text " outline @click="onSave">Ajouter</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddBeerDialog',

  data: () => ({
    addBeerDialog: false,
    name: '',
    comment: '',
    pht: null,
    degree: null,
    type: '',
    owner: '',
    beerTypes: ['type0', 'type1', 'type2']
  }),
  computed: {
    ttc() {
      return null
    },
    fieldRules() {
      return [
        field => field.length > 0 || 'This field required',
        field => field.length <= 50 || 'Max 50 characters'
      ]
    }
  },
  methods: {
    onSave() {
      console.log(
        'name: ' +
          this.name +
          '\ncomment: ' +
          this.comment +
          '\npht: ' +
          this.pht +
          '\ndegree: ' +
          this.degree +
          '\ntype: ' +
          this.type +
          '\nowner: ' +
          this.owner
      )
    }
  }
}
</script>
