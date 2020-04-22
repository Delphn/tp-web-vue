<template>
  <div>
    <v-container>
      <v-form @submit.prevent="onAddBeer" ref="form" v-model="valid">
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
            <v-text-field type="number" :rules="fieldRules('Prix HT')" v-model="pht" name="pht" label="Prix HT" outlined></v-text-field>
            <!-- PrixTTC Component -->
            <PrixTTC :editable="true" :prixHT="Number(pht)" @update-pht="updatePht" />
            <!-- Degré d'alcool -->
            <v-text-field type="number" :rules="fieldRules('Degré d\'alcool')" v-model="degree" name="degree" label="Degré d'alcool" outlined></v-text-field>
            <!-- Type -->
            <v-select v-model="type" :items="beerTypes" label="Item" outlined required></v-select>
            <!-- Propriétaire -->
            <v-text-field :rules="fieldRules('Propriétaire')" v-model="owner" name="owner" label="Propriétaire" outlined></v-text-field>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey white--text darken-2" to="/">Annuler</v-btn>
                  <v-btn color="blue white--text" type="submit">Ajouter</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
export default {
  name: 'AddBeer',
  components: { PrixTTC: () => import('@/components/PrixTTC') },
  data: () => ({
    name: '',
    comment: '',
    pht: null,
    degree: null,
    type: '',
    owner: '',
    beerTypes: ['type0', 'type1', 'type2'],
    valid: true
  }),
  computed: {
    fieldRules() {
      return fieldName => [v => !!v || `${fieldName} is required`]
    },
    ttc() {
      return null
    }
  },
  methods: {
    updatePht(val) {
      console.log('updatedPht: ', val)
      this.pht = val
    },
    onAddBeer() {
      // validate text fields
      if (this.$refs.form.validate()) {
        const beer = {
          name: this.name,
          comment: this.comment,
          pht: this.pht,
          ttc: this.ttc,
          degree: this.degree,
          type: this.type,
          owner: this.owner
        }
        store.dispatch('createBeer', beer)
        router.push('/')
      }
    }
  }
}
</script>
