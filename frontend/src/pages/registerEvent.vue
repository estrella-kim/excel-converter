<template>
  <div>
    <slider :imgUrl="imgSample"></slider>
    <calendar></calendar>
  </div>
</template>

<script>

  import { slider, calendar } from '../components/index'
  export default {
    name : 'register',
    data () {
      return {
        title : "this is event register",
        imgSample : 'https://t1.daumcdn.net/cfile/tistory/184FFA414F9EE27517'
      }
    },
    components: {
      calendar,
      slider
    }
  }
</script>

<style>

</style>
