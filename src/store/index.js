import Vue from 'vue'
import Vuex from 'vuex'
import BeerService from '@/services/BeerService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    currentBeer: null,
    nom: 'Rukundo Delphin',
    beerService: new BeerService(
      'rukundo',
      'http://163.172.53.19:8081/api/beers'
    ),
    error: null,
    snackbar: { isActive: false, text: '' },
    beerTypes: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar
    },
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
    deleteBeer(state, beer) {
      const index = state.beers.indexOf(beer)
      state.beers.splice(index, 1)
    },
    // setCurrentBeer(state, id) {
    //   state.beerService.getBeer(id).then((data) => {
    //     console.log(data)
    //     state.currentBeer = data.body.beer
    //   })
    // },
    setCurrentBeer(state, beer) {
      state.currentBeer = beer
    },
    resetCurrentBeer(state) {
      state.currentBeer = null
    },
    setBeerTypes(state, beerTypes) {
      console.log(beerTypes)
      state.beerTypes = beerTypes
    }
  },
  //   Les types de bière sont récupérées dynamiquement via l’API et permettent
  // d’alimenter la liste déroulante.
  // if error while retrieving beers show “Impossible de récupérer les bières”  in a red alert box
  // if error while adding a beer show “Impossible d’ajouter la bière Nom” in a red alert box
  // if beer added successfully show “Bière ajoutée” in a green snackbar
  actions: {
    // createBeer({ commit }, payload) {
    //   commit('addBeer', payload)
    // },
    createBeer({ state }, beer) {
      return state.beerService.createBeer(beer)
    },
    getBeers({ state }) {
      return state.beerService.getBeers()
    },
    getBeer({ state, commit }, id) {
      return state.beerService.getBeer(id).then((data) => {
        commit('setCurrentBeer', data.body)
      })
    },
    updateBeer({ state }, beer) {
      return state.beerService.updateBeer(beer)
    },
    deleteBeer({ state }, id) {
      return state.beerService.deleteBeer(id)
    },
    getBeerTypes({ state, commit }) {
      return state.beerService.getTypes().then((data) => {
        console.log(data)
        commit('setBeerTypes', data.body)
      })
    }
  },
  getters: {
    error(state) {
      return state.error
    },
    snackbar(state) {
      return state.snackbar
    },
    beers(state) {
      return state.beers
    },
    nom(state) {
      return state.nom
    },
    currentBeer(state) {
      return state.currentBeer
    },
    beerTypes(state) {
      return state.beerTypes
    }
  }
})
