<template>
    <div class="supplierslist">
        <h3><router-link to="/suppliers">Liste des fournisseurs</router-link></h3>
    </div>
</template>

<script>
export default {
  name: 'SuppliersList',
  methods: {
    onSuppliersListClick () {
      alert('On a cliqué sur la List des suppliers')
    }
  },
  props: {
//    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  background-color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2445ca;
}
</style>
