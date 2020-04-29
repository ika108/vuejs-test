<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class='container-fluid'>
      <div class='row'>
        <div class='col'><h1>Que voulez vous faire ?</h1></div>
      </div>
      <div class ='row'>
        <div class='col'><SuppliersList/></div>
        <div class='col'><SuppliersMap/></div>
      </div>
    </div>
  </div>
</template>

<script>
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  name: 'App',
  components: {
    SuppliersList,
    SuppliersMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container-fluid {
  margin: auto
}
</style>
