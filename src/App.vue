<template>
  <main id="app">

    <header>
      <nav class="container">
        <router-link to="/">Page d'accueil</router-link>
        <router-link to="/list">Liste des utilisateurs</router-link>
        <router-link to="/add">Ajouter des utilisateurs</router-link>

      </nav>
    </header>
    <router-view></router-view>

  </main>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #00bfff;
}

/**
 * Style du header
 */

header {
  background-color: #00bfff;
  overflow: hidden;
  margin-bottom: 3em;

  > .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.75em 1em;
    transition: all 150ms;
    transform: scale(1);
  }

  a:hover {
    background-color: #00bfff;
    transform: scale(1.05);
  }
  a:active {
    transition: none;
    color: #00bfff;
    background-color: #00bfff
  }

  a:last-of-type {
    margin-left: auto;
  }
}

/**
 * Styles pour un bouton
 */

.btn {
  display: inline-block;
  padding: 0.5em 1.4em;
  color: #fff;
  text-decoration: none;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom, #00bfff, #0080ff);
}
.btn:hover {
  background: linear-gradient(to bottom, #00bfff 50%, #0080ff);
}
.btn:active {
  background: linear-gradient(to bottom, #0080ff, #00bfff 50%);
}

/**
 * Styles génériques
 */

.actions {
  margin-top: 1.4em;
}

.fa-icon { vertical-align: middle }

</style>
