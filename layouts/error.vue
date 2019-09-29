<template>
  <div class="row">
    <div class="col-lg-12">
      <section class="error">
        <h1 v-if="error.statusCode===404" class="title title_error">
          <span>Page not found!</span>
          <span>Error 404</span>
        </h1>
        <h1 v-else class="title title_error">ERROR</h1>
        <a href="/" class="back">home</a>
      </section>
    </div>
  </div>
</template>
<script>
    export default {
        props: ['error']
    }
</script>

<style scoped lang="scss">
  section{

    width: 350px;
    margin: 150px auto 20px;
  }
  .title_error{
    margin-bottom: 40px;
    color: red;
    text-align: center;
    span{
      display: block;
    }
  }
  .back{
    display: block;
    margin: 0 auto;
    width: 100px;
    text-align: center;
  }
</style>
