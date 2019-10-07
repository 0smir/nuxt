<template>
  <nav class="nav">
    <nuxt-link class="nav-link" to="/">Logo</nuxt-link>
    <nuxt-link class="nav-link" exact no-prefetch active-class="active"  to="/">Home</nuxt-link>
    <nuxt-link class="nav-link" active-class="active" to="/about">About</nuxt-link>
    <nuxt-link class="nav-link" active-class="active" to="/services">Services</nuxt-link>
    <nuxt-link class="nav-link" active-class="active" to="/contacts">Contacts</nuxt-link>
    <nuxt-link class="nav-link" active-class="active" to="/users">Users</nuxt-link>
    <nuxt-link class="nav-link" active-class="active" to="/login">Login</nuxt-link>
  </nav>
</template>



<script>
    export default {
        name: "navBar"
    }
</script>

<style lang="scss">
  .nav{
    a{
      color: green;
    }
    .active{
      background: pink;

    }
  }

</style>
