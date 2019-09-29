<template>
  <section>
    <h1 class="title">{{$route.params.id}} User Info</h1>
  </section>
</template>


<script>
  export default {
    validate({params}){
        console.log('validate');
        return /^\d+$/.test(params.id);
    }
  }
</script>
