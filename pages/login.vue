<template>
  <section class="login-section">
    <h1 class="title">Login page</h1>
    <form action="#" id="login-form">
      <div class="form-group">
        <input class="login form-control" type="text" placeholder="Your login">
      </div>
      <p><a href="/" class="back">home</a></p>
      <button class="btn btn-primary">Login</button>
    </form>
  </section>
</template>

<script>
    export default {
        name: "login",
        layout: "empty"
    }
</script>

<style lang="scss" scoped>
  .login-section{
    padding-top: 50px;
  }

  .title,
  form{
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .title{
    margin-bottom: 20px;
    text-transform: uppercase;
  }
</style>
