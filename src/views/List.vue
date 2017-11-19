<template>
  <main id="app">

    <div class="container">
      <h1>Liste des collaborateurs</h1>

      <hr>

      <form>
        <input type="search" v-model.trim="searchText" @input="filterSearch" placeholder="Rechercher par nom ou lieu"/>
        <label for="filter">Filtrer par :</label>
        <select name="filterBy" v-model="filterBy" @change="filterSearch">
          <option value="name">Nom</option>
          <option value="localisation">Localisation</option>
        </select>
      </form>

      <div v-for="(user, i) in filteredUsers" :key="i" class="user-list">
        <user-card :user="user" v-if="user" @remove="removeUser"></user-card>
      </div>
    </div><!-- .container -->
  </main>
</template>

<script>

//import users from '../data/_users.json'
import UserCard from '../components/UserCard.vue'
import axios from 'axios'


export default {
      components: {UserCard},
      name: 'listView',
      data () {
          return {
              users: null,
              filteredUsers : this.users,
              searchText: "",
              filterBy : 'name'
          }
      },
      methods:{
          removeUser(user){
              console.log("remove");
              axios.delete(`http://localhost:1337/collaborateur/${user._id}`, user)
                  .then(function(response){
                      console.log(response);
                  }).catch(function(err){
                  console.error(err);
              });
              location.reload();
          },

          filterSearch() {
              this.filteredUsers = this.users.filter( this.filterBy === 'localisation' ? filterByLocalisation.bind(this) : filterByName.bind(this) );
          },
      },

      created(){
          axios.get('http://localhost:1337/collaborateurs')
              .then(users => {
                  this.users = users.data;
                  this.filteredUsers = users.data;
              });
      }
  }

  function filterByName(user) {
      return user.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.lastname.toLowerCase().includes(this.searchText.toLowerCase())
  }
  function filterByLocalisation(user) {
      return user.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.country.toLowerCase().includes(this.searchText.toLowerCase())
  }


</script>

<style lang="scss">
body {
  margin: 0;
}

.user-list{
  display: inline-block;
  margin:50px;
}

</style>
