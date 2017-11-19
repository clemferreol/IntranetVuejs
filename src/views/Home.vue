<template>
  <main id="app">

    <div class="container">
      <h1>Bienvenue dans l'intranet</h1>

      <p>La plate-forme sociale de l'entreprise</p>

      <hr>

      <p>Avez-vous dit bonjour aujourd'hui à :</p>

      <user-card :user="user" v-if="user" @remove="removeUser"></user-card>


      <div class="actions">
        <a href="#" @click.prevent="randomUser" class="btn">
          <i class="material-icons left">autorenew</i>Dire bonjour à quelqu'un d'autre
        </a>
      </div>
    </div><!-- .container -->
  </main>
</template>

<script>

import UserCard from '../components/UserCard.vue'
import axios from 'axios'

export default {
  name: 'app',

  components: { UserCard },

  data () {
    return {
      users : [],
      user : null
    }
  },

  methods: {
    // Prend un utilisateur au hasard dans le tableau 'users'
    randomUser() {
      this.user = this.users[ Math.floor(Math.random() * this.users.length) ]
    },

    removeUser: function (user) {
          console.log("delete user");
          axios.delete(`http://localhost:1337/collaborateur/${user._id}`, user)
              .then(function(response){
                  console.log(response);

              }).catch(function(err){
              console.error(err);
          });
          location.reload();
    }
  },

  // Lorsque le composant App est initialisé par Vue.js, on charge un utilisateur au hasard
  created() {
    axios.get('http://localhost:1337/collaborateurs')
        .then(users => {
            this.users = users.data;
            this.randomUser();
        })
  }
}
</script>
