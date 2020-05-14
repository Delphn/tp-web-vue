export default class Beer {
  constructor(owner) {
    this.owner = owner
  }

  getBeers() {
    console.log(this.owner)
    return this.$http.get(
      `http://163.172.53.19:8081/api/beers?owner=${this.owner}`
    )
  }

  createBeer() {
    return this.$http.post(
      `http://163.172.53.19:8081/api/beers?owner=${this.owner}`
    )
  }

  getBeer(id) {
    return this.$http.get(
      `http://163.172.53.19:8081/api/beers?owner=${this.owner}/{${id}}`
    )
  }

  updateBeer(id) {
    return this.$http.put(
      `http://163.172.53.19:8081/api/beers?owner=${this.owner}/{${id}}`
    )
  }

  deleteBeer(id) {
    return this.$http.delete(
      `http://163.172.53.19:8081/api/beers?owner=${this.owner}/{${id}}`
    )
  }

  getTypes() {
    return this.$http.get('http://163.172.53.19:8081/api/beers/types')
  }
}
