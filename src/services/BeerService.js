import Vue from 'vue'

export default class Beer {
  constructor(owner, url) {
    this.owner = owner
    this.url = url
  }

  getBeers() {
    return Vue.http.get(`${this.url}?owner=${this.owner}`)
  }

  createBeer(beer) {
    return Vue.http.post(`${this.url}?owner=${this.owner}`, beer)
  }

  getBeer(id) {
    return Vue.http.get(`${this.url}/${id}?owner=${this.owner}`)
  }

  updateBeer(beer) {
    return Vue.http.put(`${this.url}/${beer.id}?owner=${this.owner}`, beer)
  }

  deleteBeer(id) {
    return Vue.http.delete(`${this.url}/${id}?owner=${this.owner}`)
  }

  getTypes() {
    return Vue.http.get(`${this.url}/types`)
  }
}
