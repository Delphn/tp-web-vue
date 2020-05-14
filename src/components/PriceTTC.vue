<template>
  <v-text-field v-if="editable" type="number" step='0.01' v-model="priceTTC" name="priceTTC" label="priceTTC" @input="updatePrixHT" outlined></v-text-field>
  <span v-else> {{priceTTC}} € </span>
</template>

<script>
export default {
  name: 'priceTTC',
  props: { priceHt: Number, editable: Boolean },
  data() {
    return {
      priceTTC: null
    }
  },
  watch: {
    priceHt() {
      this.priceTTC = (this.priceHt * 1.2).toFixed(2)
    }
  },
  methods: {
    updatePrixHT() {
      this.$emit('update-priceHT', (this.priceTTC / 1.2).toFixed(2))
    }
  },
  mounted() {
    if (this.priceHt !== null) {
      this.priceTTC = (this.priceHt * 1.2).toFixed(2)
    }
  }
}
</script>
