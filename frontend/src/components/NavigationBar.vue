<template>
  <div>
    <b-nav>
      <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item ><router-link to="/login">login</router-link></b-nav-item>
      <b-nav-item><router-link to="/register">register</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
