<template>
  <v-text-field v-if="editable" type="number" v-model="ttc" name="PrixTTC" label="PrixTTC" @input="updatePrixHT" outlined></v-text-field>
  <span v-else> {{ttc}} </span>
</template>

<script>
export default {
  name: 'PrixTTC',
  props: { prixHT: Number, editable: Boolean },
  data() {
    return {
      ttc: null
    }
  },
  watch: {
    prixHT() {
      this.ttc = (this.prixHT * 1.2).toFixed(2)
    }
  },
  methods: {
    updatePrixHT() {
      this.$emit('update-pht', (this.ttc / 1.2).toFixed(2))
    }
  },
  mounted() {
    if (this.prixHT !== null) {
      this.ttc = (this.prixHT * 1.2).toFixed(2)
      console.log('ttc: ', this.ttc)
    }
  }
}
</script>
