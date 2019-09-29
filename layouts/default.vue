<template>
  <div>
    <navBar />
    <div class="main">
      <div class="container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
  import navBar from '@/components/navBar'
  export default {
      components: {
          navBar
      }

  }
</script>

<style>

</style>

