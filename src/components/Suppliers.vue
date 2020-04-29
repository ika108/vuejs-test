<template>
    <div class="suppliers">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk1QeDY6FM1tKv6T3WD68XkdZ9NAkYdSRQ8SHS4dssWyhY2VV-&usqp=CAU">
    </div>
</template>

<script>
export default {
  name: 'Suppliers',
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
