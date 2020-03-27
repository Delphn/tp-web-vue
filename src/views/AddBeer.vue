<template>
  <div>
    <v-card>
      <v-container>
        <v-form>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1 sm8 offset-sm2>
              <p class="headline">Ajouter une bière</p>
              <v-divider></v-divider>
              <br />
              <!-- Nom de la bière -->
              <v-text-field :rules="fieldRules('Nom')" v-model="name" name="name" label="Nom" outlined autofocus></v-text-field>
              <!-- Commentaire -->
              <v-textarea :rules="fieldRules('Commentaire')" v-model="comment" name="commnet" label="Commentaire" outlined required></v-textarea>
              <!-- Prix Hors Taxe -->
              <v-text-field :rules="fieldRules('Prix HT')" v-model="pht" name="pht" label="Prix HT" outlined></v-text-field>
              <!-- Prix TTC -->
              <p class="mb-5">Prix TTC: {{ ttc }}</p>
              <!-- Degré d'alcool -->
              <v-text-field :rules="fieldRules('Degré d\'alcool')" v-model="degree" name="degree" label="Degré d'alcool" outlined></v-text-field>
              <!-- Type -->
              <v-select v-model="type" :items="beerTypes" :rules="[v => !!v || 'Item is required']" label="Item" outlined required></v-select>
              <!-- Propriétaire -->
              <v-text-field :rules="fieldRules('Propriétaire')" v-model="owner" name="owner" label="Propriétaire" outlined></v-text-field>
              <v-divider></v-divider>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- onSaveChanges -->
                    <v-btn color="grey white--text darken-2" to="/">Annuler</v-btn>
                    <v-btn color="blue white--text " @click="onSave">Ajouter</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddBeer',

  data: () => ({
    name: '',
    comment: '',
    pht: null,
    degree: null,
    type: '',
    owner: '',
    beerTypes: ['type0', 'type1', 'type2']
  }),
  computed: {
    fieldRules() {
      return fieldName => [
        v => !!v || `${fieldName} is required`
        // v => v.length <= 50 || 'Max 50 characters'
      ]
    },
    ttc() {
      return null
    }
  },
  methods: {
    onSave() {
      const beer = {
        name: this.name,
        comment: this.comment,
        pht: this.pht,
        ttc: this.ttc,
        degree: this.degree,
        type: this.type,
        owner: this.owner
      }
      this.$store.dispatch('createBeer', beer)
      //   console.log(
      //     'name: ' +
      //       this.name +
      //       '\ncomment: ' +
      //       this.comment +
      //       '\npht: ' +
      //       this.pht +
      //       '\ndegree: ' +
      //       this.degree +
      //       '\ntype: ' +
      //       this.type +
      //       '\nowner: ' +
      //       this.owner
      //   )
    }
  }
}
</script>
