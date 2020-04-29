<template>
    <div class="suppliersmap">
        <h3 v-on:click="onMapClick">Carte des fournisseurs</h3>
    </div>
</template>

<script>
export default {
  name: 'SuppliersMap',
  methods: {
    onMapClick () {
      alert('On a cliqué sur la map ')
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
  color: #42b983;
}
</style>
