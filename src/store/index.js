import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedBeers: []
  },
  mutations: {
    setLoadedBeers(state, payload) {
      state.loadedBeers = payload
    },
    createBeer(state, payload) {
      state.loadedBeers.push(payload)
    },
    updateOffer(state, payload) {
      const offer = state.loadedOffers.find((offer) => {
        // console.log('offer Id ', offer.id)
        return offer.id === payload.id
      })
      // console.log('offer', offer)
      // refactor this to switch case later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (payload.title) {
        offer.title = payload.title
      }
      if (payload.image) {
        offer.imageUrl = payload.image
      }
      if (payload.priceDetails) {
        offer.priceDetails = payload.priceDetails
      }
      if (payload.coverage) {
        offer.coverage = payload.coverage
      }
      if (payload.description) {
        offer.description = payload.description
      }
      if (payload.location) {
        offer.location = payload.location
      }
      if (payload.level) {
        offer.level = payload.level
      }
      if (payload.program) {
        offer.program = payload.program
      }
      if (payload.language) {
        offer.language = payload.language
      }
      if (payload.date) {
        offer.date = payload.date
      }
    }
  },
  actions: {
    loadedBeers({ commit }, payload) {
      commit('setLoadedBeers', payload)
    }
  },
  getters: {
    beer(state) {
      return state.beer
    }
  }
})
