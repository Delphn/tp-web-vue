import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultBeers = [{
  id: 1,
  name: 'Lager',
  comment: 'Pas mal comme bière',
  pht: 6.0,
  ptt: 7.2,
  degree: 4,
  type: 'Lager',
  owner: 'Carlsberg Beer'
},
{
  id: 2,
  name: 'Miller lite',
  comment: 'Commentaire bière',
  pht: 8.0,
  ptt: 9.6,
  degree: 10,
  type: 'Miller',
  owner: 'My Beer'
}]

export default new Vuex.Store({
  state: {
    loadedBeers: defaultBeers
  },
  mutations: {
    setLoadedBeers(state, payload) {
      state.loadedBeers = payload
    },
    createBeer(state, payload) {
      state.loadedBeers.push(payload)
    },
    updateBeer(state, payload) {
      const beer = state.loadedBeers.find((beer) => {
        // console.log('beer Id ', beer.id)
        // return beer.id === payload.id
      })
      if (payload.title) {
        beer.title = payload.title
      }
      if (payload.image) {
        beer.imageUrl = payload.image
      }
      if (payload.priceDetails) {
        beer.priceDetails = payload.priceDetails
      }
      if (payload.coverage) {
        beer.coverage = payload.coverage
      }
      if (payload.description) {
        beer.description = payload.description
      }
      if (payload.location) {
        beer.location = payload.location
      }
      if (payload.level) {
        beer.level = payload.level
      }
      if (payload.program) {
        beer.program = payload.program
      }
      if (payload.language) {
        beer.language = payload.language
      }
      if (payload.date) {
        beer.date = payload.date
      }
    }
  },
  actions: {
    loadedBeers({ commit }, payload) {
      commit('setLoadedBeers', payload)
    }
  },
  getters: {
    loadedBeers(state) {
      return state.loadedBeers
    },
    loadedBeer(state) {
      return (beerId) => {
        return state.loadedBeers.find((beer) => {
          return beer.id === beerId
        })
      }
    }
  }
})
