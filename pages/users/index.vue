<template>
  <section>
    <h1 class="title">Users Page</h1>

    <ul class="list users-list">
      <li class="users-list__item" v-for="user in users_list.users" v-bind:key="user">
        <a href="#" @click.prevent="openUser(user)">User {{user.user_name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>

    export default {
        methods:{
            openUser: function (user) {
                this.$router.push('/users/' + user.id);
            }
        },
        users_list: {},
        data()  {

            this.users_list = {
               users:[
                   {id: 0, user_name: 'Оля'},
                   {id: 1, user_name: 'Слава'},
                   {id: 2, user_name: 'Чипалино'}
               ]
            };
            return this.users_list;
      },
    }


</script>
