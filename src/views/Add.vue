<template>
    <div id="add-view">
        <h1>Ajouter un collaborateur</h1>
        <hr>
        <br>
        <user-form @send="addUser"></user-form>
    </div>
</template>

<script>
    import UserCard from '../components/UserCard.vue';
    import UserForm from "../components/UserForm.vue";
    import axios from 'axios';

    export default {
        components: {UserForm},
        name: 'add-view',
        data () {
            return {
                user : {},
            }
        },
        methods:{
          addUser: function (user) {
              console.log(user);
              axios.post('http://localhost:1337/collaborateur', user)
              location.reload();
          },
        }
    }
</script>
