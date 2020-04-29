<template>
    <div class="map">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/200217140048-02-puppy-pigeon-friendship-rescue-large-169.jpg">
    </div>
</template>

<script>
export default {
  name: 'Map',
  methods: {
    onSuppliersListClick () {
      alert('On a cliqué sur la Map')
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
