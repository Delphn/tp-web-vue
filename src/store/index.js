import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    currentBeer: null,
    nom: 'Rukundo Delphin'
  },
  mutations: {
    addBeer(state, beer) {
      const beerId = state.beers.length + 1
      state.beers.push({ id: beerId, ...beer })
    },
    updateBeer(state, beer) {
      let beerToUpdate = state.beers.find((item) => item.id === beer.id)
      if (beerToUpdate) {
        beerToUpdate = beer
      }
    },
    setCurrentBeer(state, beer) {
      state.currentBeer = beer
    },
    resetCurrentBeer(state) {
      state.currentBeer = null
    }
  },
  //   Les types de bière sont récupérées dynamiquement via l’API et permettent
  // d’alimenter la liste déroulante.
  // if error while retrieving beers show “Impossible de récupérer les bières”  in a red alert box
  // if error while adding a beer show “Impossible d’ajouter la bière Nom” in a red alert box
  // if beer added successfully show “Bière ajoutée” in a green snackbar
  actions: {
    createBeer({ commit }, payload) {
      commit('addBeer', payload)
    },
    resetCurrentBeer(state) {
      state.currentBeer = null
    }
  },
  getters: {
    beers(state) {
      return state.beers
    },
    nom(state) {
      return state.nom
    },
    currentBeer(state) {
      return state.currentBeer
    }
  }
})
