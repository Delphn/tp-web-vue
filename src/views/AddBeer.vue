<template>
  <div>
    <v-container>
      <v-form @submit.prevent="saveBeer" ref="form" v-model="valid">
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 sm8 offset-sm2 md4 offset-md4>
            <p class="headline">Ajouter une bière</p>
            <v-divider></v-divider>
            <br />
            <!-- Nom de la bière -->
            <v-text-field type="text" :rules="fieldRules('nom')" v-model="beer.name" name="name" label="Nom" outlined autofocus></v-text-field>
            <!-- Commentaire -->
            <v-textarea type="text" v-model="beer.comment" name="commnet" label="Commentaire" outlined required></v-textarea>
            <!-- Prix Hors Taxe -->
            <v-text-field type="number" step='0.01' :rules="fieldRules('prix')" v-model="beer.priceHT" name="priceHT" label="Prix HT" outlined></v-text-field>
            <!-- Prix TTC Component -->
            <priceTTC :editable="true" :priceHt="Number(beer.priceHT)" @update-priceHT="updatePht" />
            <!-- Degré d'alcool -->
            <v-text-field type="number" min="0" max="70" :rules="validDegree" v-model="beer.alcoholDegree" name="alcoholDegree" label="Degré d'alcool" outlined></v-text-field>
            <!-- Type -->
            <v-select v-model="beer.type" :rules="validType" :items="beerTypes" label="Type" outlined required></v-select>
            <!-- Propriétaire -->
            <v-text-field :rules="fieldRules('propriétaire')" v-model="beer.owner" name="owner" label="Propriétaire" outlined></v-text-field>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey white--text darken-2" to="/">Annuler</v-btn>
                  <v-btn color="blue white--text" type="submit">Sauvegarder</v-btn>
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
import { mapGetters } from 'vuex'
export default {
  name: 'AddBeer',
  components: { priceTTC: () => import('@/components/PriceTTC') },
  data: () => ({
    beer: {
      name: '',
      comment: '',
      priceHT: null,
      alcoholDegree: null,
      type: '',
      owner: ''
    },
    beerTypes: ['DARK', 'BLONDE', 'IPA', 'BROWN'],
    valid: true,
    isUpdate: false
  }),
  computed: {
    ...mapGetters(['currentBeer']),
    fieldRules() {
      return name => [v => !!v || `Le ${name} est obligatoire`]
    },
    validDegree() {
      return [
        v => !!v || "Le degré d'alcool est obligatoire",
        v => v >= 0 || "Le degré d'alcool peut pas être négatif",
        v => v <= 70 || "Le degré d'alcool peut pas être superieur à 70"
      ]
    },
    validType() {
      return [
        v => !!v || "Le type d'alcool est obligatoire",
        v =>
          v === 'DARK' ||
          v === 'BLONDE' ||
          v === 'IPA' ||
          v === 'BROWN' ||
          "Le type d'alcool doit être d'une des valeurs suivantes DARK, BLONDE, IPA, BROWN"
      ]
    }
  },
  methods: {
    updatePht(val) {
      this.beer.priceHT = val
    },
    saveBeer() {
      // validate text fields
      if (this.$refs.form.validate()) {
        if (this.isUpdate) {
          this.$store.commit('updateBeer', this.beer)
          this.$store.commit('resetCurrentBeer')
        } else {
          store.dispatch('createBeer', this.beer)
        }
        router.push('/')
      }
    }
  },
  mounted() {
    if (this.currentBeer) {
      this.beer = this.currentBeer
      this.isUpdate = true
    }
  }
}
</script>
