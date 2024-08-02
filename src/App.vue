<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <router-link to="/" class="nav-link">Login</router-link>
        <router-link to="/register" class="nav-link">Registro</router-link>
        <router-link to="/home" class="nav-link">Home</router-link>
        <button v-if="loggedUser" @click="logout" class="logout-button">
          Cerrar sesión
        </button>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; 2024 Mi Aplicación</p>
    </footer>
    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["loggedUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background: linear-gradient(to right, #e0f2f1, #b2dfdb);
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

.navbar {
  background-color: #00796b;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  font-weight: bold;
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

.nav-link.router-link-exact-active {
  color: #ffeb3b;
}

.logout-button {
  font-weight: bold;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.logout-button:hover {
  color: #ffeb3b;
}

.footer {
  background-color: #004d40;
  padding: 10px;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer p {
  margin: 0;
}
</style>
