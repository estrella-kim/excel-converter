<template>
  <div id="app">
    <date-range-picker :startDate="startDate" :endDate="endDate" @update="console.log(value)"></date-range-picker>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import DateRangePicker from 'vue2-daterange-picker/src/components/DateRangePicker'

  Vue.use(VueRouter)

  export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      startDate: '2017-09-05',
      endDate: '2017-09-15'
    }
  },
  components: {
    DateRangePicker
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
